"use client";

import Reveal from "./Reveal";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TiltCard from "./TiltCard";
import Odometer from "./Odometer";

export default function HeroSection() {
  const [introFinished, setIntroFinished] = useState(false);
  
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    // End intro sequence after 4.5 seconds
    const introTimer = setTimeout(() => {
      setIntroFinished(true);
    }, 4500);

    return () => {
      clearTimeout(introTimer);
    };
  }, []);

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden border-b border-[var(--color-line)] bg-[#010402]">
      {/* Field Background - fades in after floodlights */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-0 pointer-events-none animate-[fadeIn_2s_ease-out_3s_forwards] w-[150%] h-[150%] -left-[25%] -top-[25%]"
        style={{
          y: backgroundY,
          background: "repeating-linear-gradient(90deg, rgba(0,230,118,.05) 0 2px, transparent 2px 90px)",
          maskImage: "linear-gradient(180deg, transparent, black 40%, black 70%, transparent)",
        }}
      ></motion.div>

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

      <motion.div 
        className="max-w-[1120px] mx-auto px-7 relative z-70 w-full flex flex-col items-center opacity-0 animate-[fadeInUp_1.5s_ease-out_3.8s_forwards]"
        style={{ y: textY }}
      >
        
        <div className="mb-6 flex items-center justify-center opacity-0 animate-[fadeIn_1s_ease-out_4s_forwards]">
          <img src="/turf%2036%20white%20logo.png" alt="TURF 36" className="h-[180px] md:h-[220px] w-auto opacity-90 animate-glitch" />
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



        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-[14px] mt-[80px] opacity-0 animate-[fadeInUp_1.5s_ease-out_5.2s_forwards]">
          <TiltCard className="w-full h-full">
            <div className="bg-[rgba(0,230,118,0.03)] backdrop-blur-md py-[26px] px-[20px] text-center border border-[var(--color-line)] rounded-xl h-full flex flex-col justify-center shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
              <b className="font-space text-[clamp(24px,3vw,34px)] text-[var(--color-gold-hot)] flex justify-center font-bold mb-[6px]"><Odometer value={1000} suffix="+" /></b>
              <span className="text-[11px] text-[var(--color-muted)] uppercase tracking-[.08em]">Matches Played</span>
            </div>
          </TiltCard>
          <TiltCard className="w-full h-full">
            <div className="bg-[rgba(0,230,118,0.03)] backdrop-blur-md py-[26px] px-[20px] text-center border border-[var(--color-line)] rounded-xl h-full flex flex-col justify-center shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
              <b className="font-space text-[clamp(24px,3vw,34px)] text-[var(--color-gold-hot)] flex justify-center font-bold mb-[6px]"><Odometer value={50} suffix="+" /></b>
              <span className="text-[11px] text-[var(--color-muted)] uppercase tracking-[.08em]">Tournaments Hosted</span>
            </div>
          </TiltCard>
          <TiltCard className="w-full h-full">
            <div className="bg-[rgba(0,230,118,0.03)] backdrop-blur-md py-[26px] px-[20px] text-center border border-[var(--color-line)] rounded-xl h-full flex flex-col justify-center shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
              <b className="font-space text-[clamp(24px,3vw,34px)] text-[var(--color-gold-hot)] flex justify-center font-bold mb-[6px]"><Odometer value={100} suffix="+" /></b>
              <span className="text-[11px] text-[var(--color-muted)] uppercase tracking-[.08em]">Teams Played</span>
            </div>
          </TiltCard>
          <TiltCard className="w-full h-full">
            <div className="bg-[rgba(0,230,118,0.03)] backdrop-blur-md py-[26px] px-[20px] text-center border border-[var(--color-line)] rounded-xl h-full flex flex-col justify-center shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
              <b className="font-space text-[clamp(24px,3vw,34px)] text-[var(--color-gold-hot)] flex justify-center font-bold mb-[6px]"><Odometer value={365} /></b>
              <span className="text-[11px] text-[var(--color-muted)] uppercase tracking-[.08em]">Days of Game On</span>
            </div>
          </TiltCard>
        </div>
      </motion.div>


      
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
