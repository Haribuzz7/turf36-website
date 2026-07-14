"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface OdometerProps {
  value: number;
  suffix?: string;
  className?: string;
}

export default function Odometer({ value, suffix = "", className = "" }: OdometerProps) {
  const [inView, setInView] = useState(false);
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    // Delay slightly to allow the grid to fade in before animating
    const timer = setTimeout(() => {
      setInView(true);
      setCurrentValue(value);
    }, 5500); // 5.5s delay to match the intro sequence in HeroSection

    return () => clearTimeout(timer);
  }, [value]);

  const numArr = String(currentValue).split("");
  const targetArr = String(value).split("");

  // Pad the current value array to match target length if needed
  while (numArr.length < targetArr.length) {
    numArr.unshift("0");
  }

  return (
    <div className={`flex items-center justify-center overflow-hidden h-[1.2em] leading-none ${className}`}>
      {numArr.map((digit, idx) => (
        <Digit key={idx} value={digit} inView={inView} />
      ))}
      {suffix && <span className="ml-[2px]">{suffix}</span>}
    </div>
  );
}

function Digit({ value, inView }: { value: string; inView: boolean }) {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const index = numbers.indexOf(value) !== -1 ? numbers.indexOf(value) : 0;

  return (
    <div className="relative flex flex-col justify-start overflow-hidden h-[1em] w-[0.6em] items-center">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: inView ? `-${index * 10}0%` : 0 }}
        transition={{
          duration: 2,
          ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for satisfying snap
        }}
        className="absolute top-0 left-0 right-0 flex flex-col items-center text-center"
      >
        {numbers.map((num, i) => (
          <span key={i} className="h-[1em] flex items-center justify-center w-full">
            {num}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
