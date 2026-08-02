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
    offset: ["start start", "end end"],
  });

  const laptopRotateX = useTransform(scrollYProgress, [0, 0.35], [32, 0]);
  const laptopRotateZ = useTransform(scrollYProgress, [0, 0.18, 0.35], [-6, 3, 0]);
  const laptopScale = useTransform(scrollYProgress, [0, 0.35], [0.82, 1]);
  const laptopX = useTransform(scrollYProgress, [0.4, 0.7], ["0%", "-24%"]);

  const phoneX = useTransform(scrollYProgress, [0.45, 0.78], [140, 0]);
  const phoneOpacity = useTransform(scrollYProgress, [0.45, 0.62], [0, 1]);
  const phoneRotate = useTransform(scrollYProgress, [0.45, 0.78], [14, 0]);

  const headOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const headY = useTransform(scrollYProgress, [0, 0.15], [24, 0]);

  return (
    <div ref={containerRef} className="relative h-[220vh]">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity: headOpacity, y: headY }}
          className="mb-10 text-center"
        >
          <p
            className="inter text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: "var(--accent)" }}
          >
            One system
          </p>
          <h2 className="instrument mt-2 text-4xl text-neutral-900 md:text-5xl">
            Every screen. Same Servio.
          </h2>
        </motion.div>

        <div
          className="relative flex w-full items-center justify-center"
          style={{ perspective: 1400 }}
        >
          <motion.div
            style={{
              rotateX: laptopRotateX,
              rotateZ: laptopRotateZ,
              scale: laptopScale,
              x: laptopX,
              transformStyle: "preserve-3d",
            }}
            className="relative z-0 w-full max-w-xl"
          >
            <LaptopFrame>
              <ProductMockup variant="analytics" />
            </LaptopFrame>
          </motion.div>

          <motion.div
            style={{
              x: phoneX,
              opacity: phoneOpacity,
              rotate: phoneRotate,
            }}
            className="absolute right-[8%] z-10 md:right-[14%]"
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
