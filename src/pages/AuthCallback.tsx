import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthed } from "@/auth/auth";

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      // Give Amplify a moment to finish code exchange
      const ok = await isAuthed();
      navigate(ok ? "/" : "/login", { replace: true });
    })();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-sm text-muted-foreground">Signing you in…</p>
    </div>
  );
}
