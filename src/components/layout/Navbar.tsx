import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BarChart3 } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/60 backdrop-blur-md dark:bg-black/40">
      <div className="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <BarChart3 className="h-6 w-6 text-primary" />
          <span className="font-bold tracking-tight text-lg">StackWise AI</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
            How it Works
          </Link>
          <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
            Testimonials
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/audit">
            <Button className="rounded-full px-6 shadow-sm hover:shadow-md transition-all">
              Run Free Audit
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
