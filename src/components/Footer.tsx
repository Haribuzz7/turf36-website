"use client";

export default function Footer() {
  return (
    <footer className="pt-[100px] pb-[40px] bg-[var(--color-bg-deep)] border-t border-[var(--color-glass-border)] relative overflow-hidden">
      {/* Deep ambient green glow */}
      <div className="absolute top-0 left-[20%] w-[60%] h-[100%] opacity-[0.03] mix-blend-screen bg-[radial-gradient(circle,var(--color-neon-primary)_0%,transparent_70%)] blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-[1120px] mx-auto px-7 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-[1.5fr_1fr_1fr] gap-[60px] mb-[80px]">
          <div>
            <div className="font-bebas text-[36px] tracking-wide flex items-center gap-[8px] mb-[20px] text-[var(--color-text-main)] drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              TURF<span className="text-[var(--color-neon-primary)] drop-shadow-[0_0_15px_rgba(20,255,114,0.3)]">36</span>
            </div>
            <p className="text-[var(--color-text-muted)] font-light text-[15px] leading-[1.8] max-w-[340px] font-inter">
              Cricket & pickleball turf in Gobichettipalayam. Floodlit, built for matches that go past sundown.
            </p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <h5 className="font-space text-[10px] tracking-[.25em] text-[var(--color-neon-primary)] uppercase mb-[20px] opacity-90 font-bold">Connects With</h5>
            <a href="#" className="text-[14px] font-light text-[var(--color-text-muted)] py-[4px] hover:text-[var(--color-text-main)] hover:translate-x-1 transition-all duration-300">CricHeroes</a>
            <a href="https://maps.app.goo.gl/nfdANdBq9Gnu66ij9" target="_blank" rel="noreferrer" className="text-[14px] font-light text-[var(--color-text-muted)] py-[4px] hover:text-[var(--color-text-main)] hover:translate-x-1 transition-all duration-300">Google Maps</a>
            <a href="#" className="text-[14px] font-light text-[var(--color-text-muted)] py-[4px] hover:text-[var(--color-text-main)] hover:translate-x-1 transition-all duration-300">WhatsApp</a>
            <a href="#" className="text-[14px] font-light text-[var(--color-text-muted)] py-[4px] hover:text-[var(--color-text-main)] hover:translate-x-1 transition-all duration-300">Instagram — @stories.hxri</a>
          </div>
          <div className="flex flex-col gap-[8px]">
            <h5 className="font-space text-[10px] tracking-[.25em] text-[var(--color-neon-primary)] uppercase mb-[20px] opacity-90 font-bold">Quick Links</h5>
            <a href="#book" className="text-[14px] font-light text-[var(--color-text-muted)] py-[4px] hover:text-[var(--color-text-main)] hover:translate-x-1 transition-all duration-300">Book a Slot</a>
            <a href="#events" className="text-[14px] font-light text-[var(--color-text-muted)] py-[4px] hover:text-[var(--color-text-main)] hover:translate-x-1 transition-all duration-300">Upcoming Events</a>
            <a href="#gallery" className="text-[14px] font-light text-[var(--color-text-muted)] py-[4px] hover:text-[var(--color-text-main)] hover:translate-x-1 transition-all duration-300">Gallery</a>
            <a href="#facilities" className="text-[14px] font-light text-[var(--color-text-muted)] py-[4px] hover:text-[var(--color-text-main)] hover:translate-x-1 transition-all duration-300">Facilities</a>
          </div>
        </div>
        
        <div className="border-t border-[var(--color-glass-border)] pt-[32px] flex justify-between flex-wrap gap-[20px] text-[12px] text-[var(--color-text-muted)] opacity-60 font-space tracking-widest uppercase">
          <span>© {new Date().getFullYear()} Turf 36</span>
          <span>Gobichettipalayam</span>
        </div>
      </div>
    </footer>
  );
}
