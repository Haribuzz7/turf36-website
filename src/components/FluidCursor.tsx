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
        SPLAT_RADIUS: 0.15, // Increased so it's visible under a finger
        SPLAT_FORCE: 4000, 
        SPLAT_COUNT: 0,
        // Brighter neon green so it shows up on mobile
        SPLAT_COLOR: { r: 0, g: 0.6, b: 0.3 }, 
        SHADING: false,
        COLORFUL: false,
        PAUSED: false,
        BACK_COLOR: { r: 0, g: 0, b: 0 },
        TRANSPARENT: true,
        BLOOM: false,
        SUNRAYS: false,
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
