"use client";

export default function Footer() {
  return (
    <footer className="pt-[70px] pb-[40px]">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="grid grid-cols-1 sm:grid-cols-[1.3fr_1fr_1fr] gap-[40px] mb-[50px]">
          <div>
            <div className="font-bebas text-[22px] tracking-[.06em] flex items-center gap-[8px] mb-[14px]">
              TURF<span className="text-[var(--color-gold-hot)]">36</span>
            </div>
            <p className="text-[var(--color-muted)] text-[13.5px] leading-[1.7] max-w-[320px]">
              Cricket & pickleball turf in Gobichettipalayam. Floodlit, built for matches that go past sundown.
            </p>
          </div>
          <div className="flex flex-col">
            <h5 className="font-space text-[11px] tracking-[.12em] text-[var(--color-gold)] uppercase mb-[16px]">Connects With</h5>
            <a href="#" className="text-[13.5px] text-[var(--color-muted)] mb-[10px] hover:text-[var(--color-gold-hot)] transition-colors">CricHeroes</a>
            <a href="https://maps.app.goo.gl/nfdANdBq9Gnu66ij9" target="_blank" rel="noreferrer" className="text-[13.5px] text-[var(--color-muted)] mb-[10px] hover:text-[var(--color-gold-hot)] transition-colors">Google Maps</a>
            <a href="#" className="text-[13.5px] text-[var(--color-muted)] mb-[10px] hover:text-[var(--color-gold-hot)] transition-colors">WhatsApp</a>
            <a href="#" className="text-[13.5px] text-[var(--color-muted)] mb-[10px] hover:text-[var(--color-gold-hot)] transition-colors">Instagram — @stories.hxri</a>
          </div>
          <div className="flex flex-col">
            <h5 className="font-space text-[11px] tracking-[.12em] text-[var(--color-gold)] uppercase mb-[16px]">Quick Links</h5>
            <a href="#book" className="text-[13.5px] text-[var(--color-muted)] mb-[10px] hover:text-[var(--color-gold-hot)] transition-colors">Book a Slot</a>
            <a href="#events" className="text-[13.5px] text-[var(--color-muted)] mb-[10px] hover:text-[var(--color-gold-hot)] transition-colors">Upcoming Events</a>
            <a href="#gallery" className="text-[13.5px] text-[var(--color-muted)] mb-[10px] hover:text-[var(--color-gold-hot)] transition-colors">Gallery</a>
            <a href="#facilities" className="text-[13.5px] text-[var(--color-muted)] mb-[10px] hover:text-[var(--color-gold-hot)] transition-colors">Facilities</a>
            <a href="/login" className="text-[13.5px] text-[var(--color-muted)] mb-[10px] hover:text-[var(--color-gold-hot)] transition-colors mt-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Admin Login
            </a>
          </div>
        </div>
        <div className="border-t border-[var(--color-line)] pt-[24px] flex justify-between flex-wrap gap-[10px] text-[12px] text-[var(--color-muted-2)]">
          <span>© 2026 Turf 36, Gobichettipalayam</span>
          <span>Built by Media 36</span>
        </div>
      </div>
    </footer>
  );
}
