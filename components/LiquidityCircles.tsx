"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LiquidityCircles() {
  return (
    <section
      id="circles"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-background via-background/90 to-background"
    >
      {/* Decorative gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-chart-2/20 via-transparent to-chart-3/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-chart-2 to-chart-3 bg-clip-text text-transparent">
            Liquidity Circles — The Social Layer of DeFi
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Liquidity Circles turn liquidity providing into a **community experience**.  
            Team up with other LPs, share strategies, climb leaderboards, and unlock gamified rewards — all while growing your portfolio.
          </p>

          <ul className="space-y-4 text-left">
            <li className="flex items-start gap-3">
              <span className="inline-block h-2 w-2 mt-2 rounded-full bg-chart-2" />
              <span className="text-foreground font-medium">
                Form groups and build collective strategies.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block h-2 w-2 mt-2 rounded-full bg-chart-3" />
              <span className="text-foreground font-medium">
                Earn badges & climb leaderboards with your Circle.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block h-2 w-2 mt-2 rounded-full bg-chart-4" />
              <span className="text-foreground font-medium">
                Share insights and celebrate wins with your community.
              </span>
            </li>
          </ul>

          <p className="text-sm text-muted-foreground mt-6">
            Coming soon: <span className="font-semibold text-foreground">Cross-circle tournaments</span>,  
            <span className="font-semibold text-foreground"> strategy marketplaces</span>, and  
            <span className="font-semibold text-foreground"> tokenized Circle rewards</span>.
          </p>
        </motion.div>

        {/* Illustration Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative w-full h-[400px]">
            <Image
              src="https://illustrations.popsy.co/blue/community.svg"
              alt="Liquidity Circles illustration"
              fill
              className="object-contain drop-shadow-lg"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-chart-2/30 to-chart-3/30 rounded-full blur-3xl" />
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-chart-4/30 to-chart-5/30 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
