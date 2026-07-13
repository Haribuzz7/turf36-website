"use client";

import Reveal from "./Reveal";
import { useState, useRef, useEffect } from "react";
import PremiumIcon from "./PremiumIcon";

export default function FacilitiesSection() {
  const [sliderPct, setSliderPct] = useState(50);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!wrapRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    let pct = ((clientX - rect.left) / rect.width) * 100;
    pct = Math.max(4, Math.min(96, pct));
    setSliderPct(pct);
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => isDragging && handleMove(e.clientX);
    const onMouseUp = () => setIsDragging(false);
    const onTouchMove = (e: TouchEvent) => isDragging && handleMove(e.touches[0].clientX);

    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
      window.addEventListener("touchmove", onTouchMove, { passive: false });
      window.addEventListener("touchend", onMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onMouseUp);
    };
  }, [isDragging]);

  return (
    <section id="facilities" className="relative py-[140px] bg-[var(--color-slate)] border-b border-[rgba(255,255,255,0.05)] overflow-hidden">
      {/* Deep Dusk Lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0b0d] z-0 pointer-events-none" />

      <div className="max-w-[1120px] mx-auto px-7 relative z-10">
        <div className="font-space tracking-[.25em] uppercase text-[10px] text-[var(--color-warm-white)] opacity-60 flex items-center justify-center gap-[12px] mb-[20px] before:content-[''] before:w-[30px] before:h-[1px] before:bg-[var(--color-warm-white)] before:opacity-30 after:content-[''] after:w-[30px] after:h-[1px] after:bg-[var(--color-warm-white)] after:opacity-30">
          On the ground
        </div>
        <Reveal>
          <h2 className="font-bebas font-normal tracking-wide text-[clamp(40px,6vw,70px)] leading-[0.9] uppercase text-[var(--color-warm-white)] text-center">
            Turf Facilities
          </h2>
        </Reveal>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-[16px] mt-[60px]">
          <Reveal>
            <div className="flex flex-col items-center justify-center text-center p-[32px_12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[20px] backdrop-blur-md transition-all duration-500 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:bg-[rgba(255,255,255,0.04)] group">
              <PremiumIcon name="floodlight" size="lg" containerClassName="mb-[16px] text-[var(--color-warm-white)] opacity-70 group-hover:text-[var(--color-accent)] group-hover:opacity-100 transition-colors" />
              <b className="text-[14px] font-inter font-light text-[var(--color-warm-white)] block mt-[8px]">Floodlights</b>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center justify-center text-center p-[32px_12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[20px] backdrop-blur-md transition-all duration-500 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:bg-[rgba(255,255,255,0.04)] group">
              <PremiumIcon name="parking" size="lg" containerClassName="mb-[16px] text-[var(--color-warm-white)] opacity-70 group-hover:text-[var(--color-accent)] group-hover:opacity-100 transition-colors" />
              <b className="text-[14px] font-inter font-light text-[var(--color-warm-white)] block mt-[8px]">Parking</b>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-col items-center justify-center text-center p-[32px_12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[20px] backdrop-blur-md transition-all duration-500 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:bg-[rgba(255,255,255,0.04)] group">
              <PremiumIcon name="seat" size="lg" containerClassName="mb-[16px] text-[var(--color-warm-white)] opacity-70 group-hover:text-[var(--color-accent)] group-hover:opacity-100 transition-colors" />
              <b className="text-[14px] font-inter font-light text-[var(--color-warm-white)] block mt-[8px]">Seating</b>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col items-center justify-center text-center p-[32px_12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[20px] backdrop-blur-md transition-all duration-500 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:bg-[rgba(255,255,255,0.04)] group">
              <PremiumIcon name="restroom" size="lg" containerClassName="mb-[16px] text-[var(--color-warm-white)] opacity-70 group-hover:text-[var(--color-accent)] group-hover:opacity-100 transition-colors" />
              <b className="text-[14px] font-inter font-light text-[var(--color-warm-white)] block mt-[8px]">Washrooms</b>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="flex flex-col items-center justify-center text-center p-[32px_12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[20px] backdrop-blur-md transition-all duration-500 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:bg-[rgba(255,255,255,0.04)] group">
              <PremiumIcon name="water" size="lg" containerClassName="mb-[16px] text-[var(--color-warm-white)] opacity-70 group-hover:text-[var(--color-accent)] group-hover:opacity-100 transition-colors" />
              <b className="text-[14px] font-inter font-light text-[var(--color-warm-white)] block mt-[8px]">Drinking Water</b>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div 
            ref={wrapRef}
            onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
            onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
            className="relative mt-[60px] rounded-[24px] overflow-hidden border border-[rgba(255,255,255,0.1)] aspect-[16/8] cursor-ew-resize select-none shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
          >
            {/* Day Layer */}
            <div className="absolute inset-0 z-0" style={{
              background: `radial-gradient(circle at 80% 15%, rgba(255,236,180,.5), transparent 40%), linear-gradient(180deg,#bfe0f2 0%, #e8f3da 45%, #6f9e57 46%, #3f6b3a 100%)`
            }}></div>
            
            {/* Night Layer */}
            <div 
              className="absolute inset-0 z-10" 
              style={{
                clipPath: `inset(0 0 0 ${sliderPct}%)`,
                background: `linear-gradient(180deg,#050608 0%, #0b0d12 45%, #0c1f14 46%, #061007 100%)`
              }}
            >
              <div className="absolute top-[8%] left-[15%] w-[70%] h-[40%] bg-[radial-gradient(ellipse_at_center,rgba(255,246,216,0.18),transparent_70%)]"></div>
              <div className="absolute top-[6%] left-[10%] w-[8%] h-[14%] bg-[radial-gradient(circle,rgba(217,108,36,0.8),transparent_70%)]" style={{boxShadow: '82% 0 0 0 rgba(217,108,36,.7), 82% 0 40px 10px rgba(217,108,36,.25)'}}></div>
            </div>

            <div className="absolute bottom-[20px] left-[20px] font-space text-[10px] tracking-[.2em] uppercase p-[8px_16px] rounded-full bg-[rgba(0,0,0,0.5)] z-20 text-[var(--color-warm-white)] backdrop-blur-md border border-[rgba(255,255,255,0.1)]">DAY</div>
            <div className="absolute bottom-[20px] right-[20px] font-space text-[10px] tracking-[.2em] uppercase p-[8px_16px] rounded-full bg-[rgba(0,0,0,0.5)] z-20 text-[var(--color-warm-white)] backdrop-blur-md border border-[rgba(255,255,255,0.1)]">NIGHT</div>

            {/* Handle */}
            <div 
              className="absolute top-0 bottom-0 w-[2px] bg-[var(--color-warm-white)] z-30 -translate-x-[1px]" 
              style={{ left: `${sliderPct}%`, boxShadow: '0 0 15px rgba(255,255,255,.5)' }}
            >
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[48px] h-[48px] rounded-full bg-[var(--color-warm-white)] flex items-center justify-center text-[16px] text-[#0a0a0a] font-bold shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                ⇔
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
