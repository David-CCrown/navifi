"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Image from "next/image";
import { ArrowUpDown, TrendingUp, TrendingDown } from "lucide-react";

// Sample pool data
const pools = [
  {
    pair: "SOL/USDC",
    img1: "https://cryptologos.cc/logos/solana-sol-logo.png",
    img2: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
    tvl: "$12.5M",
    volume: "$2.1M",
    apy: "+14%",
    userLiquidity: "$5,200",
  },
  {
    pair: "ETH/USDC",
    img1: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    img2: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
    tvl: "$9.3M",
    volume: "$1.8M",
    apy: "+10%",
    userLiquidity: "$2,800",
  },
  {
    pair: "BTC/USDC",
    img1: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    img2: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
    tvl: "$7.7M",
    volume: "$1.1M",
    apy: "-2%",
    userLiquidity: "$0",
  },
];

export default function PoolsPage() {
  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl space-y-10">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#1cc7e7] to-[#0070f3] bg-clip-text text-transparent">
              Liquidity Pools
            </h1>
            <p className="text-muted-foreground">
              Explore, analyze, and provide liquidity across Saros DLMM pools.
            </p>
          </div>
          <Button className="rounded-full bg-gradient-to-r from-[#1cc7e7] to-[#0070f3] text-white shadow-md hover:shadow-lg">
            Create New Position
          </Button>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Input
            type="text"
            placeholder="Search pools..."
            className="sm:w-64"
          />

          <Tabs defaultValue="tvl">
            <TabsList className="rounded-full border border-border bg-muted/40 p-1">
              <TabsTrigger value="tvl">TVL</TabsTrigger>
              <TabsTrigger value="volume">24h Volume</TabsTrigger>
              <TabsTrigger value="apy">APY</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Pools Table */}
        <Card className="bg-card/70 backdrop-blur-xl border border-border shadow-lg">
          <CardHeader>
            <CardTitle>All Pools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-border text-muted-foreground">
                  <tr>
                    <th className="text-left py-3">Pool</th>
                    <th className="text-left py-3">TVL</th>
                    <th className="text-left py-3">24h Volume</th>
                    <th className="text-left py-3">APY</th>
                    <th className="text-left py-3">Your Liquidity</th>
                    <th className="text-left py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {pools.map((pool, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-border hover:bg-accent/20 transition-colors"
                    >
                      <td className="py-4 flex items-center gap-2 font-medium">
                        <Image
                          src={pool.img1}
                          alt={pool.pair}
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        <Image
                          src={pool.img2}
                          alt={pool.pair}
                          width={24}
                          height={24}
                          className="rounded-full -ml-2 border border-background"
                        />
                        {pool.pair}
                      </td>
                      <td>{pool.tvl}</td>
                      <td>{pool.volume}</td>
                      <td
                        className={pool.apy.startsWith("-") ? "text-red-500" : "text-green-500"}
                      >
                        {pool.apy}
                      </td>
                      <td>{pool.userLiquidity}</td>
                      <td>
                        <Button
                          size="sm"
                          variant="outline"
                          className="rounded-full"
                        >
                          View
                        </Button>
                      </td>
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
