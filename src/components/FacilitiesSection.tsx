"use client";

import SectionHighlight from "./SectionHighlight";

import Reveal from "./Reveal";
import { useState, useRef, useEffect } from "react";
import PremiumIcon from "./PremiumIcon";
import TiltCard from "./TiltCard";

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
    <section id="facilities" className="relative z-10  border-b border-[rgba(255,255,255,0.05)] ">
      <SectionHighlight glowColor="emerald" glowPosition="left" className="py-[110px]">
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
            <TiltCard>
              <div className="flex flex-col items-center justify-center text-center p-[26px_12px] glass-panel h-full hover:shadow-[0_10px_30px_rgba(0,230,118,0.15)] hover:border-[var(--color-gold)]/40 transition-all duration-300">
                <PremiumIcon name="floodlight" size="md" containerClassName="mb-[12px]" />
                <b className="text-[13px] font-medium block mt-[8px]">Floodlights</b>
              </div>
            </TiltCard>
          </Reveal>
          <Reveal delay={0.1}>
            <TiltCard>
              <div className="flex flex-col items-center justify-center text-center p-[26px_12px] glass-panel h-full hover:shadow-[0_10px_30px_rgba(0,230,118,0.15)] hover:border-[var(--color-gold)]/40 transition-all duration-300">
                <PremiumIcon name="parking" size="md" containerClassName="mb-[12px]" />
                <b className="text-[13px] font-medium block mt-[8px]">Parking</b>
              </div>
            </TiltCard>
          </Reveal>
          <Reveal delay={0.2}>
            <TiltCard>
              <div className="flex flex-col items-center justify-center text-center p-[26px_12px] glass-panel h-full hover:shadow-[0_10px_30px_rgba(0,230,118,0.15)] hover:border-[var(--color-gold)]/40 transition-all duration-300">
                <PremiumIcon name="seat" size="md" containerClassName="mb-[12px]" />
                <b className="text-[13px] font-medium block mt-[8px]">Seating</b>
              </div>
            </TiltCard>
          </Reveal>
          <Reveal delay={0.3}>
            <TiltCard>
              <div className="flex flex-col items-center justify-center text-center p-[26px_12px] glass-panel h-full hover:shadow-[0_10px_30px_rgba(0,230,118,0.15)] hover:border-[var(--color-gold)]/40 transition-all duration-300">
                <PremiumIcon name="restroom" size="md" containerClassName="mb-[12px]" />
                <b className="text-[13px] font-medium block mt-[8px]">Washrooms</b>
              </div>
            </TiltCard>
          </Reveal>
          <Reveal delay={0.4}>
            <TiltCard>
              <div className="flex flex-col items-center justify-center text-center p-[26px_12px] glass-panel h-full hover:shadow-[0_10px_30px_rgba(0,230,118,0.15)] hover:border-[var(--color-gold)]/40 transition-all duration-300">
                <PremiumIcon name="water" size="md" containerClassName="mb-[12px]" />
                <b className="text-[13px] font-medium block mt-[8px]">Drinking Water</b>
              </div>
            </TiltCard>
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
            <div className="absolute inset-0 z-0 bg-cover bg-center" style={{
              backgroundImage: `url('/day_turf.png')`
            }}></div>
            
            {/* Night Layer */}
            <div 
              className="absolute inset-0 z-10 bg-cover bg-center" 
              style={{
                clipPath: `inset(0 0 0 ${sliderPct}%)`,
                backgroundImage: `url('/night_turf.png')`
              }}
            >
              <div className="absolute inset-0 bg-black/10"></div>
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
          </SectionHighlight>
    </section>
  );
}
