"use client";

import { useEffect, useRef } from "react";
// @ts-expect-error - no types available for webgl-fluid
import WebGLFluid from "webgl-fluid";

export default function FluidCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (typeof window !== "undefined" && canvas) {
      // Hack to allow canvas to have pointer-events: none
      // We intercept the addEventListener calls and bind them to the window instead
      const originalAddEventListener = canvas.addEventListener.bind(canvas);
      canvas.addEventListener = (type: string, listener: any, options?: any) => {
        if (['mousemove', 'mousedown', 'mouseup', 'touchstart', 'touchmove', 'touchend'].includes(type)) {
          window.addEventListener(type, listener, options);
        } else {
          originalAddEventListener(type, listener, options);
        }
      };

      WebGLFluid(canvas, {
        TRIGGER: "hover",
        IMMEDIATE: false,
        AUTO: false,
        SIM_RESOLUTION: 128,
        DYE_RESOLUTION: 512,
        CAPTURE_RESOLUTION: 512,
        DENSITY_DISSIPATION: 5.0, // Fades much faster
        VELOCITY_DISSIPATION: 3.0,
        PRESSURE: 0.1,
        PRESSURE_ITERATIONS: 20,
        CURL: 3, // Less swirling
        SPLAT_RADIUS: 0.05, // Much smaller splats
        SPLAT_FORCE: 2000, // Less violent
        SPLAT_COUNT: 0,
        // RGB for a darker/subtle Neon Green, because mix-blend-screen adds brightness
        SPLAT_COLOR: { r: 0, g: 0.3, b: 0.15 }, 
        SHADING: false, // Turn off heavy shading
        COLORFUL: false,
        PAUSED: false,
        BACK_COLOR: { r: 0, g: 0, b: 0 },
        TRANSPARENT: true,
        BLOOM: false, // Turn off bloom to prevent blinding effect
        SUNRAYS: false, // Turn off sunrays for cleaner look
      });
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none w-screen h-screen z-50 mix-blend-screen opacity-50"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    />
  );
}
