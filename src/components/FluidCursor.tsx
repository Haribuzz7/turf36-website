"use client";

import { useEffect, useRef } from "react";
// @ts-expect-error - no types available for webgl-fluid
import WebGLFluid from "webgl-fluid";

export default function FluidCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && canvasRef.current) {
      WebGLFluid(canvasRef.current, {
        TRIGGER: "hover",
        IMMEDIATE: true,
        AUTO: false,
        SIM_RESOLUTION: 128,
        DYE_RESOLUTION: 512,
        CAPTURE_RESOLUTION: 512,
        DENSITY_DISSIPATION: 2.5,
        VELOCITY_DISSIPATION: 1.5,
        PRESSURE: 0.1,
        PRESSURE_ITERATIONS: 20,
        CURL: 20,
        SPLAT_RADIUS: 0.35,
        SPLAT_FORCE: 6000,
        SPLAT_COUNT: 0,
        // RGB for #00E676 (Neon Green) is roughly R: 0, G: 230, B: 118
        // The library expects 0.0-1.0 scale
        SPLAT_COLOR: { r: 0 / 255, g: 230 / 255, b: 118 / 255 }, 
        SHADING: true,
        COLORFUL: false,
        PAUSED: false,
        BACK_COLOR: { r: 0, g: 0, b: 0 },
        TRANSPARENT: true,
        BLOOM: true,
        BLOOM_ITERATIONS: 8,
        BLOOM_RESOLUTION: 256,
        BLOOM_INTENSITY: 0.8,
        BLOOM_THRESHOLD: 0.6,
        BLOOM_SOFT_KNEE: 0.7,
        SUNRAYS: true,
        SUNRAYS_RESOLUTION: 196,
        SUNRAYS_WEIGHT: 1.0,
      });
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none w-screen h-screen z-0"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    />
  );
}
