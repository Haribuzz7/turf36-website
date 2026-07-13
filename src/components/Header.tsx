"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import NeonIcon from "./NeonIcon";
import { Zap, MessageCircle, Phone, MapPin } from "lucide-react";

export default function Header() {
  const { scrollYProgress } = useScroll();
  
  // As user scrolls down the page (0 to 1), transition background and border
  const backgroundColor = useTransform(scrollYProgress, [0, 0.05], ["rgba(13, 24, 20, 0)", "rgba(13, 24, 20, 0.6)"]);
  const borderColor = useTransform(scrollYProgress, [0, 0.05], ["rgba(20, 255, 114, 0)", "rgba(20, 255, 114, 0.15)"]);
  const backdropBlur = useTransform(scrollYProgress, [0, 0.05], ["blur(0px)", "blur(24px)"]);
  const shadow = useTransform(scrollYProgress, [0, 0.05], ["0 0 0 rgba(0,0,0,0)", "0 8px 32px 0 rgba(0, 0, 0, 0.37)"]);
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.98]);
  const yOffset = useTransform(scrollYProgress, [0, 0.05], [0, 16]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full pointer-events-none px-4"
        style={{ y: yOffset }}
      >
        <motion.header 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ 
            backgroundColor, 
            borderColor,
            backdropFilter: backdropBlur,
            WebkitBackdropFilter: backdropBlur,
            boxShadow: shadow,
            scale,
          }}
          className="flex items-center justify-between py-[12px] px-8 border transition-all rounded-[30px] w-full max-w-[1120px] pointer-events-auto"
        >
          <div className="font-bebas text-[28px] tracking-widest flex items-center gap-[8px] text-[var(--color-text-main)]">
            TURF<span className="text-[var(--color-neon-primary)] drop-shadow-[0_0_10px_rgba(20,255,114,0.5)]">36</span>
          </div>
          <nav className="hidden md:flex gap-[32px] text-[10px] tracking-[.15em] uppercase font-space text-[var(--color-text-main)]">
            {["Book", "Live", "Gallery", "Teams", "Events", "Facilities"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="opacity-60 hover:opacity-100 hover:text-[var(--color-neon-primary)] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(20,255,114,0.6)]"
              >
                {item}
              </a>
            ))}
          </nav>
          <a href="#book" className="font-space text-[10px] tracking-[.15em] uppercase py-[10px] px-[24px] rounded-full bg-[rgba(20,255,114,0.05)] border border-[var(--color-neon-primary)] text-[var(--color-neon-primary)] hover:bg-[var(--color-neon-primary)] hover:text-[var(--color-bg-deep)] hover:shadow-[0_0_25px_rgba(20,255,114,0.5)] transition-all duration-300">
            Book Slot
          </a>
        </motion.header>
      </motion.div>

      {/* Floating Quick Actions */}
      <div className="fixed right-5 bottom-5 z-[80] flex flex-col gap-[12px] items-end">
        <a href="#book" className="h-[50px] rounded-full px-[24px] flex items-center justify-center gap-[10px] font-space text-[10px] tracking-[.15em] font-bold bg-[var(--color-neon-primary)] text-[var(--color-bg-deep)] shadow-[0_0_30px_rgba(20,255,114,0.3)] hover:scale-105 transition-transform duration-300">
          <Zap size={16} strokeWidth={2.5} /> Book Now
        </a>
        
        {/* Floating Icons */}
        <div className="flex gap-[12px]">
          <a href="https://wa.me/917708929267" target="_blank" rel="noreferrer" title="WhatsApp">
            <NeonIcon Icon={MessageCircle} size={20} className="rounded-full" />
          </a>
          <a href="tel:+917708929267" title="Call">
            <NeonIcon Icon={Phone} size={20} className="rounded-full" />
          </a>
          <a href="https://maps.app.goo.gl/nfdANdBq9Gnu66ij9" target="_blank" rel="noreferrer" title="Directions">
            <NeonIcon Icon={MapPin} size={20} className="rounded-full" />
          </a>
        </div>
      </div>
    </>
  );
}
