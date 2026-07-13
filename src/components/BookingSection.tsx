"use client";
import Reveal from "./Reveal";
import { useState } from "react";
import NeonIcon from "./NeonIcon";
import { Sun, Moon, Info } from "lucide-react";
import { motion } from "framer-motion";

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
    <section id="book" className="relative py-[140px] bg-[var(--color-bg-deep)] border-b border-[var(--color-glass-border)] overflow-hidden">
      
      {/* Neon Glow Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(20,255,114,0.05)_0%,transparent_60%)] blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-200px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(20,255,114,0.03)_0%,transparent_60%)] blur-[80px] pointer-events-none" />

      <div className="max-w-[1120px] mx-auto px-7 relative z-10">
        <div className="font-space tracking-[.25em] uppercase text-[10px] text-[var(--color-neon-primary)] flex items-center gap-[12px] mb-[20px] before:content-[''] before:w-[30px] before:h-[1px] before:bg-[var(--color-neon-primary)] before:opacity-50">
          Reserve a slot
        </div>
        <Reveal>
          <h2 className="font-bebas font-normal tracking-wide text-[clamp(40px,6vw,70px)] leading-[0.9] uppercase text-[var(--color-text-main)] drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Book The Pitch
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[60px] mt-[60px]">
          <div>
            <p className="text-[var(--color-text-muted)] font-light text-[15px] leading-[1.8] max-w-[500px]">
              Pick a session, tell us who&apos;s playing, and you&apos;re confirmed. No more calling around to check if the slot is free.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] mt-[40px]">
              {/* Glass Panel 1 */}
              <div className="glass-panel p-[24px] rounded-3xl flex flex-col justify-between h-full">
                <div>
                  <div className="mb-[16px]">
                    <NeonIcon Icon={Sun} size={20} />
                  </div>
                  <span className="font-space text-[10px] tracking-[.1em] uppercase text-[var(--color-text-muted)] block mb-1">Morning Session</span>
                </div>
                <b className="font-bebas text-[var(--color-text-main)] text-[32px] block tracking-wide mt-[10px] drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">₹400 <span className="text-[16px] text-[var(--color-text-muted)] font-sans font-light">/ hr</span></b>
              </div>
              
              {/* Glass Panel 2 */}
              <div className="glass-panel p-[24px] rounded-3xl flex flex-col justify-between h-full">
                <div>
                  <div className="mb-[16px]">
                    <NeonIcon Icon={Moon} size={20} />
                  </div>
                  <span className="font-space text-[10px] tracking-[.1em] uppercase text-[var(--color-text-muted)] block mb-1">Evening (Floodlit)</span>
                </div>
                <b className="font-bebas text-[var(--color-text-main)] text-[32px] block tracking-wide mt-[10px] drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">₹500 <span className="text-[16px] text-[var(--color-text-muted)] font-sans font-light">/ hr</span></b>
              </div>
            </div>
            
            <p className="text-[10px] text-[var(--color-text-muted)] font-space tracking-[.05em] mt-[16px] uppercase opacity-60">* Weekend prices may vary</p>
            
            <div className="flex gap-[16px] mt-[30px] p-[20px] glass-panel rounded-2xl text-[13px] text-[var(--color-text-muted)]">
              <span className="mt-[2px]"><NeonIcon Icon={Info} size={16} noBackground /></span>
              <span className="leading-[1.6]"><b className="text-[var(--color-neon-primary)] font-semibold font-space tracking-wider uppercase text-[10px] block mb-1">Direct WhatsApp Booking</b> Submitting this form will open WhatsApp with your pre-filled details. Just hit send!</span>
            </div>
          </div>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit} 
            className="glass-panel rounded-[32px] p-[32px] md:p-[40px] flex flex-col gap-[24px]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
              <div>
                <label className="text-[10px] tracking-[.15em] uppercase text-[var(--color-text-muted)] font-space mb-[8px] block">Name</label>
                <input type="text" placeholder="Your name" required value={name} onChange={e => setName(e.target.value)} className="w-full bg-transparent border-b border-[var(--color-glass-border)] text-[var(--color-text-main)] p-[10px_0] font-inter text-[15px] focus:outline-none focus:border-[var(--color-neon-primary)] transition-colors rounded-none placeholder:text-[var(--color-text-muted)] placeholder:opacity-50" />
              </div>
              <div>
                <label className="text-[10px] tracking-[.15em] uppercase text-[var(--color-text-muted)] font-space mb-[8px] block">Phone</label>
                <input type="tel" placeholder="9xxxxxxxxx" required value={phone} onChange={e => setPhone(e.target.value)} className="w-full bg-transparent border-b border-[var(--color-glass-border)] text-[var(--color-text-main)] p-[10px_0] font-inter text-[15px] focus:outline-none focus:border-[var(--color-neon-primary)] transition-colors rounded-none placeholder:text-[var(--color-text-muted)] placeholder:opacity-50" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
              <div>
                <label className="text-[10px] tracking-[.15em] uppercase text-[var(--color-text-muted)] font-space mb-[8px] block">Date</label>
                <input type="date" required value={date} onChange={e => setDate(e.target.value)} className="w-full bg-transparent border-b border-[var(--color-glass-border)] text-[var(--color-text-main)] p-[10px_0] font-inter text-[15px] focus:outline-none focus:border-[var(--color-neon-primary)] transition-colors rounded-none style-date-picker" />
              </div>
              <div>
                <label className="text-[10px] tracking-[.15em] uppercase text-[var(--color-text-muted)] font-space mb-[8px] block">Time Slot</label>
                <div className="flex flex-col gap-[16px]">
                  <div className="flex items-center gap-[10px]">
                    <span className="text-[var(--color-neon-primary)] text-[10px] tracking-[.1em] uppercase w-[35px] font-space opacity-80">From</span>
                    <input type="text" placeholder="e.g. 6:00 PM" required value={startTime} onChange={e => setStartTime(e.target.value)} className="flex-1 bg-transparent border-b border-[var(--color-glass-border)] text-[var(--color-text-main)] p-[6px_0] font-inter text-[14px] focus:outline-none focus:border-[var(--color-neon-primary)] transition-colors rounded-none placeholder:text-[var(--color-text-muted)] placeholder:opacity-50" />
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <span className="text-[var(--color-neon-primary)] text-[10px] tracking-[.1em] uppercase w-[35px] font-space opacity-80">To</span>
                    <input type="text" placeholder="e.g. 8:00 PM" required value={endTime} onChange={e => setEndTime(e.target.value)} className="flex-1 bg-transparent border-b border-[var(--color-glass-border)] text-[var(--color-text-main)] p-[6px_0] font-inter text-[14px] focus:outline-none focus:border-[var(--color-neon-primary)] transition-colors rounded-none placeholder:text-[var(--color-text-muted)] placeholder:opacity-50" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <label className="text-[10px] tracking-[.15em] uppercase text-[var(--color-text-muted)] font-space mb-[8px] block">Sport</label>
              <select required value={sport} onChange={e => setSport(e.target.value)} className="w-full bg-transparent border-b border-[var(--color-glass-border)] text-[var(--color-text-main)] p-[10px_0] font-inter text-[15px] focus:outline-none focus:border-[var(--color-neon-primary)] transition-colors rounded-none [&>option]:bg-[var(--color-bg-deep)]">
                <option value="" disabled className="text-[var(--color-text-muted)]">Choose sport</option>
                <option value="Cricket">Cricket</option>
                <option value="Football">Football</option>
                <option value="Pickleball">Pickleball</option>
              </select>
            </div>
            <button type="submit" className="group mt-[20px] font-space text-[12px] tracking-[.2em] uppercase py-[20px] px-[32px] rounded-full flex items-center justify-center gap-[10px] cursor-pointer bg-[rgba(20,255,114,0.1)] border border-[rgba(20,255,114,0.3)] text-[var(--color-text-main)] hover:bg-[var(--color-neon-primary)] hover:text-[var(--color-bg-deep)] hover:shadow-[0_0_40px_rgba(20,255,114,0.4)] transition-all duration-500 font-bold">
              Proceed to WhatsApp
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
