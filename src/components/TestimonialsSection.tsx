"use client";
import Reveal from "./Reveal";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-[140px] bg-[var(--color-bg-dark)] border-b border-[var(--color-glass-border)] overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(20,255,114,0.02)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-[1120px] mx-auto px-7 relative z-10">
        <div className="font-space tracking-[.22em] uppercase text-[10px] text-[var(--color-neon-primary)] opacity-80 flex items-center gap-[10px] mb-[16px] before:content-[''] before:w-[26px] before:h-[1px] before:bg-[var(--color-neon-primary)] before:opacity-50">
          From the players
        </div>
        <Reveal>
          <h2 className="font-bebas font-normal tracking-[.01em] text-[clamp(40px,6vw,70px)] leading-[0.9] uppercase text-[var(--color-text-main)] drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            What Teams <span className="text-[var(--color-neon-primary)] drop-shadow-[0_0_10px_rgba(20,255,114,0.5)]">Say</span>
          </h2>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] mt-[60px]">
          <Reveal>
            <div className="p-[32px] glass-panel rounded-3xl backdrop-blur-md hover:border-[var(--color-neon-primary)] transition-all duration-500 hover:shadow-[0_10px_30px_rgba(20,255,114,0.1)] group">
              <p className="text-[15px] leading-[1.8] text-[var(--color-text-main)] font-light italic mb-[24px] opacity-90 group-hover:opacity-100 transition-opacity">
                &quot;Booking used to mean five WhatsApp messages back and forth. Now I just pick a slot and I&apos;m done.&quot;
              </p>
              <div className="flex items-center gap-[12px] border-t border-[var(--color-glass-border)] pt-[20px]">
                <div className="w-[40px] h-[40px] rounded-full bg-[rgba(20,255,114,0.1)] flex items-center justify-center font-bebas text-[18px] text-[var(--color-neon-primary)] border border-[rgba(20,255,114,0.3)] shadow-[0_0_10px_rgba(20,255,114,0.2)]">
                  K
                </div>
                <div>
                  <b className="text-[14px] font-space tracking-widest text-[var(--color-text-main)] block uppercase">Karthik R.</b>
                  <span className="text-[11px] text-[var(--color-text-muted)] font-inter font-light">Team Captain</span>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="p-[32px] glass-panel rounded-3xl backdrop-blur-md hover:border-[var(--color-neon-primary)] transition-all duration-500 hover:shadow-[0_10px_30px_rgba(20,255,114,0.1)] group">
              <p className="text-[15px] leading-[1.8] text-[var(--color-text-main)] font-light italic mb-[24px] opacity-90 group-hover:opacity-100 transition-opacity">
                &quot;Best floodlit turf in Gobi for a night match. Surface holds up even after heavy use.&quot;
              </p>
              <div className="flex items-center gap-[12px] border-t border-[var(--color-glass-border)] pt-[20px]">
                <div className="w-[40px] h-[40px] rounded-full bg-[rgba(20,255,114,0.1)] flex items-center justify-center font-bebas text-[18px] text-[var(--color-neon-primary)] border border-[rgba(20,255,114,0.3)] shadow-[0_0_10px_rgba(20,255,114,0.2)]">
                  D
                </div>
                <div>
                  <b className="text-[14px] font-space tracking-widest text-[var(--color-text-main)] block uppercase">Deepa S.</b>
                  <span className="text-[11px] text-[var(--color-text-muted)] font-inter font-light">Pickleball Player</span>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="p-[32px] glass-panel rounded-3xl backdrop-blur-md hover:border-[var(--color-neon-primary)] transition-all duration-500 hover:shadow-[0_10px_30px_rgba(20,255,114,0.1)] group">
              <p className="text-[15px] leading-[1.8] text-[var(--color-text-main)] font-light italic mb-[24px] opacity-90 group-hover:opacity-100 transition-opacity">
                &quot;Ran our whole auction night here — projector, sound, everything just worked.&quot;
              </p>
              <div className="flex items-center gap-[12px] border-t border-[var(--color-glass-border)] pt-[20px]">
                <div className="w-[40px] h-[40px] rounded-full bg-[rgba(20,255,114,0.1)] flex items-center justify-center font-bebas text-[18px] text-[var(--color-neon-primary)] border border-[rgba(20,255,114,0.3)] shadow-[0_0_10px_rgba(20,255,114,0.2)]">
                  V
                </div>
                <div>
                  <b className="text-[14px] font-space tracking-widest text-[var(--color-text-main)] block uppercase">Vignesh M.</b>
                  <span className="text-[11px] text-[var(--color-text-muted)] font-inter font-light">Event Organiser</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
