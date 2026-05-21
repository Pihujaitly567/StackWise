import Link from "next/link";
import { BarChart3 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto max-w-screen-xl px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2 space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <BarChart3 className="h-6 w-6 text-primary" />
            <span className="font-bold tracking-tight text-lg">StackDNA</span>
          </Link>
          <p className="text-muted-foreground text-sm max-w-xs">
            StackDNA decodes your startup&apos;s AI spending behavior, helping you discover hidden waste and optimize subscriptions.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-sm">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/audit" className="hover:text-primary transition-colors">Free Audit</Link></li>
            <li><Link href="#features" className="hover:text-primary transition-colors">Features</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Pricing</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-sm">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto max-w-screen-xl px-4 mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} StackDNA. All rights reserved. (Demo)
      </div>
    </footer>
  );
}
