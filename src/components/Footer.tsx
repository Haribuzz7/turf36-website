"use client";

import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[rgba(255,255,255,0.05)] overflow-hidden">
      {/* Massive subtle glow from bottom center */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[rgba(0,230,118,0.15)] blur-[120px] rounded-[100%] pointer-events-none z-0"></div>

      <div className="max-w-[1120px] mx-auto px-7 pt-[100px] pb-[40px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[60px] lg:gap-[40px] mb-[80px]">
          
          {/* Brand & Description (Spans 5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <Reveal>
              <div className="font-bebas text-[48px] tracking-[.06em] flex items-center gap-[8px] mb-[20px] leading-none">
                TURF<span className="text-[var(--color-gold-hot)]">36</span>
              </div>
            </Reveal>
            <p className="text-[var(--color-muted)] text-[15.5px] leading-[1.8] max-w-[380px] font-light">
              Premium cricket, football & pickleball turf in Gobichettipalayam. Fully floodlit, perfectly maintained, built for matches that go past sundown.
            </p>
          </div>

          {/* Social Links (Spans 3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <h5 className="font-space text-[11.5px] tracking-[.15em] text-[var(--color-gold)] uppercase mb-[24px] flex items-center gap-3 before:content-[''] before:w-6 before:h-[1px] before:bg-[var(--color-gold)]">
              Connect
            </h5>
            <div className="flex flex-col gap-4">
              <a href="https://maps.app.goo.gl/nfdANdBq9Gnu66ij9" target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-[14.5px] text-[var(--color-muted)] hover:text-white transition-colors">
                <span className="w-9 h-9 rounded-full border border-[rgba(255,255,255,0.1)] group-hover:border-[var(--color-gold)] group-hover:bg-[rgba(140,255,90,0.1)] flex items-center justify-center transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-[var(--color-gold)] transition-colors"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                Google Maps
              </a>
              <a href="tel:+917708929267" className="group flex items-center gap-3 text-[14.5px] text-[var(--color-muted)] hover:text-white transition-colors">
                <span className="w-9 h-9 rounded-full border border-[rgba(255,255,255,0.1)] group-hover:border-[var(--color-gold)] group-hover:bg-[rgba(140,255,90,0.1)] flex items-center justify-center transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-[var(--color-gold)] transition-colors"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                +91 77089 29267
              </a>
              <a href="https://wa.me/917708929267" target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-[14.5px] text-[var(--color-muted)] hover:text-white transition-colors">
                <span className="w-9 h-9 rounded-full border border-[rgba(255,255,255,0.1)] group-hover:border-[var(--color-gold)] group-hover:bg-[rgba(140,255,90,0.1)] flex items-center justify-center transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-[var(--color-gold)] transition-colors"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                </span>
                WhatsApp
              </a>
              <a href="https://www.instagram.com/turf_36?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-[14.5px] text-[var(--color-muted)] hover:text-white transition-colors">
                <span className="w-9 h-9 rounded-full border border-[rgba(255,255,255,0.1)] group-hover:border-[var(--color-gold)] group-hover:bg-[rgba(140,255,90,0.1)] flex items-center justify-center transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-[var(--color-gold)] transition-colors"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </span>
                Instagram
              </a>
              <a href="https://youtube.com/@teamextreme-36?si=f-D39LpQ7UNhMc3B" target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-[14.5px] text-[var(--color-muted)] hover:text-white transition-colors">
                <span className="w-9 h-9 rounded-full border border-[rgba(255,255,255,0.1)] group-hover:border-[var(--color-gold)] group-hover:bg-[rgba(140,255,90,0.1)] flex items-center justify-center transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-[var(--color-gold)] transition-colors"><path d="M2.5 7.1C2.3 8.3 2 10.7 2 12s.3 3.7.5 4.9c.3 1.4 1.4 2.5 2.8 2.8 1.4.3 6.7.3 6.7.3s5.3 0 6.7-.3c1.4-.3 2.5-1.4 2.8-2.8.2-1.2.5-3.6.5-4.9s-.3-3.7-.5-4.9c-.3-1.4-1.4-2.5-2.8-2.8-1.4-.3-6.7-.3-6.7-.3s-5.3 0-6.7.3c-1.4.3-2.5 1.4-2.8 2.8z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
                </span>
                YouTube
              </a>
            </div>
          </div>

          {/* Quick Links (Spans 4 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <h5 className="font-space text-[11.5px] tracking-[.15em] text-[var(--color-gold)] uppercase mb-[24px] flex items-center gap-3 before:content-[''] before:w-6 before:h-[1px] before:bg-[var(--color-gold)]">
              Quick Links
            </h5>
            <div className="grid grid-cols-2 gap-y-4 gap-x-6">
              {[
                { name: 'Book a Slot', href: '#book' },
                { name: 'Events', href: '#events' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Facilities', href: '#facilities' },
                { name: 'Hall of Fame', href: '#hall-of-fame' },
                { name: 'Live Match', href: '#live-match' }
              ].map((link, idx) => (
                <a key={idx} href={link.href} className="group flex items-center gap-2 text-[14.5px] text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-all duration-300">
                  <span className="w-0 h-[1px] bg-[var(--color-gold)] group-hover:w-3 transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Huge Background Text */}
        <div className="w-full overflow-hidden flex justify-center mb-[40px] opacity-[0.02] select-none pointer-events-none">
          <h1 className="font-bebas text-[18vw] leading-none whitespace-nowrap tracking-widest text-white">TURF 36</h1>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgba(255,255,255,0.06)] pt-[30px] flex flex-col sm:flex-row justify-between items-center gap-[20px] text-[13px] text-[var(--color-muted-2)] font-light tracking-wide">
          <div className="flex items-center gap-4">
            <span>© 2026 Turf 36</span>
            <span className="w-1 h-1 rounded-full bg-[rgba(255,255,255,0.15)]"></span>
            <span>Built by Media 36</span>
          </div>
          
          <a href="/login" className="group flex items-center gap-2 hover:text-[var(--color-gold)] transition-colors bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] px-4 py-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-[var(--color-gold)] transition-colors"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            Admin Access
          </a>
        </div>
      </div>
    </footer>
  );
}
