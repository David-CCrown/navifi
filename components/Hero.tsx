"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroStats from "./HeroStats";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ConnectWallet from "./ConnectWallet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Hero() {
  const { connected } = useWallet();
  const router = useRouter();
  const [showWalletDialog, setShowWalletDialog] = useState(false);

  const handleLaunchApp = () => {
    if (connected) {
      router.push("/app");
    } else {
      setShowWalletDialog(true);
    }
  };

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background gradient matching logo */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#1cc7e7]/10 via-transparent to-[#0070f3]/10" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/navifi-logo.png"
            alt="NaviFi"
            width={80}
            height={80}
            className="drop-shadow-md"
          />
        </div>

        {/* Headline */}
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Smarter{" "}
          <span className="bg-gradient-to-r from-[#1cc7e7] to-[#0070f3] bg-clip-text text-transparent">
            Liquidity Navigation
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-4 max-w-2xl mx-auto text-base text-muted-foreground">
          NaviFi helps liquidity providers manage, rebalance, and grow with ease —
          built on <span className="font-medium text-foreground">Saros DLMM</span> and{" "}
          <span className="font-medium text-foreground">Solana</span>.
        </p>

        {/* CTAs */}
        <div className="mt-6 flex justify-center gap-4">
          <Button
            size="lg"
            onClick={handleLaunchApp}
            className="rounded-full bg-gradient-to-r from-[#1cc7e7] to-[#0070f3] text-white shadow-lg hover:shadow-xl transition-transform hover:scale-[1.02]"
          >
            Launch App
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-6"
          >
            View Docs
          </Button>
        </div>

        {/* Wallet Dialog */}
        <Dialog open={showWalletDialog} onOpenChange={setShowWalletDialog}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Connect your wallet</DialogTitle>
            </DialogHeader>
            <ConnectWallet />
          </DialogContent>
        </Dialog>

        {/* Stats */}
        <HeroStats />
      </div>
    </section>
  );
}
