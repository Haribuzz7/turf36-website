"use client";

import Reveal from "./Reveal";
import { useState, useRef, useEffect } from "react";

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
    <section id="facilities" className="relative py-[110px] border-b border-[var(--color-line)]">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="font-space tracking-[.22em] uppercase text-[11.5px] text-[var(--color-gold)] flex items-center gap-[10px] mb-[16px] before:content-[''] before:w-[26px] before:h-[1px] before:bg-[var(--color-gold)]">
          On the ground
        </div>
        <Reveal>
          <h2 className="font-bebas font-normal tracking-[.01em] text-[clamp(34px,5.4vw,58px)] leading-[1.02] uppercase">
            Turf <span className="text-[var(--color-gold-hot)]">Facilities</span>
          </h2>
        </Reveal>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-[14px] mt-[44px]">
          <Reveal>
            <div className="text-center p-[26px_12px] bg-[var(--color-card)] border border-[var(--color-card-stroke)] rounded-[14px] backdrop-blur-md">
              <div className="text-[26px] mb-[12px]">💡</div>
              <b className="text-[13px] font-medium block">Floodlights</b>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="text-center p-[26px_12px] bg-[var(--color-card)] border border-[var(--color-card-stroke)] rounded-[14px] backdrop-blur-md">
              <div className="text-[26px] mb-[12px]">🅿️</div>
              <b className="text-[13px] font-medium block">Parking</b>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="text-center p-[26px_12px] bg-[var(--color-card)] border border-[var(--color-card-stroke)] rounded-[14px] backdrop-blur-md">
              <div className="text-[26px] mb-[12px]">🪑</div>
              <b className="text-[13px] font-medium block">Seating</b>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="text-center p-[26px_12px] bg-[var(--color-card)] border border-[var(--color-card-stroke)] rounded-[14px] backdrop-blur-md">
              <div className="text-[26px] mb-[12px]">🚻</div>
              <b className="text-[13px] font-medium block">Washrooms</b>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="text-center p-[26px_12px] bg-[var(--color-card)] border border-[var(--color-card-stroke)] rounded-[14px] backdrop-blur-md">
              <div className="text-[26px] mb-[12px]">💧</div>
              <b className="text-[13px] font-medium block">Drinking Water</b>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div 
            ref={wrapRef}
            onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
            onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
            className="relative mt-[44px] rounded-[16px] overflow-hidden border border-[var(--color-card-stroke)] aspect-[16/8] cursor-ew-resize select-none"
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
              <div className="absolute top-[6%] left-[10%] w-[8%] h-[14%] bg-[radial-gradient(circle,var(--color-flood),transparent_70%)]" style={{boxShadow: '82% 0 0 0 rgba(255,246,216,.7), 82% 0 40px 10px rgba(255,246,216,.25)'}}></div>
            </div>

            <div className="absolute bottom-[16px] left-[16px] font-space text-[11px] tracking-[.1em] uppercase p-[6px_12px] rounded-[20px] bg-[rgba(0,0,0,0.4)] z-20 text-[var(--color-white)]">DAY</div>
            <div className="absolute bottom-[16px] right-[16px] font-space text-[11px] tracking-[.1em] uppercase p-[6px_12px] rounded-[20px] bg-[rgba(0,0,0,0.4)] z-20 text-[var(--color-white)]">NIGHT</div>

            {/* Handle */}
            <div 
              className="absolute top-0 bottom-0 w-[2px] bg-[var(--color-gold-hot)] z-30 -translate-x-[1px]" 
              style={{ left: `${sliderPct}%`, boxShadow: '0 0 12px rgba(240,201,74,.7)' }}
            >
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[42px] h-[42px] rounded-full bg-[var(--color-gold-hot)] flex items-center justify-center text-[14px] text-[#0a0a0a] font-bold">
                ⇔
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
