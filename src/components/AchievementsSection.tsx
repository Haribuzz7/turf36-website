"use client";

import Reveal from "./Reveal";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-[140px] bg-[var(--color-concrete)] border-b border-[var(--color-slate)] border-opacity-20 overflow-hidden">
      {/* Stone texture overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>

      <div className="max-w-[900px] mx-auto px-7 relative z-10">
        <div className="font-space tracking-[.25em] uppercase text-[10px] text-[var(--color-slate)] flex items-center justify-center gap-[12px] mb-[24px] before:content-[''] before:w-[20px] before:h-[1px] before:bg-[var(--color-slate)] after:content-[''] after:w-[20px] after:h-[1px] after:bg-[var(--color-slate)]">
          Track record
        </div>
        <Reveal>
          <h2 className="font-bebas font-normal tracking-wide text-[clamp(40px,6vw,70px)] leading-[0.9] uppercase text-[var(--color-text-main)] text-center mb-[80px]">
            Wins & Milestones
          </h2>
        </Reveal>
        
        <div className="flex flex-col gap-0 border-t border-[var(--color-slate)] border-opacity-20">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-[16px] md:gap-[40px] py-[40px] border-b border-[var(--color-slate)] border-opacity-20 relative group hover:bg-[var(--color-soft-stone)] transition-colors px-4 -mx-4 rounded-lg">
              <div className="font-space text-[var(--color-text-muted)] text-[11px] tracking-[.1em] pt-[6px]">12.04.2026</div>
              <div>
                <h3 className="font-bebas text-[28px] tracking-wide mb-[12px] uppercase text-[var(--color-text-main)] group-hover:text-[var(--color-forest)] transition-colors">Panchatantram — First Serve</h3>
                <p className="text-[var(--color-text-main)] opacity-70 font-light text-[15px] leading-[1.7] max-w-[560px]">
                  Pickleball tournament wrapped with Cream & Craze taking the title, Fluento&apos;s English Academy as runners-up, and Aura Farmers finishing third.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-[16px] md:gap-[40px] py-[40px] border-b border-[var(--color-slate)] border-opacity-20 relative group hover:bg-[var(--color-soft-stone)] transition-colors px-4 -mx-4 rounded-lg">
              <div className="font-space text-[var(--color-text-muted)] text-[11px] tracking-[.1em] pt-[6px]">2026</div>
              <div>
                <h3 className="font-bebas text-[28px] tracking-wide mb-[12px] uppercase text-[var(--color-text-main)] group-hover:text-[var(--color-forest)] transition-colors">TSL SP Season 2</h3>
                <p className="text-[var(--color-text-main)] opacity-70 font-light text-[15px] leading-[1.7] max-w-[560px]">
                  Live cricket auction and league — 8 teams, 88 players drafted, streamed to the ground&apos;s projector and YouTube in real time.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-[16px] md:gap-[40px] py-[40px] border-b border-[var(--color-slate)] border-opacity-20 relative group hover:bg-[var(--color-soft-stone)] transition-colors px-4 -mx-4 rounded-lg">
              <div className="font-space text-[var(--color-text-muted)] text-[11px] tracking-[.1em] pt-[6px]">29.03.2026</div>
              <div>
                <h3 className="font-bebas text-[28px] tracking-wide mb-[12px] uppercase text-[var(--color-text-main)] group-hover:text-[var(--color-forest)] transition-colors">Panchatantram Auction</h3>
                <p className="text-[var(--color-text-main)] opacity-70 font-light text-[15px] leading-[1.7] max-w-[560px]">
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
