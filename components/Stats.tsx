"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Total Volume", value: "$2.5M+", color: "from-chart-2 to-chart-3" },
  { label: "Active LPs", value: "1.2K+", color: "from-chart-3 to-chart-4" },
  { label: "Supported Pools", value: "8+", color: "from-chart-4 to-chart-5" },
  { label: "Uptime", value: "99.9%", color: "from-chart-5 to-chart-2" },
];

export default function Stats() {
  return (
    <section className="relative py-20">
      {/* subtle gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-chart-2/10 via-transparent to-chart-3/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card/70 backdrop-blur-sm p-6 shadow-sm"
            >
              <p
                className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
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
