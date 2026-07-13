"use client";

import Reveal from "./Reveal";

const MOCK_GALLERY = [
  { image_url: "/placeholder", title: "Midnight Tournament", colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-2", aspect: "aspect-[16/9] md:aspect-auto" },
  { image_url: "/placeholder", title: "Championship Finals", colSpan: "col-span-1", rowSpan: "row-span-1", aspect: "aspect-[4/3]" },
  { image_url: "/placeholder", title: "Pre-match Warmup", colSpan: "col-span-1", rowSpan: "row-span-1", aspect: "aspect-[4/3]" },
  { image_url: "/placeholder", title: "Trophy Presentation", colSpan: "col-span-1", rowSpan: "row-span-1", aspect: "aspect-[4/3]" },
  { image_url: "/placeholder", title: "Crowd Under Lights", colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-1", aspect: "aspect-[21/9]" }
];

export default function GallerySection() {
  return (
    <section id="gallery" className="relative py-[140px] border-b border-[var(--color-glass-border)] bg-[var(--color-carbon)]">
      <div className="max-w-[1400px] mx-auto px-7">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-[20px] mb-[60px]">
          <Reveal type="blur">
            <h2 className="font-bebas font-normal tracking-[.01em] text-[clamp(40px,6vw,70px)] leading-[0.9] text-white">
              NIGHT <span className="text-[var(--color-muted-2)]">FRAMES</span>
            </h2>
          </Reveal>
          <Reveal type="fade" delay={0.2}>
            <a href="#" className="font-space text-[10px] tracking-[.2em] uppercase text-[var(--color-muted)] hover:text-white transition-colors border-b border-[var(--color-glass-border)] pb-[4px] w-fit">
              Explore Documentary
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] md:gap-[24px] auto-rows-[300px]">
          {MOCK_GALLERY.map((img, idx) => (
            <Reveal key={idx} type="scale" delay={idx * 0.1} className={`w-full h-full ${img.colSpan} ${img.rowSpan}`}>
              <div 
                className={`w-full h-full ${img.aspect} relative overflow-hidden group bg-[#050505] cursor-none`}
              >
                {img.image_url !== '/placeholder' ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={img.image_url} alt={img.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05] filter grayscale-[30%] group-hover:grayscale-0" />
                ) : (
                  <div className="absolute inset-0 bg-[#050505] before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_70%)] before:z-0 transition-transform duration-[1.5s] group-hover:scale-[1.05]"></div>
                )}
                
                {/* Cinematic Vignette Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.8)_100%)] opacity-80 group-hover:opacity-60 transition-opacity duration-700"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="font-space text-[9px] uppercase tracking-[.3em] text-[var(--color-muted)] mb-2">Moments</span>
                  <h4 className="font-bebas text-[28px] text-white tracking-wide">{img.title}</h4>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
