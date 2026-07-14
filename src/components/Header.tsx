"use client";
import React, { useState, useEffect } from 'react';
import PremiumIcon from "./PremiumIcon";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-[18px] px-7 transition-all duration-500 ${scrolled ? 'bg-[rgba(0,230,118,0.05)] backdrop-blur-xl border-b border-[rgba(140,255,90,0.15)] shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent border-b border-transparent'}`}>
        <a href="#" className="flex items-center">
          <img src="/turf%2036%20white%20logo.png" alt="TURF 36" className="h-[64px] w-auto opacity-90 transition-opacity hover:opacity-100" />
        </a>
        <nav className="hidden md:flex gap-[26px] text-[12.5px] tracking-[.05em] uppercase text-[var(--color-muted)]">
          <a href="#book" className="hover:text-[var(--color-gold-hot)] hover:drop-shadow-[0_0_8px_rgba(140,255,90,0.8)] transition-all">Book</a>
          <a href="#live" className="hover:text-[var(--color-gold-hot)] hover:drop-shadow-[0_0_8px_rgba(140,255,90,0.8)] transition-all">Live</a>
          <a href="#gallery" className="hover:text-[var(--color-gold-hot)] hover:drop-shadow-[0_0_8px_rgba(140,255,90,0.8)] transition-all">Gallery</a>
          <a href="#teams" className="hover:text-[var(--color-gold-hot)] hover:drop-shadow-[0_0_8px_rgba(140,255,90,0.8)] transition-all">Teams</a>
          <a href="#events" className="hover:text-[var(--color-gold-hot)] hover:drop-shadow-[0_0_8px_rgba(140,255,90,0.8)] transition-all">Events</a>
          <a href="#facilities" className="hover:text-[var(--color-gold-hot)] hover:drop-shadow-[0_0_8px_rgba(140,255,90,0.8)] transition-all">Facilities</a>
        </nav>
        <a href="#book" className="font-space text-[12.5px] tracking-[.08em] uppercase py-[9px] px-[18px] rounded-lg glass-button">
          Book Now
        </a>
      </header>

      {/* Floating Quick Actions */}
      <div className="fixed right-5 bottom-5 z-[80] flex flex-col gap-[10px] items-end">
        <a href="#book" className="w-auto h-[50px] rounded-[30px] px-[18px] flex items-center justify-center gap-[8px] font-space text-[12px] tracking-[.08em] font-bold glass-button shadow-[0_6px_20px_rgba(0,230,118,0.5)] hover:-translate-y-[3px] hover:scale-105 transition-transform hover:shadow-[0_10px_30px_rgba(140,255,90,0.8)]">
          <PremiumIcon name="lightning" noContainer className="w-[18px] h-[18px]" /> Book Now
        </a>
        <a href="https://wa.me/917708929267" target="_blank" rel="noreferrer" title="WhatsApp" className="w-[50px] h-[50px] rounded-full flex items-center justify-center glass-panel text-[var(--color-gold-hot)] shadow-[0_6px_20px_rgba(0,0,0,0.5)] hover:-translate-y-[3px] hover:scale-105 hover:bg-[var(--color-gold)] hover:text-[#0a0a0a] transition-all">
          <PremiumIcon name="message" noContainer className="w-[20px] h-[20px]" />
        </a>
        <a href="tel:+917708929267" title="Call" className="w-[50px] h-[50px] rounded-full flex items-center justify-center glass-panel text-[var(--color-gold-hot)] shadow-[0_6px_20px_rgba(0,0,0,0.5)] hover:-translate-y-[3px] hover:scale-105 hover:bg-[var(--color-gold)] hover:text-[#0a0a0a] transition-all">
          <PremiumIcon name="contact" noContainer className="w-[20px] h-[20px]" />
        </a>
        <a href="https://maps.app.goo.gl/nfdANdBq9Gnu66ij9" target="_blank" rel="noreferrer" title="Directions" className="w-[50px] h-[50px] rounded-full flex items-center justify-center glass-panel text-[var(--color-gold-hot)] shadow-[0_6px_20px_rgba(0,0,0,0.5)] hover:-translate-y-[3px] hover:scale-105 hover:bg-[var(--color-gold)] hover:text-[#0a0a0a] transition-all">
          <PremiumIcon name="location" noContainer className="w-[20px] h-[20px]" />
        </a>
      </div>
    </>
  );
}
