"use client";

import Reveal from "./Reveal";

type GalleryProps = {
  images: string[];
};

export default function GallerySection({ images }: GalleryProps) {
  // If no dynamic images are provided from Supabase yet, show placeholders
  const displayImages = images.length > 0 ? images : Array(6).fill('/placeholder');

  return (
    <section id="gallery" className="relative py-[110px] border-b border-[var(--color-line)]">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="font-space tracking-[.22em] uppercase text-[11.5px] text-[var(--color-gold)] flex items-center gap-[10px] mb-[16px] before:content-[''] before:w-[26px] before:h-[1px] before:bg-[var(--color-gold)]">
          Media
        </div>
        <Reveal>
          <h2 className="font-bebas font-normal tracking-[.01em] text-[clamp(34px,5.4vw,58px)] leading-[1.02] uppercase">
            Every <span className="text-[var(--color-gold-hot)]">Match Memory</span>
          </h2>
        </Reveal>
        <p className="text-[var(--color-muted)] font-light text-[15.5px] leading-[1.7] max-w-[560px]">
          Latest action from the ground. Updates directly from the Admin dashboard.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-[12px] mt-[44px]">
          {displayImages.map((src, idx) => {
            // Give specific sizes to certain indices to create a masonry-like grid
            const isLarge = idx === 0 || idx === 5;
            
            return (
              <div 
                key={idx} 
                className={`\${isLarge ? 'col-span-2 row-span-2' : ''} aspect-square rounded-[12px] relative overflow-hidden border border-[var(--color-card-stroke)] flex items-end p-[14px] cursor-pointer bg-[var(--color-card)]`}
              >
                {src !== '/placeholder' ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={src} alt="Gallery image" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1712] to-[#2b2313] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:from-40% before:to-[rgba(0,0,0,0.75)] before:z-0"></div>
                )}
                <span className="font-space text-[11px] tracking-[.05em] text-[var(--color-white)] relative z-10 opacity-70 drop-shadow-md">
                  {src === '/placeholder' ? 'MEMORY' : ''}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
