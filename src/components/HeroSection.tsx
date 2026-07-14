"use client";

import Reveal from "./Reveal";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [matches, setMatches] = useState(0);
  const [tournaments, setTournaments] = useState(0);
  const [teams, setTeams] = useState(0);
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    // End intro sequence after 4.5 seconds
    const introTimer = setTimeout(() => {
      setIntroFinished(true);
    }, 4500);

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
    }, 4000); // delay counters until intro is almost done

    return () => {
      clearTimeout(timer);
      clearTimeout(introTimer);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden border-b border-[var(--color-line)] bg-[#010402]">
      {/* Field Background - fades in after floodlights */}
      <div 
        className="absolute inset-0 z-0 opacity-0 pointer-events-none animate-[fadeIn_2s_ease-out_3s_forwards]"
        style={{
          background: "repeating-linear-gradient(90deg, rgba(0,230,118,.05) 0 2px, transparent 2px 90px)",
          maskImage: "linear-gradient(180deg, transparent, black 40%, black 70%, transparent)",
        }}
      ></div>

      {/* Floating Particles / Haze - fades in */}
      <div className="absolute inset-0 z-0 opacity-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(140,255,90,0.05)_0%,transparent_70%)] mix-blend-screen animate-[fadeIn_3s_ease-out_3.5s_forwards]"></div>

      {/* Intro Overlay - black screen */}
      <div className={`absolute inset-0 z-[60] bg-[#030805] pointer-events-none transition-opacity duration-[1500ms] ${introFinished ? 'opacity-0' : 'opacity-100'}`}></div>

      {/* Four Floodlights Sequence */}
      <div className="absolute inset-0 z-[65] pointer-events-none">
        {/* Light 1 (Top Left) */}
        <div className="absolute top-[-10%] left-[10%] w-[120px] h-[150%] origin-top rotate-[25deg] blur-[20px] opacity-0 animate-[lightFlicker_0.5s_ease-out_0.5s_forwards] mix-blend-screen"
             style={{ background: "linear-gradient(180deg, rgba(140,255,90,.6), transparent 60%)" }}></div>
        {/* Light 2 (Top Right) */}
        <div className="absolute top-[-10%] right-[10%] w-[120px] h-[150%] origin-top rotate-[-25deg] blur-[20px] opacity-0 animate-[lightFlicker_0.5s_ease-out_1.2s_forwards] mix-blend-screen"
             style={{ background: "linear-gradient(180deg, rgba(140,255,90,.6), transparent 60%)" }}></div>
        {/* Light 3 (Far Left) */}
        <div className="absolute top-[10%] left-[-5%] w-[120px] h-[150%] origin-top rotate-[45deg] blur-[15px] opacity-0 animate-[lightFlicker_0.5s_ease-out_1.9s_forwards] mix-blend-screen"
             style={{ background: "linear-gradient(180deg, rgba(140,255,90,.4), transparent 50%)" }}></div>
        {/* Light 4 (Far Right) */}
        <div className="absolute top-[10%] right-[-5%] w-[120px] h-[150%] origin-top rotate-[-45deg] blur-[15px] opacity-0 animate-[lightFlicker_0.5s_ease-out_2.6s_forwards] mix-blend-screen"
             style={{ background: "linear-gradient(180deg, rgba(140,255,90,.4), transparent 50%)" }}></div>
      </div>

      <div className="max-w-[1120px] mx-auto px-7 relative z-70 w-full flex flex-col items-center opacity-0 animate-[fadeInUp_1.5s_ease-out_3.8s_forwards]">
        
        <div className="mb-6 flex items-center justify-center opacity-0 animate-[fadeIn_1s_ease-out_4s_forwards]">
          <img src="/turf%2036%20white%20logo.png" alt="TURF 36" className="h-[90px] w-auto opacity-90 drop-shadow-[0_0_15px_rgba(140,255,90,0.15)]" />
        </div>

        <h1 className="font-bebas font-normal tracking-[.02em] text-[clamp(50px,9vw,110px)] leading-[0.9] uppercase text-center">
          <span className="block mb-[-2px]">FROM</span>
          <span className="block mb-[-2px]">FIRST BALL</span>
          <span className="block mb-[-2px]">TO</span>
          <span className="block text-[#00E676] text-sweep-container">
            FINAL WHISTLE.
          </span>
        </h1>
        
        <p className="mt-[24px] text-[var(--color-muted)] text-[14px] md:text-[16px] leading-[1.6] text-center font-space tracking-[.05em] max-w-[600px] opacity-0 animate-[fadeIn_1s_ease-out_4.5s_forwards]">
          Gobichettipalayam's Premium Cricket, Football & Pickleball Arena
        </p>

        <div className="flex gap-[14px] mt-[38px] flex-wrap justify-center opacity-0 animate-[fadeInUp_1s_ease-out_4.8s_forwards]">
          <a href="#book" className="font-space text-[12.5px] tracking-[.08em] uppercase py-[14px] px-[26px] rounded-[30px] inline-flex items-center gap-[10px] cursor-pointer glass-button border-[rgba(140,255,90,0.5)] bg-[rgba(0,230,118,0.1)] text-[var(--color-white)] shadow-[0_0_15px_rgba(0,230,118,0.3)] hover:bg-[var(--color-gold-hot)] hover:text-[#0a0a0a] hover:shadow-[0_0_25px_rgba(140,255,90,0.8)] hover:-translate-y-1 transition-all duration-300">
            Book Your Slot
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </a>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-[1px] mt-[80px] bg-[var(--color-line)] border border-[var(--color-line)] rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] opacity-0 animate-[fadeInUp_1.5s_ease-out_5.2s_forwards]">
          <div className="bg-[rgba(0,230,118,0.03)] backdrop-blur-md py-[22px] px-[20px] text-center">
            <b className="font-space text-[clamp(24px,3vw,34px)] text-[var(--color-gold-hot)] block font-bold">{matches}+</b>
            <span className="text-[11px] text-[var(--color-muted)] uppercase tracking-[.08em]">Matches Played</span>
          </div>
          <div className="bg-[rgba(0,230,118,0.03)] backdrop-blur-md py-[22px] px-[20px] text-center">
            <b className="font-space text-[clamp(24px,3vw,34px)] text-[var(--color-gold-hot)] block font-bold">{tournaments}+</b>
            <span className="text-[11px] text-[var(--color-muted)] uppercase tracking-[.08em]">Tournaments Hosted</span>
          </div>
          <div className="bg-[rgba(0,230,118,0.03)] backdrop-blur-md py-[22px] px-[20px] text-center">
            <b className="font-space text-[clamp(24px,3vw,34px)] text-[var(--color-gold-hot)] block font-bold">{teams}+</b>
            <span className="text-[11px] text-[var(--color-muted)] uppercase tracking-[.08em]">Teams Played</span>
          </div>
          <div className="bg-[rgba(0,230,118,0.03)] backdrop-blur-md py-[22px] px-[20px] text-center">
            <b className="font-space text-[clamp(24px,3vw,34px)] text-[var(--color-gold-hot)] block font-bold">365</b>
            <span className="text-[11px] text-[var(--color-muted)] uppercase tracking-[.08em]">Days of Game On</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[26px] left-1/2 -translate-x-1/2 z-10 font-space text-[11px] tracking-[.2em] text-[var(--color-muted)] opacity-0 drop-shadow-[0_0_4px_rgba(0,0,0,0.5)] animate-[fadeIn_2s_ease-out_6s_forwards]">
        SCROLL TO EXPLORE
        <div className="w-[1px] h-[30px] bg-gradient-to-b from-[var(--color-muted)] to-transparent mx-auto mt-2"></div>
      </div>
      
      <style jsx>{`
        .text-sweep-container {
          position: relative;
          display: inline-block;
          color: #00E676; /* Matte green */
        }
        .text-sweep-container::after {
          content: "FINAL WHISTLE.";
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          color: transparent;
          background: linear-gradient(
            90deg,
            transparent 0%,
            transparent 40%,
            rgba(255,255,255,0.9) 50%,
            transparent 60%,
            transparent 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          animation: metalSweep 14s ease-in-out infinite;
          z-index: 2;
          opacity: 0.8;
        }
        .text-sweep-container::before {
          content: "";
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            transparent 35%,
            rgba(140,255,90,0.25) 50%,
            transparent 65%,
            transparent 100%
          );
          background-size: 200% 100%;
          filter: blur(14px);
          animation: metalSweep 14s ease-in-out infinite;
          z-index: 0;
          pointer-events: none;
        }

        @keyframes metalSweep {
          0%, 75% { background-position: -150% 0; }
          90%, 100% { background-position: 150% 0; }
        }

        @keyframes lightFlicker {
          0% { opacity: 0; }
          10% { opacity: 0.8; }
          20% { opacity: 0.2; }
          30% { opacity: 1; }
          40% { opacity: 0.5; }
          100% { opacity: 0.7; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
