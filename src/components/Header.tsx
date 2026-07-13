"use client";
import PremiumIcon from "./PremiumIcon";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-[18px] px-7 transition-all duration-300 ${
          scrolled 
            ? "backdrop-blur-xl bg-[#090909]/70 border-b border-[rgba(255,213,74,0.15)] shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="font-bebas text-[22px] tracking-[.06em] flex items-center gap-[8px]">
          TURF<span className="text-[var(--color-gold-hot)]">36</span>
        </div>
        <nav className="hidden md:flex gap-[26px] text-[12.5px] tracking-[.05em] uppercase text-[var(--color-muted)]">
          <a href="#book" className="hover:text-[var(--color-gold-hot)] transition-colors">Book</a>
          <a href="#live" className="hover:text-[var(--color-gold-hot)] transition-colors">Live</a>
          <a href="#gallery" className="hover:text-[var(--color-gold-hot)] transition-colors">Gallery</a>
          <a href="#teams" className="hover:text-[var(--color-gold-hot)] transition-colors">Teams</a>
          <a href="#events" className="hover:text-[var(--color-gold-hot)] transition-colors">Events</a>
          <a href="#facilities" className="hover:text-[var(--color-gold-hot)] transition-colors">Facilities</a>
        </nav>
        <a href="#book" className="font-space text-[12.5px] tracking-[.08em] uppercase py-[9px] px-[18px] rounded-lg border border-[var(--color-card-stroke)] text-[var(--color-white)] hover:border-[var(--color-gold)] transition-colors">
          Book Now
        </a>
      </motion.header>

      {/* Floating Quick Actions */}
      <div className="fixed right-5 bottom-5 z-[80] flex flex-col gap-[10px] items-end">
        <a href="#book" className="w-auto h-[50px] rounded-[30px] px-[18px] flex items-center justify-center gap-[8px] font-space text-[12px] tracking-[.08em] font-bold bg-[var(--color-gold)] text-[#0a0a0a] shadow-[0_6px_20px_rgba(0,0,0,0.5)] hover:-translate-y-[3px] hover:scale-105 transition-transform">
          <PremiumIcon name="lightning" noContainer className="w-[18px] h-[18px]" /> Book Now
        </a>
        <a href="https://wa.me/917708929267" target="_blank" rel="noreferrer" title="WhatsApp" className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[var(--color-charcoal-2)] border border-[var(--color-card-stroke)] text-[var(--color-gold-hot)] shadow-[0_6px_20px_rgba(0,0,0,0.5)] hover:-translate-y-[3px] hover:scale-105 hover:bg-[var(--color-gold)] hover:text-[#0a0a0a] transition-all">
          <PremiumIcon name="message" noContainer className="w-[20px] h-[20px]" />
        </a>
        <a href="tel:+917708929267" title="Call" className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[var(--color-charcoal-2)] border border-[var(--color-card-stroke)] text-[var(--color-gold-hot)] shadow-[0_6px_20px_rgba(0,0,0,0.5)] hover:-translate-y-[3px] hover:scale-105 hover:bg-[var(--color-gold)] hover:text-[#0a0a0a] transition-all">
          <PremiumIcon name="contact" noContainer className="w-[20px] h-[20px]" />
        </a>
        <a href="https://maps.app.goo.gl/nfdANdBq9Gnu66ij9" target="_blank" rel="noreferrer" title="Directions" className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[var(--color-charcoal-2)] border border-[var(--color-card-stroke)] text-[var(--color-gold-hot)] shadow-[0_6px_20px_rgba(0,0,0,0.5)] hover:-translate-y-[3px] hover:scale-105 hover:bg-[var(--color-gold)] hover:text-[#0a0a0a] transition-all">
          <PremiumIcon name="location" noContainer className="w-[20px] h-[20px]" />
        </a>
      </div>
    </>
  );
}
