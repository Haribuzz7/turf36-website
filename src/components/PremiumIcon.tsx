import React from 'react';
import { IconName, IconPaths } from './IconPaths';

type PremiumIconProps = {
  name: IconName;
  className?: string;
  containerClassName?: string;
  size?: 'sm' | 'md' | 'lg';
  noContainer?: boolean;
};

export default function PremiumIcon({ 
  name, 
  className = '', 
  containerClassName = '',
  size = 'md',
  noContainer = false
}: PremiumIconProps) {
  
  // Icon sizes
  const iconSizeClasses = {
    sm: 'w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px]',
    md: 'w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] md:w-[28px] md:h-[28px]',
    lg: 'w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] md:w-[40px] md:h-[40px]'
  };

  // Container padding based on size
  const containerSizeClasses = {
    sm: 'p-[8px]',
    md: 'p-[12px] md:p-[14px]',
    lg: 'p-[16px] md:p-[20px]'
  };

  const svgContent = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#D4AF37"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`
        transition-all duration-300
        drop-shadow-[0_0_8px_rgba(255,215,0,0.45)]
        group-hover:drop-shadow-[0_0_20px_rgba(255,215,0,0.8)]
        ${iconSizeClasses[size]} 
        ${className}
      `}
    >
      {IconPaths[name]}
    </svg>
  );

  if (noContainer) {
    return svgContent;
  }

  return (
    <div 
      className={`
        relative flex items-center justify-center 
        rounded-[18px] 
        bg-[rgba(255,255,255,0.04)]
        backdrop-blur-[18px]
        border border-[rgba(255,255,255,0.08)]
        shadow-[0_12px_40px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)]
        group 
        transition-all duration-300 ease-out flex-shrink-0
        hover:-translate-y-[3px] hover:scale-[1.08]
        hover:bg-[rgba(255,255,255,0.08)]
        hover:border-[#D4AF37]
        active:bg-[rgba(255,255,255,0.12)] active:border-[#D4AF37]
        focus:outline-none focus:ring-0 focus-visible:drop-shadow-[0_0_12px_rgba(255,215,0,0.6)]
        ${containerSizeClasses[size]} 
        ${containerClassName}
      `}
      tabIndex={0}
    >
      {svgContent}
    </div>
  );
}
