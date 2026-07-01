/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from "motion/react";
import { Plus, Linkedin, Mail, ArrowLeft } from "lucide-react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { blogPosts } from "./data/posts";
import BlogPage from "./components/BlogPage";
import ToolkitPage from "./components/ToolkitPage";

function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const workProjects = [
    {
      title: "Callix AI",
      description: "Personal research report on emerging AI voice agent use cases, benefits, and risks.",
      tech: "Market Research • AI Strategy",
      link: "#"
    },
    {
      title: "Political Event Organised",
      description: "Assisted a transport company in organizing a large-scale political event involving 500 buses.",
      tech: "Operations • Logistics",
      link: "#"
    },
    {
      title: "LiaPlus AI",
      description: "Foundation work including business terms, sales decks, and government proposals.",
      tech: "GTM • Business Development",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-black selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-16 grid grid-cols-3 items-center bg-[#fcfcfc]/80 backdrop-blur-sm border-b border-black/[0.03]">
        <motion.div 
          className="absolute top-0 left-0 right-0 h-[2px] bg-black origin-left z-[60]"
          style={{ scaleX }}
        />
        <div className="flex justify-start">
          <Link to="/toolkit" className="flex items-center gap-1 text-[13px] font-serif italic opacity-60 hover:opacity-100 transition-opacity">
            + Playbook
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

      {/* Main Content */}
      <main className="pt-48 pb-20 px-6 md:px-16 max-w-3xl mx-auto">
        {/* Hero Section */}
        <section id="home" className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-serif mb-8 leading-[0.9] tracking-tighter"
          >
            Uchhashay Singh Ranyal
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] mb-16 text-black/40"
          >
            Strategy, GTM & Market Research
          </motion.p>
        </section>

        {/* About Section */}
        <section id="about" className="mb-40 space-y-8 text-lg md:text-2xl leading-[1.4] text-black/80 font-serif">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p>
              Hi, I’m Uchhashay, I have a deep interest in building real-world systems that scale.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p>
              I work at the intersection of technology, operations, and strategy, with hands-on experience across startups, GTM, and ground-level execution.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>
              I’ve spent time in Founder’s Office & GTM roles, where I’ve helped take ideas from clear plans to real execution, across growth, market research, and operations.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-8 border-t border-black/5"
          >
            <p className="text-sm md:text-base font-mono uppercase tracking-widest opacity-40 mb-4">Focus</p>
            <p>
              Looking ahead to the next 25 years of industrial change, I’m especially curious about AI, bio-engineering and next energy economy.
            </p>
          </motion.div>
        </section>
      </main>

      {/* Work Section (Technical Grid) */}
      <section id="work" className="bg-[#E4E3E0] text-[#141414] py-40 px-6 md:px-16 border-y border-[#141414]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-20 border-b border-[#141414]/20 pb-4">
            <h2 className="text-3xl font-serif italic">Work</h2>
            <p className="text-[10px] uppercase tracking-[0.2em] font-mono opacity-60">Selected Projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-l border-t border-[#141414]/10">
            {workProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group border-r border-b border-[#141414]/10 p-12 hover:bg-[#141414] hover:text-[#E4E3E0] transition-colors duration-500 cursor-pointer"
              >
                <a href={project.link} className="block space-y-8">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono opacity-40">0{index + 1}</span>
                    <span className="text-[10px] font-mono uppercase tracking-[0.1em] opacity-40 group-hover:opacity-100">
                      {project.tech}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-serif font-bold leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed font-serif italic opacity-70 group-hover:opacity-90">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[10px] font-mono uppercase tracking-widest">View Project</span>
                    <div className="h-[1px] w-8 bg-current"></div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="pb-40 px-6 md:px-16 max-w-3xl mx-auto pt-40">
        <div className="flex justify-between items-end mb-12 border-b border-black/10 pb-4">
          <h2 className="text-3xl font-serif italic opacity-80">Latest Posts</h2>
          <a href="#blog" className="text-[10px] uppercase tracking-[0.2em] font-mono opacity-40 hover:opacity-100 transition-opacity">
            View All
          </a>
        </div>

        <div className="flex flex-col">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={`/blog/${post.id}`}
                className="group flex items-center py-10 border-b border-black/[0.05] hover:pl-4 transition-all duration-500"
              >
                <span className="text-[10px] font-mono uppercase tracking-widest opacity-30 w-32 shrink-0">
                  {post.date}
                </span>
                <h3 className="text-xl md:text-2xl font-serif group-hover:italic transition-all duration-300 flex-1">
                  {post.title}
                </h3>
                <span className="text-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="bg-[#fcfcfc] text-black pt-32 pb-20 px-6 md:px-16 overflow-hidden border-t border-black/[0.03]">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex flex-col items-center mb-24 space-y-10">
            <p className="text-[11px] font-serif italic opacity-40 tracking-wider text-center">
              © 2026 Uchhashay Singh Ranyal. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 max-w-md mx-auto">
              <a href="#home" className="text-[11px] font-sans uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity">Home</a>
              <a href="#about" className="text-[11px] font-sans uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity">About</a>
              <a href="#work" className="text-[11px] font-sans uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity">Work</a>
              <a href="#blog" className="text-[11px] font-sans uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity">Blog</a>
            </div>
          </div>
          
          <div className="relative w-full overflow-hidden">
            <h2 className="text-[238.568px] leading-[195.568px] w-[1278px] mx-auto font-serif font-extralight tracking-[0.2em] text-center opacity-100 select-none whitespace-nowrap pl-0">
              RANYAL
            </h2>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  const isUchhashayDomain = typeof window !== 'undefined' && (
    window.location.hostname.includes("uchhashay.com") || 
    window.location.search.includes("domain=uchhashay.com")
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={isUchhashayDomain ? <ToolkitPage /> : <HomePage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/toolkit" element={<ToolkitPage />} />
        <Route path="/playbook" element={<ToolkitPage />} />
      </Routes>
    </Router>
  );
}
