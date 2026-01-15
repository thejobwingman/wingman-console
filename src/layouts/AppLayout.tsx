import { NavLink, Outlet } from "react-router-dom";

const NAV_ITEMS = [
  { to: "/clients", label: "Clients" },
  { to: "/settings", label: "Settings" },
] as const;

function navLinkClassName({ isActive }: { isActive: boolean }) {
  const base =
    "pb-1 text-sm font-medium transition-colors hover:text-foreground";
  const active = "border-b-2 border-primary text-primary";
  const inactive = "text-muted-foreground";

  return `${base} ${isActive ? active : inactive}`;
}

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="flex items-center justify-between border-b px-6 py-4">
        <h1 className="text-xl font-semibold tracking-tight">
          <NavLink to="/" className="hover:opacity-90">
            Job Wingman Console
          </NavLink>
        </h1>

        <nav aria-label="Console navigation" className="hidden gap-6 sm:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClassName}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
