"use client";

import SectionHighlight from "./SectionHighlight";

import Reveal from "./Reveal";
import { useState, useEffect } from "react";
import MagneticButton from "./MagneticButton";

export default function EventsSection() {
  // Set target date for October 1st, 2026
  const targetDate = new Date("2026-10-01T00:00:00").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBlocks = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINS", value: timeLeft.minutes },
    { label: "SECS", value: timeLeft.seconds }
  ];

  return (
    <section id="events" className="relative z-10  border-b border-[rgba(255,255,255,0.05)] ">
      <SectionHighlight glowColor="lime" glowPosition="right" className="py-[110px]">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="font-space tracking-[.22em] uppercase text-[11.5px] text-[var(--color-gold)] flex items-center justify-center gap-[10px] mb-[16px] before:content-[''] before:w-[26px] before:h-[1px] before:bg-[var(--color-gold)] after:content-[''] after:w-[26px] after:h-[1px] after:bg-[var(--color-gold)]">
          Next Big Kickoff
        </div>
        
        <Reveal>
          <div className="p-[40px_20px] md:p-[60px_40px] mt-[44px] glass-panel relative overflow-hidden text-center before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_800px_400px_at_50%_0%,rgba(0,230,118,0.15),transparent_70%)] before:z-0">
            <div className="relative z-10">
              <h3 className="font-bebas text-[clamp(28px,5vw,48px)] mb-[40px] uppercase tracking-[.04em] text-white drop-shadow-[0_0_15px_rgba(140,255,90,0.3)]">
                TSL PREMIUM EDITION: 2 <span className="text-[var(--color-gold-hot)] block sm:inline mt-2 sm:mt-0">— COMING SOON</span>
              </h3>
              
              <div className="flex justify-center gap-[8px] sm:gap-[16px] md:gap-[24px]">
                {mounted && timeBlocks.map((block, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-[60px] h-[70px] sm:w-[80px] sm:h-[90px] md:w-[120px] md:h-[130px] rounded-[12px] md:rounded-[16px] bg-gradient-to-b from-[#0a1a13] to-[#04120a] border border-[var(--color-gold-hot)]/40 flex items-center justify-center mb-[10px] sm:mb-[12px] shadow-[0_0_20px_rgba(0,230,118,0.2),inset_0_0_15px_rgba(140,255,90,0.1)] relative overflow-hidden group animate-[pulse_2s_infinite]">
                      {/* Neon glow effect line on top */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--color-gold-hot)] shadow-[0_0_10px_var(--color-gold-hot)]"></div>
                      
                      <span className="font-bebas text-[32px] sm:text-[42px] md:text-[64px] text-[var(--color-gold-hot)] tracking-[.05em] drop-shadow-[0_0_12px_rgba(140,255,90,0.8)]">
                        {String(block.value).padStart(2, '0')}
                      </span>
                    </div>
                    <span className="font-space text-[10px] sm:text-[12px] md:text-[14px] text-[var(--color-muted)] tracking-[.2em] uppercase">
                      {block.label}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-[50px]">
                <MagneticButton>
                  <a href="#book" className="font-space text-[14px] tracking-[.08em] uppercase py-[16px] px-[32px] rounded-lg inline-flex items-center gap-[10px] cursor-pointer glass-button justify-center text-center">
                    Register Interest
                  </a>
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
          </SectionHighlight>
    </section>
  );
}
