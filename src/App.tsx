import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>
            <h1 className="text-2xl font-semibold tracking-tight">
              Wingman Console
            </h1>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Internal dashboard for reviewing client intake submissions, managing
            workflows, and preparing job-search materials.
          </p>

          <div className="pt-2">
            <p className="text-xs text-muted-foreground">
              Dev environment • Internal use only
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
