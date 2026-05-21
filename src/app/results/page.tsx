import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ResultsPage() {
  return (
    <main className="container mx-auto max-w-screen-xl px-4 py-12 md:py-24">
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link href="/audit" className="text-sm font-medium text-muted-foreground hover:text-primary flex items-center mb-4 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Audit
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Audit Results</h1>
          <p className="text-muted-foreground">Here is how you can optimize your AI spend.</p>
        </div>
        <div className="hidden md:block">
          <Button>Export Report</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass shadow-sm md:col-span-2">
          <CardHeader>
            <CardTitle>Optimization Opportunities</CardTitle>
            <CardDescription>Placeholder for detailed recommendations (To be implemented)</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="h-64 border-2 border-dashed border-border rounded-lg flex items-center justify-center text-muted-foreground">
                Detailed insights and charts will be displayed here.
             </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-sm border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle>Summary</CardTitle>
            <CardDescription>Estimated impact</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Current Monthly Spend</div>
              <div className="text-2xl font-semibold">$0.00</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Potential Monthly Savings</div>
              <div className="text-3xl font-bold text-green-500">$0.00</div>
            </div>
            <div className="pt-4 border-t">
              <Button className="w-full">Share Results</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
