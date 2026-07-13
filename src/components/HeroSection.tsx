"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

export default function HeroSection() {
  const [matches, setMatches] = useState(0);
  const [tournaments, setTournaments] = useState(0);

  useEffect(() => {
    const animateValue = (setFn: (val: number) => void, end: number, duration: number) => {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setFn(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
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
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[var(--color-warm-white)] pt-20 border-b border-[var(--color-concrete)]">
      
      {/* BACKGROUND MEDIA CONTAINER - Ready for Drone Video */}
      <div className="absolute inset-[16px] md:inset-[24px] z-0 bg-[var(--color-soft-stone)] rounded-[20px] overflow-hidden">
        {/* Placeholder Gradient instead of black */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-soft-stone)] to-[var(--color-concrete)] opacity-50 z-0" />
        
        {/* Subtle lighting / glare */}
        <div className="absolute top-0 right-0 w-[70%] h-[70%] opacity-[0.15] mix-blend-overlay bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,transparent_70%)] blur-[80px]"></div>
        
        {/* Optional: Future <video> goes here, absolute inset-0 object-cover */}
      </div>

      <div className="max-w-[1120px] w-full mx-auto px-7 relative z-20 flex flex-col items-center text-center mt-[-60px]">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Logo */}
          <motion.div variants={itemVariants} className="mb-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Turf 36" className="w-20 md:w-28 opacity-80 filter invert sepia-[20%] hue-rotate-[190deg] saturate-[30%]" />
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className="font-bebas font-normal tracking-wide text-[clamp(50px,10vw,120px)] leading-[0.9] uppercase text-[var(--color-text-main)] pb-2">
            WELCOME TO <br/>THE VENUE.
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="mt-8 text-[var(--color-text-muted)] font-inter font-light text-[clamp(14px,1.2vw,16px)] tracking-wide max-w-[500px]">
            A private sporting destination crafted for community, competition, and clarity.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex gap-4 mt-12 flex-col sm:flex-row">
            <a href="#book" className="font-space text-[10px] tracking-[.15em] uppercase py-[16px] px-[36px] rounded-full bg-[var(--color-forest)] text-white hover:scale-[1.02] transition-transform duration-500 shadow-[0_4px_20px_rgba(49,91,68,0.15)]">
              Reserve a Slot
            </a>
            <a href="#facilities" className="font-space text-[10px] tracking-[.15em] uppercase py-[16px] px-[36px] rounded-full bg-white/60 text-[var(--color-text-main)] backdrop-blur-md border border-[var(--color-concrete)] hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-500">
              Discover the Club
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Elegant Bottom Info Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-[40px] left-0 right-0 z-30 flex justify-between px-[40px] md:px-[60px] items-end pointer-events-none"
      >
        <div className="flex gap-[40px]">
          <div className="flex flex-col pointer-events-auto">
            <span className="font-bebas text-[28px] leading-none text-[var(--color-text-main)] tracking-wide">{matches}</span>
            <span className="font-space text-[9px] uppercase tracking-[.15em] text-[var(--color-text-muted)] mt-1">Matches Played</span>
          </div>
          <div className="flex flex-col pointer-events-auto">
            <span className="font-bebas text-[28px] leading-none text-[var(--color-text-main)] tracking-wide">{tournaments}</span>
            <span className="font-space text-[9px] uppercase tracking-[.15em] text-[var(--color-text-muted)] mt-1">Tournaments</span>
          </div>
        </div>
        
        <div className="hidden md:flex flex-col items-end pointer-events-auto">
          <span className="font-space text-[9px] uppercase tracking-[.15em] text-[var(--color-text-muted)]">Location</span>
          <span className="font-space text-[11px] text-[var(--color-text-main)] mt-1">Gobichettipalayam, TN</span>
        </div>
      </motion.div>
    </section>
  );
}
