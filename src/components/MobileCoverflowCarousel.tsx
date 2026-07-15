"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

interface CarouselProps {
  images: any[];
  onImageClick: (img: any) => void;
}

export default function MobileCoverflowCarousel({ images, onImageClick }: CarouselProps) {
  return (
    <div className="w-full pb-10">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 35, // Rotate cards heavily
          stretch: 0,
          depth: 250, // Push side cards back
          modifier: 1,
          slideShadows: true, // Swiper calculates nice CSS shadows
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="w-full py-8"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx} className="w-[280px] sm:w-[320px]">
            <div 
              onClick={() => {
                if (!img.isPlaceholder) onImageClick(img);
              }}
              className="aspect-[4/5] w-full rounded-[16px] relative overflow-hidden border-2 border-[var(--color-card-stroke)] flex flex-col justify-end p-[20px] bg-[var(--color-card)] shadow-[0_15px_35px_rgba(0,0,0,0.5)] cursor-pointer"
            >
              <div className="absolute inset-0">
                {img.image_url !== '/placeholder' ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={img.image_url} alt="Gallery image" className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1712] to-[#2b2313] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:from-40% before:to-[rgba(0,0,0,0.75)] before:z-0"></div>
                )}
              </div>
              
              {/* Always show a dark gradient at bottom so text is readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90"></div>

              {/* Content Layer */}
              <div className="relative z-10 flex flex-col items-start">
                {img.subtitle && (
                  <span className="text-white font-medium text-[18px] leading-tight mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {img.subtitle}
                  </span>
                )}
                <span className="font-space text-[11px] tracking-[.08em] text-[var(--color-gold-hot)] font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] uppercase px-2 py-1 bg-black/50 rounded border border-white/20">
                  {img.isPlaceholder ? 'MEMORY' : new Date(img.event_date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Pagination Container */}
      <div className="swiper-pagination !bottom-0 !relative mt-4"></div>
      
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: var(--color-muted);
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: var(--color-gold-hot);
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
