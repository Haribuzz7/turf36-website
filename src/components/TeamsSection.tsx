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
        
        <div className="relative mt-[60px] overflow-hidden group">
          {/* Fading edges for the marquee effect */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#090909] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#090909] to-transparent z-10 pointer-events-none"></div>

          {/* Marquee Track */}
          <div className="flex w-max gap-[16px] animate-[marquee_25s_linear_infinite] group-hover:[animation-play-state:paused]">
            {/* Duplicate the items to ensure seamless scrolling */}
            {[...Array(2)].map((_, arrayIndex) => (
              <div key={arrayIndex} className="flex gap-[16px]">
                <div className="w-[280px] p-[24px_20px] bg-[var(--color-card)] border border-[var(--color-card-stroke)] rounded-[16px] backdrop-blur-xl transition-all hover:bg-[#121212]/90 hover:border-[var(--color-gold)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)] hover:-translate-y-2 cursor-pointer">
                  <div className="w-[48px] h-[48px] rounded-[12px] bg-gradient-to-br from-[var(--color-gold)] to-[#7a5f18] mb-[16px] flex items-center justify-center font-bebas text-[#0a0a0a] text-[18px] shadow-lg">F</div>
                  <h4 className="font-bebas text-[22px] tracking-[.04em] mb-[4px] text-white">Team Falcons</h4>
                  <p className="text-[13px] text-[var(--color-muted)] font-light">Captain to be added</p>
                </div>
                <div className="w-[280px] p-[24px_20px] bg-[var(--color-card)] border border-[var(--color-card-stroke)] rounded-[16px] backdrop-blur-xl transition-all hover:bg-[#121212]/90 hover:border-[var(--color-gold)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)] hover:-translate-y-2 cursor-pointer">
                  <div className="w-[48px] h-[48px] rounded-[12px] bg-gradient-to-br from-[var(--color-gold)] to-[#7a5f18] mb-[16px] flex items-center justify-center font-bebas text-[#0a0a0a] text-[18px] shadow-lg">T</div>
                  <h4 className="font-bebas text-[22px] tracking-[.04em] mb-[4px] text-white">Team Titans</h4>
                  <p className="text-[13px] text-[var(--color-muted)] font-light">Captain to be added</p>
                </div>
                <div className="w-[280px] p-[24px_20px] bg-[var(--color-card)] border border-[var(--color-card-stroke)] rounded-[16px] backdrop-blur-xl transition-all hover:bg-[#121212]/90 hover:border-[var(--color-gold)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)] hover:-translate-y-2 cursor-pointer">
                  <div className="w-[48px] h-[48px] rounded-[12px] bg-gradient-to-br from-[var(--color-gold)] to-[#7a5f18] mb-[16px] flex items-center justify-center font-bebas text-[#0a0a0a] text-[18px] shadow-lg">C</div>
                  <h4 className="font-bebas text-[22px] tracking-[.04em] mb-[4px] text-white">Cream & Craze</h4>
                  <p className="text-[13px] text-[var(--color-muted)] font-light">Pickleball champions</p>
                </div>
                <div className="w-[280px] p-[24px_20px] bg-[var(--color-card)] border border-[var(--color-card-stroke)] rounded-[16px] backdrop-blur-xl transition-all hover:bg-[#121212]/90 hover:border-[var(--color-gold)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)] hover:-translate-y-2 cursor-pointer">
                  <div className="w-[48px] h-[48px] rounded-[12px] bg-gradient-to-br from-[var(--color-gold)] to-[#7a5f18] mb-[16px] flex items-center justify-center font-bebas text-[#0a0a0a] text-[18px] shadow-lg">A</div>
                  <h4 className="font-bebas text-[22px] tracking-[.04em] mb-[4px] text-white">Aura Farmers</h4>
                  <p className="text-[13px] text-[var(--color-muted)] font-light">Pickleball · 3rd place</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(calc(-50% - 8px)); }
          }
        `}</style>
      </div>
    </section>
  );
}
