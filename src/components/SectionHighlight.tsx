"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

type HighlightProps = {
  glowColor?: "emerald" | "lime";
  glowPosition?: "left" | "right";
  className?: string;
  children: React.ReactNode;
};

export default function SectionHighlight({ 
  glowColor = "emerald", 
  glowPosition = "left",
  className = "",
  children 
}: HighlightProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Idea 1: Static Ambient Glow 
  // Increased opacity heavily so it is visible against the dark green gradient
  const ambientColor = glowColor === "emerald" 
    ? "rgba(0, 230, 118, 0.12)" 
    : "rgba(140, 255, 90, 0.12)";

  // Fixed massive circle dimensions so it doesn't get squished by short sections
  const positionClasses = glowPosition === "left" 
    ? "left-[-400px] top-1/2 -translate-y-1/2" 
    : "right-[-400px] top-1/2 -translate-y-1/2";

  // Idea 2: Interactive Hover Spotlight
  // Increased opacity to 0.18 to make the mouse spotlight stand out
  const spotlightColor = glowColor === "emerald" 
    ? "rgba(0, 230, 118, 0.18)" 
    : "rgba(140, 255, 90, 0.18)";

  return (
    <div 
      className={`relative w-full h-full overflow-hidden group ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* Background layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* Ambient Glow */}
        <div 
          className={`absolute ${positionClasses} w-[800px] h-[800px] rounded-full blur-[140px]`}
          style={{ background: ambientColor }}
        />

        {/* Mouse Spotlight */}
        <motion.div
          className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                700px circle at ${mouseX}px ${mouseY}px,
                ${spotlightColor},
                transparent 80%
              )
            `,
          }}
        />
      </div>

      {/* Content layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
