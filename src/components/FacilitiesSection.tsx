"use client";

import Reveal from "./Reveal";
import PremiumIcon from "./PremiumIcon";

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="relative py-[140px] border-b border-[var(--color-glass-border)] bg-[#050505]">
      
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(var(--color-steel) 1px, transparent 1px), linear-gradient(90deg, var(--color-steel) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-[1120px] mx-auto px-7 relative z-10">
        <Reveal type="fade">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-[20px] mb-[60px]">
            <div>
              <span className="font-space tracking-[.3em] uppercase text-[10px] text-[var(--color-muted-2)] block mb-[16px] border-l-2 border-[var(--color-muted)] pl-[12px]">Infrastructure</span>
              <h2 className="font-bebas font-normal tracking-[.01em] text-[clamp(40px,6vw,70px)] leading-[0.9] text-white">
                FACILITIES <span className="text-[var(--color-muted-2)]">SPEC</span>
              </h2>
            </div>
            <div className="font-space text-[10px] tracking-[.3em] uppercase text-[var(--color-muted-2)] border border-[var(--color-steel)] p-[12px_24px] rounded-sm bg-[rgba(0,0,0,0.5)]">
              REV: 2.0 / 2026
            </div>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-[1px] mt-[44px] bg-[var(--color-steel)] border border-[var(--color-steel)] rounded-[4px] overflow-hidden p-[1px]">
          
          <div className="flex flex-col p-[30px_24px] bg-[var(--color-carbon)] group hover:bg-[#080808] transition-colors duration-500">
            <div className="flex justify-between items-start mb-[40px]">
              <span className="font-space text-[9px] text-[var(--color-muted-2)]">F-01</span>
              <PremiumIcon name="floodlight" noContainer className="w-[24px] h-[24px] opacity-40 group-hover:opacity-100 transition-opacity" />
            </div>
            <b className="font-bebas text-[24px] tracking-wide text-white block mt-auto">Floodlights</b>
            <span className="font-space text-[9px] uppercase tracking-widest text-[var(--color-muted)] mt-2">D/N Capable</span>
          </div>
          
          <div className="flex flex-col p-[30px_24px] bg-[var(--color-carbon)] group hover:bg-[#080808] transition-colors duration-500">
            <div className="flex justify-between items-start mb-[40px]">
              <span className="font-space text-[9px] text-[var(--color-muted-2)]">F-02</span>
              <PremiumIcon name="parking" noContainer className="w-[24px] h-[24px] opacity-40 group-hover:opacity-100 transition-opacity" />
            </div>
            <b className="font-bebas text-[24px] tracking-wide text-white block mt-auto">Parking</b>
            <span className="font-space text-[9px] uppercase tracking-widest text-[var(--color-muted)] mt-2">Ample Space</span>
          </div>

          <div className="flex flex-col p-[30px_24px] bg-[var(--color-carbon)] group hover:bg-[#080808] transition-colors duration-500">
            <div className="flex justify-between items-start mb-[40px]">
              <span className="font-space text-[9px] text-[var(--color-muted-2)]">F-03</span>
              <PremiumIcon name="seat" noContainer className="w-[24px] h-[24px] opacity-40 group-hover:opacity-100 transition-opacity" />
            </div>
            <b className="font-bebas text-[24px] tracking-wide text-white block mt-auto">Seating</b>
            <span className="font-space text-[9px] uppercase tracking-widest text-[var(--color-muted)] mt-2">Spectator Area</span>
          </div>

          <div className="flex flex-col p-[30px_24px] bg-[var(--color-carbon)] group hover:bg-[#080808] transition-colors duration-500">
            <div className="flex justify-between items-start mb-[40px]">
              <span className="font-space text-[9px] text-[var(--color-muted-2)]">F-04</span>
              <PremiumIcon name="restroom" noContainer className="w-[24px] h-[24px] opacity-40 group-hover:opacity-100 transition-opacity" />
            </div>
            <b className="font-bebas text-[24px] tracking-wide text-white block mt-auto">Washrooms</b>
            <span className="font-space text-[9px] uppercase tracking-widest text-[var(--color-muted)] mt-2">Maintained</span>
          </div>

          <div className="flex flex-col p-[30px_24px] bg-[var(--color-carbon)] group hover:bg-[#080808] transition-colors duration-500">
            <div className="flex justify-between items-start mb-[40px]">
              <span className="font-space text-[9px] text-[var(--color-muted-2)]">F-05</span>
              <PremiumIcon name="water" noContainer className="w-[24px] h-[24px] opacity-40 group-hover:opacity-100 transition-opacity" />
            </div>
            <b className="font-bebas text-[24px] tracking-wide text-white block mt-auto">Water</b>
            <span className="font-space text-[9px] uppercase tracking-widest text-[var(--color-muted)] mt-2">RO Purified</span>
          </div>

        </div>
      </div>
    </section>
  );
}
