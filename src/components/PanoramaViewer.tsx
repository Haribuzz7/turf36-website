"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture, Sphere } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import * as THREE from "three";
import SectionHighlight from "./SectionHighlight";
import Reveal from "./Reveal";

function PanoramaSphere({ imageUrl }: { imageUrl: string }) {
  const texture = useTexture(imageUrl);
  
  return (
    <Sphere args={[500, 60, 40]}>
      <meshBasicMaterial 
        map={texture} 
        side={THREE.BackSide} 
      />
    </Sphere>
  );
}

export default function PanoramaViewer() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section id="virtual-tour" className="relative z-10 border-b border-[rgba(255,255,255,0.05)] pb-[30px]">
      <SectionHighlight glowColor="emerald" glowPosition="left" className="py-[110px]">
        <div className="max-w-[1120px] mx-auto px-7">
          <div className="font-space tracking-[.22em] uppercase text-[11.5px] text-[var(--color-gold)] flex items-center gap-[10px] mb-[16px] before:content-[''] before:w-[26px] before:h-[1px] before:bg-[var(--color-gold)]">
            Immersive Experience
          </div>
          <Reveal>
            <h2 className="font-bebas font-normal tracking-[.01em] text-[clamp(34px,5.4vw,58px)] leading-[1.02] uppercase mb-[44px]">
              Virtual <span className="text-[var(--color-gold-hot)]">Tour</span>
            </h2>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="relative w-full h-[50vh] md:h-[70vh] min-h-[400px] rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-[0_20px_50px_rgba(0,0,0,0.5)] group cursor-grab active:cursor-grabbing">
              {/* Overlay hint that fades out on hover */}
              <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-center bg-black/40 group-hover:opacity-0 transition-opacity duration-700">
                <div className="w-[60px] h-[60px] rounded-full border-2 border-white/50 flex items-center justify-center mb-4 backdrop-blur-sm animate-pulse">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 9c0-4 3-5 7-5s7 1 7 5"/>
                    <path d="M5 15c0 4 3 5 7 5s7-1 7-5"/>
                    <path d="M2 12h20"/>
                    <path d="M12 2v20"/>
                  </svg>
                </div>
                <div className="font-space text-[12px] tracking-[.2em] text-white uppercase drop-shadow-md">
                  Drag to look around
                </div>
              </div>

              <Canvas camera={{ position: [0, 0, 0.1], fov: 75 }}>
                <Suspense fallback={null}>
                  <PanoramaSphere imageUrl="/panaroma.webp" />
                </Suspense>
                <OrbitControls 
                  enableZoom={false} 
                  enablePan={false} 
                  enableDamping={true} 
                  dampingFactor={0.05} 
                  rotateSpeed={-0.5} 
                />
              </Canvas>
            </div>
          </Reveal>
        </div>
      </SectionHighlight>
    </section>
  );
}
