"use client";

import Reveal from "./Reveal";

type GalleryProps = {
  images: any[];
};

export default function GallerySection({ images }: GalleryProps) {
  // If no dynamic images are provided from Supabase yet, show placeholders
  const displayImages = images.length > 0 ? images : Array(6).fill({ isPlaceholder: true, image_url: '/placeholder' });

  return (
    <section id="gallery" className="relative py-[110px] border-b border-[var(--color-line)]">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="font-space tracking-[.22em] uppercase text-[11.5px] text-[var(--color-gold)] flex items-center gap-[10px] mb-[16px] before:content-[''] before:w-[26px] before:h-[1px] before:bg-[var(--color-gold)]">
          Match Memory
        </div>
        <Reveal>
          <h2 className="font-bebas font-normal tracking-[.01em] text-[clamp(34px,5.4vw,58px)] leading-[1.02] uppercase">
            Every <span className="text-[var(--color-gold-hot)]">Match Memory</span>
          </h2>
        </Reveal>
        <p className="text-[var(--color-muted)] font-light text-[15.5px] leading-[1.7] max-w-[560px]">
          Latest action from the ground. Updates directly from the Admin dashboard.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[16px] mt-[44px]">
          {displayImages.map((img, idx) => {
            return (
              <div 
                key={idx} 
                className={`aspect-[16/9] rounded-[16px] relative overflow-hidden border border-[var(--color-card-stroke)] flex flex-col justify-end p-[18px] cursor-pointer bg-[var(--color-card)] group transition-all duration-500 hover:border-[var(--color-gold)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)] hover:-translate-y-1`}
              >
                {img.image_url !== '/placeholder' ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={img.image_url} alt="Gallery image" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110" />
                ) : (
                  <div className="absolute inset-0 bg-[#090909] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[rgba(212,175,55,0.05)] before:to-transparent before:z-0"></div>
                )}
                
                {/* Always show a dark gradient at bottom so text is readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                {/* Glassmorphic overlay on hover */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-500"></div>

                <div className="relative z-10 flex flex-col">
                  {img.subtitle && (
                    <span className="text-white font-medium text-[13px] sm:text-[14px] leading-tight mb-1 drop-shadow-md">
                      {img.subtitle}
                    </span>
                  )}
                  <span className="font-space text-[10px] sm:text-[11px] tracking-[.05em] text-[var(--color-gold)] font-bold drop-shadow-md uppercase">
                    {img.isPlaceholder ? 'MEMORY' : new Date(img.event_date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
