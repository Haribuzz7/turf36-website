"use client";

import { LucideIcon } from 'lucide-react';

type NeonIconProps = {
  Icon: LucideIcon;
  size?: number;
  className?: string;
  noBackground?: boolean;
};

export default function NeonIcon({ Icon, size = 24, className = "", noBackground = false }: NeonIconProps) {
  if (noBackground) {
    return (
      <Icon 
        size={size} 
        strokeWidth={1.5} 
        className={`text-[var(--color-neon-primary)] drop-shadow-[0_0_8px_rgba(20,255,114,0.6)] ${className}`} 
      />
    );
  }

  return (
    <div className={`relative flex items-center justify-center p-3 rounded-2xl bg-[var(--color-glass-bg)] border border-[var(--color-glass-border)] backdrop-blur-md shadow-[0_0_20px_rgba(20,255,114,0.1)] group transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,255,114,0.2)] hover:border-[rgba(20,255,114,0.4)] ${className}`}>
      {/* Background Glow */}
      <div className="absolute inset-0 rounded-2xl bg-[var(--color-neon-primary)] opacity-10 blur-xl transition-opacity duration-300 group-hover:opacity-20"></div>
      
      {/* Icon */}
      <Icon 
        size={size} 
        strokeWidth={1.5} 
        className="text-[var(--color-neon-primary)] drop-shadow-[0_0_8px_rgba(20,255,114,0.6)] relative z-10" 
      />
    </div>
  );
}
