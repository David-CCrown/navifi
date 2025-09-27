"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Trophy, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LiquidityCircles() {
  return (
    <section
      id="circles"
      className="relative py-28 overflow-hidden bg-gradient-to-b from-background via-background/95 to-background"
    >
      {/* Soft gradient accents */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-chart-2/20 via-transparent to-chart-3/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-chart-2 to-chart-3 bg-clip-text text-transparent">
            Liquidity Circles
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            The <span className="font-semibold text-foreground">social layer of DeFi</span>.  
            Team up with other LPs, share strategies, climb leaderboards, and unlock gamified rewards —  
            all while growing your portfolio on Solana.
          </p>

          <ul className="space-y-5 text-left">
            <li className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-chart-2/10 text-chart-2">
                <Users className="h-5 w-5" />
              </div>
              <span className="text-foreground font-medium">
                Form groups and build collective LP strategies.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-chart-3/10 text-chart-3">
                <Trophy className="h-5 w-5" />
              </div>
              <span className="text-foreground font-medium">
                Earn badges & climb leaderboards with your Circle.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-chart-4/10 text-chart-4">
                <MessageSquare className="h-5 w-5" />
              </div>
              <span className="text-foreground font-medium">
                Share insights, celebrate wins, and grow together.
              </span>
            </li>
          </ul>

          <p className="text-sm text-muted-foreground">
            Coming soon:{" "}
            <span className="font-semibold text-foreground">
              cross-circle tournaments
            </span>
            ,{" "}
            <span className="font-semibold text-foreground">
              strategy marketplaces
            </span>
            , and{" "}
            <span className="font-semibold text-foreground">
              tokenized Circle rewards
            </span>
            .
          </p>

          <Button
            size="lg"
            className="rounded-full bg-gradient-to-r from-chart-2 to-chart-3 text-white shadow-lg hover:shadow-xl"
          >
            Join a Circle
          </Button>
        </motion.div>

        {/* Illustration Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative w-full h-[420px]">
            <Image
              src="https://illustrations.popsy.co/blue/community.svg"
              alt="Liquidity Circles illustration"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
          {/* Glow orbs */}
          <div className="absolute -bottom-10 -left-12 w-44 h-44 bg-gradient-to-tr from-chart-2/30 to-chart-3/30 rounded-full blur-3xl" />
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-gradient-to-br from-chart-4/30 to-chart-5/30 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
