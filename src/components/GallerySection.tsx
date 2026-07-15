"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
 

import { useState } from "react";
import SectionHighlight from "./SectionHighlight";

import Parallax3DCard from "./Parallax3DCard";
import MobileCoverflowCarousel from "./MobileCoverflowCarousel";
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
      <section id="gallery" className="relative z-10  border-b border-[rgba(255,255,255,0.05)] overflow-hidden">
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
          
          {/* Desktop View: Grid of Parallax 3D Cards */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-[24px] mt-[44px]">
            {displayImages.map((img, idx) => {
              return (
                <Parallax3DCard 
                  key={idx} 
                  onClick={() => {
                    if (!img.isPlaceholder) setSelectedImage(img);
                  }}
                  className="aspect-[16/9] w-full"
                >
                  <div className={`w-full h-full rounded-[12px] relative overflow-hidden border border-[var(--color-card-stroke)] flex flex-col justify-end p-[20px] bg-[var(--color-card)] group shadow-[0_15px_35px_rgba(0,0,0,0.25)]`}>
                    
                    {/* Background Layer - slightly scaled down and moves in opposite direction */}
                    <div 
                      className="absolute inset-[-10%] w-[120%] h-[120%] transition-transform duration-300 group-hover:scale-105"
                      style={{ transform: "translateZ(-20px)" }}
                    >
                      {img.image_url !== '/placeholder' ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={img.image_url} alt="Gallery image" className="absolute inset-0 w-full h-full object-cover" />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1712] to-[#2b2313] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:from-40% before:to-[rgba(0,0,0,0.75)] before:z-0"></div>
                      )}
                    </div>
                    
                    {/* Always show a dark gradient at bottom so text is readable */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" style={{ transform: "translateZ(10px)" }}></div>

                    {/* Content Layer - Pops out heavily */}
                    <div 
                      className="relative z-10 flex flex-col items-start transition-transform duration-300 group-hover:-translate-y-2"
                      style={{ transform: "translateZ(60px)" }}
                    >
                      {img.subtitle && (
                        <span className="text-white font-medium text-[15px] sm:text-[17px] leading-tight mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                          {img.subtitle}
                        </span>
                      )}
                      <span className="font-space text-[10px] sm:text-[11px] tracking-[.08em] text-[var(--color-gold-hot)] font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] uppercase px-2 py-1 bg-black/40 rounded border border-white/10">
                        {img.isPlaceholder ? 'MEMORY' : new Date(img.event_date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
                      </span>
                    </div>
                  </div>
                </Parallax3DCard>
              );
            })}
          </div>

          {/* Mobile View: 3D Swipe Coverflow Carousel */}
          <div className="block md:hidden mt-[44px] -mx-7">
            <MobileCoverflowCarousel 
              images={displayImages} 
              onImageClick={(img) => setSelectedImage(img)}
            />
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
