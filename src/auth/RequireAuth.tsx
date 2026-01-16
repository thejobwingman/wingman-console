import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthed } from "./auth";

export default function RequireAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ready, setReady] = React.useState(false);
  const [authed, setAuthed] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const ok = await isAuthed();
      setAuthed(ok);
      setReady(true);
    })();
  }, []);

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-sm text-muted-foreground">Loading…</p>
      </div>
    );
  }

  if (!authed) return <Navigate to="/login" replace />;
  return <>{children}</>;
}
