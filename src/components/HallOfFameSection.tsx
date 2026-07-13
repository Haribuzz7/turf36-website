"use client";

import Reveal from "./Reveal";

type HallOfFameProps = {
  hallOfFame: Record<string, unknown>[];
};

export default function HallOfFameSection({ hallOfFame }: HallOfFameProps) {
  return (
    <section id="hof" className="relative py-[140px] bg-[var(--color-slate)] overflow-hidden">
      {/* Cinematic spotlight gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#101214] to-[var(--color-slate)] opacity-60 z-0" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[70%] opacity-20 mix-blend-screen bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,transparent_70%)] blur-[60px] pointer-events-none z-0"></div>
      
      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>

      <div className="max-w-[1120px] mx-auto px-7 relative z-10">
        <div className="font-space tracking-[.25em] uppercase text-[10px] text-[var(--color-warm-white)] opacity-60 flex items-center justify-center gap-[12px] mb-[24px] before:content-[''] before:w-[20px] before:h-[1px] before:bg-[var(--color-warm-white)] before:opacity-30 after:content-[''] after:w-[20px] after:h-[1px] after:bg-[var(--color-warm-white)] after:opacity-30">
          Champions & Winners
        </div>
        <Reveal>
          <h2 className="font-bebas font-normal tracking-wide text-[clamp(40px,6vw,70px)] leading-[0.9] uppercase text-[var(--color-warm-white)] text-center mb-[80px]">
            Hall Of Fame
          </h2>
        </Reveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[24px]">
          {hallOfFame.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.1}>
              <div className="text-center p-[40px_24px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[24px] backdrop-blur-md hover:bg-[rgba(255,255,255,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] group">
                <div className="font-space text-[9px] tracking-[.2em] text-[var(--color-accent)] opacity-90 uppercase mb-[24px] font-bold">{item.role}</div>
                
                {item.image_url ? (
                  <div className="w-[80px] h-[80px] rounded-full mx-auto mb-[24px] border-[2px] border-[rgba(255,255,255,0.1)] overflow-hidden bg-black group-hover:border-[var(--color-accent)] transition-colors duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:scale-110">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.image_url} alt={item.name} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                ) : (
                  <div className="w-[80px] h-[80px] rounded-full mx-auto mb-[24px] border-[2px] border-[rgba(255,255,255,0.1)] bg-[radial-gradient(circle_at_35%_30%,#2a2d2f,#1a1c1d)] flex items-center justify-center font-bebas text-[30px] text-[var(--color-warm-white)] opacity-50 group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)] group-hover:opacity-100 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:scale-110">
                    {item.name.charAt(0)}
                  </div>
                )}
                
                <div className="font-bebas text-[24px] tracking-wide text-[var(--color-warm-white)] group-hover:text-[var(--color-accent)] transition-colors">{item.name}</div>
                <div className="text-[13px] text-[var(--color-warm-white)] opacity-50 font-light mt-[8px] leading-[1.6] max-w-[200px] mx-auto">{item.metadata}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
