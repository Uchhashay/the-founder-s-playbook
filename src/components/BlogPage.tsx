import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import Markdown from "react-markdown";
import { blogPosts } from "../data/posts";
import { ArrowLeft, Linkedin, Mail } from "lucide-react";

export default function BlogPage() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center font-serif italic text-2xl">
        Post not found. <Link to="/" className="ml-2 underline">Go back</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fcfcfc] selection:bg-black selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-16 grid grid-cols-3 items-center bg-[#fcfcfc]/80 backdrop-blur-sm border-b border-black/[0.03]">
        <div className="flex justify-start">
          <Link to="/" className="flex items-center gap-2 text-[13px] font-serif italic opacity-60 hover:opacity-100 transition-opacity">
            <ArrowLeft size={14} /> Back
          </Link>
        </div>
        
        <div className="flex justify-center">
          <Link to="/" className="text-2xl font-serif tracking-[0.5em] opacity-90 hover:opacity-100 transition-opacity pl-[0.5em]">
            USR
          </Link>
        </div>

        <div className="flex justify-end gap-5">
          <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
            <Linkedin size={18} strokeWidth={1.5} />
          </a>
          <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
            <Mail size={18} strokeWidth={1.5} />
          </a>
        </div>
      </header>

      <main className="pt-48 pb-32 px-6 md:px-16 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40 mb-8">
            {post.date}
          </p>
          
          <h1 className="text-4xl md:text-6xl font-serif mb-16 leading-[1.1] tracking-tight">
            {post.title}
          </h1>

          <div className="prose prose-lg font-serif text-black/80 leading-relaxed max-w-none">
            <div className="markdown-body">
              <Markdown>{post.content}</Markdown>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white pt-20 pb-10 px-6 md:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
          <Link to="/" className="text-[10px] uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity">
            Back to Home
          </Link>
          <p className="text-[10px] font-serif opacity-40 italic">
            © 2026 Uchhashay Singh Ranyal.
          </p>
        </div>
      </footer>
    </div>
  );
}
