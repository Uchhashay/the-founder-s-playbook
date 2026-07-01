import express from "express";
import path from "path";
import crypto from "crypto";
import dotenv from "dotenv";
import Razorpay from "razorpay";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

let razorpayClient: Razorpay | null = null;

function getRazorpay(): Razorpay {
  if (!razorpayClient) {
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keyId || !keySecret) {
      throw new Error("RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET environment variables are required.");
    }
    razorpayClient = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });
  }
  return razorpayClient;
}

async function startServer() {
  // Body parsing middleware
  app.use(express.json());

  // API Route - Create order
  app.post("/api/create-order", async (req, res) => {
    try {
      const { amount, currency, receipt } = req.body;
      if (!amount) {
        return res.status(400).json({ error: "Amount is required" });
      }
      if (amount < 100) {
        return res.status(400).json({ error: "Minimum amount is 100 paise" });
      }

      const instance = getRazorpay();
      const order = await instance.orders.create({
        amount: Math.round(amount),
        currency: currency || "INR",
        receipt: receipt || `rcpt_${Date.now()}`,
      });

      return res.json(order);
    } catch (error: any) {
      console.error("Error creating Razorpay order:", error);
      const detail = error.error?.description || error.description || error.message || "Failed to create order";
      return res.status(500).json({ error: detail });
    }
  });

  // API Route - Verify payment signature
  app.post("/api/verify-payment", async (req, res) => {
    try {
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
      if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
        return res.status(400).json({ error: "Missing required payment fields" });
      }

      const secret = process.env.RAZORPAY_KEY_SECRET;
      if (!secret) {
        return res.status(500).json({ error: "Razorpay Key Secret is missing on the server" });
      }

      const generated_signature = crypto
        .createHmac("sha256", secret)
        .update(razorpay_order_id + "|" + razorpay_payment_id)
        .digest("hex");

      if (generated_signature === razorpay_signature) {
        return res.json({ success: true, message: "Payment verified successfully" });
      } else {
        return res.status(400).json({ success: false, error: "Invalid signature, payment verification failed" });
      }
    } catch (error: any) {
      console.error("Error verifying signature:", error);
      return res.status(500).json({ error: error.message || "Verification failed" });
    }
  });

  // Vite integration middleware
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
