"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ToolChip, ToolType } from "@/components/ui/ToolChip";

/* ─── Orbital Tool Chip (extracted so hooks are valid) ─── */
function OrbitalChip({ tool, index, orbitAngle }: { tool: ToolType; index: number; orbitAngle: MotionValue<number> }) {
  const angle = useTransform(orbitAngle, (a: number) => a + (index * 72));
  const tx = useTransform(angle, (a: number) => Math.cos((a * Math.PI) / 180) * (200 + index * 15));
  const ty = useTransform(angle, (a: number) => Math.sin((a * Math.PI) / 180) * (200 + index * 15));
  const chipScale = useTransform(angle, (a: number) => 0.6 + 0.4 * Math.cos((a * Math.PI) / 180));
  const chipOpacity = useTransform(angle, (a: number) => 0.4 + 0.6 * ((1 + Math.cos((a * Math.PI) / 180)) / 2));

  return (
    <motion.div style={{ x: tx, y: ty, scale: chipScale, opacity: chipOpacity }}
      className="absolute left-1/2 top-1/2 -ml-8 -mt-8"
    >
      <ToolChip tool={tool} size="md" />
    </motion.div>
  );
}

/* ─── Chaotic Tool (extracted so hooks are valid) ─── */
function ChaoticTool({ tool, label, x, y, pullStrength }: { tool: ToolType; label: string; x: number; y: number; pullStrength: MotionValue<number> }) {
  const tx = useTransform(pullStrength, (s: number) => x * (1 - s));
  const ty = useTransform(pullStrength, (s: number) => y * (1 - s));
  const chipScale = useTransform(pullStrength, (s: number) => 1 - s * 0.5);

  return (
    <motion.div style={{ x: tx, y: ty, scale: chipScale }} className="absolute flex flex-col items-center">
      <ToolChip tool={tool} size="md" />
      <span className="mt-2 bg-rose-500/15 border border-rose-500/40 text-rose-600 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
        {label}
      </span>
    </motion.div>
  );
}

/* ─── Scene 1: DNA Scan reveals Health Score ─── */
function SceneScan({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.05, 0.15, 0.2], [0, 1, 1, 0]);
  const scale = useTransform(progress, [0, 0.08, 0.15, 0.2], [0.7, 1, 1, 0.8]);
  const meterFill = useTransform(progress, [0.04, 0.14], [0, 72]);

  const circumference = 2 * Math.PI * 100;
  const dashOffset = useTransform(meterFill, (v: number) => circumference - (v / 100) * circumference);
  const roundedMeter = useTransform(meterFill, Math.round);

  const line1 = useTransform(progress, [0.06, 0.08], [0, 1]);
  const line2 = useTransform(progress, [0.08, 0.10], [0, 1]);
  const line3 = useTransform(progress, [0.10, 0.12], [0, 1]);

  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
      {/* DNA strands in background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <svg width="600" height="600" viewBox="0 0 600 600">
          <path d="M 200 0 Q 400 150 200 300 T 200 600" fill="none" stroke="url(#scanGrad)" strokeWidth="4" className="animate-helix" />
          <path d="M 400 0 Q 200 150 400 300 T 400 600" fill="none" stroke="url(#scanGrad)" strokeWidth="4" className="animate-helix" />
          <defs>
            <linearGradient id="scanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Health Score Ring */}
      <div className="relative w-64 h-64 mb-8">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 220 220">
          <circle cx="110" cy="110" r="100" className="stroke-primary/10" strokeWidth="12" fill="transparent" />
          <motion.circle cx="110" cy="110" r="100" className="stroke-indigo-500" strokeWidth="12" fill="transparent" strokeLinecap="round"
            style={{ strokeDasharray: circumference, strokeDashoffset: dashOffset }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-1">Health Score</span>
          <motion.span className="text-6xl font-black text-foreground">{roundedMeter}</motion.span>
          <span className="text-lg text-muted-foreground">/100</span>
        </div>
      </div>

      {/* Progressive insight lines */}
      <div className="space-y-2 text-center max-w-md">
        <motion.p style={{ opacity: line1 }} className="text-sm text-muted-foreground font-medium">
          Scanning 4 active AI subscriptions...
        </motion.p>
        <motion.p style={{ opacity: line2 }} className="text-sm text-rose-500 font-semibold">
          Found 2 overlapping tools with duplicate features
        </motion.p>
        <motion.p style={{ opacity: line3 }} className="text-sm text-amber-600 font-bold">
          Verdict: Needs Optimization
        </motion.p>
      </div>
    </motion.div>
  );
}

