/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";

import Reveal from "./Reveal";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative z-10 py-[110px] border-b border-[rgba(255,255,255,0.05)] ">
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
              <div className="font-space text-[var(--color-gold-hot)] text-[13px] pt-[2px]">24.01.2026</div>
              <div>
                <h3 className="font-bebas text-[22px] tracking-[.02em] mb-[6px] uppercase">Turf Super League Premium Edition: 1</h3>
                <p className="text-[var(--color-muted)] text-[14px] leading-[1.6] max-w-[560px]">
                  A grand Turf Super League was successfully held in Gobichettipalayam. The tournament featured 12 teams, with 8 trophies awarded to the top-performing teams. The winners also received the TSL Mace and earned the honor of hosting the Champion Team's Flag.
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
                  The turf's first-ever pickleball player auction, where team owners bid live to build their squads.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-[110px_1fr] gap-[24px] py-[26px] border-t border-[var(--color-line)] relative">
              <div className="font-space text-[var(--color-gold-hot)] text-[13px] pt-[2px]">01.05.2026</div>
              <div>
                <h3 className="font-bebas text-[22px] tracking-[.02em] mb-[6px] uppercase">AK Trophy 2.0</h3>
                <p className="text-[var(--color-muted)] text-[14px] leading-[1.6] max-w-[560px]">
                  Team Extreme successfully defended their title, retaining the AK Trophy after winning Season 2 following their championship victory in Season 1.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-[110px_1fr] gap-[24px] py-[26px] border-t border-[var(--color-line)] relative">
              <div className="font-space text-[var(--color-gold-hot)] text-[13px] pt-[2px]">28.06.2026</div>
              <div>
                <h3 className="font-bebas text-[22px] tracking-[.02em] mb-[6px] uppercase">Turf Super League Special Edition: 2</h3>
                <p className="text-[var(--color-muted)] text-[14px] leading-[1.6] max-w-[560px]">
                  Following the grand success of Turf Super League Special Edition: 1, Edition 2 was successfully completed. It also introduced retained players for the first time in Gobi's turf league, adding a new milestone to the tournament.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
