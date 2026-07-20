"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TiltCard from "./TiltCard";
import Odometer from "./Odometer";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} id="home" className="relative z-10 min-h-screen flex items-center justify-center pt-20 overflow-hidden border-b border-[var(--color-line)]">
      {/* Field Background */}
      <div className="absolute inset-0 z-0 opacity-0 pointer-events-none animate-[fadeIn_1s_ease-out_forwards]">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
        >
          <source src="/turf-drone.webm" type="video/webm" />
        </video>
        <div 
          className="absolute inset-0"
          style={{
            background: "repeating-linear-gradient(90deg, rgba(0,230,118,.03) 0 2px, transparent 2px 90px)"
          }}
        ></div>
      </div>

      {/* Floating Particles / Haze - fades in */}
      <div className="absolute inset-0 z-0 opacity-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(140,255,90,0.05)_0%,transparent_70%)] mix-blend-screen animate-[fadeIn_1.5s_ease-out_forwards]"></div>

      {/* Light Beams */}
      <div className="absolute top-[-10%] w-[340px] h-[160%] z-0 origin-top rotate-[18deg] blur-[6px] opacity-80 pointer-events-none animate-[sweep_9s_ease-in-out_infinite]"
           style={{ background: "linear-gradient(180deg, rgba(255,246,216,.16), transparent 70%)" }}></div>
      <div className="absolute top-[-10%] w-[340px] h-[160%] z-0 origin-top rotate-[18deg] blur-[6px] opacity-40 pointer-events-none animate-[sweep_9s_ease-in-out_infinite]"
           style={{ background: "linear-gradient(180deg, rgba(255,246,216,.16), transparent 70%)", animationDelay: "-4.5s" }}></div>

      <motion.div 
        className="max-w-[1120px] mx-auto px-7 relative z-70 w-full flex flex-col items-center opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards]"
        style={{ y: textY }}
      >
        
        <div className="mb-6 flex items-center justify-center opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
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
        
        <p className="mt-[24px] text-[var(--color-muted)] text-[14px] md:text-[16px] leading-[1.6] text-center font-space tracking-[.05em] max-w-[600px] opacity-0 animate-[fadeIn_1s_ease-out_0.4s_forwards]">
          Gobichettipalayam&apos;s Premium Cricket, Football & Pickleball Arena
        </p>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-[14px] mt-[80px] opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]">
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
        @keyframes sweep {
          0%, 100% { left: -10%; }
          50% { left: 70%; }
        }
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
