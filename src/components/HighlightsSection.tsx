"use client";

import { useState } from "react";
import Reveal from "./Reveal";

function getEmbedUrl(url: string, silentLoop: boolean = false) {
  if (!url) return null;
  // Match YouTube
  const ytMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);
  if (ytMatch && ytMatch[1]) {
    if (silentLoop) {
      return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&mute=1&loop=1&playlist=${ytMatch[1]}&controls=0&showinfo=0&rel=0`;
    }
    return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&loop=1&playlist=${ytMatch[1]}`;
  }
  // Match Instagram
  const igMatch = url.match(/(?:instagram\.com.*\/p\/|instagram\.com.*\/reel\/)([\w-]+)/i);
  if (igMatch && igMatch[1]) {
    return `https://www.instagram.com/p/${igMatch[1]}/embed`;
  }
  return null;
}

export default function HighlightsSection({ highlights = [] }: { highlights?: any[] }) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  if (!highlights || highlights.length === 0) return null;

  return (
    <>
      <section id="highlights" className="relative py-[110px] border-b border-[var(--color-line)]">
        <div className="max-w-[1120px] mx-auto px-7">
          <div className="font-space tracking-[.22em] uppercase text-[11.5px] text-[var(--color-gold)] flex items-center gap-[10px] mb-[16px] before:content-[''] before:w-[26px] before:h-[1px] before:bg-[var(--color-gold)]">
            Reels
          </div>
          <Reveal>
            <h2 className="font-bebas font-normal tracking-[.01em] text-[clamp(34px,5.4vw,58px)] leading-[1.02] uppercase">
              Match <span className="text-[var(--color-gold-hot)]">Highlights</span>
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[16px] mt-[44px]">
            {highlights.map((hl, index) => {
              const embedUrl = getEmbedUrl(hl.video_url);
              const silentEmbedUrl = getEmbedUrl(hl.video_url, true);
              
              return (
                <Reveal key={hl.id} delay={index * 0.1}>
                  <a 
                    href={hl.video_url} 
                    target="_blank" 
                    rel="noreferrer" 
                    onClick={(e) => {
                      if (embedUrl) {
                        e.preventDefault();
                        setActiveVideo(embedUrl);
                      }
                    }}
                    className="block rounded-[12px] overflow-hidden border border-[var(--color-card-stroke)] bg-[var(--color-card)] hover:border-[var(--color-gold)] transition-colors group cursor-pointer"
                  >
                    <div className="aspect-[16/10] bg-gradient-to-br from-[#171310] to-[#2a2010] relative flex items-center justify-center overflow-hidden">
                      {/* Show silent looping video if possible, else fallback to thumbnail */}
                      {silentEmbedUrl && silentEmbedUrl.includes('youtube') ? (
                        <iframe 
                          src={silentEmbedUrl}
                          className="absolute inset-0 w-full h-[150%] -top-[25%] pointer-events-none opacity-60 group-hover:opacity-90 transition-opacity duration-500" 
                          frameBorder="0" 
                          allow="autoplay; encrypted-media" 
                        />
                      ) : (
                        hl.thumbnail_url && <img src={hl.thumbnail_url} alt={hl.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" />
                      )}
                      <div className="w-[46px] h-[46px] rounded-full bg-[rgba(201,162,39,0.9)] flex items-center justify-center text-[#0a0a0a] pl-1 relative z-10 group-hover:scale-110 transition-transform shadow-[0_4px_20px_rgba(0,0,0,0.5)]">▶</div>
                    </div>
                    <div className="p-[14px_16px]">
                      <b className="text-[14px] font-medium block">{hl.title}</b>
                      <span className="block text-[11px] text-[var(--color-muted)] mt-[4px] font-space">{hl.subtitle}</span>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Player Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 lg:p-8 animate-fade-in">
          <div className="relative w-full max-w-[1000px] aspect-video bg-black rounded-[12px] overflow-hidden border border-[var(--color-card-stroke)] shadow-[0_0_50px_rgba(201,162,39,0.1)]">
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/60 hover:bg-[var(--color-gold)] text-white hover:text-black rounded-full flex items-center justify-center transition-colors text-lg"
            >
              ✕
            </button>
            <iframe
              src={activeVideo}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {/* Invisible backdrop to close on click outside */}
          <div className="absolute inset-0 z-[-1]" onClick={() => setActiveVideo(null)}></div>
        </div>
      )}
    </>
  );
}
