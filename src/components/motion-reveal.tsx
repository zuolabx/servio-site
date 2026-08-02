"use client";
import React from "react";
import { motion } from "framer-motion";

export default function MotionReveal({
  children,
  delay = 0,
  className = "",
  rotate = 3,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  rotate?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32, rotate }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
