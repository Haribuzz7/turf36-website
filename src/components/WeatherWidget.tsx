"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type WeatherData = {
  temp: number;
  isDay: boolean;
  code: number;
};

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function fetchWeather() {
      try {
        // Gobichettipalayam coordinates
        const lat = 11.4542;
        const lon = 77.4419;
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,is_day&timezone=Asia%2FKolkata`);
        const data = await res.json();
        
        if (data && data.current) {
          setWeather({
            temp: Math.round(data.current.temperature_2m),
            isDay: data.current.is_day === 1,
            code: data.current.weather_code,
          });
        }
      } catch (error) {
        console.error("Failed to fetch weather:", error);
      }
    }

    fetchWeather();
    // Refresh every 30 mins
    const interval = setInterval(fetchWeather, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const [vibeIndex, setVibeIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVibeIndex((prev) => (prev + 1) % 4);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  if (!weather) return null;

  // Map WMO weather codes to simple UI
  const isRainy = [51, 53, 55, 61, 63, 65, 80, 81, 82].includes(weather.code);
  const isCloudy = [1, 2, 3, 45, 48].includes(weather.code);
  
  let Icon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
      <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
    </svg>
  );

  let vibes = [
    "Perfect for a match!",
    "Great weather for Football",
    "Ideal for Box Cricket",
    "Pickleball time!"
  ];

  if (!weather.isDay) {
    Icon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-200">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
      </svg>
    );
    vibes = [
      weather.temp < 25 ? "Cool night under the floodlights" : "Perfect night for turf action",
      "7v7 Football under the lights",
      "Box Cricket night matches",
      "Evening Pickleball session"
    ];
  }

  if (isRainy) {
    Icon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 14v6"/><path d="M8 14v6"/><path d="M12 16v6"/>
      </svg>
    );
    vibes = [
      "Rain check! Call to confirm slots",
      "Board Games shed is open!",
      "Indoor Carrom & Chess available",
      "Football might get muddy!"
    ];
  } else if (isCloudy && weather.isDay) {
    Icon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
      </svg>
    );
    vibes = [
      "Nice & breezy!",
      "Ideal for long Football matches",
      "Perfect for Cricket practice",
      "Great Pickleball weather"
    ];
  }

  const currentVibe = vibes[vibeIndex] || vibes[0];

  return (
    <div 
      className="relative hidden sm:flex"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center gap-2 px-3 py-1.5 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] hover:border-[var(--color-gold)]/40 hover:bg-[rgba(0,230,118,0.05)] rounded-full transition-colors cursor-default backdrop-blur-md">
        <Icon />
        <span className="text-[13px] font-medium text-white">{weather.temp}°C</span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[120%] right-0 w-[180px] p-3 glass-panel z-50 text-center"
          >
            <div className="font-space text-[10px] text-[var(--color-gold)] uppercase tracking-wider mb-1">Gobichettipalayam</div>
            <div className="text-[12px] text-white/80 leading-tight">{currentVibe}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
