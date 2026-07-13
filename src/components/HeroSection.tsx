"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

export default function HeroSection() {
  const [matches, setMatches] = useState(0);
  const [tournaments, setTournaments] = useState(0);
  const [teams, setTeams] = useState(0);

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
      animateValue(setTeams, 24, 1400);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden border-b border-[var(--color-glass-border)] pt-20">
      
      {/* BACKGROUND MEDIA CONTAINER */}
      <div className="absolute inset-0 z-0 bg-[#060606]">
        {/* Cinematic gradient vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030303_100%)] z-10" />
        
        {/* Soft stadium floodlight simulation */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] opacity-10 mix-blend-screen bg-[radial-gradient(circle,rgba(255,255,255,0.8)_0%,transparent_70%)] blur-[100px]"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] opacity-[0.08] mix-blend-screen bg-[radial-gradient(circle,rgba(255,255,255,0.6)_0%,transparent_70%)] blur-[80px]"></div>
        
        {/* Bottom fog light */}
        <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-[#030303] to-transparent z-10" />
      </div>

      <div className="max-w-[1120px] w-full mx-auto px-7 relative z-20 flex flex-col items-center text-center mt-[-60px]">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Logo */}
          <motion.div variants={itemVariants} className="mb-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Turf 36" className="w-24 md:w-32 opacity-90 filter contrast-125 grayscale-[30%]" />
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className="font-bebas font-normal tracking-[.01em] text-[clamp(64px,12vw,150px)] leading-[0.85] uppercase text-[#e8e8e8] pb-2 text-shadow-sm">
            PLAY.<br />COMPETE.<br />BELONG.
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="mt-8 text-[var(--color-muted)] font-light text-[clamp(14px,1.5vw,18px)] tracking-[.2em] max-w-[600px] uppercase">
            Premium Cricket Experience <span className="mx-2 opacity-50">|</span> Gobichettipalayam
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex gap-5 mt-12 flex-col sm:flex-row">
            <a href="#book" className="relative group overflow-hidden font-space text-[12px] tracking-[.15em] uppercase py-[18px] px-[40px] border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.03)] text-white backdrop-blur-md transition-all hover:border-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.08)]">
              Book Your Slot
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.05)] to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            </a>
            <a href="#live" className="font-space text-[12px] tracking-[.15em] uppercase py-[18px] px-[40px] text-[var(--color-muted)] transition-all hover:text-white">
              Explore Matches
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Block (Smoked Glass Footer) */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 z-30 flex justify-center pb-8 px-6"
      >
        <div className="flex gap-[40px] md:gap-[80px] p-[24px_48px] border-t border-[var(--color-glass-border)] bg-[rgba(10,10,10,0.6)] backdrop-blur-2xl rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col items-center">
            <span className="font-bebas text-[36px] md:text-[44px] leading-none text-white tracking-wide">{matches}+</span>
            <span className="text-[10px] uppercase tracking-[.15em] text-[var(--color-muted-2)] mt-2 font-medium">Matches Played</span>
          </div>
          <div className="w-[1px] bg-gradient-to-b from-transparent via-[var(--color-glass-border)] to-transparent"></div>
          <div className="flex flex-col items-center">
            <span className="font-bebas text-[36px] md:text-[44px] leading-none text-white tracking-wide">{tournaments}</span>
            <span className="text-[10px] uppercase tracking-[.15em] text-[var(--color-muted-2)] mt-2 font-medium">Tournaments</span>
          </div>
          <div className="w-[1px] bg-gradient-to-b from-transparent via-[var(--color-glass-border)] to-transparent hidden md:block"></div>
          <div className="flex flex-col items-center hidden md:flex">
            <span className="font-bebas text-[36px] md:text-[44px] leading-none text-white tracking-wide">{teams}+</span>
            <span className="text-[10px] uppercase tracking-[.15em] text-[var(--color-muted-2)] mt-2 font-medium">Active Teams</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
