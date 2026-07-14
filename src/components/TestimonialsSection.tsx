/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";

import Reveal from "./Reveal";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative z-10 py-[110px] border-b border-[rgba(255,255,255,0.05)] ">
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
                "Booking used to mean five WhatsApp messages back and forth. Now I just pick a slot and I'm done."
              </p>
              <div className="flex items-center gap-[10px]">
                <div className="w-[36px] h-[36px] rounded-full bg-[radial-gradient(circle_at_35%_30%,#3a2f14,#0e0c09)] border border-[var(--color-card-stroke)]"></div>
                <div>
                  <b className="text-[13px] font-medium block">Karthik R.</b>
                  <span className="text-[11px] text-[var(--color-muted)]">Team Captain</span>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="p-[26px] glass-panel">
              <p className="text-[14px] leading-[1.7] text-[var(--color-white)] italic mb-[16px]">
                "Best floodlit turf in Gobi for a night match. Surface holds up even after heavy use."
              </p>
              <div className="flex items-center gap-[10px]">
                <div className="w-[36px] h-[36px] rounded-full bg-[radial-gradient(circle_at_35%_30%,#3a2f14,#0e0c09)] border border-[var(--color-card-stroke)]"></div>
                <div>
                  <b className="text-[13px] font-medium block">Deepa S.</b>
                  <span className="text-[11px] text-[var(--color-muted)]">Pickleball Player</span>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="p-[26px] glass-panel">
              <p className="text-[14px] leading-[1.7] text-[var(--color-white)] italic mb-[16px]">
                "Ran our whole auction night here — projector, sound, everything just worked."
              </p>
              <div className="flex items-center gap-[10px]">
                <div className="w-[36px] h-[36px] rounded-full bg-[radial-gradient(circle_at_35%_30%,#3a2f14,#0e0c09)] border border-[var(--color-card-stroke)]"></div>
                <div>
                  <b className="text-[13px] font-medium block">Vignesh M.</b>
                  <span className="text-[11px] text-[var(--color-muted)]">Event Organiser</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
