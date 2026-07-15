"use client";

import SectionHighlight from "./SectionHighlight";
import Reveal from "./Reveal";
import { useState, useRef, useEffect } from "react";

export default function DayNightSliderSection() {
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
    <section id="day-night" className="relative z-10 border-b border-[rgba(255,255,255,0.05)] pb-[110px]">
      <SectionHighlight glowColor="lime" glowPosition="right" className="pt-[50px]">
        <div className="max-w-[1120px] mx-auto px-7">
          <Reveal>
            <div 
              ref={wrapRef}
              onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
              onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
              className="relative rounded-[16px] overflow-hidden border border-[var(--color-card-stroke)] aspect-[16/8] cursor-ew-resize select-none"
            >
              {/* Day Layer */}
              <div className="absolute inset-0 z-0 bg-cover bg-center" style={{
                backgroundImage: `url('/Day.png')`
              }}></div>
              
              {/* Night Layer */}
              <div 
                className="absolute inset-0 z-10 bg-cover bg-center" 
                style={{
                  clipPath: `inset(0 0 0 ${sliderPct}%)`,
                  backgroundImage: `url('/Night.png')`
                }}
              >
                <div className="absolute inset-0 bg-black/10"></div>
              </div>

              <div className="absolute bottom-[16px] left-[16px] font-space text-[11px] tracking-[.1em] uppercase p-[6px_12px] rounded-[20px] bg-[rgba(0,0,0,0.4)] z-20 text-[var(--color-white)] backdrop-blur-md">DAY</div>
              <div className="absolute bottom-[16px] right-[16px] font-space text-[11px] tracking-[.1em] uppercase p-[6px_12px] rounded-[20px] bg-[rgba(0,0,0,0.4)] z-20 text-[var(--color-white)] backdrop-blur-md">NIGHT</div>

              {/* Handle */}
              <div 
                className="absolute top-0 bottom-0 w-[2px] bg-[var(--color-gold-hot)] z-30 -translate-x-[1px]" 
                style={{ left: `${sliderPct}%`, boxShadow: '0 0 12px rgba(240,201,74,.7)' }}
              >
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[42px] h-[42px] rounded-full bg-[var(--color-gold-hot)] flex items-center justify-center text-[14px] text-[#0a0a0a] font-bold shadow-[0_0_15px_rgba(240,201,74,0.5)]">
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
