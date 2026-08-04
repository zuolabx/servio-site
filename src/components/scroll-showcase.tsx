"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LaptopFrame from "@/components/laptop-frame";
import PhoneFrame from "@/components/phone-frame";
import ProductMockup from "@/components/product-mockup";
import MobileAppScreen from "@/components/mobile-app-screen";

export default function ScrollShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Laptop: 3D tilt-in, then glides left
  const laptopRotateX = useTransform(scrollYProgress, [0, 0.18], [44, 0]);
  const laptopRotateZ = useTransform(scrollYProgress, [0, 0.07, 0.18], [-8, 3, 0]);
  const laptopScale = useTransform(scrollYProgress, [0, 0.18], [0.74, 1]);
  const laptopY = useTransform(scrollYProgress, [0, 0.18], [50, 0]);
  const laptopX = useTransform(scrollYProgress, [0.20, 0.38], [0, -80]);

  // Phone: pure slide from right - no opacity fade so it never disappears
  const phoneX = useTransform(scrollYProgress, [0.25, 0.45], [100, 0]);

  return (
    <div ref={containerRef} className="relative h-[260vh]">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">

        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="inter text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: "var(--accent)" }}>
            One system
          </p>
          <h2 className="instrument mt-2 text-4xl text-neutral-900 md:text-5xl">
            Every screen. Same Servio.
          </h2>
        </div>

        {/*
          Both devices are flex items - no absolute positioning, no overflow clipping.
          The phone takes up space in the row even while invisible, so the layout
          stays stable throughout the animation.
        */}
        <div
          className="flex items-center justify-center gap-8 px-8 w-full"
          style={{ perspective: 1400, perspectiveOrigin: "50% 42%" }}
        >
          {/* Laptop */}
          <motion.div
            style={{
              rotateX: laptopRotateX,
              rotateZ: laptopRotateZ,
              scale: laptopScale,
              x: laptopX,
              y: laptopY,
              transformStyle: "preserve-3d",
              flex: "0 0 auto",
              width: "min(100%, 520px)",
            }}
          >
            <LaptopFrame>
              <ProductMockup variant="analytics" />
            </LaptopFrame>
          </motion.div>

          {/* Phone - always visible, slides in from right */}
          <motion.div
            style={{
              x: phoneX,
              flex: "0 0 auto",
            }}
          >
            <PhoneFrame>
              <MobileAppScreen />
            </PhoneFrame>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
