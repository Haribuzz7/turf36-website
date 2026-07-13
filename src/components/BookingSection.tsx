"use client";

import Reveal from "./Reveal";
import { useState } from "react";
import PremiumIcon from "./PremiumIcon";

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
    <section id="book" className="relative py-[140px] bg-[var(--color-soft-stone)] border-b border-[var(--color-concrete)]">
      {/* Subtle concrete texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>

      <div className="max-w-[1120px] mx-auto px-7 relative z-10">
        <div className="font-space tracking-[.25em] uppercase text-[10px] text-[var(--color-forest)] flex items-center gap-[12px] mb-[20px] before:content-[''] before:w-[30px] before:h-[1px] before:bg-[var(--color-forest)]">
          Reserve a slot
        </div>
        <Reveal>
          <h2 className="font-bebas font-normal tracking-wide text-[clamp(40px,6vw,70px)] leading-[0.9] uppercase text-[var(--color-text-main)]">
            Book The Turf
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[60px] mt-[60px]">
          <div>
            <p className="text-[var(--color-text-muted)] font-light text-[15px] leading-[1.8] max-w-[500px]">
              Pick a session, tell us who&apos;s playing, and you&apos;re confirmed. No more calling around to check if the slot is free.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] mt-[40px]">
              {/* Architectural Panel 1 */}
              <div className="p-[24px] rounded-[16px] bg-[var(--color-warm-white)] border border-[var(--color-concrete)] shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between h-full hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-shadow">
                <div>
                  <div className="mb-[16px] w-[32px] h-[32px] rounded-full bg-[var(--color-soft-stone)] flex items-center justify-center text-[var(--color-forest)]">
                    <PremiumIcon name="sun" noContainer className="w-[16px] h-[16px]" />
                  </div>
                  <span className="font-space text-[10px] tracking-[.1em] uppercase text-[var(--color-text-muted)] block mb-1">Morning Session</span>
                </div>
                <b className="font-bebas text-[var(--color-text-main)] text-[32px] block tracking-wide mt-[10px]">₹400 <span className="text-[16px] text-[var(--color-text-muted)] font-sans font-light">/ hr</span></b>
              </div>
              
              {/* Architectural Panel 2 */}
              <div className="p-[24px] rounded-[16px] bg-[var(--color-warm-white)] border border-[var(--color-concrete)] shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between h-full hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-shadow">
                <div>
                  <div className="mb-[16px] w-[32px] h-[32px] rounded-full bg-[var(--color-soft-stone)] flex items-center justify-center text-[var(--color-slate)]">
                    <PremiumIcon name="moon" noContainer className="w-[16px] h-[16px]" />
                  </div>
                  <span className="font-space text-[10px] tracking-[.1em] uppercase text-[var(--color-text-muted)] block mb-1">Evening (Floodlit)</span>
                </div>
                <b className="font-bebas text-[var(--color-text-main)] text-[32px] block tracking-wide mt-[10px]">₹500 <span className="text-[16px] text-[var(--color-text-muted)] font-sans font-light">/ hr</span></b>
              </div>
            </div>
            
            <p className="text-[10px] text-[var(--color-text-muted)] font-space tracking-[.05em] mt-[16px] uppercase">* Weekend prices may vary</p>
            
            <div className="flex gap-[16px] mt-[30px] p-[20px] border border-[var(--color-concrete)] rounded-[12px] bg-transparent text-[13px] text-[var(--color-text-muted)]">
              <span className="mt-[2px] text-[var(--color-forest)]"><PremiumIcon name="info" noContainer className="w-[16px] h-[16px]" /></span>
              <span className="leading-[1.6]"><b className="text-[var(--color-forest)] font-semibold">Direct WhatsApp Booking</b> — Submitting this form will open WhatsApp with your pre-filled details. Just hit send!</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-[var(--color-warm-white)] border border-[var(--color-concrete)] rounded-[20px] p-[32px] md:p-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.03)] flex flex-col gap-[20px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
              <div>
                <label className="text-[10px] tracking-[.15em] uppercase text-[var(--color-text-muted)] font-space mb-[8px] block">Name</label>
                <input type="text" placeholder="Your name" required value={name} onChange={e => setName(e.target.value)} className="w-full bg-transparent border-b border-[var(--color-concrete)] text-[var(--color-text-main)] p-[10px_0] font-inter text-[15px] focus:outline-none focus:border-[var(--color-forest)] transition-colors rounded-none" />
              </div>
              <div>
                <label className="text-[10px] tracking-[.15em] uppercase text-[var(--color-text-muted)] font-space mb-[8px] block">Phone</label>
                <input type="tel" placeholder="9xxxxxxxxx" required value={phone} onChange={e => setPhone(e.target.value)} className="w-full bg-transparent border-b border-[var(--color-concrete)] text-[var(--color-text-main)] p-[10px_0] font-inter text-[15px] focus:outline-none focus:border-[var(--color-forest)] transition-colors rounded-none" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
              <div>
                <label className="text-[10px] tracking-[.15em] uppercase text-[var(--color-text-muted)] font-space mb-[8px] block">Date</label>
                <input type="date" required value={date} onChange={e => setDate(e.target.value)} className="w-full bg-transparent border-b border-[var(--color-concrete)] text-[var(--color-text-main)] p-[10px_0] font-inter text-[15px] focus:outline-none focus:border-[var(--color-forest)] transition-colors rounded-none" />
              </div>
              <div>
                <label className="text-[10px] tracking-[.15em] uppercase text-[var(--color-text-muted)] font-space mb-[8px] block">Time Slot</label>
                <div className="flex flex-col gap-[12px]">
                  <div className="flex items-center gap-[10px]">
                    <span className="text-[var(--color-text-muted)] text-[10px] tracking-[.1em] uppercase w-[35px] font-space">From</span>
                    <input type="text" placeholder="e.g. 6:00 PM" required value={startTime} onChange={e => setStartTime(e.target.value)} className="flex-1 bg-transparent border-b border-[var(--color-concrete)] text-[var(--color-text-main)] p-[6px_0] font-inter text-[14px] focus:outline-none focus:border-[var(--color-forest)] transition-colors rounded-none" />
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <span className="text-[var(--color-text-muted)] text-[10px] tracking-[.1em] uppercase w-[35px] font-space">To</span>
                    <input type="text" placeholder="e.g. 8:00 PM" required value={endTime} onChange={e => setEndTime(e.target.value)} className="flex-1 bg-transparent border-b border-[var(--color-concrete)] text-[var(--color-text-main)] p-[6px_0] font-inter text-[14px] focus:outline-none focus:border-[var(--color-forest)] transition-colors rounded-none" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <label className="text-[10px] tracking-[.15em] uppercase text-[var(--color-text-muted)] font-space mb-[8px] block">Sport</label>
              <select required value={sport} onChange={e => setSport(e.target.value)} className="w-full bg-transparent border-b border-[var(--color-concrete)] text-[var(--color-text-main)] p-[10px_0] font-inter text-[15px] focus:outline-none focus:border-[var(--color-forest)] transition-colors rounded-none">
                <option value="" disabled>Choose sport</option>
                <option value="Cricket">Cricket</option>
                <option value="Football">Football</option>
                <option value="Pickleball">Pickleball</option>
              </select>
            </div>
            <button type="submit" className="mt-[20px] font-space text-[11px] tracking-[.15em] uppercase py-[18px] px-[32px] rounded-full flex items-center justify-center gap-[10px] cursor-pointer bg-[var(--color-forest)] text-white hover:bg-[#254634] shadow-[0_4px_20px_rgba(49,91,68,0.15)] hover:shadow-[0_8px_30px_rgba(49,91,68,0.25)] hover:scale-[1.01] transition-all border-none">
              Proceed to WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
