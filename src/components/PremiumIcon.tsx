import React from 'react';

type PremiumIconProps = {
  src: string;
  alt: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
};

export default function PremiumIcon({ src, alt, className = '', size = 'md' }: PremiumIconProps) {
  // Define responsive sizes
  const sizeClasses = {
    sm: 'w-[24px] h-[24px] md:w-[28px] md:h-[28px]',
    md: 'w-[32px] h-[32px] md:w-[40px] md:h-[40px]',
    lg: 'w-[40px] h-[40px] md:w-[48px] md:h-[48px]'
  };

  return (
    <div 
      className={`
        relative flex items-center justify-center rounded-[12px] 
        bg-gradient-to-br from-[#1a1712]/80 to-[#2b2313]/80 backdrop-blur-md 
        border border-[var(--color-gold)]/30 
        shadow-[0_4px_20px_rgba(201,162,39,0.15)] 
        group 
        hover:-translate-y-1 hover:scale-[1.03] 
        hover:shadow-[0_8px_30px_rgba(201,162,39,0.35)] 
        hover:border-[var(--color-gold)]/60 
        transition-all duration-300 ease-out flex-shrink-0
        ${sizeClasses[size]} 
        ${className}
      `}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-[75%] h-[75%] object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]"
      />
    </div>
  );
}
