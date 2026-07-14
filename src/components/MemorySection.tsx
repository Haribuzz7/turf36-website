
import SectionHighlight from "./SectionHighlight";

import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

export default function MemorySection() {
  const codes = [
    {
      title: "Respect the Pitch",
      desc: "Our turf is holy ground. Wear the right gear, keep it clean, and treat the arena with ultimate respect.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      )
    },
    {
      title: "Play Hard",
      desc: "Leave everything on the pitch. We celebrate passion, grit, and high-intensity games from the first whistle to the last.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
      )
    },
    {
      title: "Leave a Legacy",
      desc: "Every match is a chance to make history. Play to be remembered, forge rivalries, and build your team's dynasty.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
      )
    }
  ];

  return (
    <section id="guidelines" className="relative z-10  border-b border-[rgba(255,255,255,0.05)] ">
      <SectionHighlight glowColor="lime" glowPosition="right" className="py-[110px]">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="font-space tracking-[.22em] uppercase text-[11.5px] text-[var(--color-gold)] flex items-center justify-center gap-[10px] mb-[16px] before:content-[''] before:w-[26px] before:h-[1px] before:bg-[var(--color-gold)] after:content-[''] after:w-[26px] after:h-[1px] after:bg-[var(--color-gold)]">
          Turf Guidelines
        </div>
        <Reveal>
          <h2 className="font-bebas font-normal tracking-[.01em] text-[clamp(34px,5.4vw,58px)] leading-[1.02] uppercase text-center mb-[50px]">
            The <span className="text-[var(--color-gold-hot)]">36</span> Code
          </h2>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {codes.map((code, index) => (
            <Reveal key={index} delay={index * 0.15} className="h-full [perspective:1000px]">
              <TiltCard className="h-full">
                <div className="p-[34px_28px] glass-panel h-full flex flex-col items-center text-center group hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(140,255,90,0.15)] transition-all duration-300 relative overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_0%,rgba(0,230,118,0.1),transparent_70%)] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500">
                  <div className="w-[64px] h-[64px] rounded-full bg-gradient-to-br from-[rgba(0,230,118,0.1)] to-[rgba(4,51,28,0.3)] border border-[var(--color-gold-hot)] flex items-center justify-center text-[var(--color-gold-hot)] mb-[24px] shadow-[0_0_15px_rgba(0,230,118,0.3)] group-hover:shadow-[0_0_25px_rgba(140,255,90,0.6)] group-hover:scale-110 transition-all duration-500">
                    {code.icon}
                  </div>
                  <h4 className="font-bebas text-[24px] tracking-[.04em] mb-[12px] group-hover:text-[var(--color-white)] text-[var(--color-white)]">
                    {code.title}
                  </h4>
                  <p className="text-[14px] text-[var(--color-muted)] leading-[1.6]">
                    {code.desc}
                  </p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
          </SectionHighlight>
    </section>
  );
}
