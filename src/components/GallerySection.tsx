"use client";

import Reveal from "./Reveal";

const MOCK_GALLERY = [
  { image_url: "/placeholder", title: "Morning Dew", colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-2", aspect: "aspect-[16/9] md:aspect-auto" },
  { image_url: "/placeholder", title: "Clubhouse", colSpan: "col-span-1", rowSpan: "row-span-1", aspect: "aspect-[4/3]" },
  { image_url: "/placeholder", title: "The Pitch", colSpan: "col-span-1", rowSpan: "row-span-1", aspect: "aspect-[4/3]" },
  { image_url: "/placeholder", title: "Weekend Match", colSpan: "col-span-1", rowSpan: "row-span-1", aspect: "aspect-[4/3]" },
  { image_url: "/placeholder", title: "Community", colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-1", aspect: "aspect-[21/9]" }
];

export default function GallerySection() {
  return (
    <section id="gallery" className="relative py-[140px] border-b border-[var(--color-concrete)] bg-[var(--color-warm-white)]">
      <div className="max-w-[1400px] mx-auto px-7">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-[20px] mb-[80px]">
          <Reveal type="blur">
            <h2 className="font-bebas font-normal tracking-wide text-[clamp(40px,6vw,80px)] leading-[0.9] text-[var(--color-text-main)]">
              VISUAL <span className="text-[var(--color-slate)] opacity-60">JOURNAL</span>
            </h2>
          </Reveal>
          <Reveal type="fade" delay={0.2}>
            <a href="#" className="font-space text-[9px] tracking-[.2em] uppercase text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors border-b border-[var(--color-concrete)] pb-[4px] w-fit">
              View Full Gallery
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] md:gap-[40px] auto-rows-[300px]">
          {MOCK_GALLERY.map((img, idx) => (
            <Reveal key={idx} type="scale" delay={idx * 0.1} className={`w-full h-full ${img.colSpan} ${img.rowSpan}`}>
              <div 
                className={`w-full h-full ${img.aspect} relative overflow-hidden group bg-[var(--color-soft-stone)] cursor-none`}
              >
                {img.image_url !== '/placeholder' ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={img.image_url} alt={img.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] filter contrast-[1.05]" />
                ) : (
                  <div className="absolute inset-0 bg-[var(--color-soft-stone)] transition-transform duration-[2s] group-hover:scale-[1.03]"></div>
                )}
                
                {/* Elegant White Vignette Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(247,246,242,0.4)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-[var(--color-warm-white)]/80 to-transparent">
                  <span className="font-space text-[9px] uppercase tracking-[.3em] text-[var(--color-forest)] mb-2">{String(idx + 1).padStart(2, '0')}</span>
                  <h4 className="font-bebas text-[32px] text-[var(--color-text-main)] tracking-wide">{img.title}</h4>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
