"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import SectionHighlight from "./SectionHighlight";

import Reveal from "./Reveal";

type GalleryProps = {
  images: { id?: string; [key: string]: any }[];
};

export default function GallerySection({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<any | null>(null);

  // If no dynamic images are provided from Supabase yet, show placeholders
  const displayImages = images.length > 0 ? images : Array(6).fill({ isPlaceholder: true, image_url: '/placeholder' });

  return (
    <>
      <section id="gallery" className="relative z-10  border-b border-[rgba(255,255,255,0.05)] ">
        <SectionHighlight glowColor="emerald" glowPosition="left" className="py-[110px]">
        <div className="max-w-[1120px] mx-auto px-7">
          <div className="font-space tracking-[.22em] uppercase text-[11.5px] text-[var(--color-gold)] flex items-center gap-[10px] mb-[16px] before:content-[''] before:w-[26px] before:h-[1px] before:bg-[var(--color-gold)]">
            Turf Memory
          </div>
          <Reveal>
            <h2 className="font-bebas font-normal tracking-[.01em] text-[clamp(34px,5.4vw,58px)] leading-[1.02] uppercase">
              Team <span className="text-[var(--color-gold-hot)]">Extreme</span>
            </h2>
          </Reveal>
          <p className="text-[var(--color-muted)] font-light text-[15.5px] leading-[1.7] max-w-[560px]">
            Together We can, TE.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[16px] mt-[44px]">
            {displayImages.map((img, idx) => {
              return (
                <div 
                  key={idx} 
                  onClick={() => {
                    if (!img.isPlaceholder) setSelectedImage(img);
                  }}
                  className={`aspect-[16/9] rounded-[12px] relative overflow-hidden border border-[var(--color-card-stroke)] flex flex-col justify-end p-[14px] cursor-pointer bg-[var(--color-card)] group`}
                >
                  {img.image_url !== '/placeholder' ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={img.image_url} alt="Gallery image" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a1712] to-[#2b2313] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:from-40% before:to-[rgba(0,0,0,0.75)] before:z-0"></div>
                  )}
                  
                  {/* Always show a dark gradient at bottom so text is readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-70"></div>

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
            </SectionHighlight>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-[1200px] w-full max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute -top-12 right-0 text-white hover:text-[var(--color-gold-hot)] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={selectedImage.image_url} 
              alt="Enlarged gallery view" 
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl" 
            />
            
            <div className="mt-4 text-center">
              {selectedImage.subtitle && (
                <div className="text-white font-medium text-lg mb-1">{selectedImage.subtitle}</div>
              )}
              {selectedImage.event_date && (
                <div className="text-[var(--color-gold)] font-space tracking-widest text-sm uppercase">
                  {new Date(selectedImage.event_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
