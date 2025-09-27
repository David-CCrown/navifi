"use client";

import { motion } from "framer-motion";
import { BarChart3, RefreshCw, Users, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: RefreshCw,
    title: "Autopilot Rebalancing",
    desc: "Automatically manage your liquidity across DLMM bins to maximize returns and reduce risk.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    desc: "Real-time insights, performance tracking, and historical backtesting for smarter LP strategies.",
  },
  {
    icon: Users,
    title: "Liquidity Circles",
    desc: "Join social LP groups, share strategies, and climb leaderboards in a gamified DeFi experience.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Transparent",
    desc: "Built on Solana and powered by Saros DLMM, ensuring speed, transparency, and reliability.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      {/* Gradient glow background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#1cc7e7]/15 via-transparent to-[#0070f3]/15 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold sm:text-5xl bg-gradient-to-r from-[#1cc7e7] to-[#0070f3] bg-clip-text text-transparent"
        >
          Why Choose NaviFi?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Simplify liquidity management with automation, insights, and a community-first approach.
        </motion.p>

        {/* Features Grid */}
        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative rounded-2xl border border-border bg-card/80 backdrop-blur-xl p-8 shadow-sm hover:shadow-xl transition-all"
            >
              {/* Gradient ring on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#1cc7e7] to-[#0070f3] opacity-0 group-hover:opacity-10 transition-opacity" />

              <div className="mb-5 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#1cc7e7]/20 to-[#0070f3]/20 p-4">
                <f.icon className="h-7 w-7 text-[#1cc7e7] group-hover:text-[#0070f3] transition-colors" />
              </div>

              <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
