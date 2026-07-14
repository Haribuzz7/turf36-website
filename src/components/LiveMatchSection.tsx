/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";

import Reveal from "./Reveal";
import PremiumIcon from "./PremiumIcon";

type LiveMatchProps = {
  liveMatch: { id?: string; [key: string]: any };
};

export default function LiveMatchSection({ liveMatch }: LiveMatchProps) {
  const hasLiveMatch = liveMatch?.is_active && liveMatch?.iframe_url;

  return (
    <section id="live" className="relative z-10 py-[110px] border-b border-[rgba(255,255,255,0.05)] bg-[#030805]/70 backdrop-blur-[12px]">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="font-space tracking-[.22em] uppercase text-[11.5px] text-[var(--color-gold)] flex items-center gap-[10px] mb-[16px] before:content-[''] before:w-[26px] before:h-[1px] before:bg-[var(--color-gold)]">
          Match center
        </div>
        <Reveal>
          <h2 className="font-bebas font-normal tracking-[.01em] text-[clamp(34px,5.4vw,58px)] leading-[1.02] uppercase">
            Live From <span className="text-[var(--color-gold-hot)]">The Ground</span>
          </h2>
        </Reveal>
        <p className="text-[var(--color-muted)] font-light text-[15.5px] leading-[1.7] max-w-[560px]">
          Pulled straight from CricHeroes once a match is live — no extra scoring work on our end.
        </p>
        
        <div className="inline-flex items-center gap-[8px] font-space text-[11px] tracking-[.15em] text-[#ff6b6b] uppercase mb-[20px] mt-[10px]">
          {hasLiveMatch ? (
             <><span className="w-[8px] h-[8px] rounded-full bg-[#ff6b6b] animate-[pulse_1.4s_infinite]"></span> Live Now</>
          ) : (
            <><span className="w-[8px] h-[8px] rounded-full bg-[var(--color-muted)]"></span> Offline</>
          )}
        </div>
        
        <Reveal>
          <div className="glass-panel overflow-hidden p-0 mt-[32px]">
            {hasLiveMatch ? (
              <div className="w-full h-[600px] bg-black">
                 {/* Try to parse as iframe HTML string first, otherwise use as URL */}
                 {liveMatch.iframe_url.includes('<iframe') ? (
                    <div className="w-full h-full [&>iframe]:w-full [&>iframe]:h-full" dangerouslySetInnerHTML={{ __html: liveMatch.iframe_url }} />
                 ) : (
                    <iframe src={liveMatch.iframe_url} className="w-full h-full border-0" allowFullScreen></iframe>
                 )}
              </div>
            ) : (
              // Offline fallback UI
              <div className="p-[60px_22px] text-center flex flex-col items-center justify-center min-h-[300px]">
                <PremiumIcon name="live" size="lg" containerClassName="mb-[16px] opacity-60" />
                <h3 className="font-bebas text-[24px] text-[var(--color-muted-2)]">No matches currently live</h3>
                <p className="text-[13px] text-[var(--color-muted)] mt-[8px]">When a match goes live on CricHeroes, the scorecard will appear here.</p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
