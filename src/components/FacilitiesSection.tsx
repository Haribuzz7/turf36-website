"use client";

import Reveal from "./Reveal";
import PremiumIcon from "./PremiumIcon";

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="relative py-[140px] border-b border-[var(--color-concrete)] bg-[var(--color-warm-white)]">
      
      <div className="max-w-[1400px] mx-auto px-7 relative z-10">
        <Reveal type="fade">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-[20px] mb-[80px]">
            <div>
              <span className="font-space tracking-[.3em] uppercase text-[10px] text-[var(--color-text-muted)] block mb-[16px] border-l-2 border-[var(--color-accent)] pl-[12px]">Infrastructure</span>
              <h2 className="font-bebas font-normal tracking-wide text-[clamp(40px,6vw,70px)] leading-[0.9] text-[var(--color-text-main)]">
                CLUB <span className="text-[var(--color-slate)] opacity-40">FACILITIES</span>
              </h2>
            </div>
            <div className="font-space text-[10px] tracking-[.3em] uppercase text-[var(--color-slate)] border border-[var(--color-concrete)] p-[12px_24px] rounded-full bg-[var(--color-soft-stone)] shadow-sm">
              Premium Spec / 2026
            </div>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-[16px] md:gap-[24px] mt-[60px]">
          
          <div className="flex flex-col p-[40px_30px] bg-white border border-[var(--color-concrete)] rounded-[12px] group hover:border-[var(--color-forest)] transition-all duration-500 natural-shadow hover:-translate-y-1">
            <div className="flex justify-between items-start mb-[50px]">
              <span className="font-space text-[9px] text-[var(--color-slate)] opacity-40">01</span>
              <PremiumIcon name="floodlight" noContainer className="w-[28px] h-[28px] text-[var(--color-slate)] opacity-40 group-hover:opacity-100 group-hover:text-[var(--color-forest)] transition-all duration-500" />
            </div>
            <b className="font-bebas text-[28px] tracking-wide text-[var(--color-text-main)] block mt-auto">Floodlights</b>
            <span className="font-space text-[9px] uppercase tracking-widest text-[var(--color-text-muted)] mt-3">D/N Capable</span>
          </div>
          
          <div className="flex flex-col p-[40px_30px] bg-white border border-[var(--color-concrete)] rounded-[12px] group hover:border-[var(--color-forest)] transition-all duration-500 natural-shadow hover:-translate-y-1">
            <div className="flex justify-between items-start mb-[50px]">
              <span className="font-space text-[9px] text-[var(--color-slate)] opacity-40">02</span>
              <PremiumIcon name="parking" noContainer className="w-[28px] h-[28px] text-[var(--color-slate)] opacity-40 group-hover:opacity-100 group-hover:text-[var(--color-forest)] transition-all duration-500" />
            </div>
            <b className="font-bebas text-[28px] tracking-wide text-[var(--color-text-main)] block mt-auto">Parking</b>
            <span className="font-space text-[9px] uppercase tracking-widest text-[var(--color-text-muted)] mt-3">Private Space</span>
          </div>

          <div className="flex flex-col p-[40px_30px] bg-white border border-[var(--color-concrete)] rounded-[12px] group hover:border-[var(--color-forest)] transition-all duration-500 natural-shadow hover:-translate-y-1">
            <div className="flex justify-between items-start mb-[50px]">
              <span className="font-space text-[9px] text-[var(--color-slate)] opacity-40">03</span>
              <PremiumIcon name="seat" noContainer className="w-[28px] h-[28px] text-[var(--color-slate)] opacity-40 group-hover:opacity-100 group-hover:text-[var(--color-forest)] transition-all duration-500" />
            </div>
            <b className="font-bebas text-[28px] tracking-wide text-[var(--color-text-main)] block mt-auto">Lounges</b>
            <span className="font-space text-[9px] uppercase tracking-widest text-[var(--color-text-muted)] mt-3">Spectator Area</span>
          </div>

          <div className="flex flex-col p-[40px_30px] bg-white border border-[var(--color-concrete)] rounded-[12px] group hover:border-[var(--color-forest)] transition-all duration-500 natural-shadow hover:-translate-y-1">
            <div className="flex justify-between items-start mb-[50px]">
              <span className="font-space text-[9px] text-[var(--color-slate)] opacity-40">04</span>
              <PremiumIcon name="restroom" noContainer className="w-[28px] h-[28px] text-[var(--color-slate)] opacity-40 group-hover:opacity-100 group-hover:text-[var(--color-forest)] transition-all duration-500" />
            </div>
            <b className="font-bebas text-[28px] tracking-wide text-[var(--color-text-main)] block mt-auto">Washrooms</b>
            <span className="font-space text-[9px] uppercase tracking-widest text-[var(--color-text-muted)] mt-3">Serviced</span>
          </div>

          <div className="flex flex-col p-[40px_30px] bg-white border border-[var(--color-concrete)] rounded-[12px] group hover:border-[var(--color-forest)] transition-all duration-500 natural-shadow hover:-translate-y-1">
            <div className="flex justify-between items-start mb-[50px]">
              <span className="font-space text-[9px] text-[var(--color-slate)] opacity-40">05</span>
              <PremiumIcon name="water" noContainer className="w-[28px] h-[28px] text-[var(--color-slate)] opacity-40 group-hover:opacity-100 group-hover:text-[var(--color-forest)] transition-all duration-500" />
            </div>
            <b className="font-bebas text-[28px] tracking-wide text-[var(--color-text-main)] block mt-auto">Water</b>
            <span className="font-space text-[9px] uppercase tracking-widest text-[var(--color-text-muted)] mt-3">Filtered RO</span>
          </div>

        </div>
      </div>
    </section>
  );
}
