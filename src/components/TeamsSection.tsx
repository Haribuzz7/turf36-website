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
    <section id="teams" className="relative py-[160px] border-b border-[var(--color-concrete)] bg-[var(--color-soft-stone)] overflow-hidden">
      
      {/* Background Soft Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1000px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.6),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-[1120px] mx-auto px-7 relative z-10 flex flex-col items-center">
        <Reveal type="blur">
          <div className="text-center mb-[100px]">
            <span className="font-space tracking-[.3em] uppercase text-[10px] text-[var(--color-text-muted)] block mb-[20px]">Club Legacy</span>
            <h2 className="font-bebas font-normal tracking-wide text-[clamp(40px,6vw,70px)] leading-[0.9] text-[var(--color-text-main)]">
              HONOR <span className="text-[var(--color-slate)] opacity-40">&</span> TRADITION
            </h2>
          </div>
        </Reveal>

        <div className="flex flex-col md:flex-row justify-center gap-[40px] md:gap-[80px] w-full max-w-[1000px]">
          {TEAMS.map((team, idx) => (
            <Reveal key={idx} type="fade" delay={idx * 0.2} className="flex-1">
              <div className="relative group cursor-none flex flex-col items-center p-[40px_20px]">
                
                {/* Minimal Base */}
                <div className="w-[140px] h-[140px] rounded-full border border-[var(--color-concrete)] bg-[var(--color-warm-white)] mb-[40px] flex items-center justify-center natural-shadow relative group-hover:border-[var(--color-forest)] transition-colors duration-700">
                  <div className="absolute inset-[6px] rounded-full border border-[var(--color-soft-stone)]"></div>
                  <PremiumIcon name={team.icon as any} size="lg" noContainer className="text-[var(--color-slate)] opacity-50 group-hover:opacity-100 group-hover:text-[var(--color-forest)] transition-all duration-700 w-[40px] h-[40px]" />
                </div>
                
                <h4 className="font-bebas text-[32px] tracking-wide text-[var(--color-text-main)] group-hover:text-[var(--color-forest)] transition-colors duration-700 text-center">{team.name}</h4>
                <div className="w-[40px] h-[1px] bg-[var(--color-concrete)] my-[20px] group-hover:w-[60px] group-hover:bg-[var(--color-forest)] transition-all duration-700"></div>
                <p className="font-space text-[10px] tracking-[.2em] uppercase text-[var(--color-text-muted)] text-center">{team.subtitle}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
