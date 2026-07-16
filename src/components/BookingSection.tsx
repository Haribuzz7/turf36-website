"use client";
 
/* eslint-disable react/no-unescaped-entities */

import SectionHighlight from "./SectionHighlight";
import Reveal from "./Reveal";
import { useState } from "react";
import PremiumIcon from "./PremiumIcon";
import MagneticButton from "./MagneticButton";
import { motion, useMotionValue, useTransform } from "framer-motion";

function MatchTicket({ name, sport, date, time }: any) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[400px] mx-auto aspect-[1.8/1] rounded-2xl p-[1px] bg-gradient-to-br from-[var(--color-gold-hot)] via-[var(--color-gold)] to-[rgba(0,100,50,0.5)] shadow-[0_20px_40px_rgba(0,230,118,0.15)] cursor-default mb-8"
    >
      <div 
        className="w-full h-full bg-[#0a150f] rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden"
        style={{ transform: "translateZ(30px)" }}
      >
        {/* Holographic overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(125deg,transparent_20%,rgba(140,255,90,0.1)_40%,transparent_60%)] animate-[float_4s_ease-in-out_infinite] opacity-50 pointer-events-none"></div>
        
        {/* Notch cutouts */}
        <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[var(--color-void)] rounded-full border-r border-[var(--color-gold)]"></div>
        <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[var(--color-void)] rounded-full border-l border-[rgba(0,100,50,0.5)]"></div>
        {/* Perforation line */}
        <div className="absolute left-[70%] top-0 bottom-0 w-[1px] border-l-2 border-dashed border-[rgba(255,255,255,0.1)]"></div>

        <div className="flex justify-between items-start w-[65%]">
          <div>
            <div className="text-[10px] text-[var(--color-gold)] tracking-widest uppercase mb-1">VIP Access Pass</div>
            <div className="font-bebas text-3xl tracking-wide leading-none">{sport || "SELECT SPORT"}</div>
          </div>
          <PremiumIcon name="trophy" noContainer className="w-6 h-6 text-white/20" />
        </div>

        <div className="mt-4 w-[65%] relative z-10">
          <div className="text-[10px] text-[var(--color-muted)] uppercase tracking-wider mb-1">Player Name</div>
          <div className="font-space text-lg text-white truncate">{name || "____________"}</div>
        </div>

        <div className="flex justify-between items-end w-[65%] mt-4 relative z-10">
          <div>
            <div className="text-[9px] text-[var(--color-muted)] uppercase tracking-wider mb-1">Date</div>
            <div className="font-space text-sm text-white">{date || "--/--/----"}</div>
          </div>
          <div>
            <div className="text-[9px] text-[var(--color-muted)] uppercase tracking-wider mb-1">Time</div>
            <div className="font-space text-sm text-white">{time || "--:--"}</div>
          </div>
        </div>

        {/* Right stub section */}
        <div className="absolute right-0 top-0 bottom-0 w-[30%] flex flex-col justify-center items-center">
          <div className="font-bebas text-4xl text-[var(--color-gold-hot)] -rotate-90 origin-center opacity-80 tracking-widest whitespace-nowrap">
            TURF 36
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function BookingSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [sport, setSport] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedTime = `${startTime} to ${endTime}`;
    const message = `Hi Turf 36! I'd like to book a slot.\n\nName: ${name}\nPhone: ${phone}\nDate: ${date}\nTime: ${formattedTime}\nSport: ${sport}`;
    const whatsappUrl = `https://wa.me/917708929267?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  };

  return (
    <section id="book" className="relative z-10 border-b border-[rgba(255,255,255,0.05)] bg-[var(--color-void)]">
      <SectionHighlight glowColor="lime" glowPosition="right" className="py-[110px]">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="font-space tracking-[.22em] uppercase text-[11.5px] text-[var(--color-gold)] flex items-center gap-[10px] mb-[16px] before:content-[''] before:w-[26px] before:h-[1px] before:bg-[var(--color-gold)]">
          Reserve a slot
        </div>
        <Reveal>
          <h2 className="font-bebas font-normal tracking-[.01em] text-[clamp(34px,5.4vw,58px)] leading-[1.02] uppercase">
            Book The <span className="text-[var(--color-gold-hot)]">Turf</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[44px] mt-[52px]">
          <div className="flex flex-col">
            <MatchTicket name={name} sport={sport} date={date} time={startTime ? (endTime ? `${startTime} - ${endTime}` : startTime) : ""} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
              <div className="p-[20px] rounded-xl glass-panel">
                <div className="mb-[10px]"><PremiumIcon name="sun" noContainer className="w-[20px] h-[20px]" /></div>
                Morning Session
                <b className="font-space text-[var(--color-gold-hot)] text-[20px] block mt-[6px] font-bold">₹400 / hr</b>
              </div>
              <div className="p-[20px] rounded-xl glass-panel">
                <div className="mb-[10px]"><PremiumIcon name="moon" noContainer className="w-[20px] h-[20px] text-[var(--color-muted)] stroke-[var(--color-muted)] drop-shadow-none" /></div>
                Evening (Floodlit)
                <b className="font-space text-[var(--color-gold-hot)] text-[20px] block mt-[6px] font-bold">₹500 / hr</b>
              </div>
            </div>
            <p className="text-[12px] text-[var(--color-muted-2)] font-space tracking-[.05em] mt-[12px]">* In weekends price may vary</p>
            <div className="flex gap-[14px] mt-[20px] p-[14px_16px] glass-panel text-[13px] text-[var(--color-muted)]">
              <span className="mt-[2px]"><PremiumIcon name="info" noContainer className="w-[16px] h-[16px] stroke-[var(--color-gold-hot)] drop-shadow-none" /></span>
              <span><b className="text-[var(--color-gold-hot)]">Direct WhatsApp Booking</b> — Submitting this form will open WhatsApp with your pre-filled details. Just hit send!</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-panel p-[26px] flex flex-col gap-[14px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
              <div>
                <label className="text-[11px] tracking-[.08em] uppercase text-[var(--color-muted)] mb-[6px] block">Name</label>
                <input type="text" placeholder="Your name" required value={name} onChange={e => setName(e.target.value)} className="w-full bg-[rgba(255,255,255,0.03)] border border-[var(--color-line)] text-[var(--color-white)] p-[13px_14px] rounded-lg font-poppins text-[14px] font-light focus:outline-none focus:border-[var(--color-gold)]" />
              </div>
              <div>
                <label className="text-[11px] tracking-[.08em] uppercase text-[var(--color-muted)] mb-[6px] block">Phone</label>
                <input type="tel" placeholder="9xxxxxxxxx" required value={phone} onChange={e => setPhone(e.target.value)} className="w-full bg-[rgba(255,255,255,0.03)] border border-[var(--color-line)] text-[var(--color-white)] p-[13px_14px] rounded-lg font-poppins text-[14px] font-light focus:outline-none focus:border-[var(--color-gold)]" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
              <div>
                <label className="text-[11px] tracking-[.08em] uppercase text-[var(--color-muted)] mb-[6px] block">Date</label>
                <input type="date" required value={date} onChange={e => setDate(e.target.value)} className="w-full bg-[rgba(255,255,255,0.03)] border border-[var(--color-line)] text-[var(--color-white)] p-[13px_14px] rounded-lg font-poppins text-[14px] font-light focus:outline-none focus:border-[var(--color-gold)] [&>option]:bg-[var(--color-charcoal)]" />
              </div>
              <div>
                <label className="text-[11px] tracking-[.08em] uppercase text-[var(--color-muted)] mb-[6px] block">Time Slot</label>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex items-center gap-[6px]">
                    <span className="text-[var(--color-muted)] text-[11px] uppercase w-[35px]">From</span>
                    <input type="text" placeholder="e.g. 6:00 PM" required value={startTime} onChange={e => setStartTime(e.target.value)} className="flex-1 bg-[rgba(255,255,255,0.03)] border border-[var(--color-line)] text-[var(--color-white)] p-[12px_14px] rounded-lg font-poppins text-[13px] font-light focus:outline-none focus:border-[var(--color-gold)]" />
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <span className="text-[var(--color-muted)] text-[11px] uppercase w-[35px]">To</span>
                    <input type="text" placeholder="e.g. 8:00 PM" required value={endTime} onChange={e => setEndTime(e.target.value)} className="flex-1 bg-[rgba(255,255,255,0.03)] border border-[var(--color-line)] text-[var(--color-white)] p-[12px_14px] rounded-lg font-poppins text-[13px] font-light focus:outline-none focus:border-[var(--color-gold)]" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <label className="text-[11px] tracking-[.08em] uppercase text-[var(--color-muted)] mb-[6px] block">Sport</label>
              <select required value={sport} onChange={e => setSport(e.target.value)} className="w-full bg-[rgba(255,255,255,0.03)] border border-[var(--color-line)] text-[var(--color-white)] p-[13px_14px] rounded-lg font-poppins text-[14px] font-light focus:outline-none focus:border-[var(--color-gold)] [&>option]:bg-[var(--color-charcoal)]">
                <option value="" disabled>Choose</option>
                <option value="Cricket">Cricket</option>
                <option value="Football">Football</option>
                <option value="Pickleball">Pickleball</option>
              </select>
            </div>
            <MagneticButton className="w-full mt-4">
              <button type="submit" className="font-space text-[12.5px] tracking-[.08em] uppercase py-[14px] px-[26px] rounded-lg flex items-center justify-center gap-[10px] cursor-pointer glass-button w-full">
                Proceed to WhatsApp
              </button>
            </MagneticButton>
          </form>
        </div>
      </div>
      </SectionHighlight>
    </section>
  );
}
