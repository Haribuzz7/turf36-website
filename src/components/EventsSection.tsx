"use client";

import Reveal from "./Reveal";
import PremiumIcon from "./PremiumIcon";

type EventsProps = {
  events: Record<string, unknown>[];
};

export default function EventsSection({ events }: EventsProps) {
  return (
    <section id="events" className="relative py-[140px] bg-[#111412] overflow-hidden">
      {/* Deep Forest Green ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080908] to-[#111412] z-0" />
      <div className="absolute top-0 right-0 w-[80%] h-[80%] opacity-20 mix-blend-screen bg-[radial-gradient(ellipse_at_top_right,var(--color-forest)_0%,transparent_70%)] blur-[80px] pointer-events-none z-0"></div>
      
      {/* Floodlight amber glare */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] opacity-15 mix-blend-screen bg-[radial-gradient(circle,var(--color-accent)_0%,transparent_60%)] blur-[50px] pointer-events-none z-0"></div>

      <div className="max-w-[1120px] mx-auto px-7 relative z-10">
        <div className="font-space tracking-[.25em] uppercase text-[10px] text-[var(--color-accent)] flex items-center gap-[12px] mb-[20px] before:content-[''] before:w-[30px] before:h-[1px] before:bg-[var(--color-accent)] before:opacity-50">
          What&apos;s coming up
        </div>
        <Reveal>
          <h2 className="font-bebas font-normal tracking-wide text-[clamp(40px,6vw,70px)] leading-[0.9] uppercase text-[var(--color-warm-white)] drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            Events & Tournaments
          </h2>
        </Reveal>
        
        <div className="mt-[60px] flex flex-col gap-[24px]">
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
            
            let statusContent: React.ReactNode = "";
            let statusClasses = "";
            let isPast = false;
            
            if (diffDays < 0) {
              statusContent = "Past Tournament";
              statusClasses = "text-[var(--color-text-muted)] opacity-50";
              isPast = true;
            } else if (diffDays === 0) {
              statusContent = (
                <div className="flex items-center gap-2">
                  <PremiumIcon name="live" noContainer className="w-[14px] h-[14px]" />
                  Live Now
                </div>
              );
              statusClasses = "text-[var(--color-accent)] drop-shadow-[0_0_10px_rgba(217,108,36,0.5)]";
            } else {
              statusContent = `${diffDays} Days to go`;
              statusClasses = "text-[var(--color-warm-white)] opacity-80";
            }

            return (
              <Reveal key={event.id} delay={index * 0.1}>
                <div className={`group flex flex-col md:flex-row bg-[rgba(255,255,255,0.01)] border border-[rgba(255,255,255,0.03)] rounded-[20px] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:bg-[rgba(255,255,255,0.03)] ${!isPast ? 'hover:border-[var(--color-accent)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]' : ''}`}>
                  {event.poster_url && (
                    <div className="md:w-[320px] shrink-0 overflow-hidden relative">
                      <img src={event.poster_url} alt={event.title} className={`w-full h-[240px] md:h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 ${isPast ? 'grayscale opacity-40' : 'opacity-80 group-hover:opacity-100'}`} />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111412] hidden md:block"></div>
                    </div>
                  )}
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-[100px_1fr_auto] items-center gap-[30px] p-[32px] md:p-[40px] relative z-10">
                    <div className={`font-space text-center p-[20px_10px] border-r border-[rgba(255,255,255,0.05)] ${isPast ? 'opacity-40' : ''}`}>
                      <b className="block text-[14px] text-[var(--color-warm-white)] opacity-60 font-medium tracking-widest mb-1">{month}</b>
                      <b className="block text-[44px] text-[var(--color-warm-white)] font-bold leading-none mb-2">{day}</b>
                      <span className="text-[10px] uppercase text-[var(--color-warm-white)] opacity-40 tracking-[.2em]">{year}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-4 mb-3 flex-wrap">
                        <h3 className={`font-bebas text-[28px] sm:text-[36px] tracking-wide text-white ${isPast ? 'opacity-50' : 'group-hover:text-[var(--color-accent)] transition-colors'}`}>{event.title}</h3>
                        <span className={`font-space text-[10px] uppercase tracking-[.15em] font-bold ${statusClasses}`}>
                          {statusContent}
                        </span>
                      </div>
                      <p className={`text-[14px] sm:text-[15px] font-light leading-relaxed max-w-[400px] ${isPast ? 'text-[var(--color-text-muted)] opacity-50' : 'text-[var(--color-warm-white)] opacity-70'}`}>{event.subtitle}</p>
                    </div>
                    
                    {!isPast && (
                      <a href="#book" className="font-space text-[11px] tracking-[.15em] uppercase py-[18px] px-[32px] rounded-full inline-flex items-center justify-center gap-[10px] cursor-pointer border border-[rgba(255,255,255,0.1)] text-[var(--color-warm-white)] hover:bg-[var(--color-accent)] hover:text-white hover:border-[var(--color-accent)] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(217,108,36,0.3)]">
                        Register Now
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          }) : (
            <Reveal>
               <div className="p-[60px_32px] text-center border border-[rgba(255,255,255,0.03)] rounded-[20px] bg-[rgba(255,255,255,0.01)]">
                 <p className="text-[var(--color-text-muted)] font-light font-inter">No tournaments scheduled at the moment.</p>
               </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
