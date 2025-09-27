"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Total Volume", value: "$2.5M+" },
  { label: "Active LPs", value: "1.2K+" },
  { label: "Supported Pools", value: "8+" },
  { label: "Uptime", value: "99.9%" },
];

export default function HeroStats() {
  return (
    <section className="relative py-20">
      {/* Subtle background using NaviFi gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1cc7e7]/10 via-transparent to-[#0070f3]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card/70 backdrop-blur-sm p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <p
                className="text-2xl font-bold bg-gradient-to-r from-[#1cc7e7] to-[#0070f3] bg-clip-text text-transparent"
              >
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
