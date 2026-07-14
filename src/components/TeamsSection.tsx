"use client";

import SectionHighlight from "./SectionHighlight";

import Reveal from "./Reveal";
import { useState } from "react";

type Team = {
  name: string;
  desc: string;
  initial: string;
};

const teamsData: Team[] = [
  { name: "Team GCC", desc: "Dark Horse trophy", initial: "G" },
  { name: "Team Extreme", desc: "AK Trophy", initial: "E" },
  { name: "NST game changers", desc: "TSL Special Edition: 2", initial: "N" },
  { name: "Team Extreme", desc: "TSL legends Edition", initial: "E" },
  { name: "Team Nova", desc: "TSL Premium Edition: 1", initial: "N" },
];

export default function TeamsSection() {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  return (
    <section id="teams" className="relative z-10  border-b border-[rgba(255,255,255,0.05)] ">
      <SectionHighlight glowColor="lime" glowPosition="right" className="py-[110px]">
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
                <div 
                  key={idx} 
                  onClick={() => setSelectedTeam(team)}
                  className="p-[22px_18px] glass-panel w-[280px] flex-shrink-0 cursor-pointer hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(140,255,90,0.2)] transition-all duration-300"
                >
                  <div className="w-[44px] h-[44px] rounded-[10px] bg-gradient-to-br from-[var(--color-gold)] to-[#04331C] mb-[14px] flex items-center justify-center font-bebas text-[#0a0a0a] text-[16px]">{team.initial}</div>
                  <h4 className="font-bebas text-[19px] tracking-[.02em] mb-[4px]">{team.name}</h4>
                  <p className="text-[12.5px] text-[var(--color-muted)]">{team.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Zoom Modal Overlay */}
      {selectedTeam && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#000000cc] backdrop-blur-sm p-5 animate-[fadeIn_0.3s_ease-out_forwards]"
          onClick={() => setSelectedTeam(null)}
        >
          <div 
            className="p-[40px] glass-panel w-full max-w-[450px] animate-[popIn_0.4s_cubic-bezier(0.16,1,0.3,1)_forwards] shadow-[0_20px_60px_rgba(0,230,118,0.3)] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 text-[var(--color-muted)] hover:text-white transition-colors"
              onClick={() => setSelectedTeam(null)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
            
            <div className="w-[80px] h-[80px] rounded-[18px] bg-gradient-to-br from-[var(--color-gold)] to-[#04331C] mb-[24px] flex items-center justify-center font-bebas text-[#0a0a0a] text-[32px] shadow-[0_10px_25px_rgba(0,230,118,0.4)]">
              {selectedTeam.initial}
            </div>
            <h4 className="font-bebas text-[36px] tracking-[.02em] mb-[8px] text-[var(--color-gold-hot)] drop-shadow-[0_0_10px_rgba(140,255,90,0.5)]">
              {selectedTeam.name}
            </h4>
            <p className="text-[16px] text-[var(--color-muted)] font-space tracking-[.05em] uppercase">
              {selectedTeam.desc}
            </p>
          </div>
        </div>
      )}

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
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.9) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
          </SectionHighlight>
    </section>
  );
}
