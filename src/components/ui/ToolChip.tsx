"use client";

import { Bot, Terminal, GitMerge, Brain, Sparkles } from "lucide-react";

export type ToolType = "chatgpt" | "claude" | "cursor" | "copilot" | "gemini";

interface ToolChipProps {
  tool: ToolType;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const toolConfig = {
  chatgpt: {
    icon: Bot,
    gradient: "from-emerald-400 to-emerald-600",
    glow: "shadow-[0_0_30px_rgba(16,185,129,0.5)]",
    bg: "bg-emerald-950/40",
  },
  claude: {
    icon: Brain,
    gradient: "from-orange-400 to-rose-500",
    glow: "shadow-[0_0_30px_rgba(244,63,94,0.5)]",
    bg: "bg-rose-950/40",
  },
  cursor: {
    icon: Terminal,
    gradient: "from-slate-200 to-slate-400",
    glow: "shadow-[0_0_30px_rgba(148,163,184,0.5)]",
    bg: "bg-slate-900/40",
  },
  copilot: {
    icon: GitMerge,
    gradient: "from-blue-400 to-indigo-600",
    glow: "shadow-[0_0_30px_rgba(99,102,241,0.5)]",
    bg: "bg-indigo-950/40",
  },
  gemini: {
    icon: Sparkles,
    gradient: "from-blue-400 via-purple-500 to-rose-400",
    glow: "shadow-[0_0_30px_rgba(168,85,247,0.5)]",
    bg: "bg-purple-950/40",
  }
};

export function ToolChip({ tool, className = "", size = "md" }: ToolChipProps) {
  const config = toolConfig[tool];
  const Icon = config.icon;
  
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-24 h-24"
  };

  const iconSizes = {
    sm: "w-5 h-5",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  };

  return (
    <div className={`relative flex items-center justify-center rounded-full backdrop-blur-xl border border-white/20 shadow-2xl ${sizeClasses[size]} ${config.bg} ${className}`}>
      {/* Glow Halo */}
      <div className={`absolute inset-0 rounded-full ${config.glow} opacity-60 mix-blend-screen pointer-events-none`} />
      
      {/* Inner Gradient Border Illusion */}
      <div className={`absolute inset-[1px] rounded-full bg-gradient-to-br ${config.gradient} opacity-20`} />
      
      {/* 3D Depth Shadow */}
      <div className="absolute -inset-2 rounded-full bg-black/20 blur-md -z-10 translate-y-4 pointer-events-none" />

      {/* Glass Reflection */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-white/5 to-transparent pointer-events-none" />

      <Icon className={`relative z-10 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] ${iconSizes[size]}`} />
    </div>
  );
}
