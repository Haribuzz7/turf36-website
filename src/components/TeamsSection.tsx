"use client";

import Reveal from "./Reveal";

export default function TeamsSection() {
  return (
    <section id="teams" className="relative py-[110px] border-b border-[var(--color-line)]">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="font-space tracking-[.22em] uppercase text-[11.5px] text-[var(--color-gold)] flex items-center gap-[10px] mb-[16px] before:content-[''] before:w-[26px] before:h-[1px] before:bg-[var(--color-gold)]">
          This season
        </div>
        <Reveal>
          <h2 className="font-bebas font-normal tracking-[.01em] text-[clamp(34px,5.4vw,58px)] leading-[1.02] uppercase">
            Featured <span className="text-[var(--color-gold-hot)]">Teams</span>
          </h2>
        </Reveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[14px] mt-[44px]">
          <Reveal>
            <div className="p-[22px_18px] glass-panel">
              <div className="w-[44px] h-[44px] rounded-[10px] bg-gradient-to-br from-[var(--color-gold)] to-[#7a5f18] mb-[14px] flex items-center justify-center font-bebas text-[#0a0a0a] text-[16px]">F</div>
              <h4 className="font-bebas text-[19px] tracking-[.02em] mb-[4px]">Team Falcons</h4>
              <p className="text-[12.5px] text-[var(--color-muted)]">Captain to be added</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="p-[22px_18px] glass-panel">
              <div className="w-[44px] h-[44px] rounded-[10px] bg-gradient-to-br from-[var(--color-gold)] to-[#7a5f18] mb-[14px] flex items-center justify-center font-bebas text-[#0a0a0a] text-[16px]">T</div>
              <h4 className="font-bebas text-[19px] tracking-[.02em] mb-[4px]">Team Titans</h4>
              <p className="text-[12.5px] text-[var(--color-muted)]">Captain to be added</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="p-[22px_18px] glass-panel">
              <div className="w-[44px] h-[44px] rounded-[10px] bg-gradient-to-br from-[var(--color-gold)] to-[#7a5f18] mb-[14px] flex items-center justify-center font-bebas text-[#0a0a0a] text-[16px]">C</div>
              <h4 className="font-bebas text-[19px] tracking-[.02em] mb-[4px]">Cream & Craze</h4>
              <p className="text-[12.5px] text-[var(--color-muted)]">Pickleball champions</p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="p-[22px_18px] glass-panel">
              <div className="w-[44px] h-[44px] rounded-[10px] bg-gradient-to-br from-[var(--color-gold)] to-[#7a5f18] mb-[14px] flex items-center justify-center font-bebas text-[#0a0a0a] text-[16px]">A</div>
              <h4 className="font-bebas text-[19px] tracking-[.02em] mb-[4px]">Aura Farmers</h4>
              <p className="text-[12.5px] text-[var(--color-muted)]">Pickleball · 3rd place</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
