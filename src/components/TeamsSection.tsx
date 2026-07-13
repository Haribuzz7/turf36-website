"use client";

import Reveal from "./Reveal";
import PremiumIcon from "./PremiumIcon";

const TEAMS = [
  { name: "Team Falcons", subtitle: "2025 Champions", icon: "trophy" },
  { name: "Cream & Craze", subtitle: "Pickleball Masters", icon: "cricket" },
  { name: "Aura Farmers", subtitle: "Season Runners-up", icon: "lightning" }
];

export default function TeamsSection() {
  return (
    <section id="teams" className="relative py-[140px] border-b border-[var(--color-glass-border)] bg-[#030303] overflow-hidden">
      
      {/* Background Museum Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[800px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-[1120px] mx-auto px-7 relative z-10 flex flex-col items-center">
        <Reveal type="blur">
          <div className="text-center mb-[80px]">
            <span className="font-space tracking-[.3em] uppercase text-[10px] text-[var(--color-muted-2)] block mb-[16px]">Hall of Fame</span>
            <h2 className="font-bebas font-normal tracking-[.01em] text-[clamp(40px,6vw,70px)] leading-[0.9] text-white">
              LEGACY <span className="text-[var(--color-muted)] opacity-50">&</span> HONOR
            </h2>
          </div>
        </Reveal>

        <div className="flex flex-col md:flex-row justify-center gap-[40px] w-full max-w-[900px]">
          {TEAMS.map((team, idx) => (
            <Reveal key={idx} type="fade" delay={idx * 0.2} className="flex-1">
              <div className="relative group cursor-none flex flex-col items-center p-[40px_20px]">
                
                {/* Spotlight cone */}
                <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[100px] h-[300px] bg-gradient-to-b from-[rgba(255,255,255,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl pointer-events-none"></div>
                
                {/* Physical Base */}
                <div className="w-[120px] h-[120px] rounded-full border border-[var(--color-steel)] bg-gradient-to-b from-[var(--color-carbon)] to-[#000] mb-[30px] flex items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.8)] relative group-hover:border-[var(--color-muted)] transition-colors duration-700">
                  <div className="absolute inset-[2px] rounded-full border border-[var(--color-glass-border)]"></div>
                  <PremiumIcon name={team.icon as any} size="lg" noContainer className="opacity-70 group-hover:opacity-100 transition-opacity duration-700 w-[40px] h-[40px]" />
                </div>
                
                <h4 className="font-bebas text-[28px] tracking-wide text-white group-hover:text-[var(--color-white)] transition-colors duration-700 text-center">{team.name}</h4>
                <div className="w-[30px] h-[1px] bg-[var(--color-steel)] my-[16px] group-hover:w-[50px] transition-all duration-700"></div>
                <p className="font-space text-[10px] tracking-[.2em] uppercase text-[var(--color-muted-2)] text-center">{team.subtitle}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
