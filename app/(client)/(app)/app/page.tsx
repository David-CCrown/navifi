"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Button } from "@/components/ui/button";
import {
  Wallet,
  DollarSign,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

// Sample data
const pieData = [
  { name: "SOL/USDC", value: 45 },
  { name: "ETH/USDC", value: 30 },
  { name: "BTC/USDC", value: 25 },
];
const pieColors = ["#1cc7e7", "#0070f3", "#22c55e"];

const lineData = [
  { day: "Mon", value: 1200 },
  { day: "Tue", value: 1350 },
  { day: "Wed", value: 1420 },
  { day: "Thu", value: 1600 },
  { day: "Fri", value: 1750 },
  { day: "Sat", value: 1820 },
  { day: "Sun", value: 1900 },
];

export default function DashboardPage() {
  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl space-y-10">
        {/* Welcome */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#1cc7e7] to-[#0070f3] bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-muted-foreground">
            Track your liquidity performance and community activity.
          </p>
        </div>

        {/* KPI Grid */}
        <div className="grid gap-6 md:grid-cols-4">
          {[
            {
              title: "Total Liquidity",
              value: "$45,200",
              icon: <Wallet className="h-5 w-5 text-chart-2" />,
            },
            {
              title: "Fees Earned",
              value: "$2,340",
              icon: <DollarSign className="h-5 w-5 text-chart-3" />,
            },
            {
              title: "Active Positions",
              value: "6",
              icon: <BarChart3 className="h-5 w-5 text-chart-4" />,
            },
            {
              title: "7D ROI",
              value: "+8.3%",
              icon: <TrendingUp className="h-5 w-5 text-green-500" />,
            },
          ].map((item, idx) => (
            <Card
              key={idx}
              className="bg-card/70 backdrop-blur-xl border border-border shadow-lg hover:shadow-xl transition-all"
            >
              <CardHeader className="flex items-center gap-2">
                {item.icon}
                <CardTitle className="text-sm">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{item.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Portfolio Growth */}
          <Card className="lg:col-span-2 bg-card/70 backdrop-blur-xl border border-border shadow-lg">
            <CardHeader>
              <CardTitle>Portfolio Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={lineData}>
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#0070f3"
                    strokeWidth={2}
                  />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Liquidity Distribution */}
          <Card className="bg-card/70 backdrop-blur-xl border border-border shadow-lg">
            <CardHeader>
              <CardTitle>Liquidity Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    outerRadius={100}
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={pieColors[index % pieColors.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Active Positions */}
        <Card className="bg-card/70 backdrop-blur-xl border border-border shadow-lg">
          <CardHeader>
            <CardTitle>Active Positions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-border text-muted-foreground">
                  <tr>
                    <th className="text-left py-2">Pool</th>
                    <th className="text-left py-2">Liquidity</th>
                    <th className="text-left py-2">APY</th>
                    <th className="text-left py-2">Fees</th>
                    <th className="text-left py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      pool: "SOL/USDC",
                      liquidity: "$12,000",
                      apy: "14%",
                      fees: "$450",
                    },
                    {
                      pool: "ETH/USDC",
                      liquidity: "$8,500",
                      apy: "10%",
                      fees: "$320",
                    },
                  ].map((pos, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-border hover:bg-accent/20"
                    >
                      <td className="py-3 font-medium">{pos.pool}</td>
                      <td>{pos.liquidity}</td>
                      <td>{pos.apy}</td>
                      <td>{pos.fees}</td>
                      <td>
                        <Button
                          size="sm"
                          variant="outline"
                          className="rounded-full"
                        >
                          Manage
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Liquidity Circles Overview */}
        <Card className="bg-card/70 backdrop-blur-xl border border-border shadow-lg">
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Liquidity Circles</CardTitle>
            <Button className="rounded-full bg-gradient-to-r from-[#1cc7e7] to-[#0070f3] text-white shadow-md hover:shadow-lg">
              Explore Circles
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "Whales Club",
                  members: 120,
                  growth: "+12%",
                  img: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?w=200&h=200&fit=crop",
                },
                {
                  name: "DeFi Builders",
                  members: 80,
                  growth: "+8%",
                  img: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=200&h=200&fit=crop",
                },
                {
                  name: "Solana OGs",
                  members: 200,
                  growth: "+15%",
                  img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
                },
              ].map((circle, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-border bg-background/60 backdrop-blur-lg p-4 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={circle.img}
                      alt={circle.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{circle.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {circle.members} members
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-green-500">
                    {circle.growth} this week
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
