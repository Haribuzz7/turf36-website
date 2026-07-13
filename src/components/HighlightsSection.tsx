"use client";

import Reveal from "./Reveal";

type Highlight = {
  id?: string;
  title?: string;
  subtitle?: string;
  video_url?: string;
  thumbnail_url?: string;
};

export default function HighlightsSection({ highlights = [] }: { highlights?: Highlight[] }) {
  if (!highlights || highlights.length === 0) return null;

  return (
    <section id="highlights" className="relative py-[140px] bg-[var(--color-slate)] overflow-hidden">
      {/* Cinematic spotlight gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-concrete)] to-[var(--color-slate)] opacity-20 z-0" />
      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[70%] opacity-30 mix-blend-screen bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,transparent_70%)] blur-[60px] pointer-events-none z-0"></div>
      
      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>

      <div className="max-w-[1120px] mx-auto px-7 relative z-10">
        <div className="font-space tracking-[.25em] uppercase text-[10px] text-[var(--color-warm-white)] opacity-60 flex items-center gap-[12px] mb-[20px] before:content-[''] before:w-[30px] before:h-[1px] before:bg-[var(--color-warm-white)] before:opacity-30">
          Reels
        </div>
        <Reveal>
          <h2 className="font-bebas font-normal tracking-wide text-[clamp(40px,6vw,70px)] leading-[0.9] uppercase text-[var(--color-warm-white)]">
            Match Highlights
          </h2>
        </Reveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[24px] mt-[60px]">
          {highlights.map((hl, index) => (
            <Reveal key={hl.id} delay={index * 0.1}>
              <a href={hl.video_url} target="_blank" rel="noreferrer" className="block rounded-[16px] overflow-hidden bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] hover:border-[var(--color-accent)] transition-all duration-500 group cursor-pointer hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1">
                <div className="aspect-[4/3] relative flex items-center justify-center overflow-hidden bg-black">
                  {hl.thumbnail_url ? (
                    <img src={hl.thumbnail_url} alt={hl.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-[1.03] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#1a1c1d] to-[#2a2d2f]"></div>
                  )}
                  {/* Play button */}
                  <div className="w-[54px] h-[54px] rounded-full bg-[var(--color-warm-white)] flex items-center justify-center text-[var(--color-slate)] pl-1 relative z-10 group-hover:scale-110 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5.14V19.14L19 12.14L8 5.14Z" />
                    </svg>
                  </div>
                </div>
                <div className="p-[24px]">
                  <b className="text-[16px] font-inter font-light text-[var(--color-warm-white)] block mb-1">{hl.title}</b>
                  <span className="block text-[11px] text-[var(--color-warm-white)] opacity-50 font-space tracking-[.05em] uppercase">{hl.subtitle}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
