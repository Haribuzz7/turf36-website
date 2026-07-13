"use client";
import Reveal from "./Reveal";
import { useState, useRef, useEffect } from "react";
import NeonIcon from "./NeonIcon";
import { Zap, Car, Users, Droplets, Utensils } from "lucide-react";

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
    <section id="facilities" className="relative py-[140px] bg-[var(--color-bg-dark)] border-b border-[var(--color-glass-border)] overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-bg-deep)] z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[60%] opacity-[0.02] mix-blend-screen bg-[radial-gradient(ellipse,var(--color-neon-primary)_0%,transparent_70%)] blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-[1120px] mx-auto px-7 relative z-10">
        <div className="font-space tracking-[.25em] uppercase text-[10px] text-[var(--color-neon-primary)] opacity-80 flex items-center justify-center gap-[12px] mb-[20px] before:content-[''] before:w-[30px] before:h-[1px] before:bg-[var(--color-neon-primary)] before:opacity-30 after:content-[''] after:w-[30px] after:h-[1px] after:bg-[var(--color-neon-primary)] after:opacity-30">
          On the ground
        </div>
        <Reveal>
          <h2 className="font-bebas font-normal tracking-wide text-[clamp(40px,6vw,70px)] leading-[0.9] uppercase text-[var(--color-text-main)] text-center drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Turf Facilities
          </h2>
        </Reveal>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-[16px] mt-[60px]">
          <Reveal>
            <div className="flex flex-col items-center justify-center text-center p-[32px_12px] glass-panel rounded-[24px] backdrop-blur-md transition-all duration-500 hover:border-[var(--color-neon-primary)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(20,255,114,0.15)] group h-full">
              <div className="mb-[16px] transition-transform duration-500 group-hover:scale-110">
                <NeonIcon Icon={Zap} size={28} />
              </div>
              <b className="text-[14px] font-inter font-light text-[var(--color-text-main)] block mt-[8px]">Floodlights</b>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center justify-center text-center p-[32px_12px] glass-panel rounded-[24px] backdrop-blur-md transition-all duration-500 hover:border-[var(--color-neon-primary)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(20,255,114,0.15)] group h-full">
              <div className="mb-[16px] transition-transform duration-500 group-hover:scale-110">
                <NeonIcon Icon={Car} size={28} />
              </div>
              <b className="text-[14px] font-inter font-light text-[var(--color-text-main)] block mt-[8px]">Parking</b>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-col items-center justify-center text-center p-[32px_12px] glass-panel rounded-[24px] backdrop-blur-md transition-all duration-500 hover:border-[var(--color-neon-primary)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(20,255,114,0.15)] group h-full">
              <div className="mb-[16px] transition-transform duration-500 group-hover:scale-110">
                <NeonIcon Icon={Users} size={28} />
              </div>
              <b className="text-[14px] font-inter font-light text-[var(--color-text-main)] block mt-[8px]">Seating</b>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col items-center justify-center text-center p-[32px_12px] glass-panel rounded-[24px] backdrop-blur-md transition-all duration-500 hover:border-[var(--color-neon-primary)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(20,255,114,0.15)] group h-full">
              <div className="mb-[16px] transition-transform duration-500 group-hover:scale-110">
                <NeonIcon Icon={Utensils} size={28} />
              </div>
              <b className="text-[14px] font-inter font-light text-[var(--color-text-main)] block mt-[8px]">Washrooms</b>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="flex flex-col items-center justify-center text-center p-[32px_12px] glass-panel rounded-[24px] backdrop-blur-md transition-all duration-500 hover:border-[var(--color-neon-primary)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(20,255,114,0.15)] group h-full">
              <div className="mb-[16px] transition-transform duration-500 group-hover:scale-110">
                <NeonIcon Icon={Droplets} size={28} />
              </div>
              <b className="text-[14px] font-inter font-light text-[var(--color-text-main)] block mt-[8px]">Drinking Water</b>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div 
            ref={wrapRef}
            onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
            onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
            className="relative mt-[80px] rounded-[32px] overflow-hidden border border-[var(--color-glass-border)] aspect-[16/8] cursor-ew-resize select-none shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
          >
            {/* Day Layer */}
            <div className="absolute inset-0 z-0 opacity-90 filter contrast-125" style={{
              background: `radial-gradient(circle at 80% 15%, rgba(20,255,114,0.1), transparent 40%), linear-gradient(180deg,#bfe0f2 0%, #e8f3da 45%, #6f9e57 46%, #3f6b3a 100%)`
            }}></div>
            
            {/* Night Layer (Neon) */}
            <div 
              className="absolute inset-0 z-10" 
              style={{
                clipPath: `inset(0 0 0 ${sliderPct}%)`,
                background: `linear-gradient(180deg,#050a08 0%, #08130f 45%, #051a0e 46%, #030805 100%)`
              }}
            >
              <div className="absolute top-[8%] left-[15%] w-[70%] h-[40%] bg-[radial-gradient(ellipse_at_center,rgba(20,255,114,0.08),transparent_70%)]"></div>
              {/* Neon floodlights */}
              <div className="absolute top-[6%] left-[10%] w-[8%] h-[14%] bg-[radial-gradient(circle,rgba(20,255,114,0.8),transparent_70%)]" style={{boxShadow: '82% 0 0 0 rgba(20,255,114,.7), 82% 0 40px 10px rgba(20,255,114,.25)'}}></div>
            </div>

            <div className="absolute bottom-[24px] left-[24px] font-space text-[10px] tracking-[.2em] uppercase p-[10px_20px] rounded-full bg-[rgba(255,255,255,0.1)] z-20 text-[var(--color-text-main)] backdrop-blur-xl border border-[rgba(255,255,255,0.2)]">DAY</div>
            <div className="absolute bottom-[24px] right-[24px] font-space text-[10px] tracking-[.2em] uppercase p-[10px_20px] rounded-full bg-[rgba(0,0,0,0.4)] z-20 text-[var(--color-neon-primary)] backdrop-blur-xl border border-[var(--color-neon-primary)] shadow-[0_0_15px_rgba(20,255,114,0.2)]">NIGHT</div>

            {/* Handle */}
            <div 
              className="absolute top-0 bottom-0 w-[2px] bg-[var(--color-neon-primary)] z-30 -translate-x-[1px]" 
              style={{ left: `${sliderPct}%`, boxShadow: '0 0 20px rgba(20,255,114,0.8)' }}
            >
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[54px] h-[54px] rounded-full bg-[rgba(20,255,114,0.1)] backdrop-blur-md border border-[var(--color-neon-primary)] flex items-center justify-center text-[18px] text-[var(--color-neon-primary)] shadow-[0_0_20px_rgba(20,255,114,0.5)] cursor-ew-resize">
                ⇔
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
