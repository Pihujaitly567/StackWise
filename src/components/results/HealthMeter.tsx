"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

interface HealthMeterProps {
  score: number;
  status: string;
  explanation: string;
}

export function HealthMeter({ score, status, explanation }: HealthMeterProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Confetti burst on load
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: ReturnType<typeof setInterval> = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#818cf8', '#c084fc', '#f472b6']
      });
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#818cf8', '#c084fc', '#f472b6']
      });
    }, 250);

    // Animate score
    const timeout = setTimeout(() => setProgress(score), 500);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [score]);

  const circumference = 2 * Math.PI * 120;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center text-center py-12">
      <div className="relative w-72 h-72 mb-8">
        {/* Background circle */}
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 260 260">
          <circle
            cx="130"
            cy="130"
            r="120"
            className="stroke-muted/30"
            strokeWidth="16"
            fill="transparent"
          />
          {/* Animated progress circle */}
          <motion.circle
            cx="130"
            cy="130"
            r="120"
            className="stroke-amber-500"
            strokeWidth="16"
            fill="transparent"
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ strokeDasharray: circumference }}
          />
        </svg>
        
        {/* Score in center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xs uppercase tracking-widest text-muted-foreground mb-1 font-semibold">Health Score</span>
          <div className="flex items-baseline">
            <motion.span 
              className="text-6xl font-black text-foreground"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {progress}
            </motion.span>
            <span className="text-2xl text-muted-foreground">/100</span>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="inline-block bg-amber-500/10 text-amber-500 font-bold px-4 py-1.5 rounded-full mb-4 text-sm uppercase tracking-wider">
          {status}
        </div>
        <p className="text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
          {explanation}
        </p>
      </motion.div>
    </div>
  );
}
