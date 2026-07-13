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
    <section id="gallery" className="relative py-[140px] bg-[var(--color-bg-deep)] border-b border-[var(--color-glass-border)] overflow-hidden">
      
      {/* Neon glowing center */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-deep)] to-[var(--color-bg-dark)] z-0" />
      <div className="absolute bottom-0 right-0 w-[50%] h-[50%] opacity-[0.03] mix-blend-screen bg-[radial-gradient(circle,var(--color-neon-primary)_0%,transparent_70%)] blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-[1280px] mx-auto px-7 relative z-10">
        <div className="font-space tracking-[.25em] uppercase text-[10px] text-[var(--color-neon-primary)] flex items-center gap-[12px] mb-[20px] before:content-[''] before:w-[30px] before:h-[1px] before:bg-[var(--color-neon-primary)] before:opacity-50">
          Visual Archive
        </div>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-[20px] mb-[60px]">
          <Reveal>
            <h2 className="font-bebas font-normal tracking-wide text-[clamp(40px,6vw,70px)] leading-[0.9] uppercase text-[var(--color-text-main)] max-w-[500px] drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              Every Match Memory
            </h2>
          </Reveal>
          <p className="text-[var(--color-text-muted)] font-light text-[15px] leading-[1.8] max-w-[340px] pb-[4px]">
            Latest action from the ground. Updates directly from the Admin dashboard.
          </p>
        </div>
        
        {/* Magazine-style photography layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[24px]">
          {displayImages.map((img, idx) => {
            const isFeatured = idx === 0 || idx === 5;
            return (
              <div 
                key={idx} 
                className={`group relative overflow-hidden bg-[var(--color-glass-bg)] cursor-pointer rounded-3xl border border-[var(--color-glass-border)]
                  ${isFeatured ? 'col-span-2 row-span-2 aspect-[4/3] sm:aspect-auto sm:h-full' : 'aspect-square sm:aspect-[4/5]'}
                `}
              >
                {img.image_url !== '/placeholder' ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={img.image_url} alt="Gallery image" className="absolute inset-0 w-full h-full object-cover filter contrast-125 saturate-50 group-hover:saturate-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]" />
                ) : (
                  <div className="absolute inset-0 bg-[#0a1511] opacity-50"></div>
                )}
                
                {/* Magazine style elegant text overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-deep)] via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

                <div className="absolute bottom-0 left-0 right-0 p-[24px] flex flex-col transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-10">
                  {img.subtitle && (
                    <span className="text-[var(--color-text-main)] font-inter font-light text-[16px] leading-tight mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                      {img.subtitle}
                    </span>
                  )}
                  <span className="font-space text-[9px] tracking-[.2em] text-[var(--color-neon-primary)] uppercase drop-shadow-[0_0_5px_rgba(20,255,114,0.5)]">
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
