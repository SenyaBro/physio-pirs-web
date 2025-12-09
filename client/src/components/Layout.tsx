import { useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  Activity,
  Target,
  FileText,
  Menu,
  X,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navigation = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Methodology", href: "/methodology", icon: Activity },
    { name: "Player Profiles", href: "/profiles", icon: Users },
    { name: "Duel Model", href: "/duel-model", icon: Target },
    { name: "Roadmap", href: "/roadmap", icon: FileText },
  ];

  const NavContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-sidebar-border">
        <h1 className="text-2xl font-bold text-primary font-serif tracking-tight">
          Physio-PIRS
        </h1>
        <p className="text-xs text-muted-foreground mt-1 font-medium tracking-wide uppercase">
          Academy Analytics
        </p>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        {navigation.map((item) => {
          const isActive = location === item.href;
          return (
            <Link key={item.name} href={item.href}>
              <div
                className={cn(
                  "flex items-center px-4 py-3 text-sm font-medium rounded-md transition-all duration-200 group relative overflow-hidden",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                )}
                onClick={() => setIsMobileOpen(false)}
              >
                <item.icon
                  className={cn(
                    "mr-3 h-5 w-5 transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                  )}
                />
                {item.name}
                {isActive && (
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-primary rounded-l-full" />
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <div className="bg-sidebar-accent/30 rounded-lg p-4">
          <p className="text-xs font-semibold text-sidebar-foreground mb-1">
            Director Access
          </p>
          <p className="text-xs text-muted-foreground">
            v1.0 Pilot Proposal
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 border-r border-sidebar-border bg-sidebar fixed inset-y-0 z-30">
        <NavContent />
      </aside>

      {/* Mobile Sidebar */}
      <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
        <SheetContent side="left" className="p-0 w-64 bg-sidebar border-r border-sidebar-border">
          <NavContent />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen transition-all duration-300 ease-in-out">
        <header className="h-16 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-20 px-4 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMobileOpen(true)}>
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            
            {/* Breadcrumbs / Page Title */}
            <div className="flex items-center text-sm text-muted-foreground">
              <span className="hidden sm:inline">Physio-PIRS</span>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="font-medium text-foreground">
                {navigation.find((n) => n.href === location)?.name || "Dashboard"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              Download Report
            </Button>
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs border border-primary/20">
              DA
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 lg:p-8 overflow-x-hidden">
          <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
