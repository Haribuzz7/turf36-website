"use client";
import Reveal from "./Reveal";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-[140px] bg-[var(--color-bg-deep)] border-b border-[var(--color-glass-border)] overflow-hidden">

      <div className="max-w-[900px] mx-auto px-7 relative z-10">
        <div className="font-space tracking-[.25em] uppercase text-[10px] text-[var(--color-text-muted)] flex items-center justify-center gap-[12px] mb-[24px] before:content-[''] before:w-[20px] before:h-[1px] before:bg-[var(--color-glass-border)] after:content-[''] after:w-[20px] after:h-[1px] after:bg-[var(--color-glass-border)]">
          Track record
        </div>
        <Reveal>
          <h2 className="font-bebas font-normal tracking-wide text-[clamp(40px,6vw,70px)] leading-[0.9] uppercase text-[var(--color-text-main)] text-center mb-[80px] drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Wins & Milestones
          </h2>
        </Reveal>
        
        <div className="flex flex-col gap-[20px]">
          <Reveal>
            <div className="glass-panel grid grid-cols-1 md:grid-cols-[140px_1fr] gap-[16px] md:gap-[40px] py-[40px] relative group hover:bg-[rgba(20,255,114,0.02)] transition-all px-6 md:px-10 rounded-3xl">
              <div className="font-space text-[var(--color-neon-primary)] text-[11px] tracking-[.15em] pt-[6px] opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_5px_rgba(20,255,114,0.3)]">12.04.2026</div>
              <div>
                <h3 className="font-bebas text-[28px] tracking-widest mb-[12px] uppercase text-[var(--color-text-main)] group-hover:text-[var(--color-neon-primary)] group-hover:drop-shadow-[0_0_10px_rgba(20,255,114,0.5)] transition-all">Panchatantram — First Serve</h3>
                <p className="text-[var(--color-text-muted)] font-light text-[15px] leading-[1.7] max-w-[560px]">
                  Pickleball tournament wrapped with Cream & Craze taking the title, Fluento&apos;s English Academy as runners-up, and Aura Farmers finishing third.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="glass-panel grid grid-cols-1 md:grid-cols-[140px_1fr] gap-[16px] md:gap-[40px] py-[40px] relative group hover:bg-[rgba(20,255,114,0.02)] transition-all px-6 md:px-10 rounded-3xl">
              <div className="font-space text-[var(--color-neon-primary)] text-[11px] tracking-[.15em] pt-[6px] opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_5px_rgba(20,255,114,0.3)]">2026</div>
              <div>
                <h3 className="font-bebas text-[28px] tracking-widest mb-[12px] uppercase text-[var(--color-text-main)] group-hover:text-[var(--color-neon-primary)] group-hover:drop-shadow-[0_0_10px_rgba(20,255,114,0.5)] transition-all">TSL SP Season 2</h3>
                <p className="text-[var(--color-text-muted)] font-light text-[15px] leading-[1.7] max-w-[560px]">
                  Live cricket auction and league — 8 teams, 88 players drafted, streamed to the ground&apos;s projector and YouTube in real time.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="glass-panel grid grid-cols-1 md:grid-cols-[140px_1fr] gap-[16px] md:gap-[40px] py-[40px] relative group hover:bg-[rgba(20,255,114,0.02)] transition-all px-6 md:px-10 rounded-3xl">
              <div className="font-space text-[var(--color-neon-primary)] text-[11px] tracking-[.15em] pt-[6px] opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_5px_rgba(20,255,114,0.3)]">29.03.2026</div>
              <div>
                <h3 className="font-bebas text-[28px] tracking-widest mb-[12px] uppercase text-[var(--color-text-main)] group-hover:text-[var(--color-neon-primary)] group-hover:drop-shadow-[0_0_10px_rgba(20,255,114,0.5)] transition-all">Panchatantram Auction</h3>
                <p className="text-[var(--color-text-muted)] font-light text-[15px] leading-[1.7] max-w-[560px]">
                  The turf&apos;s first player auction format for pickleball — team owners bidding live for their squads.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
