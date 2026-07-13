"use client";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

export default function HeroSection() {
  const [matches, setMatches] = useState(0);
  const [tournaments, setTournaments] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const animateValue = (setFn: (val: number) => void, end: number, duration: number) => {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setFn(Math.floor(progress * end));
        if (progress < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    };

    const timer = setTimeout(() => {
      animateValue(setMatches, 42, 1400);
      animateValue(setTournaments, 6, 1400);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.5 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, filter: "blur(10px)", scale: 0.95 },
    visible: { opacity: 1, filter: "blur(0px)", scale: 1, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[var(--color-bg-deep)]">
      
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 bg-[var(--color-bg-deep)]">
        {/* Deep cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08130F] via-[#0D1814] to-[#050a08] opacity-90 z-10" />
        
        {/* Mouse Parallax Glows */}
        <motion.div 
          animate={{ x: mousePosition.x * -2, y: mousePosition.y * -2 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="absolute top-[20%] left-[15%] w-[40vw] h-[40vw] opacity-[0.15] mix-blend-screen bg-[radial-gradient(circle,var(--color-neon-primary)_0%,transparent_70%)] blur-[100px] z-10"
        />
        <motion.div 
          animate={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] opacity-[0.1] mix-blend-screen bg-[radial-gradient(circle,var(--color-neon-secondary)_0%,transparent_70%)] blur-[120px] z-10"
        />

        {/* Ambient Fog (CSS animation) */}
        <div className="absolute inset-0 z-10 opacity-30 mix-blend-screen pointer-events-none animate-fog">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(20,255,114,0.15)_0%,transparent_60%)] blur-[80px]" />
        </div>
        
        {/* Video Placeholder */}
        <video 
          className="absolute inset-0 w-full h-full object-cover opacity-[0.15] mix-blend-screen z-0"
          autoPlay loop muted playsInline
        >
          {/* <source src="/drone-footage.webm" type="video/webm" /> */}
        </video>
      </div>

      <div className="max-w-[1120px] w-full mx-auto px-7 relative z-20 flex flex-col items-center text-center mt-[-40px]">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center w-full relative">
          
          {/* Floating Logo */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-[var(--color-neon-primary)] blur-[30px] opacity-20 rounded-full"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Turf 36" className="w-20 md:w-28 filter invert brightness-200 hue-rotate-[90deg] saturate-[300%] contrast-[150%] opacity-90 drop-shadow-[0_0_15px_rgba(20,255,114,0.4)] relative z-10" />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={itemVariants} 
            className="font-bebas tracking-widest text-[clamp(60px,12vw,140px)] leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 drop-shadow-[0_10px_40px_rgba(20,255,114,0.15)] mb-8"
          >
            THIS IS <br/> MATCH DAY.
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="text-[var(--color-text-muted)] font-inter font-light text-[clamp(14px,1.5vw,18px)] tracking-widest max-w-[600px] mb-12 uppercase">
            Experience the ultimate private sporting arena.
          </motion.p>

          {/* Magnetic Glass Button */}
          <motion.div variants={itemVariants}>
            <a href="#book" className="group relative inline-flex items-center justify-center font-space text-[12px] tracking-[.25em] uppercase py-[20px] px-[48px] rounded-full bg-[rgba(20,255,114,0.1)] border border-[rgba(20,255,114,0.3)] text-[var(--color-text-main)] backdrop-blur-md overflow-hidden transition-all duration-500 hover:scale-105 hover:border-[var(--color-neon-primary)] hover:shadow-[0_0_40px_rgba(20,255,114,0.4)]">
              <span className="relative z-10 group-hover:text-[var(--color-bg-deep)] group-hover:font-bold transition-colors duration-300">Enter the Pitch</span>
              <div className="absolute inset-0 bg-[var(--color-neon-primary)] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"></div>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Ambient Info Bar (Glass) */}
      <motion.div 
        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.5, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-[40px] left-1/2 -translate-x-1/2 w-[90%] max-w-[1120px] z-30"
      >
        <div className="glass-panel rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-0">
          <div className="flex gap-[40px] md:gap-[60px]">
            <div className="flex flex-col items-center md:items-start pointer-events-auto">
              <span className="font-bebas text-[36px] leading-none text-white drop-shadow-[0_0_15px_rgba(20,255,114,0.3)] tracking-wider animate-neon-pulse">{matches}</span>
              <span className="font-space text-[10px] uppercase tracking-[.2em] text-[var(--color-text-muted)] mt-2">Matches</span>
            </div>
            <div className="flex flex-col items-center md:items-start pointer-events-auto">
              <span className="font-bebas text-[36px] leading-none text-white drop-shadow-[0_0_15px_rgba(20,255,114,0.3)] tracking-wider animate-neon-pulse">{tournaments}</span>
              <span className="font-space text-[10px] uppercase tracking-[.2em] text-[var(--color-text-muted)] mt-2">Tournaments</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end pointer-events-auto text-center md:text-right">
            <span className="font-space text-[10px] uppercase tracking-[.2em] text-[var(--color-neon-primary)] mb-2 drop-shadow-[0_0_8px_rgba(20,255,114,0.5)]">Location</span>
            <span className="font-space text-[12px] text-white opacity-80 tracking-widest">Gobichettipalayam, TN</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
