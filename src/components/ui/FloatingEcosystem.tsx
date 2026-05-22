"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { ToolChip } from "./ToolChip";

export function FloatingEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse tracking for parallax depth shifts
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 30 });

  // Parallax layers (closer objects move more)
  const depth1X = useTransform(springX, [0, 1], [-40, 40]);
  const depth1Y = useTransform(springY, [0, 1], [-40, 40]);
  
  const depth2X = useTransform(springX, [0, 1], [-20, 20]);
  const depth2Y = useTransform(springY, [0, 1], [-20, 20]);
  
  const depth3X = useTransform(springX, [0, 1], [-10, 10]);
  const depth3Y = useTransform(springY, [0, 1], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden perspective-[1000px]" ref={containerRef}>
      
      {/* 1. ChatGPT - Slow Orbit (Foreground Depth) */}
      <motion.div 
        style={{ x: depth1X, y: depth1Y, z: 50 }} 
        className="absolute top-1/4 left-1/4"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="w-64 h-64 flex items-center justify-start"
        >
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
            <ToolChip tool="chatgpt" size="md" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* 2. Claude - Figure Eight (Mid Depth) */}
      <motion.div 
        style={{ x: depth2X, y: depth2Y, z: -50 }} 
        className="absolute top-1/3 right-1/4"
      >
        <motion.div
          animate={{ 
            x: [0, 100, 0, -100, 0],
            y: [0, -50, 0, 50, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        >
          <ToolChip tool="claude" size="lg" />
        </motion.div>
      </motion.div>

      {/* 3. Cursor - Vertical Drift (Background Depth) */}
      <motion.div 
        style={{ x: depth3X, y: depth3Y, z: -150, scale: 0.8 }} 
        className="absolute bottom-1/4 left-1/3"
      >
        <motion.div
          animate={{ y: [-40, 40, -40], rotate: [-5, 5, -5] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        >
          <ToolChip tool="cursor" size="md" />
        </motion.div>
      </motion.div>

      {/* 4. GitHub Copilot - Diagonal Parallax Drift (Mid Depth) */}
      <motion.div 
        style={{ x: depth2X, y: depth2Y, z: -20 }} 
        className="absolute top-[60%] right-[15%]"
      >
        <motion.div
          animate={{ 
            x: [-30, 30, -30],
            y: [30, -30, 30],
            rotate: [10, -10, 10]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          <ToolChip tool="copilot" size="sm" />
        </motion.div>
      </motion.div>

      {/* 5. Gemini - Elliptical Orbit (Foreground Depth) */}
      <motion.div 
        style={{ x: depth1X, y: depth1Y, z: 80 }} 
        className="absolute bottom-[15%] left-[60%]"
      >
        <motion.div
          animate={{ 
            x: [-60, 60, -60],
            y: [-20, 20, -20]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
            <ToolChip tool="gemini" size="md" />
          </motion.div>
        </motion.div>
      </motion.div>

    </div>
  );
}
