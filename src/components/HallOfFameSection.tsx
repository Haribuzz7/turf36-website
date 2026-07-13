/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";

import Reveal from "./Reveal";

type HallOfFameProps = {
  hallOfFame: { id?: string; [key: string]: any }[];
};

export default function HallOfFameSection({ hallOfFame }: HallOfFameProps) {
  return (
    <section id="hof" className="relative py-[110px] border-b border-[var(--color-line)]">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="font-space tracking-[.22em] uppercase text-[11.5px] text-[var(--color-gold)] flex items-center gap-[10px] mb-[16px] before:content-[''] before:w-[26px] before:h-[1px] before:bg-[var(--color-gold)]">
          Champions & Winners
        </div>
        <Reveal>
          <h2 className="font-bebas font-normal tracking-[.01em] text-[clamp(34px,5.4vw,58px)] leading-[1.02] uppercase">
            Hall Of <span className="text-[var(--color-gold-hot)]">Fame</span>
          </h2>
        </Reveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[14px] mt-[44px]">
          {hallOfFame.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.1}>
              <div className="text-center p-[28px_16px] bg-[var(--color-card)] border border-[var(--color-card-stroke)] rounded-[14px] backdrop-blur-md">
                <div className="font-space text-[10.5px] tracking-[.14em] text-[var(--color-gold)] uppercase mb-[14px]">{item.role}</div>
                
                {item.image_url ? (
                  <div className="w-[64px] h-[64px] rounded-full mx-auto mb-[14px] border border-[var(--color-card-stroke)] overflow-hidden bg-[radial-gradient(circle_at_35%_30%,#3a2f14,#0e0c09)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.image_url} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-[64px] h-[64px] rounded-full mx-auto mb-[14px] border border-[var(--color-card-stroke)] bg-[radial-gradient(circle_at_35%_30%,#3a2f14,#0e0c09)] flex items-center justify-center font-bebas text-[22px] text-[var(--color-gold-hot)] opacity-50">
                    {item.name.charAt(0)}
                  </div>
                )}
                
                <div className="font-bebas text-[20px] tracking-[.02em]">{item.name}</div>
                <div className="text-[12px] text-[var(--color-muted)] mt-[4px]">{item.metadata}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
