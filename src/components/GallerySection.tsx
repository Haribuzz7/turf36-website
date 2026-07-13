"use client";

import Reveal from "./Reveal";

type GalleryProps = {
  images: {
    image_url: string;
    subtitle?: string;
    event_date: string;
    isPlaceholder?: boolean;
  }[];
};

export default function GallerySection({ images }: GalleryProps) {
  // If no dynamic images are provided from Supabase yet, show placeholders
  const displayImages = images.length > 0 ? images : Array(6).fill({ isPlaceholder: true, image_url: '/placeholder' });

  return (
    <section id="gallery" className="relative py-[140px] bg-[var(--color-concrete)] border-b border-[var(--color-slate)] border-opacity-20 overflow-hidden">
      {/* Stone texture overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>

      <div className="max-w-[1280px] mx-auto px-7 relative z-10">
        <div className="font-space tracking-[.25em] uppercase text-[10px] text-[var(--color-slate)] flex items-center gap-[12px] mb-[20px] before:content-[''] before:w-[30px] before:h-[1px] before:bg-[var(--color-slate)]">
          Visual Archive
        </div>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-[20px] mb-[60px]">
          <Reveal>
            <h2 className="font-bebas font-normal tracking-wide text-[clamp(40px,6vw,70px)] leading-[0.9] uppercase text-[var(--color-text-main)] max-w-[500px]">
              Every Match Memory
            </h2>
          </Reveal>
          <p className="text-[var(--color-text-main)] opacity-70 font-light text-[15px] leading-[1.8] max-w-[340px] pb-[4px]">
            Latest action from the ground. Updates directly from the Admin dashboard.
          </p>
        </div>
        
        {/* Magazine-style photography layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[20px]">
          {displayImages.map((img, idx) => {
            // Give the first item and the 6th item a larger span for a magazine editorial look
            const isFeatured = idx === 0 || idx === 5;
            return (
              <div 
                key={idx} 
                className={`group relative overflow-hidden bg-[var(--color-soft-stone)] cursor-pointer
                  ${isFeatured ? 'col-span-2 row-span-2 aspect-[4/3] sm:aspect-auto sm:h-full' : 'aspect-square sm:aspect-[4/5]'}
                `}
              >
                {img.image_url !== '/placeholder' ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={img.image_url} alt="Gallery image" className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]" />
                ) : (
                  <div className="absolute inset-0 bg-[var(--color-slate)] opacity-10"></div>
                )}
                
                {/* Magazine style elegant text overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-text-main)] via-[var(--color-text-main)]/20 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>

                <div className="absolute bottom-0 left-0 right-0 p-[24px] flex flex-col transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  {img.subtitle && (
                    <span className="text-[var(--color-warm-white)] font-inter font-light text-[16px] leading-tight mb-2">
                      {img.subtitle}
                    </span>
                  )}
                  <span className="font-space text-[9px] tracking-[.2em] text-[var(--color-warm-white)] opacity-60 uppercase">
                    {img.isPlaceholder ? 'Visual Memory' : new Date(img.event_date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
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
