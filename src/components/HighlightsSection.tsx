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
    <section id="highlights" className="relative py-[140px] bg-[var(--color-bg-dark)] border-b border-[var(--color-glass-border)] overflow-hidden">
      
      {/* Cinematic spotlight gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-dark)] to-[var(--color-bg-deep)] z-0" />
      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[70%] opacity-[0.03] mix-blend-screen bg-[radial-gradient(circle,var(--color-neon-primary)_0%,transparent_70%)] blur-[60px] pointer-events-none z-0"></div>

      <div className="max-w-[1120px] mx-auto px-7 relative z-10">
        <div className="font-space tracking-[.25em] uppercase text-[10px] text-[var(--color-neon-primary)] flex items-center gap-[12px] mb-[20px] before:content-[''] before:w-[30px] before:h-[1px] before:bg-[var(--color-neon-primary)] before:opacity-50">
          Reels
        </div>
        <Reveal>
          <h2 className="font-bebas font-normal tracking-wide text-[clamp(40px,6vw,70px)] leading-[0.9] uppercase text-[var(--color-text-main)] drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Match Highlights
          </h2>
        </Reveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[24px] mt-[60px]">
          {highlights.map((hl, index) => (
            <Reveal key={hl.id} delay={index * 0.1}>
              <a href={hl.video_url} target="_blank" rel="noreferrer" className="glass-panel block rounded-3xl overflow-hidden hover:border-[var(--color-neon-primary)] transition-all duration-500 group cursor-pointer hover:shadow-[0_12px_40px_rgba(20,255,114,0.15)] hover:-translate-y-2">
                <div className="aspect-[4/3] relative flex items-center justify-center overflow-hidden bg-black">
                  {hl.thumbnail_url ? (
                    <img src={hl.thumbnail_url} alt={hl.title || ""} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-[1.05] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] filter saturate-50 group-hover:saturate-100" />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#050a08] to-[#08130F]"></div>
                  )}
                  {/* Play button */}
                  <div className="w-[54px] h-[54px] rounded-full bg-[rgba(20,255,114,0.1)] border border-[rgba(20,255,114,0.3)] backdrop-blur-md flex items-center justify-center text-[var(--color-neon-primary)] pl-1 relative z-10 group-hover:scale-110 group-hover:bg-[var(--color-neon-primary)] group-hover:text-[var(--color-bg-deep)] group-hover:shadow-[0_0_20px_rgba(20,255,114,0.6)] transition-all duration-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5.14V19.14L19 12.14L8 5.14Z" />
                    </svg>
                  </div>
                </div>
                <div className="p-[24px] bg-[var(--color-glass-bg)] backdrop-blur-xl border-t border-[var(--color-glass-border)]">
                  <b className="text-[16px] font-inter font-light text-[var(--color-text-main)] block mb-1">{hl.title}</b>
                  <span className="block text-[11px] text-[var(--color-text-muted)] font-space tracking-[.05em] uppercase">{hl.subtitle}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
