"use client";

import React, { useState } from "react";
import SectionHighlight from "./SectionHighlight";
import Reveal from "./Reveal";

export default function TurfMapSection({ maintenanceSettings }: { maintenanceSettings?: any }) {
  const [activeElement, setActiveElement] = useState<string | null>(null);

  const getDetails = () => {
    switch(activeElement) {
      case 'pitch1':
        if (maintenanceSettings?.pitch1_maintenance) return { title: "Main Pitch", desc: "Currently Unavailable", specs: "Closed for routine maintenance." };
        return { title: "Main Pitch", desc: "7v7 Football / Box Cricket Turf", specs: "High-grade artificial grass, FIFA approved padding." };
      case 'pickleball':
        if (maintenanceSettings?.pickleball_maintenance) return { title: "Pickleball Court", desc: "Currently Unavailable", specs: "Closed for routine maintenance." };
        return { title: "Pickleball Court", desc: "Standard Size Court", specs: "Professional hard court surface, dedicated lighting." };
      case 'boardgames':
        if (maintenanceSettings?.boardgames_maintenance) return { title: "Board Games Shed", desc: "Currently Unavailable", specs: "Closed for routine maintenance." };
        return { title: "Board Games Shed", desc: "Relax & Recharge Area", specs: "Carrom, Chess, seating area with snacks available." };
      default:
        return { title: "Interactive Turf Map", desc: "Hover or tap on any area to see details.", specs: "Explore our premium facilities." };
    }
  };

  const activeInfo = getDetails();

  // Reusable Maintenance Tape SVG Component
  const MaintenanceTape = ({ x, y, w, h }: any) => (
    <g className="opacity-90 pointer-events-none">
      <defs>
        <pattern id="tape-stripes" width="40" height="40" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
          <rect width="40" height="40" fill="#fbbf24" />
          <line x1="0" y1="0" x2="0" y2="40" stroke="#000" strokeWidth="40" strokeDasharray="20, 20" />
        </pattern>
      </defs>
      <rect x={x} y={y} width={w} height={h} fill="url(#tape-stripes)" rx="4" />
      <rect x={x} y={y} width={w} height={h} fill="rgba(0,0,0,0.5)" rx="4" />
      <text x={x + w/2} y={y + h/2 + 8} fill="white" fontSize="16" fontFamily="Bebas Neue" textAnchor="middle" className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] tracking-widest">
        🚧 UNDER MAINTENANCE 🚧
      </text>
    </g>
  );

  return (
    <section id="map" className="relative z-10 border-b border-[rgba(255,255,255,0.05)] bg-[var(--color-void)]">
      <SectionHighlight glowColor="emerald" glowPosition="right" className="py-[110px]">
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

                {/* Main Pitch (Top Left) */}
                <g 
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setActiveElement('pitch1')}
                  onMouseLeave={() => setActiveElement(null)}
                  onTouchStart={() => setActiveElement('pitch1')}
                >
                  <rect x="70" y="70" width="480" height="280" fill="url(#grass)" stroke={activeElement === 'pitch1' ? "var(--color-gold-hot)" : "var(--color-gold)"} strokeWidth={activeElement === 'pitch1' ? "4" : "2"} rx="8" />
                  <rect x="70" y="140" width="60" height="140" fill="none" stroke="rgba(140,255,90,0.3)" strokeWidth="2" />
                  <rect x="490" y="140" width="60" height="140" fill="none" stroke="rgba(140,255,90,0.3)" strokeWidth="2" />
                  <circle cx="310" cy="210" r="40" fill="none" stroke="rgba(140,255,90,0.3)" strokeWidth="2" />
                  <line x1="310" y1="70" x2="310" y2="350" stroke="rgba(140,255,90,0.3)" strokeWidth="2" />
                  
                  {maintenanceSettings?.pitch1_maintenance ? (
                    <MaintenanceTape x={70} y={70} w={480} h={280} />
                  ) : (
                    <text x="310" y="218" fill={activeElement === 'pitch1' ? "var(--color-gold-hot)" : "var(--color-gold)"} fontSize="24" fontFamily="Bebas Neue" textAnchor="middle" className="pointer-events-none drop-shadow-md">MAIN PITCH</text>
                  )}
                </g>

                {/* Pickleball Court (Top Right - Portrait) */}
                <g 
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setActiveElement('pickleball')}
                  onMouseLeave={() => setActiveElement(null)}
                  onTouchStart={() => setActiveElement('pickleball')}
                >
                  <rect x="570" y="70" width="160" height="280" fill="rgba(0,100,255,0.05)" stroke={activeElement === 'pickleball' ? "#3b82f6" : "rgba(59, 130, 246, 0.5)"} strokeWidth={activeElement === 'pickleball' ? "4" : "2"} rx="4" />
                  <line x1="570" y1="210" x2="730" y2="210" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" strokeDasharray="4 2" />
                  
                  {maintenanceSettings?.pickleball_maintenance ? (
                    <MaintenanceTape x={570} y={70} w={160} h={280} />
                  ) : (
                    <text x="650" y="218" fill={activeElement === 'pickleball' ? "#60a5fa" : "rgba(96, 165, 250, 0.7)"} fontSize="22" fontFamily="Bebas Neue" textAnchor="middle" className="pointer-events-none drop-shadow-md">PICKLEBALL</text>
                  )}
                </g>

                {/* Board Games Shed (Bottom Full Width) */}
                <g 
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setActiveElement('boardgames')}
                  onMouseLeave={() => setActiveElement(null)}
                  onTouchStart={() => setActiveElement('boardgames')}
                >
                  <rect x="70" y="370" width="660" height="160" fill="rgba(255,165,0,0.05)" stroke={activeElement === 'boardgames' ? "#f59e0b" : "rgba(245, 158, 11, 0.5)"} strokeWidth={activeElement === 'boardgames' ? "4" : "2"} rx="4" />
                  <path d="M 70 370 L 400 330 L 730 370" fill="none" stroke={activeElement === 'boardgames' ? "#f59e0b" : "rgba(245, 158, 11, 0.5)"} strokeWidth="2" />
                  
                  {maintenanceSettings?.boardgames_maintenance ? (
                    <MaintenanceTape x={70} y={370} w={660} h={160} />
                  ) : (
                    <text x="400" y="455" fill={activeElement === 'boardgames' ? "#fbbf24" : "rgba(251, 191, 36, 0.7)"} fontSize="22" fontFamily="Bebas Neue" textAnchor="middle" className="pointer-events-none drop-shadow-md">BOARD GAMES SHED</text>
                  )}
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
