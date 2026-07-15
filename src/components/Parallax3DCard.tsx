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

  React.useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      // Gamma is the left-to-right tilt in degrees, where right is positive
      let gamma = event.gamma || 0;
      // Beta is the front-to-back tilt in degrees, where front is positive
      let beta = event.beta || 0;

      // Clamp values to a reasonable range for a handheld phone
      // Assume neutral beta is around 45 degrees (holding phone tilted up slightly)
      const maxTilt = 25; // max degrees to tilt before maxing out effect
      
      let deltaBeta = beta - 45;
      
      // Clamp
      if (gamma > maxTilt) gamma = maxTilt;
      if (gamma < -maxTilt) gamma = -maxTilt;
      
      if (deltaBeta > maxTilt) deltaBeta = maxTilt;
      if (deltaBeta < -maxTilt) deltaBeta = -maxTilt;

      // Convert to -0.5 to 0.5 range to match mouse behavior
      const xPct = gamma / (maxTilt * 2);
      const yPct = deltaBeta / (maxTilt * 2);

      x.set(xPct);
      y.set(yPct);
      
      if (!isHovered) setIsHovered(true); // Turn on glare and shadows
    };

    // Check if device orientation is supported
    if (typeof window !== 'undefined' && window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handleOrientation);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("deviceorientation", handleOrientation);
      }
    };
  }, [x, y, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Reset to center
    x.set(0);
    y.set(0);
  };

  const handleCardClick = () => {
    // Request iOS gyroscope permission if it exists
    if (typeof window !== 'undefined' && typeof (window as any).DeviceOrientationEvent !== 'undefined' && typeof (window as any).DeviceOrientationEvent.requestPermission === 'function') {
      (window as any).DeviceOrientationEvent.requestPermission()
        .then((response: string) => {
          if (response === 'granted') {
            // Permission granted, gyroscope will now work
          }
        })
        .catch(console.error);
    }
    
    // Call original onClick (e.g. open lightbox)
    if (onClick) onClick();
  };

  return (
    <div
      className={`[perspective:1000px] ${className}`}
      onClick={handleCardClick}
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
