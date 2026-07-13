"use client";
import Reveal from "./Reveal";
import NeonIcon from "./NeonIcon";
import { Activity } from "lucide-react";

type LiveMatchProps = {
  liveMatch: {
    is_active?: boolean;
    iframe_url?: string;
  };
};

export default function LiveMatchSection({ liveMatch }: LiveMatchProps) {
  const hasLiveMatch = liveMatch?.is_active && liveMatch?.iframe_url;

  return (
    <section id="live" className="relative py-[140px] border-b border-[var(--color-glass-border)] bg-[var(--color-bg-dark)] overflow-hidden">
      {/* Neon glowing center */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-dark)] to-[var(--color-bg-deep)] z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] opacity-[0.03] mix-blend-screen bg-[radial-gradient(circle,var(--color-neon-primary)_0%,transparent_70%)] blur-[100px] pointer-events-none z-0"></div>
      
      <div className="max-w-[1120px] mx-auto px-7 relative z-10">
        <div className="font-space tracking-[.25em] uppercase text-[10px] text-[var(--color-neon-primary)] flex items-center gap-[12px] mb-[20px] before:content-[''] before:w-[30px] before:h-[1px] before:bg-[var(--color-neon-primary)] before:opacity-50">
          Match center
        </div>
        <Reveal>
          <h2 className="font-bebas font-normal tracking-wide text-[clamp(40px,6vw,70px)] leading-[0.9] uppercase text-[var(--color-text-main)] drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Live From The Ground
          </h2>
        </Reveal>
        <p className="text-[var(--color-text-muted)] font-light text-[15px] leading-[1.8] max-w-[500px] mt-[24px]">
          Pulled straight from CricHeroes once a match is live — no extra scoring work on our end.
        </p>
        
        <div className="inline-flex items-center gap-[8px] font-space text-[10px] tracking-[.15em] uppercase mb-[20px] mt-[30px]">
          {hasLiveMatch ? (
             <div className="flex items-center gap-2 glass-panel px-5 py-3 rounded-full border border-[var(--color-neon-primary)] shadow-[0_0_20px_rgba(20,255,114,0.2)]">
               <span className="relative flex h-[10px] w-[10px]">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-neon-primary)] opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-[10px] w-[10px] bg-[var(--color-neon-primary)] shadow-[0_0_10px_rgba(20,255,114,1)]"></span>
               </span>
               <span className="text-[var(--color-neon-primary)] font-bold tracking-widest drop-shadow-[0_0_5px_rgba(20,255,114,0.5)]">Live Now</span>
             </div>
          ) : (
            <div className="flex items-center gap-2 px-5 py-3 rounded-full glass-panel text-[var(--color-text-muted)] opacity-70">
              <span className="w-[8px] h-[8px] rounded-full bg-[var(--color-text-muted)]"></span>
              <span className="tracking-widest">Offline</span>
            </div>
          )}
        </div>
        
        <Reveal>
          <div className="glass-panel rounded-[32px] p-[6px] mt-[32px] overflow-hidden">
            {hasLiveMatch ? (
              <div className="w-full h-[600px] bg-[#050a08] rounded-[26px] overflow-hidden">
                 {/* Try to parse as iframe HTML string first, otherwise use as URL */}
                 {liveMatch.iframe_url?.includes('<iframe') ? (
                    <div className="w-full h-full [&>iframe]:w-full [&>iframe]:h-full opacity-90" dangerouslySetInnerHTML={{ __html: liveMatch.iframe_url }} />
                 ) : (
                    <iframe src={liveMatch.iframe_url || ""} className="w-full h-full border-0 opacity-90 filter contrast-125" allowFullScreen></iframe>
                 )}
              </div>
            ) : (
              // Offline fallback UI - Architectural Panel
              <div className="p-[80px_22px] bg-[#050a08] rounded-[26px] text-center flex flex-col items-center justify-center min-h-[400px] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none" />
                <div className="mb-[24px]">
                  <NeonIcon Icon={Activity} size={32} />
                </div>
                <h3 className="font-bebas text-[40px] text-[var(--color-text-main)] tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">Pitch is Quiet</h3>
                <p className="text-[14px] text-[var(--color-text-muted)] mt-[10px] font-light max-w-[300px] leading-[1.6]">When a match goes live on CricHeroes, the digital scoreboard will activate here.</p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
