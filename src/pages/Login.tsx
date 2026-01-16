import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { login } from "@/auth/auth";

export default function Login() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-xl">Job Wingman Console</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Sign in to manage clients and intakes.
          </p>
          <Button className="w-full" onClick={login}>
            Sign in
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
