"use client";

export function FloatingBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid" />

      {/* Glow orbs */}
      <div className="absolute top-[15%] left-[10%] w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute top-[60%] right-[8%] w-96 h-96 bg-purple-500/8 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[10%] left-[30%] w-72 h-72 bg-pink-500/6 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '4s' }} />

      {/* Floating AI symbols */}
      <div className="absolute top-[20%] right-[20%] text-primary/5 text-6xl font-mono select-none animate-float">AI</div>
      <div className="absolute top-[70%] left-[15%] text-primary/5 text-4xl font-mono select-none animate-float-delayed">DNA</div>
      <div className="absolute top-[40%] right-[5%] text-primary/5 text-5xl font-mono select-none animate-float" style={{ animationDelay: '3s' }}>◇</div>
    </div>
  );
}
