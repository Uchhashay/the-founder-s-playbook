import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, X } from "lucide-react";
import { useEffect, useState } from "react";

function AnimatedCounter({ target, suffix = "", duration = 8000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [target, duration]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function ToolkitPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const workProjects = [
    {
      num: "01",
      title: "ICP Builder + Real Examples from Rapido and Bumble",
      desc: "How to define exactly who your customer is, with real ICP breakdowns of two companies your audience knows.",
      type: "Guide",
      typeColor: "bg-[#FFF2F2] text-[#6B0F1A]"
    },
    {
      num: "02",
      title: "Harvard Value Proposition Framework",
      desc: "Write your value proposition in one sentence. The exact framework used at Harvard Business School.",
      type: "Framework",
      typeColor: "bg-[#EFF2FF] text-[#3348CC]"
    },
    {
      num: "03",
      title: "Important Startup Terms Every Founder Must Know",
      desc: "The vocabulary of the startup world. Walk into any room and hold your own.",
      type: "Guide",
      typeColor: "bg-[#FFF2F2] text-[#6B0F1A]"
    },
    {
      num: "04",
      title: "Building Your MVP Using Google AI Studio",
      desc: "How to build and validate your MVP fast using tools available right now.",
      type: "Guide",
      typeColor: "bg-[#FFF2F2] text-[#6B0F1A]"
    },
    {
      num: "05",
      title: "TAM SAM SOM, 3 Circle Market Analysis",
      desc: "Size any market in minutes using the method investors actually want to see.",
      type: "Framework",
      typeColor: "bg-[#EFF2FF] text-[#3348CC]"
    },
    {
      num: "06",
      title: "How to Get Your First 100 Customers",
      desc: "No ads. No agency. No budget. The actual playbook for going from zero to first 100.",
      type: "Guide",
      typeColor: "bg-[#FFF2F2] text-[#6B0F1A]"
    },
    {
      num: "07",
      title: "9 Billion Dollar Business Models, YC Edition",
      desc: "The 9 business models Y Combinator sees in every successful company.",
      type: "Framework",
      typeColor: "bg-[#EFF2FF] text-[#3348CC]"
    },
    {
      num: "08",
      title: "Important Fundraising Terms Every Founder Must Know",
      desc: "Pre-seed, SAFE, cap table, dilution, pro-rata, explained plainly, no jargon.",
      type: "Guide",
      typeColor: "bg-[#FFF2F2] text-[#6B0F1A]"
    },
    {
      num: "09",
      title: "The GTM Framework Google Uses",
      desc: "How one of the world's most successful companies thinks about going to market.",
      type: "Framework",
      typeColor: "bg-[#EFF2FF] text-[#3348CC]"
    },
    {
      num: "10",
      title: "Business Strategy in 1 Minute, SWOT, Porter's, BMC",
      desc: "Three frameworks plus one AI prompt to build your complete business strategy in 2 minutes.",
      type: "Framework",
      typeColor: "bg-[#EFF2FF] text-[#3348CC]"
    },
    {
      num: "11",
      title: "Harvard Sales Pipeline Framework",
      desc: "How to build a sales pipeline from scratch before you can afford a CRM.",
      type: "Framework",
      typeColor: "bg-[#EFF2FF] text-[#3348CC]"
    },
    {
      num: "12",
      title: "Important Startup Strategy Terms",
      desc: "Moat, flywheel, product-market fit, pivot, blitzscaling, what they actually mean.",
      type: "Guide",
      typeColor: "bg-[#FFF2F2] text-[#6B0F1A]"
    },
    {
      num: "13",
      title: "How to Build a Killer Sales Deck, 100% Tested",
      desc: "The exact structure used in real client proposals and investor meetings. Not made up.",
      type: "Template",
      typeColor: "bg-[#FFF2F2] text-[#6B0F1A]"
    },
    {
      num: "14",
      title: "Startup Death Calculator, Runway Template",
      desc: "Enter your numbers. Know exactly how many months you have left. Excel with formulas.",
      type: "Template",
      typeColor: "bg-[#FFF2F2] text-[#6B0F1A]"
    },
    {
      num: "15",
      title: "CAC vs LTV, The Metric That Kills Most Startups",
      desc: "The one number every investor checks before anything else. How to calculate yours.",
      type: "Guide",
      typeColor: "bg-[#FFF2F2] text-[#6B0F1A]"
    },
    {
      num: "16",
      title: "Business Valuation, 3 Methods Excel Template",
      desc: "DCF, comparable companies, and asset-based valuation. Know what your business is worth.",
      type: "Template",
      typeColor: "bg-[#FFF2F2] text-[#6B0F1A]"
    },
    {
      num: "17",
      title: "India's Top VC Funds List",
      desc: "Who's investing, at what stage, in which sectors. Your starting point for fundraising.",
      type: "Guide",
      typeColor: "bg-[#FFF2F2] text-[#6B0F1A]"
    },
    {
      num: "18",
      title: "Cap Table + Real Dilution Numbers from Spotify and Uber",
      desc: "Understand exactly what you're giving away at each funding round, with real data.",
      type: "Guide",
      typeColor: "bg-[#FFF2F2] text-[#6B0F1A]"
    },
    {
      num: "19",
      title: "Important Legal Documents for Starting a Business",
      desc: "30 documents, plain English descriptions, exact timelines. Built with CA-level accuracy.",
      type: "Guide",
      typeColor: "bg-[#FFF2F2] text-[#6B0F1A]"
    },
    {
      num: "20",
      title: "Sequoia's Legendary RIP Good Times Deck",
      desc: "The slide deck Sequoia presented to its portfolio in 2008. Required reading for every founder.",
      type: "Guide",
      typeColor: "bg-[#FFF2F2] text-[#6B0F1A]"
    },
    {
      num: "21",
      title: "Founder Exit Wealth Calculator, 3 Methods",
      desc: "Acquisition, IPO, secondary sale. Calculate what your equity is actually worth at exit.",
      type: "Template",
      typeColor: "bg-[#FFF2F2] text-[#6B0F1A]"
    },
    {
      num: "22",
      title: "Cash Flow Forecast Template",
      desc: "Map every rupee coming in and going out. Know before cash becomes a problem, not after.",
      type: "Template",
      typeColor: "bg-[#FFF2F2] text-[#6B0F1A]"
    }
  ];

  const beforeItems = [
    "No idea where to start after launching",
    "Confused by GTM, ICP, CAC, LTV",
    "No plan for getting first customers",
    "Can't explain the business clearly",
    "No visibility on cash and runway",
    "No idea how to approach investors"
  ];

  const afterItems = [
    "Clear roadmap from launch to first sale",
    "Every key term explained and applied",
    "Real plan to get your first 100 customers",
    "One-line value proposition that lands",
    "Cash flow forecast and runway calculator",
    "Know exactly what investors look for"
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#111111] font-sans antialiased selection:bg-[#6B0F1A] selection:text-white">
      
      {/* NAV */}
      <nav className="sticky top-0 z-[100] bg-white border-b border-[#E5E0D8] px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-[13px] font-semibold tracking-wide hover:opacity-80 transition-opacity flex items-center gap-2">
          <ArrowLeft size={14} />
          <span>Founder's Toolkit <span className="text-[#6B0F1A]">/ @itsranyal</span></span>
        </Link>
        <a 
          href="#buy" 
          className="bg-[#6B0F1A] text-white text-[13px] font-semibold px-[22px] py-[10px] hover:opacity-90 active:scale-[0.98] transition-all duration-200 shadow-md shadow-[#6B0F1A]/20"
        >
          Get Instant Access
        </a>
      </nav>

      {/* HERO */}
      <section className="bg-[#F9F7F4] py-20 px-6 border-b border-[#E5E0D8]">
        <div className="max-w-[680px] mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-[11px] font-bold tracking-[0.14em] uppercase text-[#6B0F1A] bg-[#FFF2F2] px-3.5 py-1.5 mb-6"
          >
            Founder's Playbook, 30 Day Series
          </motion.span>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm md:text-base text-[#888888] font-medium mb-2.5 tracking-wide"
          >
            You built something. Now what?
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] mb-5 tracking-tight font-sans"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Everything you need to run a startup.<br />
            <span className="italic text-[#6B0F1A]">In one place.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[15px] md:text-[17px] text-[#3D3D3D] leading-[1.75] mb-8 max-w-[540px] mx-auto"
          >
            The complete resource kit for first-time founders and early-stage builders. <strong className="text-[#111111] font-semibold">22 templates, frameworks, and guides</strong>, everything you need from launch to your first sale to your first investor meeting.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-8 md:gap-12 mb-10 flex-wrap"
          >
            <div className="text-center group cursor-default">
              <p className="text-2xl md:text-3xl font-semibold text-[#111111] leading-none mb-1 group-hover:text-[#6B0F1A] transition-colors duration-200">
                <AnimatedCounter target={1700} suffix="+" />
              </p>
              <p className="text-[11px] text-[#888888] font-medium tracking-wider">Founders followed</p>
            </div>
            <div className="text-center group cursor-default">
              <p className="text-2xl md:text-3xl font-semibold text-[#111111] leading-none mb-1 group-hover:text-[#6B0F1A] transition-colors duration-200">
                <AnimatedCounter target={100} suffix="K+" />
              </p>
              <p className="text-[11px] text-[#888888] font-medium tracking-wider">Views on the series</p>
            </div>
            <div className="text-center group cursor-default">
              <p className="text-2xl md:text-3xl font-semibold text-[#111111] leading-none mb-1 group-hover:text-[#6B0F1A] transition-colors duration-200">
                <AnimatedCounter target={30} />
              </p>
              <p className="text-[11px] text-[#888888] font-medium tracking-wider">Days, zero missed</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-center gap-2.5"
          >
            <a 
              href="#buy" 
              className="inline-block bg-[#6B0F1A] text-white text-base font-bold px-11 py-[18px] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-xl shadow-[#6B0F1A]/20"
            >
              Get the Toolkit <span className="text-[18px] text-white ml-1">→</span>
            </a>
            <p className="text-[12px] text-[#888888]">Instant Google Drive access. One-time payment.</p>
          </motion.div>
        </div>
      </section>

      {/* PAIN */}
      <section className="bg-[#F9F7F4] py-16 md:py-24 px-6 border-b border-[#E5E0D8]">
        <div className="max-w-[720px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="h-[3px] bg-[#6B0F1A] w-12 mb-6"></div>
            <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#6B0F1A]">Sound familiar?</p>
            <h2 className="font-libre text-2xl md:text-4xl font-bold text-[#111111] leading-[1.2]">
              You have a product. You have no idea what comes next.
            </h2>
            <ul className="divide-y divide-[#E5E0D8] pt-6">
              {[
                "You shipped something. Maybe 3 people use it. You know the product. You have no idea how to run the business around it.",
                "Everyone tells you to \"do GTM\" or \"find your ICP\" but nobody actually explains what that means for your specific situation.",
                "You're watching YouTube, reading Twitter threads, saving posts, and somehow you're more confused than when you started.",
                "The real stuff is buried behind expensive courses, MBA programs, or mentors who are too busy to talk to you.",
                "You don't know what you don't know. And that is the scariest part."
              ].map((text, idx) => (
                <li key={idx} className="group py-[18px] flex gap-4 items-start hover:pl-3 hover:bg-[#6B0F1A]/[0.02] transition-all duration-300">
                  <span className="text-[#6B0F1A] font-bold shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  <p className="text-[15px] text-[#3D3D3D] leading-[1.65]">{text}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-[720px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="h-[3px] bg-[#6B0F1A] w-12 mb-6"></div>
            <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#6B0F1A]">Why this exists</p>
            <h2 className="font-libre text-2xl md:text-4xl font-bold text-[#111111] leading-[1.2]">
              In 2026, anyone can build an app in a few hours. The hard part is everything after.
            </h2>
            <p className="text-[15px] text-[#3D3D3D] leading-[1.8]">
              AI has made building the product easy. Getting your first sale, explaining it to an investor, pricing it correctly, knowing which channel to focus on, that is where most first-time founders get stuck and stay stuck.
            </p>
            <div className="border-l-[3px] border-[#6B0F1A] pl-[22px] py-[18px] bg-[#F9F7F4] my-8 font-libre text-[17px] italic text-[#111111] leading-[1.65]">
              "If I was starting from zero today, this is exactly how I would start. These are my notes from YouTube rabbit holes, real courses, and time spent inside a Founder's Office working on GTM and pitch decks, compiled so you don't spend years finding them yourself."
            </div>
            <p className="text-[15px] text-[#3D3D3D] leading-[1.8]">
              Not theory. Not an MBA syllabus. What actually matters when you are in the middle of building something real and trying to get your first customer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TRANSFORMATION */}
      <section className="bg-[#F3F0EB] py-16 md:py-24 px-6 border-t border-b border-[#E5E0D8]">
        <div className="max-w-[720px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-[3px] bg-[#6B0F1A] w-12 mb-6"></div>
            <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#6B0F1A]">The shift</p>
            <h2 className="font-libre text-2xl md:text-4xl font-bold text-[#111111] leading-[1.2] mb-8">
              From scrambled egg to organized founder.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="bg-white border border-[#E5E0D8] p-[24px] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#888888] mb-4">Before the Toolkit</p>
                <ul className="space-y-3">
                  {beforeItems.map((item, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-[14px] text-[#888888] leading-tight pb-3 border-b border-[#E5E0D8]/60 last:border-0 last:pb-0">
                      <X size={14} className="text-[#CCC] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white border-2 border-[#6B0F1A] p-[24px] hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#6B0F1A] mb-4">After the Toolkit</p>
                <ul className="space-y-3">
                  {afterItems.map((item, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-[14px] text-[#3D3D3D] font-medium leading-tight pb-3 border-b border-[#E5E0D8]/60 last:border-0 last:pb-0">
                      <Check size={14} className="text-[#6B0F1A] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-[900px] mx-auto">
          <div className="max-w-[720px] mx-auto p-0 mb-12">
            <div className="h-[3px] bg-[#6B0F1A] w-12 mb-6"></div>
            <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#6B0F1A]">What's inside</p>
            <h2 className="font-libre text-2xl md:text-4xl font-bold text-[#111111] leading-[1.2] mb-4">
              22 resources. Every level of the business.
            </h2>
            <p className="text-[15px] text-[#3D3D3D] leading-[1.8]">
              From finding your first customer to calculating your exit. Templates you fill in, frameworks you apply, guides you actually read.
            </p>
          </div>

          {/* MOCKUP PLACEHOLDERS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 mb-14">
            
            {/* CARD 1 */}
            <div className="bg-[#F9F7F4] border border-[#E5E0D8] border-t-3 border-t-[#6B0F1A] p-0 overflow-hidden hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#6B0F1A]/5 transition-all duration-300 group">
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-[#F3F0EB] to-[#F9F7F4] flex items-center justify-center p-3.5 border-b border-[#E5E0D8]">
                <div className="w-full h-full bg-white rounded-lg overflow-hidden shadow-md border border-black/5 flex flex-col group-hover:scale-[1.03] transition-all duration-300">
                  <div className="flex gap-1 px-2 py-1.5 bg-[#F4F1EA] border-b border-black/5 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8D2C6]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8D2C6]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8D2C6]"></span>
                  </div>
                  <div className="flex-1 p-3 flex flex-col justify-center gap-1.5">
                    <div className="h-1.5 rounded bg-[#ECE7DD] w-[90%]"></div>
                    <div className="h-1.5 rounded bg-[#ECE7DD] w-[75%]"></div>
                    <div className="h-1.5 rounded bg-[#ECE7DD] w-[55%]"></div>
                    <span className="self-start mt-1 text-[8px] font-bold tracking-wider text-[#6B0F1A] bg-[#FFF2F2] px-1.5 py-0.5 rounded">
                      ICP: Rapido, Bumble
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-3 text-[11px] font-semibold text-[#111111] leading-tight">
                ICP Builder + Rapido and Bumble Examples
                <span className="block text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 mt-1 rounded self-start bg-[#F0FFF6] text-[#1A7A45] w-fit">
                  Guide
                </span>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#F9F7F4] border border-[#E5E0D8] border-t-3 border-t-[#6B0F1A] p-0 overflow-hidden hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#6B0F1A]/5 transition-all duration-300 group">
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-[#F3F0EB] to-[#F9F7F4] flex items-center justify-center p-3.5 border-b border-[#E5E0D8]">
                <div className="w-full h-full bg-white rounded-lg overflow-hidden shadow-md border border-black/5 flex flex-col group-hover:scale-[1.03] transition-all duration-300">
                  <div className="flex gap-1 px-2 py-1.5 bg-[#F4F1EA] border-b border-black/5 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8D2C6]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8D2C6]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8D2C6]"></span>
                  </div>
                  <div className="flex-1 p-3 flex flex-col justify-center">
                    <span className="font-libre font-bold text-lg text-[#6B0F1A] leading-none mb-0.5">14 mo</span>
                    <span className="text-[7px] font-bold uppercase tracking-wider text-[#888888] mb-1">Runway Left</span>
                    <svg className="w-full h-7" viewBox="0 0 100 30" preserveAspectRatio="none">
                      <polyline points="0,4 20,7 38,13 56,17 74,23 100,28" fill="none" stroke="#B01A2C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-3 text-[11px] font-semibold text-[#111111] leading-tight">
                Startup Death Calculator, Runway Template
                <span className="block text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 mt-1 rounded self-start bg-[#FFF2F2] text-[#6B0F1A] w-fit">
                  Excel Template
                </span>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#F9F7F4] border border-[#E5E0D8] border-t-3 border-t-[#6B0F1A] p-0 overflow-hidden hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#6B0F1A]/5 transition-all duration-300 group">
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-[#F3F0EB] to-[#F9F7F4] flex items-center justify-center p-3.5 border-b border-[#E5E0D8]">
                <div className="w-full h-full bg-white rounded-lg overflow-hidden shadow-md border border-black/5 flex flex-col group-hover:scale-[1.03] transition-all duration-300">
                  <div className="flex gap-1 px-2 py-1.5 bg-[#F4F1EA] border-b border-black/5 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8D2C6]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8D2C6]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8D2C6]"></span>
                  </div>
                  <div className="flex-1 p-3 flex flex-col justify-center">
                    <div className="flex items-end gap-1 h-8 mb-1.5">
                      <span className="flex-1 bg-[#6B0F1A] rounded-t-[2px]" style={{ height: "35%" }}></span>
                      <span className="flex-1 bg-[#D9A2A9] rounded-t-[2px]" style={{ height: "55%" }}></span>
                      <span className="flex-1 bg-[#6B0F1A] rounded-t-[2px]" style={{ height: "40%" }}></span>
                      <span className="flex-1 bg-[#D9A2A9] rounded-t-[2px]" style={{ height: "70%" }}></span>
                      <span className="flex-1 bg-[#6B0F1A] rounded-t-[2px]" style={{ height: "50%" }}></span>
                      <span className="flex-1 bg-[#D9A2A9] rounded-t-[2px]" style={{ height: "90%" }}></span>
                    </div>
                    <span className="text-[7px] font-bold uppercase tracking-wider text-[#888888] text-center">13-Week Cash Flow</span>
                  </div>
                </div>
              </div>
              <div className="p-3 text-[11px] font-semibold text-[#111111] leading-tight">
                Cash Flow Forecast Template
                <span className="block text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 mt-1 rounded self-start bg-[#FFF2F2] text-[#6B0F1A] w-fit">
                  Excel Template
                </span>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="bg-[#F9F7F4] border border-[#E5E0D8] border-t-3 border-t-[#6B0F1A] p-0 overflow-hidden hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#6B0F1A]/5 transition-all duration-300 group">
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-[#F3F0EB] to-[#F9F7F4] flex items-center justify-center p-3.5 border-b border-[#E5E0D8]">
                <div className="w-full h-full bg-white rounded-lg overflow-hidden shadow-md border border-black/5 flex flex-col group-hover:scale-[1.03] transition-all duration-300">
                  <div className="flex gap-1 px-2 py-1.5 bg-[#F4F1EA] border-b border-black/5 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8D2C6]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8D2C6]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8D2C6]"></span>
                  </div>
                  <div className="flex-1 p-3 flex flex-col justify-center">
                    <span className="font-libre font-bold text-[#6B0F1A] text-lg leading-none mb-0.5">Rs. 2.4Cr</span>
                    <span className="text-[7px] font-bold uppercase tracking-wider text-[#888888] mb-1">Est. Founder Payout</span>
                    <div className="grid grid-cols-4 gap-0.5">
                      <span className="h-2.5 rounded-[2px] bg-[#6B0F1A]"></span>
                      <span className="h-2.5 rounded-[2px] bg-[#EFEBE1]"></span>
                      <span className="h-2.5 rounded-[2px] bg-[#EFEBE1]"></span>
                      <span className="h-2.5 rounded-[2px] bg-[#EFEBE1]"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 text-[11px] font-semibold text-[#111111] leading-tight">
                Founder Exit Wealth Calculator, 3 Methods
                <span className="block text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 mt-1 rounded self-start bg-[#FFF2F2] text-[#6B0F1A] w-fit">
                  Excel Template
                </span>
              </div>
            </div>

            {/* CARD 5 */}
            <div className="bg-[#F9F7F4] border border-[#E5E0D8] border-t-3 border-t-[#6B0F1A] p-0 overflow-hidden hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#6B0F1A]/5 transition-all duration-300 group">
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-[#F3F0EB] to-[#F9F7F4] flex items-center justify-center p-3.5 border-b border-[#E5E0D8]">
                <div className="w-full h-full bg-white rounded-lg overflow-hidden shadow-md border border-black/5 flex flex-col group-hover:scale-[1.03] transition-all duration-300">
                  <div className="flex gap-1 px-2 py-1.5 bg-[#F4F1EA] border-b border-black/5 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8D2C6]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8D2C6]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8D2C6]"></span>
                  </div>
                  <div className="flex-1 p-3 flex items-center justify-between gap-1">
                    <span className="flex-1 h-6 rounded border border-[#6B0F1A] bg-[#FFF2F2] flex items-center justify-center text-[7px] font-bold text-[#6B0F1A]">ICP</span>
                    <span className="text-[10px] text-[#888888] font-bold">→</span>
                    <span className="flex-1 h-6 rounded border border-[#6B0F1A] bg-[#FFF2F2] flex items-center justify-center text-[7px] font-bold text-[#6B0F1A]">Channel</span>
                    <span className="text-[10px] text-[#888888] font-bold">→</span>
                    <span className="flex-1 h-6 rounded border border-[#6B0F1A] bg-[#FFF2F2] flex items-center justify-center text-[7px] font-bold text-[#6B0F1A]">Scale</span>
                  </div>
                </div>
              </div>
              <div className="p-3 text-[11px] font-semibold text-[#111111] leading-tight">
                GTM Framework, Google's Method
                <span className="block text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 mt-1 rounded self-start bg-[#EFF2FF] text-[#3348CC] w-fit">
                  Framework
                </span>
              </div>
            </div>

            {/* CARD 6 */}
            <div className="bg-[#F9F7F4] border border-[#E5E0D8] border-t-3 border-t-[#6B0F1A] p-0 overflow-hidden hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#6B0F1A]/5 transition-all duration-300 group">
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-[#F3F0EB] to-[#F9F7F4] flex items-center justify-center p-3.5 border-b border-[#E5E0D8]">
                <div className="w-full h-full bg-white rounded-lg overflow-hidden shadow-md border border-black/5 flex flex-col group-hover:scale-[1.03] transition-all duration-300">
                  <div className="flex gap-1 px-2 py-1.5 bg-[#F4F1EA] border-b border-black/5 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8D2C6]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8D2C6]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8D2C6]"></span>
                  </div>
                  <div className="flex-1 p-3 flex flex-col justify-center gap-1">
                    <div className="h-2 rounded bg-[#6B0F1A] w-[40%]"></div>
                    <div className="h-1 rounded bg-[#ECE7DD] w-[90%]"></div>
                    <div className="h-1 rounded bg-[#ECE7DD] w-[75%]"></div>
                    <span className="self-start text-[8px] font-bold tracking-wider text-[#6B0F1A] bg-[#FFF2F2] px-1.5 py-0.5 rounded mt-0.5">Slide 4/12</span>
                  </div>
                </div>
              </div>
              <div className="p-3 text-[11px] font-semibold text-[#111111] leading-tight">
                Killer Sales Deck Template, 100% Tested
                <span className="block text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 mt-1 rounded self-start bg-[#FFF2F2] text-[#6B0F1A] w-fit">
                  Template
                </span>
              </div>
            </div>

          </div>

          {/* FULL LIST */}
          <div className="max-w-[720px] mx-auto p-0">
            <ul className="divide-y divide-[#E5E0D8] border-t border-b border-[#E5E0D8]">
              {workProjects.map((project, idx) => (
                <li 
                  key={idx} 
                  className={`py-5 px-4 flex gap-4 items-start transition-all duration-300 group ${idx % 2 === 0 ? 'bg-[#F9F7F4]/40' : 'bg-transparent'} hover:pl-6 hover:bg-[#6B0F1A]/5`}
                >
                  <span className="text-[11px] font-extrabold text-[#6B0F1A] w-[26px] shrink-0 pt-0.5 group-hover:text-[#B01A2C] transition-colors">
                    {project.num}
                  </span>
                  <div className="flex-1">
                    <p className="text-[14px] font-semibold text-[#111111] leading-snug mb-1">{project.title}</p>
                    <p className="text-[13px] text-[#888888] leading-relaxed">{project.desc}</p>
                  </div>
                  <span className={`shrink-0 text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 mt-0.5 rounded ${project.typeColor}`}>
                    {project.type}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="bg-[#F9F7F4] py-16 md:py-24 px-6 border-t border-b border-[#E5E0D8]">
        <div className="max-w-[720px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-[3px] bg-[#6B0F1A] w-12 mb-6"></div>
            <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#6B0F1A]">Who built this</p>
            <h2 className="font-libre text-2xl md:text-4xl font-bold text-[#111111] leading-[1.2]">
              Not a course creator. A founder still in the middle of it.
            </h2>
            <p className="text-[15px] text-[#3D3D3D] leading-[1.8] mt-4">
              I am not writing this from a place of having figured it all out. I am writing this from the middle of it. Still building. Still figuring out the next move. Just doing it in public.
            </p>
                 <div className="bg-white border border-[#E5E0D8] border-l-3 border-l-[#6B0F1A] p-7 md:p-8 mt-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div>
                  <p className="text-[16px] font-bold text-[#111111] mb-0.5">Uchhashay Ranyal</p>
                  <p className="text-[12px] text-[#6B0F1A] font-semibold">@itsranyal</p>
                </div>
              </div>
              <p className="text-[14px] text-[#3D3D3D] leading-[1.8]">
                Building a tech stack for India's transport sector. Previously founded an AI voice tech startup. Before that, worked in a Founder's Office in a Strategy and GTM role, curating client proposals, pitch decks, and go-to-market strategies from scratch. Saw what worked. Saw what killed deals before they even started.<br /><br />
                This toolkit is compiled from Notion notes I have been keeping since 2018-19. YouTube rabbit holes, paid courses, real experiences, real founder rooms. Everything I wish someone had handed me when I was starting out.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-[18px]">
                {[
                  "Founder's Office, Strategy + GTM",
                  "AI Voice Tech Startup",
                  "Notes since 2018-19",
                  "Building in Public"
                ].map((tag, idx) => (
                  <span key={idx} className="text-[11px] font-semibold text-[#6B0F1A] bg-[#FFF2F2] px-3 py-1 border border-[#FFCCCC] hover:bg-[#6B0F1A] hover:text-white hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-[720px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-[3px] bg-[#6B0F1A] w-12 mb-6"></div>
            <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#6B0F1A]">Quick answers</p>
            <h2 className="font-libre text-2xl md:text-4xl font-bold text-[#111111] leading-[1.2] mb-8">
              Before you hesitate.
            </h2>
            
            <div className="divide-y divide-[#E5E0D8]">
              {[
                {
                  q: "I haven't launched yet. Is this still for me?",
                  a: "Yes. The ICP builder, GTM framework, market sizing method, and value proposition framework are exactly what you need before you build anything. Start here, build smarter."
                },
                {
                  q: "Is this just PDFs I'll save and never open?",
                  a: "These are working templates with formulas, frameworks with real examples, and guides written to be read in one sitting. Not theory. Not a textbook. Open it, fill it in, use it."
                },
                {
                  q: "Why Rs. 499 and not free?",
                  a: "Because free resources don't get used. The ones you pay for, even a little, are the ones you actually open. At Rs. 499 this is less than one Zomato order. If it helps you avoid one bad business decision, it paid for itself many times over."
                },
                {
                  q: "How do I get access after paying?",
                  a: "Instant access. You get a Google Drive link immediately after payment. Everything is organized and ready to use."
                },
                {
                  q: "I already follow the series. Is there new stuff in here?",
                  a: "Yes. The resources are expanded, formatted properly, and include templates and examples that were not in the videos. Following the series gives you the concepts. The toolkit gives you the tools to actually apply them."
                }
              ].map((faq, idx) => (
                <div key={idx} className="py-5 group hover:pl-3 hover:bg-[#F9F7F4] transition-all duration-300">
                  <p className="text-[15px] font-semibold text-[#111111] mb-2 leading-relaxed group-hover:text-[#6B0F1A] transition-colors">{faq.q}</p>
                  <p className="text-[14px] text-[#3D3D3D] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#6B0F1A] py-20 px-6 text-center" id="buy">
        <div className="max-w-[580px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#FFAAAA]">Get instant access</p>
            <h2 className="font-libre text-3xl md:text-5xl font-bold text-white leading-[1.15]">
              Stop being a scrambled egg.
            </h2>
            <p className="text-[15px] text-[#F5C6C6] leading-[1.75] mb-8">
              22 resources. Everything you need to go from "I built something, now what?" to actually running a business.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 max-w-lg mx-auto mb-6">
              {[
                "ICP Builder", "GTM Framework", "Runway Calculator", 
                "Sales Deck Template", "Cash Flow Template", "Exit Calculator", 
                "VC Fund List", "Cap Table Guide"
              ].map((pill, idx) => (
                <span key={idx} className="text-[11px] font-medium text-[#F5C6C6] bg-white/10 border border-white/18 px-3.5 py-1.5 hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                  {pill}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto py-4 px-2 bg-white/5 border border-white/10 rounded mb-8 text-white">
              <div>
                <p className="text-xl md:text-2xl font-semibold leading-none mb-1 text-white">
                  <AnimatedCounter target={1700} suffix="+" />
                </p>
                <p className="text-[9px] md:text-[10px] text-[#F5C6C6] font-medium uppercase tracking-wider">Founders followed</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-semibold leading-none mb-1 text-white">
                  <AnimatedCounter target={100} suffix="K+" />
                </p>
                <p className="text-[9px] md:text-[10px] text-[#F5C6C6] font-medium uppercase tracking-wider">Views on series</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-semibold leading-none mb-1 text-white">
                  <AnimatedCounter target={30} />
                </p>
                <p className="text-[9px] md:text-[10px] text-[#F5C6C6] font-medium uppercase tracking-wider">Days, zero missed</p>
              </div>
            </div>
            
            <div className="bg-black/10 border border-white/10 py-6 px-4 rounded max-w-sm mx-auto mb-8">
              <p className="text-[11px] text-[#FFAAAA] font-semibold tracking-wider uppercase mb-1.5">One-time payment</p>
              <p className="text-5xl font-extrabold text-white leading-none mb-1.5">Rs. 499</p>
              <p className="text-[12px] text-[#FFAAAA]">Instant Google Drive access. No subscription. No upsell.</p>
            </div>
            
            <br />
            <a 
              href="https://purchase.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-white text-[#6B0F1A] text-base font-bold px-12 py-[18px] hover:opacity-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-2xl shadow-black/22"
            >
              Get the Founder's Toolkit
            </a>
            <br /><br />
            <p className="text-[12px] text-[#FFAAAA] italic">Less than one Zomato order. Zero excuses.</p>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#F9F7F4] border-t border-[#E5E0D8] py-8 px-6 text-center">
        <p className="text-[13px] font-semibold text-[#6B0F1A] mb-1">@itsranyal</p>
        <p className="text-[11px] text-[#888888]">Founder's Playbook, 30 Day Series, Built for first-time founders</p>
      </footer>

    </div>
  );
}