/* ─── Scene 2: Personality emerges from DNA core ─── */
function ScenePersonality({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.18, 0.25, 0.38, 0.42], [0, 1, 1, 0]);
  const scale = useTransform(progress, [0.18, 0.28], [0.5, 1]);
  const y = useTransform(progress, [0.18, 0.28], [100, 0]);
  const orbitAngle = useTransform(progress, [0.2, 0.4], [0, 360]);
  const whyOpacity = useTransform(progress, [0.30, 0.35], [0, 1]);

  const tools: ToolType[] = ["chatgpt", "claude", "cursor", "copilot", "gemini"];

  return (
    <motion.div style={{ opacity }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Orbiting tool chips — they orbit because StackDNA analyzes relationships */}
      <div className="absolute w-[500px] h-[500px]">
        {tools.map((tool, i) => (
          <OrbitalChip key={tool} tool={tool} index={i} orbitAngle={orbitAngle} />
        ))}
      </div>

      {/* Central personality card */}
      <motion.div style={{ scale, y }} className="relative z-10 max-w-lg w-full mx-4">
        <div className="rounded-3xl p-10 md:p-14 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white shadow-2xl holographic relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="relative z-10 text-center">
            <div className="text-sm font-semibold text-white/70 uppercase tracking-widest mb-3">Stack Personality</div>
            <h3 className="text-5xl md:text-6xl font-black mb-6 tracking-tight drop-shadow-lg">AI Maximalist</h3>
            <p className="text-lg text-white/80 leading-relaxed font-light">
              Your team adopted powerful AI tools quickly, but overlapping subscriptions create hidden waste.
            </p>
          </div>
        </div>

        {/* "Why" insight */}
        <motion.div
          style={{ opacity: whyOpacity }}
          className="mt-4 ml-auto w-[85%] rounded-2xl glass-card border-l-4 border-l-purple-500 p-5"
        >
          <p className="text-sm font-bold text-purple-600 mb-1">Why you got this</p>
          <p className="text-sm text-foreground/80">
            ChatGPT Team + Claude Pro have 70% feature overlap for your use case. Cursor Business exceeds your 5-person team needs.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Scene 3: Tool overlap → collision → optimization ─── */
function SceneTransformation({ progress }: { progress: MotionValue<number> }) {
  const sceneOpacity = useTransform(progress, [0.40, 0.45, 0.68, 0.72], [0, 1, 1, 0]);
  const chaosOpacity = useTransform(progress, [0.45, 0.50, 0.52, 0.54], [0, 1, 1, 0]);
  const vortexOpacity = useTransform(progress, [0.52, 0.54, 0.56, 0.58], [0, 1, 1, 0]);
  const optimizedOpacity = useTransform(progress, [0.56, 0.60], [0, 1]);
  const pullStrength = useTransform(progress, [0.50, 0.55], [0, 1]);
  const savingsScale = useTransform(progress, [0.60, 0.65], [0.5, 1]);
  const leakOpacity = useTransform(progress, [0.62, 0.66], [1, 0]);
  const leakScale = useTransform(progress, [0.62, 0.66], [1, 0.3]);
  const leakRotate = useTransform(progress, [0.62, 0.66], [0, 15]);

  const tools: { type: ToolType; label: string; x: number; y: number }[] = [
    { type: "chatgpt", label: "$150/mo", x: -160, y: -70 },
    { type: "claude", label: "overlap", x: 140, y: -90 },
    { type: "cursor", label: "$100 wasted", x: 170, y: 60 },
    { type: "copilot", label: "unused", x: -130, y: 80 },
  ];

  return (
    <motion.div style={{ opacity: sceneOpacity }} className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
      <h3 className="absolute top-[12%] text-2xl font-black tracking-tight text-foreground/80">Stack Transformation</h3>

      {/* Chaos phase */}
      <motion.div style={{ opacity: chaosOpacity }} className="absolute inset-0 flex items-center justify-center">
        {tools.map((tool, i) => (
          <ChaoticTool key={i} tool={tool.type} label={tool.label} x={tool.x} y={tool.y} pullStrength={pullStrength} />
        ))}
      </motion.div>

      {/* Vortex */}
      <motion.div style={{ opacity: vortexOpacity }} className="absolute flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-48 h-48 rounded-full bg-gradient-to-tr from-indigo-500/40 via-purple-500/40 to-pink-500/40 blur-2xl"
        />
        <div className="absolute w-20 h-20 rounded-full bg-white/80 blur-xl" />
        <div className="absolute text-xs font-bold text-primary uppercase tracking-widest">Merging...</div>
      </motion.div>

      {/* Optimized */}
      <motion.div style={{ opacity: optimizedOpacity }} className="absolute flex flex-col items-center gap-8">
        <div className="flex items-center gap-8 p-6 rounded-3xl bg-white/60 border border-white/40 backdrop-blur-xl shadow-xl relative">
          <div className="absolute -inset-3 bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-emerald-400/20 blur-xl rounded-3xl -z-10" />
          {(["chatgpt", "cursor", "claude"] as ToolType[]).map((tool) => (
            <ToolChip key={tool} tool={tool} size="lg" />
          ))}
        </div>

        {/* Savings "discovered" */}
        <motion.div style={{ scale: savingsScale }} className="text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-1">Savings discovered</div>
          <div className="text-5xl md:text-7xl font-black text-emerald-500 drop-shadow-[0_0_30px_rgba(52,211,153,0.3)]">
            $180<span className="text-2xl font-medium text-emerald-500/60">/mo</span>
          </div>
          <div className="text-sm text-muted-foreground mt-2">$2,160 saved annually</div>
        </motion.div>

        {/* Leak shattering away */}
        <motion.div
          style={{ opacity: leakOpacity, scale: leakScale, rotate: leakRotate }}
          className="absolute -right-32 bottom-8 flex items-center gap-2 bg-rose-500/10 border border-rose-500/30 px-4 py-2 rounded-xl"
        >
          <ToolChip tool="copilot" size="sm" />
          <div className="text-xs">
            <div className="font-bold text-rose-500">GitHub Copilot</div>
            <div className="text-muted-foreground">Redundant — removed</div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Scene 4: AI Summary ─── */
function SceneSummary({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.70, 0.75, 0.88, 0.92], [0, 1, 1, 0]);
  const y = useTransform(progress, [0.70, 0.78], [60, 0]);

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
      <div className="max-w-2xl w-full">
        <div className="glass-card border-primary/20 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-xs font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            StackDNA Analysis Complete
          </div>

          <p className="text-lg text-foreground/85 leading-relaxed mb-8">
            Your DevFlow AI team is highly capable but your stack is scattered. You are paying for
            <span className="font-semibold text-rose-500"> Cursor Business </span>
            when Pro suffices, maintaining redundant
            <span className="font-semibold text-rose-500"> GitHub Copilot </span>
            alongside it, and running both
            <span className="font-semibold text-amber-600"> ChatGPT Team </span>
            and
            <span className="font-semibold text-amber-600"> Claude Pro </span>
            with 70% feature overlap. Pruning saves
            <span className="font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded"> $180 every month</span>.
          </p>

          <div className="space-y-4 border-l-2 border-primary/20 pl-6 ml-2">
            <div>
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Now</div>
              <p className="text-sm text-foreground/70">Drop Copilot, downgrade Cursor to Pro</p>
            </div>
            <div>
              <div className="text-xs font-bold text-amber-600 uppercase tracking-wider">30 Days</div>
              <p className="text-sm text-foreground/70">Consolidate ChatGPT Team seats</p>
            </div>
            <div>
              <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Long-term</div>
              <p className="text-sm text-foreground/70">Evaluate Claude API vs subscription</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Scene 5: Share Card ─── */
function SceneShare({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.90, 0.95], [0, 1]);
  const scale = useTransform(progress, [0.90, 0.97], [0.8, 1]);

  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto px-4">
      <div className="w-full max-w-sm aspect-[3/4] rounded-3xl p-8 flex flex-col justify-between text-white shadow-2xl relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 holographic">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="relative z-10 flex justify-between items-start">
          <div className="bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-sm font-bold tracking-tight">StackDNA</div>
          <div className="text-xs font-semibold tracking-widest uppercase opacity-70">2026</div>
        </div>

        <div className="relative z-10 my-auto text-center py-6">
          <div className="text-sm font-semibold uppercase tracking-widest opacity-80 mb-3">My Stack Personality</div>
          <h2 className="text-4xl font-black mb-6 leading-tight drop-shadow-lg">AI Maximalist</h2>
          <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-left">
            <div className="flex justify-between items-center mb-3 pb-3 border-b border-white/10">
              <span className="text-sm opacity-80">Health</span>
              <span className="text-xl font-bold">72<span className="text-sm opacity-50">/100</span></span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm opacity-80">Savings</span>
              <span className="text-xl font-black text-emerald-400">$180<span className="text-sm opacity-50">/mo</span></span>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center opacity-60 text-xs font-medium">stackdna.app</div>
      </div>

      <p className="mt-6 text-sm text-muted-foreground font-medium">Share your Stack Personality ↗</p>
    </motion.div>
  );
}

/* ─── Main Page ─── */
export default function ResultsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  return (
    <div ref={containerRef} className="h-[500vh] relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-mesh bg-grid">
        {/* Soft depth backdrop glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] left-[15%] w-80 h-80 bg-indigo-400/8 rounded-full blur-[80px]" />
          <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-400/8 rounded-full blur-[80px]" />
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-400/6 rounded-full blur-[100px]" />
        </div>

        <SceneScan progress={scrollYProgress} />
        <ScenePersonality progress={scrollYProgress} />
        <SceneTransformation progress={scrollYProgress} />
        <SceneSummary progress={scrollYProgress} />
        <SceneShare progress={scrollYProgress} />
      </div>
    </div>
  );
}
