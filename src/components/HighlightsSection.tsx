/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";

import Reveal from "./Reveal";

export default function HighlightsSection({ highlights = [] }: { highlights?: { id?: string; [key: string]: any }[] }) {
  if (!highlights || highlights.length === 0) return null;

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
          {highlights.map((hl, index) => (
            <Reveal key={hl.id} delay={index * 0.1}>
              <a href={hl.video_url} target="_blank" rel="noreferrer" className="block rounded-[12px] overflow-hidden border border-[var(--color-card-stroke)] bg-[var(--color-card)] hover:border-[var(--color-gold)] transition-colors group cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-[#171310] to-[#2a2010] relative flex items-center justify-center overflow-hidden">
                  {hl.thumbnail_url && (
                    <img src={hl.thumbnail_url} alt={hl.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" />
                  )}
                  <div className="w-[46px] h-[46px] rounded-full bg-[rgba(201,162,39,0.9)] flex items-center justify-center text-[#0a0a0a] pl-1 relative z-10 group-hover:scale-110 transition-transform shadow-[0_4px_20px_rgba(0,0,0,0.5)]">▶</div>
                </div>
                <div className="p-[14px_16px]">
                  <b className="text-[14px] font-medium block">{hl.title}</b>
                  <span className="block text-[11px] text-[var(--color-muted)] mt-[4px] font-space">{hl.subtitle}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
