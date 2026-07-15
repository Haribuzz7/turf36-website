"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Parallax3DCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Parallax3DCard({ children, className = "", onClick }: Parallax3DCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for the mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for smooth animation
  const springConfig = { damping: 25, stiffness: 200, mass: 1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Calculate rotations based on mouse position
  // Max rotation: 15 degrees
  const rotateX = useTransform(springY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-15deg", "15deg"]);

  // Calculate glare position
  const glareX = useTransform(springX, [-0.5, 0.5], ["100%", "-100%"]);
  const glareY = useTransform(springY, [-0.5, 0.5], ["100%", "-100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    let clientX, clientY;

    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    
    const mouseX = clientX - rect.left;
    const mouseY = clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Reset to center
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className={`[perspective:1000px] ${className}`}
      onClick={onClick}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={(e) => {
          handleMouseEnter();
          handleMouseMove(e);
        }}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full relative cursor-pointer group"
      >
        {children}

        {/* Dynamic Glare Overlay */}
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none rounded-[12px] mix-blend-soft-light transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.4) 0%, transparent 50%)`,
            opacity: isHovered ? 1 : 0,
            transform: "translateZ(1px)",
          }}
        />
      </motion.div>
    </div>
  );
}
