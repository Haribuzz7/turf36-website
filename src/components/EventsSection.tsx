"use client";

import Reveal from "./Reveal";

type EventsProps = {
  events: any[];
};

export default function EventsSection({ events }: EventsProps) {
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
          const day = String(date.getDate()).padStart(2, '0');
          const year = date.getFullYear();

          const now = new Date();
          const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
          const eventDayTime = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
          
          const diffTime = eventDayTime - today;
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          
          let statusText = "";
          let statusClasses = "";
          let isPast = false;
          
          if (diffDays < 0) {
            statusText = "Past Tournament";
            statusClasses = "text-[var(--color-muted)] border-[var(--color-card-stroke)] bg-black/40";
            isPast = true;
          } else if (diffDays === 0) {
            statusText = "🔴 Tournament is Live";
            statusClasses = "text-red-400 border-red-500/30 bg-red-500/10";
          } else {
            statusText = `${diffDays} Days to go`;
            statusClasses = "text-[var(--color-gold)] border-[var(--color-gold)]/30 bg-[var(--color-gold)]/10";
          }

          return (
            <Reveal key={event.id} delay={index * 0.1}>
              <div className={`flex flex-col gap-0 mt-[16px] bg-[var(--color-card)] border border-[var(--color-card-stroke)] rounded-[14px] backdrop-blur-md overflow-hidden transition-colors ${!isPast ? 'hover:border-[var(--color-gold)]/30' : ''}`}>
                {event.poster_url && (
                  <img src={event.poster_url} alt={event.title} className={`w-full h-[200px] sm:h-[300px] object-cover object-center border-b border-[var(--color-card-stroke)] ${isPast ? 'grayscale opacity-70' : ''}`} />
                )}
                <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr_auto] items-center gap-[22px] p-[22px]">
                  <div className={`font-space text-center p-[12px_8px] border border-[var(--color-card-stroke)] rounded-[10px] bg-black/40 ${isPast ? 'opacity-60' : ''}`}>
                    <b className="block text-[14px] text-[var(--color-muted)] font-bold mb-1">{month}</b>
                    <b className="block text-[32px] text-[var(--color-gold-hot)] font-bold leading-none mb-1">{day}</b>
                    <span className="text-[10px] uppercase text-[var(--color-muted)] tracking-[.1em]">{year}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className={`font-bebas text-[22px] sm:text-[28px] tracking-[.02em] text-white ${isPast ? 'opacity-70' : ''}`}>{event.title}</h3>
                      <span className={`font-space text-[10px] uppercase tracking-wider px-2 py-1 rounded-md border ${statusClasses}`}>
                        {statusText}
                      </span>
                    </div>
                    <p className="text-[13px] sm:text-[14px] text-[var(--color-muted)]">{event.subtitle}</p>
                  </div>
                  
                  {!isPast && (
                    <a href="#book" className="font-space text-[12.5px] tracking-[.08em] uppercase py-[14px] px-[26px] rounded-lg inline-flex items-center gap-[10px] cursor-pointer border border-[var(--color-card-stroke)] text-[var(--color-white)] hover:bg-[var(--color-gold)] hover:text-black hover:border-[var(--color-gold)] transition-all duration-300 justify-center text-center">
                      Register Now
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          );
        }) : (
          <Reveal>
             <div className="p-[32px] mt-[24px] text-center border border-[var(--color-card-stroke)] rounded-[14px] bg-[var(--color-card)]">
               <p className="text-[var(--color-muted)]">No tournaments scheduled at the moment.</p>
             </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
