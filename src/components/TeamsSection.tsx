"use client";

import Reveal from "./Reveal";

const teamsData = [
  { name: "Team GCC", desc: "Dark Horse trophy", initial: "G" },
  { name: "Team Extreme", desc: "AK Trophy", initial: "E" },
  { name: "NST game changers", desc: "TSL Special Edition: 2", initial: "N" },
  { name: "Team Extreme", desc: "TSL legends Edition", initial: "E" },
  { name: "Team Nova", desc: "TSL Premium Edition: 1", initial: "N" },
];

export default function TeamsSection() {
  return (
    <section id="teams" className="relative py-[110px] border-b border-[var(--color-line)]">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="font-space tracking-[.22em] uppercase text-[11.5px] text-[var(--color-gold)] flex items-center gap-[10px] mb-[16px] before:content-[''] before:w-[26px] before:h-[1px] before:bg-[var(--color-gold)]">
          This season
        </div>
        <Reveal>
          <h2 className="font-bebas font-normal tracking-[.01em] text-[clamp(34px,5.4vw,58px)] leading-[1.02] uppercase">
            Featured <span className="text-[var(--color-gold-hot)]">Teams</span>
          </h2>
        </Reveal>
        
        <Reveal delay={0.2}>
          <div className="overflow-hidden w-full relative mt-[44px] group">
            {/* 
              We use a CSS animation to scroll the content. 
              The container must be twice as wide or have duplicate content to loop seamlessly.
            */}
            <div className="flex w-max gap-[14px] marquee-scroll group-hover:pause">
              {[...teamsData, ...teamsData, ...teamsData].map((team, idx) => (
                <div key={idx} className="p-[22px_18px] glass-panel w-[280px] flex-shrink-0">
                  <div className="w-[44px] h-[44px] rounded-[10px] bg-gradient-to-br from-[var(--color-gold)] to-[#04331C] mb-[14px] flex items-center justify-center font-bebas text-[#0a0a0a] text-[16px]">{team.initial}</div>
                  <h4 className="font-bebas text-[19px] tracking-[.02em] mb-[4px]">{team.name}</h4>
                  <p className="text-[12.5px] text-[var(--color-muted)]">{team.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <style jsx>{`
        .marquee-scroll {
          animation: marquee 30s linear infinite;
        }
        .pause {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
      `}</style>
    </section>
  );
}
