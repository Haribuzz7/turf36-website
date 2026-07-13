"use client";

import Reveal from "./Reveal";

export default function MemorySection() {
  return (
    <section id="memory" className="relative py-[110px]">
      <div className="max-w-[1120px] mx-auto px-7">
        <Reveal>
          <div className="p-[44px] mt-[44px] border border-[var(--color-card-stroke)] rounded-[18px] bg-[var(--color-card)] relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_500px_300px_at_90%_0%,rgba(201,162,39,0.12),transparent_60%)] before:z-0">
            <div className="relative z-10">
              <div className="font-space text-[11px] text-[var(--color-gold)] tracking-[.15em] uppercase">This Day At The Turf</div>
              <h3 className="font-bebas text-[clamp(28px,4vw,40px)] my-[14px] uppercase tracking-[.02em]">
                On this date, Cream & Craze were crowned champions.
              </h3>
              <p className="text-[var(--color-muted)] max-w-[600px] leading-[1.7] text-[14.5px]">
                A memory that resurfaces every year on its anniversary — old scorecards, highlights, and the moment a team lifted the trophy under these same lights. The page never goes quiet, even on the days nothing&apos;s booked.
              </p>
            </div>
            
            <div className="hidden sm:block absolute right-[44px] top-[44px] font-space text-[44px] text-[var(--color-gold-hot)] opacity-50 z-10">
              12·04
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
