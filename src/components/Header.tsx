"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-[20px] px-6 transition-all duration-700`}
    >
      <div 
        className={`flex items-center justify-between w-full max-w-[900px] px-[24px] py-[14px] rounded-full transition-all duration-700 
          ${isScrolled 
            ? "bg-[rgba(255,255,255,0.7)] backdrop-blur-xl border border-[rgba(0,0,0,0.06)] shadow-[0_10px_40px_rgba(0,0,0,0.04)]" 
            : "bg-transparent border-transparent"
          }`}
      >
        <div className="flex items-center gap-[12px]">
          {/* Logo with invert filter since the original is white */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Turf 36" className="w-[30px] opacity-90 filter invert sepia-[20%] hue-rotate-[190deg] saturate-[30%]" />
          <span className="font-bebas text-[20px] tracking-[.05em] text-[var(--color-text-main)]">TURF 36</span>
        </div>

        <nav className="hidden md:flex items-center gap-[30px]">
          {["FACILITIES", "GALLERY", "LEGACY"].map((item) => (
            <a 
              key={item} 
              href={#} 
              className="font-space text-[10px] tracking-[.2em] text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors uppercase"
            >
              {item}
            </a>
          ))}
        </nav>

        <a 
          href="#book" 
          className="font-space text-[10px] tracking-[.15em] uppercase px-[20px] py-[12px] bg-[var(--color-forest)] text-white rounded-full hover:scale-[1.02] transition-transform duration-500 shadow-[0_4px_15px_rgba(49,91,68,0.2)]"
        >
          Book Now
        </a>
      </div>
    </motion.header>
  );
}
