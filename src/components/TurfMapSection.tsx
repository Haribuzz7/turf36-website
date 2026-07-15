"use client";

import React, { useState } from "react";
import SectionHighlight from "./SectionHighlight";
import Reveal from "./Reveal";

export default function TurfMapSection() {
  const [activeElement, setActiveElement] = useState<string | null>(null);

  const getDetails = () => {
    switch(activeElement) {
      case 'pitch1':
        return { title: "Pitch 1", desc: "Main 7v7 Football / Box Cricket Turf", specs: "High-grade artificial grass, FIFA approved padding." };
      case 'pitch2':
        return { title: "Pitch 2", desc: "5v5 Football / Fast-paced Cricket", specs: "Perfect for quick matches and practice sessions." };
      case 'pickleball':
        return { title: "Pickleball Court", desc: "Standard Size Court", specs: "Professional hard court surface, dedicated lighting." };
      case 'boardgames':
        return { title: "Board Games Shed", desc: "Relax & Recharge Area", specs: "Carrom, Chess, seating area with snacks available." };
      default:
        return { title: "Interactive Turf Map", desc: "Hover or tap on any area to see details.", specs: "Explore our premium facilities." };
    }
  };

  const activeInfo = getDetails();

  return (
    <section id="map" className="relative z-10 border-b border-[rgba(255,255,255,0.05)] bg-[var(--color-void)]">
      <SectionHighlight glowColor="gold" glowPosition="right" className="py-[110px]">
        <div className="max-w-[1120px] mx-auto px-7">
          <div className="font-space tracking-[.22em] uppercase text-[11.5px] text-[var(--color-gold)] flex items-center gap-[10px] mb-[16px] before:content-[''] before:w-[26px] before:h-[1px] before:bg-[var(--color-gold)]">
            Facility Blueprint
          </div>
          <Reveal>
            <h2 className="font-bebas font-normal tracking-[.01em] text-[clamp(34px,5.4vw,58px)] leading-[1.02] uppercase mb-[40px]">
              The <span className="text-[var(--color-gold-hot)]">Layout</span>
            </h2>
          </Reveal>

          <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
            
            {/* SVG Interactive Map */}
            <div className="w-full lg:w-2/3 glass-panel p-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,230,118,0.1)_0%,transparent_70%)] opacity-50"></div>
              
              <svg viewBox="0 0 800 600" className="w-full h-auto drop-shadow-[0_0_20px_rgba(0,230,118,0.2)]">
                {/* Background Grid */}
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(140,255,90,0.05)" strokeWidth="1"/>
                  </pattern>
                  
                  {/* Grass Pattern for Pitches */}
                  <pattern id="grass" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect width="20" height="20" fill="rgba(0,230,118,0.05)" />
                    <circle cx="2" cy="2" r="1" fill="rgba(140,255,90,0.1)" />
                    <circle cx="12" cy="12" r="1" fill="rgba(140,255,90,0.1)" />
                  </pattern>
                </defs>
                <rect width="800" height="600" fill="url(#grid)" rx="20" />

                {/* Main Outer Boundary */}
                <rect x="50" y="50" width="700" height="500" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" rx="10" />

                {/* Pitch 1 (Left) */}
                <g 
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setActiveElement('pitch1')}
                  onMouseLeave={() => setActiveElement(null)}
                  onTouchStart={() => setActiveElement('pitch1')}
                >
                  <rect x="70" y="70" width="300" height="460" fill="url(#grass)" stroke={activeElement === 'pitch1' ? "var(--color-gold-hot)" : "var(--color-gold)"} strokeWidth={activeElement === 'pitch1' ? "4" : "2"} rx="8" />
                  <rect x="70" y="240" width="40" height="120" fill="none" stroke="rgba(140,255,90,0.3)" strokeWidth="2" />
                  <rect x="330" y="240" width="40" height="120" fill="none" stroke="rgba(140,255,90,0.3)" strokeWidth="2" />
                  <circle cx="220" cy="300" r="40" fill="none" stroke="rgba(140,255,90,0.3)" strokeWidth="2" />
                  <line x1="220" y1="70" x2="220" y2="530" stroke="rgba(140,255,90,0.3)" strokeWidth="2" />
                  <text x="220" y="305" fill={activeElement === 'pitch1' ? "var(--color-gold-hot)" : "var(--color-gold)"} fontSize="24" fontFamily="Bebas Neue" textAnchor="middle" className="pointer-events-none drop-shadow-md">PITCH 1</text>
                </g>

                {/* Pitch 2 (Right Top) */}
                <g 
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setActiveElement('pitch2')}
                  onMouseLeave={() => setActiveElement(null)}
                  onTouchStart={() => setActiveElement('pitch2')}
                >
                  <rect x="390" y="70" width="340" height="260" fill="url(#grass)" stroke={activeElement === 'pitch2' ? "var(--color-gold-hot)" : "var(--color-gold)"} strokeWidth={activeElement === 'pitch2' ? "4" : "2"} rx="8" />
                  <circle cx="560" cy="200" r="30" fill="none" stroke="rgba(140,255,90,0.3)" strokeWidth="2" />
                  <line x1="560" y1="70" x2="560" y2="330" stroke="rgba(140,255,90,0.3)" strokeWidth="2" />
                  <text x="560" y="205" fill={activeElement === 'pitch2' ? "var(--color-gold-hot)" : "var(--color-gold)"} fontSize="24" fontFamily="Bebas Neue" textAnchor="middle" className="pointer-events-none drop-shadow-md">PITCH 2</text>
                </g>

                {/* Pickleball Court (Right Bottom Left) */}
                <g 
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setActiveElement('pickleball')}
                  onMouseLeave={() => setActiveElement(null)}
                  onTouchStart={() => setActiveElement('pickleball')}
                >
                  <rect x="390" y="350" width="160" height="180" fill="rgba(0,100,255,0.05)" stroke={activeElement === 'pickleball' ? "#3b82f6" : "rgba(59, 130, 246, 0.5)"} strokeWidth={activeElement === 'pickleball' ? "4" : "2"} rx="4" />
                  <line x1="390" y1="440" x2="550" y2="440" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" strokeDasharray="4 2" />
                  <text x="470" y="445" fill={activeElement === 'pickleball' ? "#60a5fa" : "rgba(96, 165, 250, 0.7)"} fontSize="18" fontFamily="Bebas Neue" textAnchor="middle" className="pointer-events-none drop-shadow-md">PICKLEBALL</text>
                </g>

                {/* Board Games Shed (Right Bottom Right) */}
                <g 
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setActiveElement('boardgames')}
                  onMouseLeave={() => setActiveElement(null)}
                  onTouchStart={() => setActiveElement('boardgames')}
                >
                  <rect x="570" y="350" width="160" height="180" fill="rgba(255,165,0,0.05)" stroke={activeElement === 'boardgames' ? "#f59e0b" : "rgba(245, 158, 11, 0.5)"} strokeWidth={activeElement === 'boardgames' ? "4" : "2"} rx="4" />
                  {/* Simple Roof/Shed pattern */}
                  <path d="M 570 350 L 650 330 L 730 350" fill="none" stroke={activeElement === 'boardgames' ? "#f59e0b" : "rgba(245, 158, 11, 0.5)"} strokeWidth="2" />
                  <text x="650" y="445" fill={activeElement === 'boardgames' ? "#fbbf24" : "rgba(251, 191, 36, 0.7)"} fontSize="18" fontFamily="Bebas Neue" textAnchor="middle" className="pointer-events-none drop-shadow-md">BOARD GAMES</text>
                </g>
              </svg>
            </div>

            {/* Information Panel */}
            <div className="w-full lg:w-1/3 min-h-[200px] flex flex-col justify-center">
              <Reveal>
                <div className="glass-panel p-8 border-l-4 border-l-[var(--color-gold-hot)] h-full">
                  <h3 className="font-bebas text-[32px] tracking-wide text-white mb-2">{activeInfo.title}</h3>
                  <p className="text-[var(--color-gold)] font-space text-[12px] uppercase tracking-wider mb-4">{activeInfo.desc}</p>
                  <p className="text-[var(--color-muted)] text-[15px] leading-relaxed">{activeInfo.specs}</p>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </SectionHighlight>
    </section>
  );
}
