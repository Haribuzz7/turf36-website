"use client";

import Reveal from "./Reveal";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [matches, setMatches] = useState(0);
  const [tournaments, setTournaments] = useState(0);
  const [teams, setTeams] = useState(0);

  useEffect(() => {
    // Simple counter animation
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
    }, 500); // delay start slightly

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden border-b border-[var(--color-line)]">
      {/* Field Background */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          background: "repeating-linear-gradient(90deg, rgba(0,230,118,.05) 0 2px, transparent 2px 90px)",
          maskImage: "linear-gradient(180deg, transparent, black 40%, black 70%, transparent)",
        }}
      ></div>

      {/* Floating Particles / Haze */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(140,255,90,0.05)_0%,transparent_70%)] mix-blend-screen"></div>

      {/* Light Beams */}
      <div className="absolute top-[-10%] w-[340px] h-[160%] z-0 origin-top rotate-[18deg] blur-[10px] opacity-70 pointer-events-none animate-[sweep_9s_ease-in-out_infinite]"
           style={{ background: "linear-gradient(180deg, rgba(0,230,118,.25), transparent 70%)" }}></div>
      <div className="absolute top-[-10%] w-[340px] h-[160%] z-0 origin-top rotate-[18deg] blur-[10px] opacity-30 pointer-events-none animate-[sweep_9s_ease-in-out_infinite]"
           style={{ background: "linear-gradient(180deg, rgba(140,255,90,.15), transparent 70%)", animationDelay: "-4.5s" }}></div>

      <div className="max-w-[1120px] mx-auto px-7 relative z-10 w-full">
        <Reveal>
          <h1 className="font-bebas font-normal tracking-[.01em] text-[clamp(56px,11vw,132px)] leading-[0.92] uppercase drop-shadow-[0_0_20px_rgba(0,230,118,0.3)]">
            TURF 36
            <span className="block text-[var(--color-gold-hot)] text-[0.42em] tracking-[.28em] mt-[14px] font-space uppercase drop-shadow-[0_0_10px_rgba(140,255,90,0.5)]">
              Gobichettipalayam · Under the lights
            </span>
          </h1>
        </Reveal>
        
        <Reveal delay={0.1}>
          <p className="mt-[22px] text-[var(--color-muted)] max-w-[480px] text-[15.5px] leading-[1.7]">
            Cricket and pickleball, run properly. Book a slot in seconds, follow live scores mid-match, and revisit every tournament this ground has hosted — all from one page.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex gap-[14px] mt-[34px] flex-wrap">
            <a href="#book" className="font-space text-[12.5px] tracking-[.08em] uppercase py-[14px] px-[26px] rounded-lg inline-flex items-center gap-[10px] cursor-pointer glass-button font-bold shadow-[0_0_15px_rgba(0,230,118,0.5)] hover:bg-[var(--color-gold-hot)] hover:shadow-[0_0_25px_rgba(140,255,90,0.8)] hover:-translate-y-1 transition-all duration-300">
              Book a Slot
            </a>
            <a href="#live" className="font-space text-[12.5px] tracking-[.08em] uppercase py-[14px] px-[26px] rounded-lg inline-flex items-center gap-[10px] cursor-pointer glass-button">
              See Live Match
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-[1px] mt-[64px] bg-[var(--color-line)] border border-[var(--color-line)] rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="bg-[rgba(0,230,118,0.03)] backdrop-blur-md py-[22px] px-[20px] text-left">
              <b className="font-space text-[clamp(24px,3vw,34px)] text-[var(--color-gold-hot)] block font-bold neon-text">{matches}</b>
              <span className="text-[11px] text-[var(--color-muted)] uppercase tracking-[.08em]">Matches hosted</span>
            </div>
            <div className="bg-[rgba(0,230,118,0.03)] backdrop-blur-md py-[22px] px-[20px] text-left">
              <b className="font-space text-[clamp(24px,3vw,34px)] text-[var(--color-gold-hot)] block font-bold neon-text">{tournaments}</b>
              <span className="text-[11px] text-[var(--color-muted)] uppercase tracking-[.08em]">Tournaments run</span>
            </div>
            <div className="bg-[rgba(0,230,118,0.03)] backdrop-blur-md py-[22px] px-[20px] text-left">
              <b className="font-space text-[clamp(24px,3vw,34px)] text-[var(--color-gold-hot)] block font-bold neon-text">{teams}</b>
              <span className="text-[11px] text-[var(--color-muted)] uppercase tracking-[.08em]">Teams played here</span>
            </div>
            <div className="bg-[rgba(0,230,118,0.03)] backdrop-blur-md py-[22px] px-[20px] text-left">
              <b className="font-space text-[clamp(24px,3vw,34px)] text-[var(--color-gold-hot)] block font-bold neon-text">Day & Night</b>
              <span className="text-[11px] text-[var(--color-muted)] uppercase tracking-[.08em]">Floodlit turf</span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-[26px] left-[28px] z-10 font-space text-[11px] tracking-[.2em] text-[var(--color-gold-hot)] opacity-70 drop-shadow-[0_0_8px_rgba(140,255,90,0.5)]" style={{ writingMode: "vertical-rl" }}>
        SCROLL ↓
      </div>
      
      <style jsx>{`
        @keyframes sweep {
          0%, 100% { left: -10%; }
          50% { left: 70%; }
        }
      `}</style>
    </section>
  );
}
