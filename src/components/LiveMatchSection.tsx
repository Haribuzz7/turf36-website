"use client";

import Reveal from "./Reveal";
import PremiumIcon from "./PremiumIcon";

type LiveMatchProps = {
  liveMatch: {
    is_active?: boolean;
    iframe_url?: string;
  };
};

export default function LiveMatchSection({ liveMatch }: LiveMatchProps) {
  const hasLiveMatch = liveMatch?.is_active && liveMatch?.iframe_url;

  return (
    <section id="live" className="relative py-[140px] border-b border-[var(--color-concrete)] bg-[var(--color-concrete)] overflow-hidden">
      {/* Warm Amber/Sunlight gradients overlaid on concrete */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-concrete)] to-[var(--color-soft-stone)] z-0" />
      <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] opacity-40 mix-blend-overlay bg-[radial-gradient(circle,rgba(217,108,36,0.8)_0%,transparent_70%)] blur-[80px] pointer-events-none z-0"></div>
      
      {/* Concrete Texture overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>

      <div className="max-w-[1120px] mx-auto px-7 relative z-10">
        <div className="font-space tracking-[.25em] uppercase text-[10px] text-[var(--color-accent)] flex items-center gap-[12px] mb-[20px] before:content-[''] before:w-[30px] before:h-[1px] before:bg-[var(--color-accent)]">
          Match center
        </div>
        <Reveal>
          <h2 className="font-bebas font-normal tracking-wide text-[clamp(40px,6vw,70px)] leading-[0.9] uppercase text-[var(--color-text-main)]">
            Live From The Ground
          </h2>
        </Reveal>
        <p className="text-[var(--color-text-main)] opacity-70 font-light text-[15px] leading-[1.8] max-w-[500px] mt-[24px]">
          Pulled straight from CricHeroes once a match is live — no extra scoring work on our end.
        </p>
        
        <div className="inline-flex items-center gap-[8px] font-space text-[10px] tracking-[.15em] uppercase mb-[20px] mt-[30px]">
          {hasLiveMatch ? (
             <div className="flex items-center gap-2 bg-[var(--color-warm-white)] px-4 py-2 rounded-full border border-[var(--color-accent)] shadow-[0_4px_15px_rgba(217,108,36,0.15)]">
               <span className="relative flex h-[8px] w-[8px]">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-[8px] w-[8px] bg-[var(--color-accent)]"></span>
               </span>
               <span className="text-[var(--color-accent)] font-bold">Live Now</span>
             </div>
          ) : (
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-concrete)] bg-[var(--color-warm-white)] text-[var(--color-text-muted)] shadow-[0_4px_15px_rgba(0,0,0,0.03)]">
              <span className="w-[8px] h-[8px] rounded-full bg-[var(--color-text-muted)] opacity-50"></span>
              <span>Offline</span>
            </div>
          )}
        </div>
        
        <Reveal>
          <div className="border border-[var(--color-warm-white)] rounded-[20px] bg-[var(--color-warm-white)] p-[4px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] overflow-hidden mt-[32px]">
            {hasLiveMatch ? (
              <div className="w-full h-[600px] bg-[var(--color-warm-white)] rounded-[16px] overflow-hidden">
                 {/* Try to parse as iframe HTML string first, otherwise use as URL */}
                 {liveMatch.iframe_url?.includes('<iframe') ? (
                    <div className="w-full h-full [&>iframe]:w-full [&>iframe]:h-full" dangerouslySetInnerHTML={{ __html: liveMatch.iframe_url }} />
                 ) : (
                    <iframe src={liveMatch.iframe_url || ""} className="w-full h-full border-0" allowFullScreen></iframe>
                 )}
              </div>
            ) : (
              // Offline fallback UI - Architectural Panel
              <div className="p-[80px_22px] bg-[var(--color-warm-white)] rounded-[16px] text-center flex flex-col items-center justify-center min-h-[350px]">
                <div className="w-[60px] h-[60px] rounded-full bg-[var(--color-soft-stone)] flex items-center justify-center mb-[20px] text-[var(--color-slate)]">
                  <PremiumIcon name="cricket" noContainer className="w-[30px] h-[30px] opacity-60" />
                </div>
                <h3 className="font-bebas text-[32px] text-[var(--color-text-main)] tracking-wide">No matches currently live</h3>
                <p className="text-[13px] text-[var(--color-text-muted)] mt-[10px] font-light max-w-[300px]">When a match goes live on CricHeroes, the scorecard will appear here.</p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
