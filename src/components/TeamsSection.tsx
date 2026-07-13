"use client";
import Reveal from "./Reveal";

export default function TeamsSection() {
  return (
    <section id="teams" className="relative py-[140px] bg-[var(--color-bg-dark)] border-b border-[var(--color-glass-border)] overflow-hidden">
      {/* Neon Lighting glow */}
      <div className="absolute top-0 right-0 w-[50%] h-[100%] opacity-[0.03] mix-blend-screen bg-[radial-gradient(circle,rgba(20,255,114,0.3)_0%,transparent_70%)] blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[60%] h-[80%] opacity-[0.02] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] blur-[80px] pointer-events-none z-0"></div>

      <div className="max-w-[1280px] mx-auto px-7 relative z-10">
        <div className="font-space tracking-[.25em] uppercase text-[10px] text-[var(--color-neon-primary)] opacity-80 flex items-center gap-[12px] mb-[20px] before:content-[''] before:w-[30px] before:h-[1px] before:bg-[var(--color-neon-primary)] before:opacity-50">
          This season
        </div>
        <Reveal>
          <h2 className="font-bebas font-normal tracking-wide text-[clamp(40px,6vw,70px)] leading-[0.9] uppercase text-[var(--color-text-main)] drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Featured Teams
          </h2>
        </Reveal>
        
        <div className="relative mt-[60px] overflow-hidden group">
          {/* Fading edges for the marquee effect */}
          <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[var(--color-bg-dark)] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[var(--color-bg-dark)] to-transparent z-10 pointer-events-none"></div>

          {/* Marquee Track */}
          <div className="flex w-max gap-[20px] animate-[marquee_25s_linear_infinite] group-hover:[animation-play-state:paused]">
            {/* Duplicate the items to ensure seamless scrolling */}
            {[...Array(2)].map((_, arrayIndex) => (
              <div key={arrayIndex} className="flex gap-[24px]">
                <div className="w-[300px] p-[32px_24px] glass-panel rounded-3xl backdrop-blur-xl transition-all hover:border-[var(--color-neon-primary)] hover:shadow-[0_15px_40px_rgba(20,255,114,0.15)] hover:-translate-y-2 cursor-pointer flex flex-col items-center text-center">
                  <div className="w-[64px] h-[64px] rounded-full bg-[rgba(20,255,114,0.05)] border border-[rgba(20,255,114,0.2)] mb-[20px] flex items-center justify-center font-bebas text-[var(--color-neon-primary)] text-[28px] shadow-[0_4px_20px_rgba(0,0,0,0.4)]">F</div>
                  <h4 className="font-bebas text-[28px] tracking-wide mb-[4px] text-[var(--color-text-main)] drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">Team Falcons</h4>
                  <p className="text-[13px] text-[var(--color-text-muted)] font-light font-inter">Captain to be added</p>
                </div>
                <div className="w-[300px] p-[32px_24px] glass-panel rounded-3xl backdrop-blur-xl transition-all hover:border-[var(--color-neon-primary)] hover:shadow-[0_15px_40px_rgba(20,255,114,0.15)] hover:-translate-y-2 cursor-pointer flex flex-col items-center text-center">
                  <div className="w-[64px] h-[64px] rounded-full bg-[rgba(20,255,114,0.05)] border border-[rgba(20,255,114,0.2)] mb-[20px] flex items-center justify-center font-bebas text-[var(--color-neon-primary)] text-[28px] shadow-[0_4px_20px_rgba(0,0,0,0.4)]">T</div>
                  <h4 className="font-bebas text-[28px] tracking-wide mb-[4px] text-[var(--color-text-main)] drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">Team Titans</h4>
                  <p className="text-[13px] text-[var(--color-text-muted)] font-light font-inter">Captain to be added</p>
                </div>
                <div className="w-[300px] p-[32px_24px] glass-panel rounded-3xl backdrop-blur-xl transition-all hover:border-[var(--color-neon-primary)] hover:shadow-[0_15px_40px_rgba(20,255,114,0.15)] hover:-translate-y-2 cursor-pointer flex flex-col items-center text-center">
                  <div className="w-[64px] h-[64px] rounded-full bg-[rgba(20,255,114,0.05)] border border-[rgba(20,255,114,0.2)] mb-[20px] flex items-center justify-center font-bebas text-[var(--color-neon-primary)] text-[28px] shadow-[0_4px_20px_rgba(0,0,0,0.4)]">C</div>
                  <h4 className="font-bebas text-[28px] tracking-wide mb-[4px] text-[var(--color-text-main)] drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">Cream & Craze</h4>
                  <p className="text-[13px] text-[var(--color-text-muted)] font-light font-inter">Pickleball champions</p>
                </div>
                <div className="w-[300px] p-[32px_24px] glass-panel rounded-3xl backdrop-blur-xl transition-all hover:border-[var(--color-neon-primary)] hover:shadow-[0_15px_40px_rgba(20,255,114,0.15)] hover:-translate-y-2 cursor-pointer flex flex-col items-center text-center">
                  <div className="w-[64px] h-[64px] rounded-full bg-[rgba(20,255,114,0.05)] border border-[rgba(20,255,114,0.2)] mb-[20px] flex items-center justify-center font-bebas text-[var(--color-neon-primary)] text-[28px] shadow-[0_4px_20px_rgba(0,0,0,0.4)]">A</div>
                  <h4 className="font-bebas text-[28px] tracking-wide mb-[4px] text-[var(--color-text-main)] drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">Aura Farmers</h4>
                  <p className="text-[13px] text-[var(--color-text-muted)] font-light font-inter">Pickleball · 3rd place</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(calc(-50% - 12px)); }
          }
        `}</style>
      </div>
    </section>
  );
}
