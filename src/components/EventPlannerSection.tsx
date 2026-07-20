"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionHighlight from "./SectionHighlight";
import Reveal from "./Reveal";

const DRAGGABLE_ITEMS = [
  { id: "dj", label: "DJ Booth", emoji: "🎧" },
  { id: "cake", label: "Cake Table", emoji: "🎂" },
  { id: "food", label: "Food Stall", emoji: "🍕" },
  { id: "trophy", label: "Trophy Stand", emoji: "🏆" },
  { id: "vip", label: "VIP Seating", emoji: "🪑" },
];

export default function EventPlannerSection() {
  const constraintsRef = useRef(null);
  const [items, setItems] = useState<{ id: string; type: string; emoji: string; label: string }[]>([]);

  // Function to add a new item to the turf
  const addItem = (type: string, emoji: string, label: string) => {
    setItems((prev) => [...prev, { id: `${type}-${Date.now()}`, type, emoji, label }]);
  };

  // Function to clear all items
  const clearItems = () => {
    setItems([]);
  };

  // Format WhatsApp Message
  const getWhatsAppLink = () => {
    if (items.length === 0) return "https://wa.me/919876543210?text=I%20want%20to%20book%20an%20event%20at%20Turf%2036";
    
    const itemCounts: Record<string, number> = {};
    items.forEach(item => {
      itemCounts[item.label] = (itemCounts[item.label] || 0) + 1;
    });

    const itemsText = Object.entries(itemCounts)
      .map(([label, count]) => `${count}x ${label}`)
      .join(", ");

    const text = `Hi Turf 36! I used the Event Planner on your website. I want to book an event with the following setup: ${itemsText}.`;
    return `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="event-planner" className="relative z-10 border-b border-[rgba(255,255,255,0.05)] bg-[var(--color-void)]">
      <SectionHighlight glowColor="gold" glowPosition="left" className="py-[110px]">
        <div className="max-w-[1120px] mx-auto px-7">
          <div className="font-space tracking-[.22em] uppercase text-[11.5px] text-[var(--color-gold)] flex items-center gap-[10px] mb-[16px] before:content-[''] before:w-[26px] before:h-[1px] before:bg-[var(--color-gold)]">
            Design Your Event
          </div>
          <Reveal>
            <h2 className="font-bebas font-normal tracking-[.01em] text-[clamp(34px,5.4vw,58px)] leading-[1.02] uppercase mb-[20px]">
              Interactive <span className="text-[var(--color-gold-hot)]">Event Planner</span>
            </h2>
          </Reveal>
          
          <Reveal delay={0.1}>
            <p className="text-[var(--color-muted)] font-space text-[13px] md:text-[14px] leading-relaxed max-w-[600px] mb-[40px]">
              Planning a birthday or corporate tournament? Tap the items below to add them to the pitch, then drag them around to design your perfect layout before booking.
            </p>
          </Reveal>

          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* The Toolbox */}
            <Reveal delay={0.2} className="w-full lg:w-[300px] flex-shrink-0">
              <div className="glass-panel p-6 h-full flex flex-col">
                <h3 className="font-bebas text-[24px] text-white tracking-widest mb-6 border-b border-white/10 pb-4">Equipment</h3>
                
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {DRAGGABLE_ITEMS.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => addItem(item.id, item.emoji, item.label)}
                      className="bg-black/40 border border-[var(--color-card-stroke)] hover:border-[var(--color-gold)] rounded-xl p-4 flex flex-col items-center justify-center gap-2 transition-all hover:bg-white/5 active:scale-95 cursor-pointer"
                    >
                      <span className="text-[28px]">{item.emoji}</span>
                      <span className="font-space text-[10px] uppercase text-white/80 tracking-wider text-center">{item.label}</span>
                    </button>
                  ))}
                </div>

                <div className="mt-auto flex flex-col gap-3">
                  <button onClick={clearItems} className="font-space text-[11px] uppercase tracking-widest text-[var(--color-muted)] hover:text-red-400 transition-colors py-2 text-center">
                    Clear Layout
                  </button>
                  <a 
                    href={getWhatsAppLink()} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full bg-[var(--color-gold)] text-black font-space font-bold uppercase tracking-widest text-[12px] py-4 rounded-xl flex justify-center items-center gap-2 hover:bg-white transition-colors"
                  >
                    Send to WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>

            {/* The Canvas */}
            <Reveal delay={0.3} className="flex-1 w-full">
              <div 
                ref={constraintsRef}
                className="w-full aspect-[4/3] max-h-[600px] bg-[#1a2318] rounded-[24px] border border-[var(--color-card-stroke)] relative overflow-hidden shadow-2xl"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px'
                }}
              >
                {/* Turf pitch markings */}
                <div className="absolute inset-[40px] border-2 border-white/20 rounded-lg pointer-events-none">
                  {/* Center line */}
                  <div className="absolute top-0 bottom-0 left-1/2 -ml-[1px] w-[2px] bg-white/20"></div>
                  {/* Center circle */}
                  <div className="absolute top-1/2 left-1/2 -mt-[60px] -ml-[60px] w-[120px] h-[120px] rounded-full border-2 border-white/20"></div>
                  {/* Penalty boxes */}
                  <div className="absolute top-1/2 -mt-[80px] left-0 w-[80px] h-[160px] border-2 border-l-0 border-white/20"></div>
                  <div className="absolute top-1/2 -mt-[80px] right-0 w-[80px] h-[160px] border-2 border-r-0 border-white/20"></div>
                </div>

                <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10 font-bebas text-[8vw] text-white tracking-widest">
                  TURF 36
                </div>

                {/* Render Draggable Items */}
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.1}
                    dragMomentum={false}
                    whileHover={{ scale: 1.1 }}
                    whileDrag={{ scale: 1.2, zIndex: 50, cursor: "grabbing" }}
                    initial={{ scale: 0, opacity: 0, x: "50%", y: "50%" }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute w-[60px] h-[60px] bg-black/60 backdrop-blur-md border border-[var(--color-gold)] rounded-full flex flex-col items-center justify-center cursor-grab shadow-[0_10px_20px_rgba(0,0,0,0.5)] z-10"
                    style={{
                      left: 'calc(50% - 30px)',
                      top: 'calc(50% - 30px)'
                    }}
                  >
                    <span className="text-[24px] pointer-events-none">{item.emoji}</span>
                  </motion.div>
                ))}

              </div>
            </Reveal>

          </div>
        </div>
      </SectionHighlight>
    </section>
  );
}
