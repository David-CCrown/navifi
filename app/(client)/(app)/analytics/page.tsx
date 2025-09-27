"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// --- Mock Data ---
const tvlData = [
  { day: "Mon", value: 2.1 },
  { day: "Tue", value: 2.8 },
  { day: "Wed", value: 3.4 },
  { day: "Thu", value: 3.2 },
  { day: "Fri", value: 4.1 },
  { day: "Sat", value: 5.0 },
  { day: "Sun", value: 5.5 },
];

const volumeData = [
  { pair: "SOL/USDC", volume: 120000 },
  { pair: "ETH/USDC", volume: 85000 },
  { pair: "BTC/USDC", volume: 60000 },
  { pair: "BONK/USDC", volume: 40000 },
];

const liquidityDistribution = [
  { name: "SOL/USDC", value: 50 },
  { name: "ETH/USDC", value: 30 },
  { name: "BTC/USDC", value: 15 },
  { name: "Others", value: 5 },
];

const circleContributions = [
  { day: "Mon", contrib: 5 },
  { day: "Tue", contrib: 8 },
  { day: "Wed", contrib: 12 },
  { day: "Thu", contrib: 15 },
  { day: "Fri", contrib: 20 },
  { day: "Sat", contrib: 25 },
  { day: "Sun", contrib: 30 },
];

// Transactions Feed (mock)
const transactions = [
  {
    id: "1",
    type: "Swap",
    pair: "SOL → USDC",
    amount: "120 SOL",
    value: "$18,500",
    time: "2m ago",
  },
  {
    id: "2",
    type: "Deposit",
    pair: "ETH/USDC",
    amount: "50 ETH",
    value: "$82,000",
    time: "8m ago",
  },
  {
    id: "3",
    type: "Withdrawal",
    pair: "BTC/USDC",
    amount: "2 BTC",
    value: "$60,000",
    time: "15m ago",
  },
  {
    id: "4",
    type: "Swap",
    pair: "BONK → USDC",
    amount: "2M BONK",
    value: "$4,200",
    time: "25m ago",
  },
];

const COLORS = ["#1cc7e7", "#0070f3", "#00d18c", "#ffaa00"];

export default function AnalyticsPage() {
  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl space-y-10">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#1cc7e7] to-[#0070f3] bg-clip-text text-transparent">
            Analytics Dashboard
          </h1>
          <p className="text-muted-foreground">
            Monitor liquidity flows, pool performance, and circle activity in real-time.
          </p>
        </div>

        {/* KPI Summary */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Total Value Locked</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">$5.5M</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>24h Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">$320k</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Active LPs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">1,240</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Circles Created</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">58</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Liquidity Growth (TVL)</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={tvlData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="day" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#0070f3" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Volume by Pool</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={volumeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="pair" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip />
                  <Bar dataKey="volume" fill="#1cc7e7" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Liquidity Distribution</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={liquidityDistribution} dataKey="value" outerRadius={100} label>
                    {liquidityDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Circle Contributions Over Time</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={circleContributions}>
                  <defs>
                    <linearGradient id="colorContrib" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1cc7e7" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#1cc7e7" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="day" stroke="#888" />
                  <YAxis stroke="#888" />
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="contrib"
                    stroke="#1cc7e7"
                    fillOpacity={1}
                    fill="url(#colorContrib)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Transactions Feed */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-muted-foreground border-b border-border">
                    <th className="py-2 px-3">Type</th>
                    <th className="py-2 px-3">Pair</th>
                    <th className="py-2 px-3">Amount</th>
                    <th className="py-2 px-3">Value</th>
                    <th className="py-2 px-3">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx) => (
                    <tr
                      key={tx.id}
                      className="border-b border-border last:border-none hover:bg-accent/50 transition-colors"
                    >
                      <td className="py-2 px-3">
                        <Badge
                          variant={
                            tx.type === "Swap"
                              ? "default"
                              : tx.type === "Deposit"
                              ? "secondary"
                              : "destructive"
                          }
                        >
                          {tx.type}
                        </Badge>
                      </td>
                      <td className="py-2 px-3">{tx.pair}</td>
                      <td className="py-2 px-3">{tx.amount}</td>
                      <td className="py-2 px-3">{tx.value}</td>
                      <td className="py-2 px-3 text-muted-foreground">{tx.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
