import type { Metadata } from "next";
import { Bebas_Neue, Space_Mono, Poppins } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Turf 36 — Gobichettipalayam",
  description: "Turf 36, Gobichettipalayam — cricket & pickleball turf. Book slots, follow live matches, browse the Hall of Fame.",
};

import CustomCursor from "@/components/CustomCursor";
import FluidCursor from "@/components/FluidCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${spaceMono.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <FluidCursor />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

