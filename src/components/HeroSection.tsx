"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import PremiumIcon from "./PremiumIcon";

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden border-b border-[var(--color-line)] pt-20">
      
      {/* BACKGROUND MEDIA CONTAINER */}
      {/* Ready for future drone video: just replace the inner div with a <video autoplay loop muted playsInline /> */}
      <div className="absolute inset-0 z-0 bg-[#090909]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#090909]/40 to-[#090909] z-10" />
        
        {/* Placeholder gradient mimicking a cinematic dark scene */}
        <div className="absolute inset-0 opacity-40 mix-blend-screen"
          style={{
            background: "radial-gradient(ellipse at 50% 20%, rgba(212,175,55,0.15), transparent 60%)",
          }}
        />
        
        {/* Static noise overlay for premium texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>
      </div>

      <div className="max-w-[1120px] w-full mx-auto px-7 relative z-10 flex flex-col items-center text-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Logo */}
          <motion.div variants={itemVariants} className="mb-8">
            <img src="/logo.png" alt="Turf 36" className="w-24 md:w-32 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]" />
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className="font-bebas font-normal tracking-[.02em] text-[clamp(64px,12vw,140px)] leading-[0.85] uppercase bg-gradient-to-b from-[#ffffff] to-[#a1a1aa] bg-clip-text text-transparent pb-2 drop-shadow-2xl">
            PLAY.<br />COMPETE.<br />ELEVATE.
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="mt-6 text-[var(--color-muted)] font-light text-[clamp(16px,2vw,20px)] tracking-[.02em] max-w-[600px]">
            Premium Cricket Turf in Gobichettipalayam
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex gap-4 mt-10 flex-col sm:flex-row">
            <a href="#book" className="relative group overflow-hidden font-space text-[13px] tracking-[.08em] uppercase py-[16px] px-[32px] rounded-full inline-flex items-center gap-[10px] cursor-pointer bg-[var(--color-gold)] text-[#0a0a0a] font-bold transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">
              <PremiumIcon name="lightning" noContainer className="w-4 h-4" />
              Book Your Slot
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            </a>
            <a href="#tournaments" className="font-space text-[13px] tracking-[.08em] uppercase py-[16px] px-[32px] rounded-full inline-flex items-center gap-[10px] cursor-pointer bg-[var(--color-card)] border border-[var(--color-card-stroke)] text-[var(--color-white)] transition-all hover:bg-[var(--color-card-stroke)] hover:border-[var(--color-gold)] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-md">
              <PremiumIcon name="trophy" noContainer className="w-4 h-4 opacity-70" />
              Explore Tournaments
            </a>
          </motion.div>
        </motion.div>

        {/* Statistics - separate delayed animation */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="w-full grid grid-cols-2 sm:grid-cols-4 gap-px mt-24 bg-[var(--color-card-stroke)] border border-[var(--color-card-stroke)] rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md"
        >
          <div className="bg-[#121212]/90 hover:bg-[#18181b]/90 transition-colors py-[26px] px-[24px] text-center">
            <b className="font-space text-[clamp(28px,3vw,38px)] text-[var(--color-gold-hot)] block font-bold">{matches}</b>
            <span className="text-[10px] text-[var(--color-muted)] uppercase tracking-[.1em]">Matches hosted</span>
          </div>
          <div className="bg-[#121212]/90 hover:bg-[#18181b]/90 transition-colors py-[26px] px-[24px] text-center">
            <b className="font-space text-[clamp(28px,3vw,38px)] text-[var(--color-gold-hot)] block font-bold">{tournaments}</b>
            <span className="text-[10px] text-[var(--color-muted)] uppercase tracking-[.1em]">Tournaments</span>
          </div>
          <div className="bg-[#121212]/90 hover:bg-[#18181b]/90 transition-colors py-[26px] px-[24px] text-center">
            <b className="font-space text-[clamp(28px,3vw,38px)] text-[var(--color-gold-hot)] block font-bold">{teams}</b>
            <span className="text-[10px] text-[var(--color-muted)] uppercase tracking-[.1em]">Teams played</span>
          </div>
          <div className="bg-[#121212]/90 hover:bg-[#18181b]/90 transition-colors py-[26px] px-[24px] text-center">
            <b className="font-space text-[clamp(28px,3vw,38px)] text-[var(--color-gold-hot)] block font-bold">D/N</b>
            <span className="text-[10px] text-[var(--color-muted)] uppercase tracking-[.1em]">Floodlit Turf</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-[40px] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-space text-[9px] tracking-[.3em] uppercase text-[var(--color-muted)]">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-[40px] bg-gradient-to-b from-[var(--color-gold)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
