"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
 

import SectionHighlight from "./SectionHighlight";

import Reveal from "./Reveal";
import FlipCard from "./FlipCard";
import PremiumIcon from "./PremiumIcon";

type HallOfFameProps = {
  hallOfFame: { id?: string; [key: string]: any }[];
};

export default function HallOfFameSection({ hallOfFame }: HallOfFameProps) {
  return (
    <section id="hof" className="relative z-10 border-b border-[rgba(255,255,255,0.05)] pb-[30px]">
      <SectionHighlight glowColor="emerald" glowPosition="left" className="py-[110px]">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="font-space tracking-[.22em] uppercase text-[11.5px] text-[var(--color-gold)] flex items-center gap-[10px] mb-[16px] before:content-[''] before:w-[26px] before:h-[1px] before:bg-[var(--color-gold)]">
          Champions & Winners
        </div>
        <Reveal>
          <h2 className="font-bebas font-normal tracking-[.01em] text-[clamp(34px,5.4vw,58px)] leading-[1.02] uppercase">
            Hall Of <span className="text-[var(--color-gold-hot)]">Fame</span>
          </h2>
        </Reveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[20px] mt-[44px]">
          {hallOfFame.map((item, index) => {
            // Try to extract the year from metadata (e.g. "Champions • 2026")
            const yearStr = item.metadata ? item.metadata.split('•').pop()?.trim() : "";
            
            const frontSide = (
              <div className="text-center p-[28px_16px] glass-panel h-full flex flex-col justify-center items-center transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,230,118,0.15)] hover:border-[var(--color-gold)]/40 group relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,201,74,0.05)_0%,transparent_70%)]"></div>
                <PremiumIcon name="trophy" size="lg" containerClassName="mb-[20px] opacity-70 group-hover:scale-110 transition-transform duration-500" />
                <div className="font-bebas text-[24px] md:text-[28px] tracking-[.04em] text-white uppercase mb-[8px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight">{item.role}</div>
                {yearStr && <div className="font-space text-[12px] tracking-[.2em] text-[var(--color-gold-hot)]">{yearStr}</div>}
              </div>
            );

            const backSide = (
              <div className="text-center p-[28px_16px] glass-panel h-full flex flex-col justify-between transition-all duration-300 border-[var(--color-gold)]/40 shadow-[0_10px_30px_rgba(240,201,74,0.15)] group relative overflow-hidden bg-[rgba(240,201,74,0.02)]">
                <div>
                  <div className="font-space text-[10.5px] tracking-[.14em] text-[var(--color-gold)] uppercase mb-[14px] flex items-center justify-center min-h-[32px]">{item.role}</div>
                  
                  {item.image_url ? (
                    <div className="w-[64px] h-[64px] rounded-full mx-auto mb-[14px] border border-[var(--color-gold)]/50 overflow-hidden bg-[radial-gradient(circle_at_35%_30%,#3a2f14,#0e0c09)] shadow-[0_0_20px_rgba(240,201,74,0.3)]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.image_url} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="w-[64px] h-[64px] rounded-full mx-auto mb-[14px] border border-[var(--color-gold)]/50 bg-[radial-gradient(circle_at_35%_30%,#3a2f14,#0e0c09)] flex items-center justify-center font-bebas text-[22px] text-[var(--color-gold-hot)] shadow-[0_0_20px_rgba(240,201,74,0.3)]">
                      {item.name.charAt(0)}
                    </div>
                  )}
                </div>
                
                <div className="mt-auto pt-[8px]">
                  <div className="font-bebas text-[22px] tracking-[.02em] text-[var(--color-gold-hot)] drop-shadow-md">{item.name}</div>
                  <div className="text-[12px] text-[var(--color-white)] mt-[4px]">{item.metadata}</div>
                </div>
              </div>
            );

            return (
              <Reveal key={item.id} delay={index * 0.1} className="h-full">
                <FlipCard 
                  className="h-full min-h-[260px]" 
                  frontContent={frontSide} 
                  backContent={backSide} 
                />
              </Reveal>
            );
          })}
        </div>
      </div>
          </SectionHighlight>
    </section>
  );
}
