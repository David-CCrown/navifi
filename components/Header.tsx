"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import ConnectWallet from "./ConnectWallet";
import { useWallet } from "@solana/wallet-adapter-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { connected } = useWallet(); // wallet state

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl hover:opacity-90 transition-opacity"
        >
          <Image src="/navifi-logo.png" alt="NaviFi" width={32} height={32} />

          {/* Option 1: Gradient same as logo */}
          <span className="hidden sm:inline bg-gradient-to-r from-chart-2 to-chart-3 bg-clip-text text-transparent">
            NaviFi
          </span>

          {/* Option 2: Plain white (swap with the above if you prefer white) */}
          {/* <span className="hidden sm:inline text-white">NaviFi</span> */}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="/#features" className="hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="/#circles" className="hover:text-primary transition-colors">
            Liquidity Circles
          </Link>
          <Link href="/docs" className="hover:text-primary transition-colors">
            Docs
          </Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          {connected && (
            <Link href="/app">
              <Button variant="outline" className="rounded-full">
                Open App
              </Button>
            </Link>
          )}
          <ConnectWallet />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="flex flex-col p-4 space-y-4 text-sm font-medium text-muted-foreground">
            <Link href="/#features" onClick={() => setMobileOpen(false)}>
              Features
            </Link>
            <Link href="/#circles" onClick={() => setMobileOpen(false)}>
              Liquidity Circles
            </Link>
            <Link href="/docs" onClick={() => setMobileOpen(false)}>
              Docs
            </Link>
            {connected && (
              <Link href="/app" onClick={() => setMobileOpen(false)}>
                <Button variant="outline" className="rounded-full w-full">
                  Open App
                </Button>
              </Link>
            )}
            <ConnectWallet />
          </div>
        </div>
      )}
    </header>
  );
}
