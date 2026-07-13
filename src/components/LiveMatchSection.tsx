"use client";

import Reveal from "./Reveal";

export default function LiveMatchSection() {
  return (
    <section id="live" className="relative py-[140px] border-b border-[var(--color-concrete)] bg-[var(--color-warm-white)]">
      <div className="max-w-[1120px] mx-auto px-7 relative z-10">
        <Reveal type="fade">
          <div className="flex items-center gap-[12px] mb-[60px]">
            <div className="w-[8px] h-[8px] rounded-full bg-[var(--color-accent)] animate-pulse relative"></div>
            <span className="font-space tracking-[.3em] uppercase text-[10px] text-[var(--color-slate)]">Live Update</span>
          </div>
        </Reveal>

        <Reveal type="scale">
          <div className="w-full bg-[var(--color-soft-stone)] rounded-[12px] p-[1px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)]">
            <div className="w-full bg-[var(--color-warm-white)] rounded-[11px] p-[40px] md:p-[60px] relative overflow-hidden">
              
              {/* Scoreboard Inner Grid */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-[40px] md:gap-[20px]">
                
                {/* Team 1 */}
                <div className="flex flex-col items-center flex-1">
                  <div className="font-bebas text-[28px] tracking-widest text-[var(--color-slate)]">Aura Farmers</div>
                  <div className="font-space text-[10px] tracking-[.2em] text-[var(--color-text-muted)] uppercase mt-2">Batting</div>
                  <div className="font-bebas text-[80px] md:text-[100px] leading-[0.8] mt-6 tracking-tight text-[var(--color-text-main)]">
                    142<span className="text-[40px] md:text-[50px] text-[var(--color-slate)]">/4</span>
                  </div>
                </div>

                {/* Divider / Match Info */}
                <div className="flex flex-col items-center justify-center border-y md:border-y-0 md:border-x border-[var(--color-concrete)] py-[30px] md:py-0 md:px-[60px] w-full md:w-auto">
                  <span className="font-space text-[9px] tracking-[.3em] uppercase text-[var(--color-text-muted)] mb-[16px]">Overs</span>
                  <span className="font-bebas text-[42px] leading-none text-[var(--color-text-main)]">16.4 <span className="text-[20px] text-[var(--color-slate)]">/ 20</span></span>
                  <div className="h-[1px] w-[30px] bg-[var(--color-concrete)] my-[24px]"></div>
                  <span className="font-space text-[9px] tracking-[.3em] uppercase text-[var(--color-text-muted)] mb-[16px]">Target</span>
                  <span className="font-bebas text-[42px] leading-none text-[var(--color-slate)]">186</span>
                </div>

                {/* Team 2 */}
                <div className="flex flex-col items-center flex-1">
                  <div className="font-bebas text-[28px] tracking-widest text-[var(--color-slate)]">Cream & Craze</div>
                  <div className="font-space text-[10px] tracking-[.2em] text-[var(--color-text-muted)] uppercase mt-2">Fielding</div>
                  <div className="font-bebas text-[80px] md:text-[100px] leading-[0.8] mt-6 tracking-tight text-[var(--color-slate)] opacity-60">
                    185<span className="text-[40px] md:text-[50px]">/8</span>
                  </div>
                </div>

              </div>

              {/* Status Bar */}
              <div className="mt-[60px] pt-[24px] border-t border-[var(--color-concrete)] flex flex-col md:flex-row justify-between items-center gap-[20px]">
                <div className="font-space text-[10px] tracking-[.2em] text-[var(--color-text-main)] bg-[var(--color-soft-stone)] px-[20px] py-[10px] rounded-full uppercase border border-[var(--color-concrete)]">
                  Need 44 runs in 20 balls
                </div>
                <div className="font-space text-[9px] tracking-[.2em] text-[var(--color-text-muted)] uppercase flex gap-6">
                  <span>CRR: 8.52</span>
                  <span>RRR: 13.20</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
