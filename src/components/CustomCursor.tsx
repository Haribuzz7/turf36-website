"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring animation for smooth spotlight movement
  const springConfig = { damping: 25, stiffness: 120 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 300); // 300 is half the width/height of the spotlight
      cursorY.set(e.clientY - 300);
    };
    
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <>
      {/* Interactive Global Spotlight */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] z-[9999] opacity-30 mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          background: "radial-gradient(circle, rgba(140,255,90,0.15) 0%, transparent 60%)",
        }}
      />
      
      {/* Floating Ambient Particles Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[var(--color-gold-hot)] opacity-30 blur-[2px]"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animation: `float ${Math.random() * 15 + 10}s ease-in-out infinite`,
              animationDelay: `-${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
