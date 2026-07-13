"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show splash screen for 1.8 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#060605] flex items-center justify-center flex-col"
        >
          <motion.div
            initial={{ scale: 0.9, filter: "brightness(0.5) blur(10px)" }}
            animate={{ scale: 1, filter: "brightness(1) blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            {/* The soft gold glow behind the logo */}
            <div className="absolute inset-0 bg-[#D4AF37] blur-[60px] opacity-20 rounded-full scale-150 animate-pulse"></div>
            
            <img 
              src="/logo.png" 
              alt="Turf 36 Logo" 
              className="w-48 md:w-64 relative z-10 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
