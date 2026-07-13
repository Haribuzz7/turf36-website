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
      stroke="#8CFF5A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`
        transition-all duration-300
        drop-shadow-[0_0_8px_rgba(140,255,90,0.6)]
        group-hover:drop-shadow-[0_0_20px_rgba(140,255,90,1)]
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
        bg-[rgba(0,230,118,0.06)]
        backdrop-blur-[18px]
        border border-[rgba(140,255,90,0.15)]
        shadow-[0_12px_40px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(140,255,90,0.1)]
        group 
        transition-all duration-300 ease-out flex-shrink-0
        hover:-translate-y-[3px] hover:scale-[1.08]
        hover:bg-[rgba(0,230,118,0.12)]
        hover:border-[rgba(140,255,90,0.4)]
        active:bg-[rgba(0,230,118,0.18)] active:border-[rgba(140,255,90,0.6)]
        focus:outline-none focus:ring-0 focus-visible:drop-shadow-[0_0_12px_rgba(140,255,90,0.6)]
        ${containerSizeClasses[size]} 
        ${containerClassName}
      `}
      tabIndex={0}
    >
      {svgContent}
    </div>
  );
}
