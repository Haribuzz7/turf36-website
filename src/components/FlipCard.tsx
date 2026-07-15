"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
}

export default function FlipCard({ frontContent, backContent, className = "" }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`relative [perspective:1000px] cursor-pointer group ${className}`}
      onClick={handleFlip}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 w-full h-full [backface-visibility:hidden]"
          style={{ transform: "rotateY(0deg)" }}
        >
          {frontContent}
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 w-full h-full [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          {backContent}
        </div>
      </motion.div>

      {/* Tap to Flip Indicator */}
      <div 
        className={`absolute bottom-[-30px] left-1/2 -translate-x-1/2 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="bg-black/80 text-[var(--color-gold-hot)] text-[10px] font-space tracking-widest uppercase px-3 py-1.5 rounded-full border border-[var(--color-gold-hot)]/30 shadow-[0_0_10px_rgba(240,201,74,0.2)] flex items-center gap-2 whitespace-nowrap">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 11v8a5 5 0 0 1-10 0v-4.2a2 2 0 0 1 4 0v2.2"/><path d="M11 15v2"/><path d="M15 15v2"/><path d="M19 15v2"/><path d="M11 11V6a2 2 0 0 1 4 0v5"/><path d="M15 11V3a2 2 0 0 1 4 0v8"/><path d="M19 11v-1a2 2 0 0 1 4 0v9a5 5 0 0 1-10 0v-2.2"/></svg>
          Tap to {isFlipped ? "Close" : "Flip"}
        </span>
      </div>
    </div>
  );
}
