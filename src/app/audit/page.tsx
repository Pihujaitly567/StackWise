import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AuditPage() {
  return (
    <main className="container mx-auto max-w-screen-md px-4 py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">AI Stack Audit</h1>
        <p className="text-lg text-muted-foreground">
          Enter your current tools, team size, and spend to get instant optimization insights.
        </p>
      </div>

      <Card className="glass shadow-lg">
        <CardHeader>
          <CardTitle>Your Stack Profile</CardTitle>
          <CardDescription>This is a placeholder for the audit form (To be implemented)</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-12 border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center text-center text-muted-foreground">
            <p className="mb-4">Form fields for stack input will go here.</p>
            <Button disabled>Analyze Stack</Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
