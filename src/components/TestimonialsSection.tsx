"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */

import SectionHighlight from "./SectionHighlight";

import Reveal from "./Reveal";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative z-10  border-b border-[rgba(255,255,255,0.05)] ">
      <SectionHighlight glowColor="emerald" glowPosition="left" className="py-[110px]">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="font-space tracking-[.22em] uppercase text-[11.5px] text-[var(--color-gold)] flex items-center gap-[10px] mb-[16px] before:content-[''] before:w-[26px] before:h-[1px] before:bg-[var(--color-gold)]">
          From the players
        </div>
        <Reveal>
          <h2 className="font-bebas font-normal tracking-[.01em] text-[clamp(34px,5.4vw,58px)] leading-[1.02] uppercase">
            What Teams <span className="text-[var(--color-gold-hot)]">Say</span>
      <SectionHighlight glowColor="emerald" glowPosition="left" className="py-[110px]">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="font-space tracking-[.22em] uppercase text-[11.5px] text-[var(--color-gold)] flex items-center gap-[10px] mb-[16px] before:content-[''] before:w-[26px] before:h-[1px] before:bg-[var(--color-gold)]">
          From the players
        </div>
        <Reveal>
          <h2 className="font-bebas font-normal tracking-[.01em] text-[clamp(34px,5.4vw,58px)] leading-[1.02] uppercase">
            What Teams <span className="text-[var(--color-gold-hot)]">Say</span>
          </h2>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] mt-[44px]">
          <Reveal>
            <div className="p-[26px] glass-panel">
              <p className="text-[14px] leading-[1.7] text-[var(--color-white)] italic mb-[16px]">
                "The pitch quality is excellent, and booking takes less than a minute. We play here every weekend."
              </p>
              <div className="flex items-center gap-[10px]">
                <div className="w-[36px] h-[36px] rounded-full bg-[radial-gradient(circle_at_35%_30%,#3a2f14,#0e0c09)] border border-[var(--color-card-stroke)]"></div>
                <div>
                  <b className="text-[13px] font-medium block">Aarav</b>
                  <span className="text-[11px] text-[var(--color-muted)]">Football Player</span>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="p-[26px] glass-panel">
              <p className="text-[14px] leading-[1.7] text-[var(--color-white)] italic mb-[16px]">
                "Excellent courts and a well-organized tournament. The surface was consistent all day, making every match enjoyable."
              </p>
              <div className="flex items-center gap-[10px]">
                <div className="w-[36px] h-[36px] rounded-full bg-[radial-gradient(circle_at_35%_30%,#3a2f14,#0e0c09)] border border-[var(--color-card-stroke)]"></div>
                <div>
                  <b className="text-[13px] font-medium block">Sneha</b>
                  <span className="text-[11px] text-[var(--color-muted)]">Pickleball Tournament Player</span>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="p-[26px] glass-panel">
              <p className="text-[14px] leading-[1.7] text-[var(--color-white)] italic mb-[16px]">
                "The turf played beautifully throughout the tournament. Great lighting, smooth scheduling, and every match started on time."
              </p>
              <div className="flex items-center gap-[10px]">
                <div className="w-[36px] h-[36px] rounded-full bg-[radial-gradient(circle_at_35%_30%,#3a2f14,#0e0c09)] border border-[var(--color-card-stroke)]"></div>
                <div>
                  <b className="text-[13px] font-medium block">Kathir</b>
                  <span className="text-[11px] text-[var(--color-muted)]">Turf Cricket Tournament Player</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
          </SectionHighlight>
    </section>
  );
}
