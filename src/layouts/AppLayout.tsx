import * as React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

import { getUserEmail, logout } from "@/auth/auth";

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

function mobileNavItemClassName(isActive: boolean) {
  const base =
    "block rounded-md px-3 py-2 text-sm font-medium transition-colors";
  const active = "bg-muted text-foreground";
  const inactive = "text-muted-foreground hover:bg-muted hover:text-foreground";
  return `${base} ${isActive ? active : inactive}`;
}

export default function AppLayout() {
  const [email, setEmail] = React.useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    let mounted = true;

    getUserEmail().then((value) => {
      if (mounted) setEmail(value);
    });

    return () => {
      mounted = false;
    };
  }, []);

  // If route changes, close the mobile sheet (nice UX + prevents “stuck open”)
  React.useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-[100svh] bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          {/* Brand */}
          <h1 className="min-w-0 text-base font-semibold tracking-tight sm:text-xl">
            <NavLink
              to="/"
              className="block truncate text-primary hover:opacity-90"
            >
              Job Wingman Console
            </NavLink>
          </h1>

          {/* Nav + User */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Desktop nav */}
            <nav
              aria-label="Console navigation"
              className="hidden gap-6 sm:flex"
            >
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={navLinkClassName}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop email */}
            <span className="hidden max-w-[220px] truncate text-xs text-muted-foreground sm:inline">
              {email ?? "Signed in"}
            </span>

            {/* Desktop logout */}
            <Button
              variant="outline"
              size="sm"
              onClick={logout}
              className="hidden sm:inline-flex"
            >
              Logout
            </Button>

            {/* Mobile menu */}
            <div className="sm:hidden">
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" aria-label="Open menu">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>

                <SheetContent side="right" className="w-[280px] p-0">
                  <SheetHeader className="border-b px-4 py-4">
                    <SheetTitle className="text-left">Menu</SheetTitle>
                    <div className="mt-1 text-left text-xs text-muted-foreground">
                      {email ?? "Signed in"}
                    </div>
                  </SheetHeader>

                  <div className="px-2 py-3">
                    {NAV_ITEMS.map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                          mobileNavItemClassName(isActive)
                        }
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>

                  <Separator />

                  <div className="px-4 py-4">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        setMobileOpen(false);
                        logout();
                      }}
                    >
                      Logout
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <main className="p-4 sm:p-6">
        <Outlet />
      </main>
    </div>
  );
}
