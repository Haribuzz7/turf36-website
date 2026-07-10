"use client";

import Reveal from "./Reveal";

export default function HighlightsSection() {
  return (
    <section id="highlights" className="relative py-[110px] border-b border-[var(--color-line)]">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="font-space tracking-[.22em] uppercase text-[11.5px] text-[var(--color-gold)] flex items-center gap-[10px] mb-[16px] before:content-[''] before:w-[26px] before:h-[1px] before:bg-[var(--color-gold)]">
          Reels
        </div>
        <Reveal>
          <h2 className="font-bebas font-normal tracking-[.01em] text-[clamp(34px,5.4vw,58px)] leading-[1.02] uppercase">
            Match <span className="text-[var(--color-gold-hot)]">Highlights</span>
          </h2>
        </Reveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[16px] mt-[44px]">
          <Reveal>
            <div className="rounded-[12px] overflow-hidden border border-[var(--color-card-stroke)] bg-[var(--color-card)]">
              <div className="aspect-[16/10] bg-gradient-to-br from-[#171310] to-[#2a2010] relative flex items-center justify-center">
                <div className="w-[46px] h-[46px] rounded-full bg-[rgba(201,162,39,0.9)] flex items-center justify-center text-[#0a0a0a] pl-1">▶</div>
              </div>
              <div className="p-[14px_16px]">
                <b className="text-[14px] font-medium block">Last-over six to win it</b>
                <span className="block text-[11px] text-[var(--color-muted)] mt-[4px] font-space">TSL SP · 0:42</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[12px] overflow-hidden border border-[var(--color-card-stroke)] bg-[var(--color-card)]">
              <div className="aspect-[16/10] bg-gradient-to-br from-[#171310] to-[#2a2010] relative flex items-center justify-center">
                <div className="w-[46px] h-[46px] rounded-full bg-[rgba(201,162,39,0.9)] flex items-center justify-center text-[#0a0a0a] pl-1">▶</div>
              </div>
              <div className="p-[14px_16px]">
                <b className="text-[14px] font-medium block">Hat-trick under the lights</b>
                <span className="block text-[11px] text-[var(--color-muted)] mt-[4px] font-space">League Match · 0:35</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="rounded-[12px] overflow-hidden border border-[var(--color-card-stroke)] bg-[var(--color-card)]">
              <div className="aspect-[16/10] bg-gradient-to-br from-[#171310] to-[#2a2010] relative flex items-center justify-center">
                <div className="w-[46px] h-[46px] rounded-full bg-[rgba(201,162,39,0.9)] flex items-center justify-center text-[#0a0a0a] pl-1">▶</div>
              </div>
              <div className="p-[14px_16px]">
                <b className="text-[14px] font-medium block">Drone flyover — finals night</b>
                <span className="block text-[11px] text-[var(--color-muted)] mt-[4px] font-space">Turf 36 · 1:10</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
