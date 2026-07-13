/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";

import Reveal from "./Reveal";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-[110px] border-b border-[var(--color-line)]">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="font-space tracking-[.22em] uppercase text-[11.5px] text-[var(--color-gold)] flex items-center gap-[10px] mb-[16px] before:content-[''] before:w-[26px] before:h-[1px] before:bg-[var(--color-gold)]">
          Track record
        </div>
        <Reveal>
          <h2 className="font-bebas font-normal tracking-[.01em] text-[clamp(34px,5.4vw,58px)] leading-[1.02] uppercase">
            Wins & <span className="text-[var(--color-gold-hot)]">Milestones</span>
          </h2>
        </Reveal>
        
        <div className="mt-[48px] flex flex-col gap-0">
          <Reveal>
            <div className="grid grid-cols-[110px_1fr] gap-[24px] py-[26px] border-t border-[var(--color-line)] relative">
              <div className="font-space text-[var(--color-gold-hot)] text-[13px] pt-[2px]">12.04.2026</div>
              <div>
                <h3 className="font-bebas text-[22px] tracking-[.02em] mb-[6px] uppercase">Panchatantram — First Serve</h3>
                <p className="text-[var(--color-muted)] text-[14px] leading-[1.6] max-w-[560px]">
                  Pickleball tournament wrapped with Cream & Craze taking the title, Fluento's English Academy as runners-up, and Aura Farmers finishing third.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-[110px_1fr] gap-[24px] py-[26px] border-t border-[var(--color-line)] relative">
              <div className="font-space text-[var(--color-gold-hot)] text-[13px] pt-[2px]">2026</div>
              <div>
                <h3 className="font-bebas text-[22px] tracking-[.02em] mb-[6px] uppercase">TSL SP Season 2</h3>
                <p className="text-[var(--color-muted)] text-[14px] leading-[1.6] max-w-[560px]">
                  Live cricket auction and league — 8 teams, 88 players drafted, streamed to the ground's projector and YouTube in real time.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-[110px_1fr] gap-[24px] py-[26px] border-t border-[var(--color-line)] relative">
              <div className="font-space text-[var(--color-gold-hot)] text-[13px] pt-[2px]">29.03.2026</div>
              <div>
                <h3 className="font-bebas text-[22px] tracking-[.02em] mb-[6px] uppercase">Panchatantram Auction</h3>
                <p className="text-[var(--color-muted)] text-[14px] leading-[1.6] max-w-[560px]">
                  The turf's first player auction format for pickleball — team owners bidding live for their squads.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
