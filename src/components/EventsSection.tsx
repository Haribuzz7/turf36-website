"use client";

import Reveal from "./Reveal";
import { useState, useEffect } from "react";

type EventsProps = {
  events: any[];
};

export default function EventsSection({ events }: EventsProps) {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });
  const [targetEvent, setTargetEvent] = useState<any>(null);

  useEffect(() => {
    // Find the nearest upcoming event
    const now = new Date().getTime();
    const upcoming = events.filter(e => new Date(e.event_date).getTime() > now);
    
    if (upcoming.length > 0) {
      setTargetEvent(upcoming[0]);
    } else {
      // Fallback target if no events (30 days from now)
      setTargetEvent({ title: "Next Event TBD", subtitle: "Stay tuned for updates", event_date: new Date(now + 30 * 24 * 60 * 60 * 1000).toISOString() });
    }
  }, [events]);

  useEffect(() => {
    if (!targetEvent) return;
    
    const target = new Date(targetEvent.event_date).getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff <= 0) return;
      
      setTimeLeft({
        d: Math.floor(diff / (1000 * 60 * 60 * 24)),
        h: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        m: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        s: Math.floor((diff % (1000 * 60)) / 1000)
      });
    };
    
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [targetEvent]);

  return (
    <section id="events" className="relative py-[110px] border-b border-[var(--color-line)]">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="font-space tracking-[.22em] uppercase text-[11.5px] text-[var(--color-gold)] flex items-center gap-[10px] mb-[16px] before:content-[''] before:w-[26px] before:h-[1px] before:bg-[var(--color-gold)]">
          What's coming up
        </div>
        <Reveal>
          <h2 className="font-bebas font-normal tracking-[.01em] text-[clamp(34px,5.4vw,58px)] leading-[1.02] uppercase">
            Events & <span className="text-[var(--color-gold-hot)]">Tournaments</span>
          </h2>
        </Reveal>
        
        {events.length > 0 ? events.map((event, index) => {
          const date = new Date(event.event_date);
          const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();
          const year = date.getFullYear();

          return (
            <Reveal key={event.id} delay={index * 0.1}>
              <div className="flex flex-col gap-0 mt-[16px] bg-[var(--color-card)] border border-[var(--color-card-stroke)] rounded-[14px] backdrop-blur-md overflow-hidden transition-colors hover:border-[var(--color-gold)]/30">
                {event.poster_url && (
                  <img src={event.poster_url} alt={event.title} className="w-full h-[200px] sm:h-[300px] object-cover object-center border-b border-[var(--color-card-stroke)]" />
                )}
                <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr_auto] items-center gap-[22px] p-[22px]">
                  <div className="font-space text-center p-[12px_8px] border border-[var(--color-card-stroke)] rounded-[10px] bg-black/40">
                    <b className="block text-[26px] text-[var(--color-gold-hot)] font-bold leading-none mb-1">{month}</b>
                    <span className="text-[10px] uppercase text-[var(--color-muted)] tracking-[.1em]">{year}</span>
                  </div>
                  <div>
                    <h3 className="font-bebas text-[22px] sm:text-[28px] tracking-[.02em] mb-[4px] text-white">{event.title}</h3>
                    <p className="text-[13px] sm:text-[14px] text-[var(--color-muted)]">{event.subtitle}</p>
                  </div>
                  <a href="#book" className="font-space text-[12.5px] tracking-[.08em] uppercase py-[14px] px-[26px] rounded-lg inline-flex items-center gap-[10px] cursor-pointer border border-[var(--color-card-stroke)] text-[var(--color-white)] hover:bg-[var(--color-gold)] hover:text-black hover:border-[var(--color-gold)] transition-all duration-300 justify-center text-center">
                    Register Now
                  </a>
                </div>
              </div>
            </Reveal>
          );
        }) : (
          <Reveal>
             <div className="p-[32px] mt-[24px] text-center border border-[var(--color-card-stroke)] rounded-[14px] bg-[var(--color-card)]">
               <p className="text-[var(--color-muted)]">No upcoming events scheduled at the moment.</p>
             </div>
          </Reveal>
        )}

        {targetEvent && (
          <Reveal delay={0.2}>
            <div className="flex gap-[10px] mt-[36px]">
              <div className="p-[14px_18px] rounded-[10px] border border-[var(--color-card-stroke)] bg-[var(--color-card)] text-center min-w-[70px]">
                <b className="block font-space text-[24px] text-[var(--color-gold-hot)] font-bold">{String(timeLeft.d).padStart(2, '0')}</b>
                <span className="text-[10px] text-[var(--color-muted)] uppercase tracking-[.08em]">Days</span>
              </div>
              <div className="p-[14px_18px] rounded-[10px] border border-[var(--color-card-stroke)] bg-[var(--color-card)] text-center min-w-[70px]">
                <b className="block font-space text-[24px] text-[var(--color-gold-hot)] font-bold">{String(timeLeft.h).padStart(2, '0')}</b>
                <span className="text-[10px] text-[var(--color-muted)] uppercase tracking-[.08em]">Hrs</span>
              </div>
              <div className="p-[14px_18px] rounded-[10px] border border-[var(--color-card-stroke)] bg-[var(--color-card)] text-center min-w-[70px]">
                <b className="block font-space text-[24px] text-[var(--color-gold-hot)] font-bold">{String(timeLeft.m).padStart(2, '0')}</b>
                <span className="text-[10px] text-[var(--color-muted)] uppercase tracking-[.08em]">Min</span>
              </div>
              <div className="p-[14px_18px] rounded-[10px] border border-[var(--color-card-stroke)] bg-[var(--color-card)] text-center min-w-[70px]">
                <b className="block font-space text-[24px] text-[var(--color-gold-hot)] font-bold">{String(timeLeft.s).padStart(2, '0')}</b>
                <span className="text-[10px] text-[var(--color-muted)] uppercase tracking-[.08em]">Sec</span>
              </div>
            </div>
            <p className="text-[11px] font-space tracking-[.1em] text-[var(--color-muted-2)] uppercase mt-[16px] ml-[4px]">
              Countdown to: {targetEvent.title}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
