"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface FloatingBackgroundProps {
  iconCount?: number;
  opacity?: number;
  color?: string;
}

export function FloatingBackground({ 
  iconCount = 20, 
  opacity = 5,
  color = "#DC143C" 
}: FloatingBackgroundProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(iconCount)].map((_, i) => (
        <FloatingIcon key={i} index={i} opacity={opacity} color={color} />
      ))}
    </div>
  );
}

function FloatingIcon({ opacity, color }: { index: number; opacity: number; color: string }) {
  const randomX = Math.random() * 100;
  const randomY = Math.random() * 100;
  const randomDelay = Math.random() * 20;
  const randomDuration = 20 + Math.random() * 20;

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${randomX}%`,
        top: `${randomY}%`,
        opacity: opacity / 100,
      }}
      animate={{
        x: [0, 30, -30, 0],
        y: [0, -30, 30, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: randomDuration,
        delay: randomDelay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div 
        className="w-2 h-2 rounded-full"
        style={{
          backgroundColor: color,
          filter: "blur(1px)",
        }}
      />
    </motion.div>
  );
}
