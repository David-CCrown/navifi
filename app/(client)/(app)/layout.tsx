"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Search, Menu, X, Plus } from "lucide-react";
import Image from "next/image";
import ConnectWallet from "@/components/ConnectWallet";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Dashboard", href: "/app" },
  { name: "Pools", href: "/pools" },
  { name: "Analytics", href: "/analytics" },
  { name: "Circles", href: "/circles" },
  { name: "Settings", href: "/settings" },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-border bg-background/70 backdrop-blur-xl px-4 sm:px-6">
        {/* Logo */}
        <Link href="/app" className="flex items-center gap-2">
          <Image src="/navifi-logo.png" alt="NaviFi" width={28} height={28} />
          <span className="text-lg font-bold bg-gradient-to-r from-[#1cc7e7] to-[#0070f3] bg-clip-text text-transparent">
            NaviFi
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Desktop Search */}
          <div className="hidden md:block relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-64 rounded-lg border border-input bg-muted px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>

          {/* Mobile Search */}
          <button className="md:hidden p-2 rounded-lg hover:bg-accent">
            <Search className="h-5 w-5 text-muted-foreground" />
          </button>

          {/* Notifications */}
          <button className="p-2 rounded-lg hover:bg-accent relative">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-chart-2"></span>
          </button>

          {/* Wallet */}
          <ConnectWallet />

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8 text-lg font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Page Content */}
      <main className="flex-1 p-4 sm:p-6">{children}</main>

      {/* Floating Action Button */}
      <button className="fixed bottom-5 right-5 flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1cc7e7] to-[#0070f3] px-5 py-3 text-sm font-medium text-white shadow-lg hover:scale-[1.03] transition-transform">
        <Plus className="h-4 w-4" /> New Position
      </button>
    </div>
  );
}
