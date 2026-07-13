"use client";
import PremiumIcon from "./PremiumIcon";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  return (
    <>
      <motion.header 
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-150%", opacity: 0 }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[800px]"
      >
        <div className={`flex items-center justify-between px-6 py-4 rounded-full transition-all duration-500 ${scrolled ? "bg-[#0a0a0a]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.06)] shadow-[0_20px_40px_rgba(0,0,0,0.4)]" : "bg-transparent border border-transparent"}`}>
          <div className="font-bebas text-[22px] tracking-[.06em] flex items-center gap-[8px] text-white">
            TURF<span className="text-[var(--color-gold)]">36</span>
          </div>
          <nav className="hidden md:flex gap-[28px] text-[12px] tracking-[.08em] uppercase text-[var(--color-muted)] font-medium">
            <a href="#book" className="hover:text-white transition-colors">Book</a>
            <a href="#live" className="hover:text-white transition-colors">Live</a>
            <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
            <a href="#teams" className="hover:text-white transition-colors">Teams</a>
            <a href="#facilities" className="hover:text-white transition-colors">Facilities</a>
          </nav>
          <a href="#book" className="hidden sm:block font-space text-[11px] tracking-[.1em] uppercase py-[10px] px-[20px] rounded-full border border-[rgba(255,255,255,0.1)] bg-[var(--color-carbon)] text-white hover:bg-[var(--color-graphite)] hover:border-[rgba(255,255,255,0.2)] transition-all">
            Book
          </a>
        </div>
      </motion.header>

      {/* Floating Quick Actions (Minimalist) */}
      <div className="fixed right-6 bottom-6 z-[80] flex flex-col gap-[12px] items-end">
        <a href="#book" className="w-auto h-[48px] rounded-full px-[20px] flex items-center justify-center gap-[10px] font-space text-[11px] tracking-[.1em] font-medium bg-[var(--color-white)] text-[#0a0a0a] shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-transform">
          <PremiumIcon name="lightning" noContainer className="w-[14px] h-[14px]" /> Book Now
        </a>
        <a href="https://wa.me/917708929267" target="_blank" rel="noreferrer" title="WhatsApp" className="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-[var(--color-carbon)] border border-[rgba(255,255,255,0.06)] text-[var(--color-muted)] shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:bg-[var(--color-graphite)] hover:text-white transition-all">
          <PremiumIcon name="message" noContainer className="w-[18px] h-[18px]" />
        </a>
      </div>
    </>
  );
}
