"use client";
import Reveal from "./Reveal";

export default function MemorySection() {
  return (
    <section id="memory" className="relative py-[140px] bg-[var(--color-bg-dark)] border-b border-[var(--color-glass-border)]">
      <div className="max-w-[1120px] mx-auto px-7">
        <Reveal>
          <div className="p-[44px] md:p-[60px] glass-panel rounded-3xl relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_600px_400px_at_90%_0%,rgba(20,255,114,0.06),transparent_70%)] before:z-0 hover:shadow-[0_10px_40px_rgba(20,255,114,0.1)] transition-all duration-700">
            <div className="relative z-10">
              <div className="font-space text-[10px] text-[var(--color-neon-primary)] tracking-[.25em] uppercase mb-[20px] font-bold">This Day At The Turf</div>
              <h3 className="font-bebas text-[clamp(32px,5vw,50px)] my-[14px] uppercase tracking-wide text-[var(--color-text-main)] drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                On this date, Cream & Craze were crowned champions.
              </h3>
              <p className="text-[var(--color-text-muted)] max-w-[600px] leading-[1.8] text-[15px] font-light">
                A memory that resurfaces every year on its anniversary — old scorecards, highlights, and the moment a team lifted the trophy under these same lights. The pitch never goes quiet, even on the days nothing&apos;s booked.
              </p>
            </div>
            
            <div className="hidden sm:block absolute right-[60px] top-[44px] font-space text-[64px] text-[var(--color-neon-primary)] opacity-10 z-10 pointer-events-none select-none tracking-tighter">
              12·04
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
