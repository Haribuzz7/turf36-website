"use client";

export default function Footer() {
  return (
    <footer className="pt-[100px] pb-[40px] bg-[#080908] border-t border-[rgba(255,255,255,0.05)] relative overflow-hidden">
      {/* Deep ambient green glow */}
      <div className="absolute top-0 left-[20%] w-[60%] h-[100%] opacity-10 mix-blend-screen bg-[radial-gradient(circle,var(--color-forest)_0%,transparent_70%)] blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-[1120px] mx-auto px-7 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-[1.5fr_1fr_1fr] gap-[60px] mb-[80px]">
          <div>
            <div className="font-bebas text-[32px] tracking-wide flex items-center gap-[8px] mb-[20px] text-[var(--color-warm-white)] drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              TURF<span className="text-[var(--color-accent)] drop-shadow-[0_0_15px_rgba(217,108,36,0.4)]">36</span>
            </div>
            <p className="text-[var(--color-warm-white)] opacity-60 font-light text-[14px] leading-[1.8] max-w-[340px] font-inter">
              Cricket & pickleball turf in Gobichettipalayam. Floodlit, built for matches that go past sundown.
            </p>
          </div>
          <div className="flex flex-col gap-[4px]">
            <h5 className="font-space text-[10px] tracking-[.25em] text-[var(--color-accent)] uppercase mb-[20px] opacity-90">Connects With</h5>
            <a href="#" className="text-[14px] font-light text-[var(--color-warm-white)] opacity-60 py-[6px] hover:opacity-100 hover:text-[var(--color-accent)] hover:translate-x-1 transition-all duration-300">CricHeroes</a>
            <a href="https://maps.app.goo.gl/nfdANdBq9Gnu66ij9" target="_blank" rel="noreferrer" className="text-[14px] font-light text-[var(--color-warm-white)] opacity-60 py-[6px] hover:opacity-100 hover:text-[var(--color-accent)] hover:translate-x-1 transition-all duration-300">Google Maps</a>
            <a href="#" className="text-[14px] font-light text-[var(--color-warm-white)] opacity-60 py-[6px] hover:opacity-100 hover:text-[var(--color-accent)] hover:translate-x-1 transition-all duration-300">WhatsApp</a>
            <a href="#" className="text-[14px] font-light text-[var(--color-warm-white)] opacity-60 py-[6px] hover:opacity-100 hover:text-[var(--color-accent)] hover:translate-x-1 transition-all duration-300">Instagram — @stories.hxri</a>
          </div>
          <div className="flex flex-col gap-[4px]">
            <h5 className="font-space text-[10px] tracking-[.25em] text-[var(--color-accent)] uppercase mb-[20px] opacity-90">Quick Links</h5>
            <a href="#book" className="text-[14px] font-light text-[var(--color-warm-white)] opacity-60 py-[6px] hover:opacity-100 hover:text-[var(--color-accent)] hover:translate-x-1 transition-all duration-300">Book a Slot</a>
            <a href="#events" className="text-[14px] font-light text-[var(--color-warm-white)] opacity-60 py-[6px] hover:opacity-100 hover:text-[var(--color-accent)] hover:translate-x-1 transition-all duration-300">Upcoming Events</a>
            <a href="#gallery" className="text-[14px] font-light text-[var(--color-warm-white)] opacity-60 py-[6px] hover:opacity-100 hover:text-[var(--color-accent)] hover:translate-x-1 transition-all duration-300">Gallery</a>
            <a href="#facilities" className="text-[14px] font-light text-[var(--color-warm-white)] opacity-60 py-[6px] hover:opacity-100 hover:text-[var(--color-accent)] hover:translate-x-1 transition-all duration-300">Facilities</a>
          </div>
        </div>
        
        <div className="border-t border-[rgba(255,255,255,0.05)] pt-[32px] flex justify-between flex-wrap gap-[20px] text-[12px] text-[var(--color-warm-white)] opacity-40 font-space tracking-widest uppercase">
          <span>© {new Date().getFullYear()} Turf 36</span>
          <span>Gobichettipalayam</span>
        </div>
      </div>
    </footer>
  );
}
