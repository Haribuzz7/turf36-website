"use client";
import PremiumIcon from "./PremiumIcon";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Header() {
  const { scrollYProgress } = useScroll();
  
  // As user scrolls down the page (0 to 1), transition background, text, and border
  const backgroundColor = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], ["rgba(247, 246, 242, 0)", "rgba(247, 246, 242, 0.8)", "rgba(94, 100, 106, 0.9)", "rgba(49, 91, 68, 0.95)"]);
  const textColor = useTransform(scrollYProgress, [0, 0.1, 0.5, 1], ["#2A2C2E", "#2A2C2E", "#F7F6F2", "#F7F6F2"]);
  const borderColor = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], ["rgba(212, 210, 204, 0)", "rgba(212, 210, 204, 0.5)", "rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.1)"]);
  const backdropBlur = useTransform(scrollYProgress, [0, 0.1], ["blur(0px)", "blur(12px)"]);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setIsScrolled(latest > 0.05);
    });
  }, [scrollYProgress]);

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ 
          backgroundColor, 
          color: textColor,
          borderColor,
          backdropFilter: backdropBlur,
          WebkitBackdropFilter: backdropBlur
        }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-[18px] px-7 border-b transition-shadow"
      >
        <div className="font-bebas text-[24px] tracking-widest flex items-center gap-[8px]">
          TURF<span className="opacity-60">36</span>
        </div>
        <nav className="hidden md:flex gap-[32px] text-[10px] tracking-[.15em] uppercase font-space">
          {["Book", "Live", "Gallery", "Teams", "Events", "Facilities"].map((item) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              style={{ color: textColor }}
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              {item}
            </motion.a>
          ))}
        </nav>
        <a href="#book" className="font-space text-[10px] tracking-[.15em] uppercase py-[10px] px-[24px] rounded-full bg-[var(--color-forest)] text-white hover:scale-[1.02] shadow-[0_4px_15px_rgba(49,91,68,0.15)] transition-transform">
          Book Slot
        </a>
      </motion.header>

      {/* Floating Quick Actions */}
      <div className="fixed right-5 bottom-5 z-[80] flex flex-col gap-[12px] items-end">
        <a href="#book" className="w-auto h-[50px] rounded-full px-[24px] flex items-center justify-center gap-[10px] font-space text-[10px] tracking-[.15em] font-bold bg-[var(--color-forest)] text-white shadow-[0_10px_30px_rgba(49,91,68,0.3)] hover:-translate-y-[3px] transition-transform">
          <PremiumIcon name="lightning" noContainer className="w-[16px] h-[16px]" /> Book Now
        </a>
        
        {/* Floating Icons */}
        <div className="flex gap-[10px]">
          <a href="https://wa.me/917708929267" target="_blank" rel="noreferrer" title="WhatsApp" className="w-[45px] h-[45px] rounded-full flex items-center justify-center bg-[var(--color-warm-white)] border border-[var(--color-concrete)] text-[var(--color-forest)] shadow-[0_10px_20px_rgba(0,0,0,0.05)] hover:-translate-y-[2px] transition-transform">
            <PremiumIcon name="message" noContainer className="w-[18px] h-[18px]" />
          </a>
          <a href="tel:+917708929267" title="Call" className="w-[45px] h-[45px] rounded-full flex items-center justify-center bg-[var(--color-warm-white)] border border-[var(--color-concrete)] text-[var(--color-forest)] shadow-[0_10px_20px_rgba(0,0,0,0.05)] hover:-translate-y-[2px] transition-transform">
            <PremiumIcon name="contact" noContainer className="w-[18px] h-[18px]" />
          </a>
          <a href="https://maps.app.goo.gl/nfdANdBq9Gnu66ij9" target="_blank" rel="noreferrer" title="Directions" className="w-[45px] h-[45px] rounded-full flex items-center justify-center bg-[var(--color-warm-white)] border border-[var(--color-concrete)] text-[var(--color-forest)] shadow-[0_10px_20px_rgba(0,0,0,0.05)] hover:-translate-y-[2px] transition-transform">
            <PremiumIcon name="location" noContainer className="w-[18px] h-[18px]" />
          </a>
        </div>
      </div>
    </>
  );
}
