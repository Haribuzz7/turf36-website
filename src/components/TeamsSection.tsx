"use client";

import Reveal from "./Reveal";

export default function TeamsSection() {
  return (
    <section id="teams" className="relative py-[140px] bg-[var(--color-slate)] border-b border-[rgba(255,255,255,0.05)] overflow-hidden">
      {/* Dusk Lighting / Sunset glow */}
      <div className="absolute top-0 right-0 w-[50%] h-[100%] opacity-20 mix-blend-screen bg-[radial-gradient(circle,rgba(217,108,36,0.3)_0%,transparent_70%)] blur-[80px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[60%] h-[80%] opacity-10 bg-[radial-gradient(circle,rgba(230,227,220,0.1)_0%,transparent_70%)] blur-[60px] pointer-events-none z-0"></div>

      <div className="max-w-[1280px] mx-auto px-7 relative z-10">
        <div className="font-space tracking-[.25em] uppercase text-[10px] text-[var(--color-warm-white)] opacity-60 flex items-center gap-[12px] mb-[20px] before:content-[''] before:w-[30px] before:h-[1px] before:bg-[var(--color-warm-white)] before:opacity-30">
          This season
        </div>
        <Reveal>
          <h2 className="font-bebas font-normal tracking-wide text-[clamp(40px,6vw,70px)] leading-[0.9] uppercase text-[var(--color-warm-white)]">
            Featured Teams
          </h2>
        </Reveal>
        
        <div className="relative mt-[60px] overflow-hidden group">
          {/* Fading edges for the marquee effect */}
          <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[var(--color-slate)] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[var(--color-slate)] to-transparent z-10 pointer-events-none"></div>

          {/* Marquee Track */}
          <div className="flex w-max gap-[20px] animate-[marquee_25s_linear_infinite] group-hover:[animation-play-state:paused]">
            {/* Duplicate the items to ensure seamless scrolling */}
            {[...Array(2)].map((_, arrayIndex) => (
              <div key={arrayIndex} className="flex gap-[20px]">
                <div className="w-[300px] p-[32px_24px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[20px] backdrop-blur-xl transition-all hover:bg-[rgba(255,255,255,0.05)] hover:border-[var(--color-accent)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:-translate-y-2 cursor-pointer flex flex-col items-center text-center">
                  <div className="w-[64px] h-[64px] rounded-full bg-[var(--color-concrete)] mb-[20px] flex items-center justify-center font-bebas text-[var(--color-slate)] text-[28px] shadow-[0_4px_20px_rgba(0,0,0,0.4)]">F</div>
                  <h4 className="font-bebas text-[28px] tracking-wide mb-[4px] text-[var(--color-warm-white)]">Team Falcons</h4>
                  <p className="text-[13px] text-[var(--color-warm-white)] opacity-50 font-light font-inter">Captain to be added</p>
                </div>
                <div className="w-[300px] p-[32px_24px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[20px] backdrop-blur-xl transition-all hover:bg-[rgba(255,255,255,0.05)] hover:border-[var(--color-accent)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:-translate-y-2 cursor-pointer flex flex-col items-center text-center">
                  <div className="w-[64px] h-[64px] rounded-full bg-[var(--color-concrete)] mb-[20px] flex items-center justify-center font-bebas text-[var(--color-slate)] text-[28px] shadow-[0_4px_20px_rgba(0,0,0,0.4)]">T</div>
                  <h4 className="font-bebas text-[28px] tracking-wide mb-[4px] text-[var(--color-warm-white)]">Team Titans</h4>
                  <p className="text-[13px] text-[var(--color-warm-white)] opacity-50 font-light font-inter">Captain to be added</p>
                </div>
                <div className="w-[300px] p-[32px_24px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[20px] backdrop-blur-xl transition-all hover:bg-[rgba(255,255,255,0.05)] hover:border-[var(--color-accent)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:-translate-y-2 cursor-pointer flex flex-col items-center text-center">
                  <div className="w-[64px] h-[64px] rounded-full bg-[var(--color-concrete)] mb-[20px] flex items-center justify-center font-bebas text-[var(--color-slate)] text-[28px] shadow-[0_4px_20px_rgba(0,0,0,0.4)]">C</div>
                  <h4 className="font-bebas text-[28px] tracking-wide mb-[4px] text-[var(--color-warm-white)]">Cream & Craze</h4>
                  <p className="text-[13px] text-[var(--color-warm-white)] opacity-50 font-light font-inter">Pickleball champions</p>
                </div>
                <div className="w-[300px] p-[32px_24px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[20px] backdrop-blur-xl transition-all hover:bg-[rgba(255,255,255,0.05)] hover:border-[var(--color-accent)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:-translate-y-2 cursor-pointer flex flex-col items-center text-center">
                  <div className="w-[64px] h-[64px] rounded-full bg-[var(--color-concrete)] mb-[20px] flex items-center justify-center font-bebas text-[var(--color-slate)] text-[28px] shadow-[0_4px_20px_rgba(0,0,0,0.4)]">A</div>
                  <h4 className="font-bebas text-[28px] tracking-wide mb-[4px] text-[var(--color-warm-white)]">Aura Farmers</h4>
                  <p className="text-[13px] text-[var(--color-warm-white)] opacity-50 font-light font-inter">Pickleball · 3rd place</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(calc(-50% - 10px)); }
          }
        `}</style>
      </div>
    </section>
  );
}
