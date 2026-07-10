"use client";

import Reveal from "./Reveal";
import { useState } from "react";
import { Sun, Moon, Info } from "lucide-react";

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
    <section id="book" className="relative py-[110px] border-b border-[var(--color-line)]">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="font-space tracking-[.22em] uppercase text-[11.5px] text-[var(--color-gold)] flex items-center gap-[10px] mb-[16px] before:content-[''] before:w-[26px] before:h-[1px] before:bg-[var(--color-gold)]">
          Reserve a slot
        </div>
        <Reveal>
          <h2 className="font-bebas font-normal tracking-[.01em] text-[clamp(34px,5.4vw,58px)] leading-[1.02] uppercase">
            Book The <span className="text-[var(--color-gold-hot)]">Turf</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-[44px] mt-[52px]">
          <div>
            <p className="text-[var(--color-muted)] font-light text-[15.5px] leading-[1.7] max-w-[560px]">
              Pick a session, tell us who's playing, and you're confirmed. No more calling around to check if the slot is free.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px] mt-[20px]">
              <div className="p-[20px] rounded-xl border border-[var(--color-card-stroke)] bg-[var(--color-card)]">
                <div className="mb-[10px]"><Sun size={20} className="text-[var(--color-gold-hot)]" /></div>
                Morning Session
                <b className="font-space text-[var(--color-gold-hot)] text-[20px] block mt-[6px] font-bold">₹400 / hr</b>
              </div>
              <div className="p-[20px] rounded-xl border border-[var(--color-card-stroke)] bg-[var(--color-card)]">
                <div className="mb-[10px]"><Moon size={20} className="text-[var(--color-muted)]" /></div>
                Evening (Floodlit)
                <b className="font-space text-[var(--color-gold-hot)] text-[20px] block mt-[6px] font-bold">₹500 / hr</b>
              </div>
            </div>
            <p className="text-[12px] text-[var(--color-muted-2)] font-space tracking-[.05em] mt-[12px]">* In weekends price may vary</p>
            <div className="flex gap-[14px] mt-[20px] p-[14px_16px] border border-[var(--color-card-stroke)] rounded-[10px] bg-[var(--color-card)] text-[13px] text-[var(--color-muted)]">
              <span className="mt-[2px]"><Info size={16} /></span>
              <span><b className="text-[var(--color-gold-hot)]">Direct WhatsApp Booking</b> — Submitting this form will open WhatsApp with your pre-filled details. Just hit send!</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-[var(--color-card)] border border-[var(--color-card-stroke)] rounded-[14px] p-[26px] backdrop-blur-md flex flex-col gap-[14px]">
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
            <button type="submit" className="font-space text-[12.5px] tracking-[.08em] uppercase py-[14px] px-[26px] rounded-lg flex items-center justify-center gap-[10px] cursor-pointer bg-[var(--color-gold)] text-[#0a0a0a] font-bold hover:bg-[var(--color-gold-hot)] transition-colors border-none mt-[6px]">
              Proceed to WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
