"use client";

import Link from "next/link";
import { Users, Compass, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const circles = [
  {
    id: "circle-1",
    name: "SOL Powerhouse",
    description: "High-yield SOL/USDC strategies with minimal impermanent loss.",
    members: 58,
    strategies: 4,
    highlight: "🔥 Trending",
  },
  {
    id: "circle-2",
    name: "DeFi Wizards",
    description: "Advanced LP tactics, auto-rebalancing bots, and experimental pools.",
    members: 73,
    strategies: 6,
    highlight: "⭐ Popular",
  },
  {
    id: "circle-3",
    name: "Stable Seekers",
    description: "Preserve capital with stable pairs like USDC/USDT. Low risk, steady yield.",
    members: 41,
    strategies: 3,
    highlight: "💎 Safe Pick",
  },
];

export default function CirclesPage() {
  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl space-y-12">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Liquidity Circles
            </h1>
            <p className="mt-2 text-sm text-muted-foreground max-w-lg">
              Collaborate with like-minded LPs, follow experts, and discover the
              next big liquidity strategies — all inside Circles.
            </p>
          </div>
          <Button className="rounded-full bg-gradient-to-r from-[#1cc7e7] to-[#0070f3] text-white shadow hover:shadow-lg">
            Create Circle
          </Button>
        </div>

        {/* Circle Highlights */}
        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="rounded-xl border-border/40 shadow-sm hover:shadow-md transition">
            <CardContent className="p-5 flex items-center gap-3">
              <Compass className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">Discover</p>
                <p className="text-xs text-muted-foreground">
                  Explore community-driven liquidity strategies.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-xl border-border/40 shadow-sm hover:shadow-md transition">
            <CardContent className="p-5 flex items-center gap-3">
              <Users className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">Collaborate</p>
                <p className="text-xs text-muted-foreground">
                  Join forces with expert LPs and DeFi veterans.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-xl border-border/40 shadow-sm hover:shadow-md transition">
            <CardContent className="p-5 flex items-center gap-3">
              <Star className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">Clone & Earn</p>
                <p className="text-xs text-muted-foreground">
                  Mirror winning strategies with one click.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Circle Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {circles.map((circle) => (
            <Card
              key={circle.id}
              className="group relative rounded-xl border border-border/50 shadow-sm hover:shadow-lg hover:border-primary/40 transition overflow-hidden"
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-semibold">
                    {circle.name}
                  </CardTitle>
                  <span className="text-xs font-medium text-primary/80">
                    {circle.highlight}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {circle.description}
                </p>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{circle.members} members</span>
                  <span>{circle.strategies} strategies</span>
                </div>
                <Link href={`/circles/${circle.id}`}>
                  <Button className="w-full rounded-full bg-gradient-to-r from-[#1cc7e7] to-[#0070f3] text-white shadow group-hover:scale-[1.02] transition">
                    View Circle
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="rounded-2xl bg-gradient-to-r from-[#1cc7e7]/10 to-[#0070f3]/10 border border-border/50 p-8 text-center">
          <h2 className="text-xl font-semibold text-foreground">
            Ready to lead your own Circle?
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Launch a Circle, attract members, and grow together.
          </p>
          <Button className="mt-4 rounded-full bg-gradient-to-r from-[#1cc7e7] to-[#0070f3] text-white shadow">
            Start a Circle
          </Button>
        </div>
      </div>
    </div>
  );
}
