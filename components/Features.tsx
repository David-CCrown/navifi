"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  RefreshCw,
  Users,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: <RefreshCw className="h-6 w-6 text-chart-2" />,
    title: "Autopilot Rebalancing",
    desc: "Automatically manage your liquidity across DLMM bins to maximize returns and reduce risk.",
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-chart-3" />,
    title: "Advanced Analytics",
    desc: "Real-time insights, performance tracking, and historical backtesting for smarter LP strategies.",
  },
  {
    icon: <Users className="h-6 w-6 text-chart-4" />,
    title: "Liquidity Circles",
    desc: "Join social LP groups, share strategies, and climb leaderboards in a gamified DeFi experience.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-chart-5" />,
    title: "Secure & Transparent",
    desc: "Built on Solana and powered by Saros DLMM, ensuring speed, transparency, and reliability.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl bg-gradient-to-r from-chart-2 to-chart-3 bg-clip-text text-transparent">
          Why Choose NaviFi?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Simplify liquidity management with automation, insights, and a community-first approach.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-border bg-card/70 backdrop-blur-sm p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-muted p-3">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
