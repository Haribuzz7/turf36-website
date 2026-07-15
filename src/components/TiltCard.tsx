"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isTouching = useRef(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    let clientX, clientY;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
      isTouching.current = true;
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
      if (isTouching.current) return; // Do not override active touch interaction

      let gamma = event.gamma || 0;
      let beta = event.beta || 0;

      const maxTilt = 20; 
      let deltaBeta = beta - 45;
      
      if (gamma > maxTilt) gamma = maxTilt;
      if (gamma < -maxTilt) gamma = -maxTilt;
      
      if (deltaBeta > maxTilt) deltaBeta = maxTilt;
      if (deltaBeta < -maxTilt) deltaBeta = -maxTilt;

      const xPct = gamma / (maxTilt * 2);
      const yPct = deltaBeta / (maxTilt * 2);

      x.set(xPct);
      y.set(yPct);
    };

    if (typeof window !== 'undefined' && window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handleOrientation);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("deviceorientation", handleOrientation);
      }
    };
  }, [x, y]);

  const handleMouseLeave = () => {
    isTouching.current = false;
    x.set(0);
    y.set(0);
  };

  const handleCardClick = () => {
    // Request iOS gyroscope permission if it exists
    if (typeof window !== 'undefined' && typeof (window as any).DeviceOrientationEvent !== 'undefined' && typeof (window as any).DeviceOrientationEvent.requestPermission === 'function') {
      (window as any).DeviceOrientationEvent.requestPermission()
        .then((response: string) => {
          if (response === 'granted') {
            // Permission granted
          }
        })
        .catch(console.error);
    }
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={(e) => {
        handleCardClick();
        handleMouseMove(e);
      }}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseLeave}
      onClick={handleCardClick}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative h-full ${className}`}
    >
      <div
        style={{
          transform: "translateZ(30px)",
          transformStyle: "preserve-3d",
        }}
        className="h-full w-full"
      >
        {children}
      </div>
    </motion.div>
  );
}
