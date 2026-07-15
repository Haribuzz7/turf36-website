"use client";

import SectionHighlight from "./SectionHighlight";

import Reveal from "./Reveal";
import PremiumIcon from "./PremiumIcon";
import TiltCard from "./TiltCard";

export default function FacilitiesSection() {
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
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[14px] mt-[44px]">
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
          <Reveal delay={0.5}>
            <TiltCard>
              <div className="flex flex-col items-center justify-center text-center p-[26px_12px] glass-panel h-full hover:shadow-[0_10px_30px_rgba(0,230,118,0.15)] hover:border-[var(--color-gold)]/40 transition-all duration-300">
                <PremiumIcon name="cctv" size="md" containerClassName="mb-[12px]" />
                <b className="text-[13px] font-medium block mt-[8px]">CCTV Surveillance</b>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>
          </SectionHighlight>
    </section>
  );
}
