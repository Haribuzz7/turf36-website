"use client";

import Reveal from "./Reveal";

export default function LiveMatchSection() {
  return (
    <section id="live" className="relative py-[140px] border-b border-[var(--color-glass-border)] bg-[var(--color-carbon)]">
      <div className="max-w-[1120px] mx-auto px-7 relative z-10">
        <Reveal type="fade">
          <div className="flex items-center gap-[12px] mb-[40px]">
            <div className="w-[8px] h-[8px] rounded-full bg-red-600 animate-ping absolute shadow-[0_0_10px_red]"></div>
            <div className="w-[8px] h-[8px] rounded-full bg-red-600 relative"></div>
            <span className="font-space tracking-[.3em] uppercase text-[10px] text-white/70">Live Scoreboard</span>
          </div>
        </Reveal>

        <Reveal type="scale">
          <div className="w-full bg-[#050505] border border-[var(--color-steel)] rounded-[12px] p-[2px] shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
            <div className="w-full border border-[var(--color-glass-border)] rounded-[10px] p-[30px] md:p-[50px] relative overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent_70%)]">
              
              {/* Scoreboard Inner Grid */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-[40px] md:gap-[20px]">
                
                {/* Team 1 */}
                <div className="flex flex-col items-center flex-1">
                  <div className="font-bebas text-[32px] tracking-wider text-[var(--color-white)]">Aura Farmers</div>
                  <div className="font-space text-[12px] tracking-[.2em] text-[var(--color-muted-2)] uppercase mt-2">Batting</div>
                  <div className="font-bebas text-[80px] md:text-[120px] leading-[0.8] mt-6 tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    142<span className="text-[40px] md:text-[60px] text-[var(--color-muted)]">/4</span>
                  </div>
                </div>

                {/* Divider / Match Info */}
                <div className="flex flex-col items-center justify-center border-y md:border-y-0 md:border-x border-[var(--color-steel)] py-[30px] md:py-0 md:px-[60px] w-full md:w-auto">
                  <span className="font-space text-[10px] tracking-[.3em] uppercase text-[var(--color-muted-2)] mb-[16px]">Overs</span>
                  <span className="font-bebas text-[48px] leading-none text-white">16.4 <span className="text-[24px] text-[var(--color-muted)]">/ 20</span></span>
                  <div className="h-[1px] w-[40px] bg-[var(--color-glass-border)] my-[20px]"></div>
                  <span className="font-space text-[10px] tracking-[.3em] uppercase text-[var(--color-muted-2)] mb-[16px]">Target</span>
                  <span className="font-bebas text-[48px] leading-none text-[var(--color-muted)]">186</span>
                </div>

                {/* Team 2 */}
                <div className="flex flex-col items-center flex-1">
                  <div className="font-bebas text-[32px] tracking-wider text-[var(--color-muted)]">Cream & Craze</div>
                  <div className="font-space text-[12px] tracking-[.2em] text-[var(--color-muted-2)] uppercase mt-2">Fielding</div>
                  <div className="font-bebas text-[80px] md:text-[120px] leading-[0.8] mt-6 tracking-tight text-[var(--color-muted-2)]">
                    185<span className="text-[40px] md:text-[60px]">/8</span>
                  </div>
                </div>

              </div>

              {/* Status Bar */}
              <div className="mt-[50px] pt-[24px] border-t border-[var(--color-glass-border)] flex flex-col md:flex-row justify-between items-center gap-[20px]">
                <div className="font-space text-[11px] tracking-[.2em] text-white bg-[#1a1a1a] px-[16px] py-[8px] rounded-sm uppercase border border-[var(--color-steel)]">
                  Need 44 runs in 20 balls
                </div>
                <div className="font-space text-[10px] tracking-[.2em] text-[var(--color-muted-2)] uppercase flex gap-4">
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
