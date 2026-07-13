"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  type?: "fade" | "slide" | "blur" | "scale";
  duration?: number;
  className?: string;
}

export default function Reveal({ children, delay = 0, type = "slide", duration = 0.9, className = "" }: RevealProps) {
  const getVariants = () => {
    switch (type) {
      case "blur":
        return {
          hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
          visible: { opacity: 1, filter: "blur(0px)", y: 0 }
        };
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1 }
        };
      case "fade":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
      case "slide":
      default:
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
