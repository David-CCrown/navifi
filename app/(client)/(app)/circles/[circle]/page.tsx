"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  Share2,
  UserPlus,
  Check,
  Send,
  Zap,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

// Mock data
const circle = {
  id: "sol-powerhouse",
  name: "SOL Powerhouse",
  description:
    "High-yield SOL/USDC strategies with minimal impermanent loss. Collaborate, follow, and grow with experienced LPs.",
  members: [
    { id: "m1", name: "Alice", role: "Circle Lead", online: true },
    { id: "m2", name: "Bob", role: "LP Strategist", online: false },
    { id: "m3", name: "Charlie", role: "Risk Analyst", online: true },
  ],
  strategies: [
    { id: "s1", name: "SOL/USDC Yield Optimizer", desc: "Rebalances every 6h." },
    { id: "s2", name: "SOL Growth", desc: "Long-term bin strategy." },
  ],
  activity: [
    { id: "a1", text: "Alice created new strategy", time: "2h ago" },
    { id: "a2", text: "Bob joined the Circle", time: "1d ago" },
  ],
};

export default function CirclePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const chatTarget = searchParams.get("chat");

  const [active, setActive] = useState("overview");
  const [followed, setFollowed] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const [messages, setMessages] = useState([
    { id: 1, user: "Alice", text: "Welcome to SOL Powerhouse!", time: "10:02 AM" },
    { id: 2, user: "Alice", text: "We’ll share strategies soon 🚀", time: "10:03 AM" },
    { id: 3, user: "Bob", text: "What’s the best rebalancing interval?", time: "10:05 AM" },
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (chatTarget) setActive("chat");
  }, [chatTarget]);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, user: "You", text: input, time: "Now" },
    ]);
    setInput("");
  };

  const navItems = ["overview", "strategies", "members", "activity", "chat"];

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar (desktop only) */}
      <aside className="hidden md:flex w-60 border-r border-border flex-col">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <Link href="/circles">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <Button
            onClick={() => setFollowed((f) => !f)}
            size="sm"
            className="rounded-full bg-gradient-to-r from-[#1cc7e7] to-[#0070f3] text-white"
          >
            {followed ? <Check className="mr-1 h-4 w-4" /> : <UserPlus className="mr-1 h-4 w-4" />}
            {followed ? "Following" : "Follow"}
          </Button>
        </div>

        <div className="px-4 py-3">
          <h1 className="font-semibold text-foreground">{circle.name}</h1>
          <p className="text-xs text-muted-foreground mt-1">{circle.description}</p>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-2 py-3 space-y-2">
          {navItems.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={cn(
                "w-full text-left rounded-md px-3 py-2 text-sm transition",
                active === tab
                  ? "bg-primary text-primary-foreground font-medium"
                  : "hover:bg-accent hover:text-accent-foreground text-muted-foreground"
              )}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </aside>

     {/* Mobile header */}
<div className="md:hidden fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
  <div className="flex items-center justify-between p-4">
    {/* Back button + Circle info */}
    <div className="flex items-center gap-3">
      <Link href="/circles">
        <Button variant="ghost" size="icon" className="rounded-full">
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </Link>
      <div>
        <h1 className="font-semibold truncate max-w-[150px]">{circle.name}</h1>
        <p className="text-xs text-muted-foreground truncate max-w-[150px]">
          {circle.description}
        </p>
      </div>
    </div>

    {/* Actions */}
    <div className="flex items-center gap-2">
      <Button
        onClick={() => setFollowed((f) => !f)}
        size="sm"
        className="rounded-full bg-gradient-to-r from-[#1cc7e7] to-[#0070f3] text-white"
      >
        {followed ? "Following" : "Follow"}
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setMobileMenu((m) => !m)}
      >
        <Menu className="h-5 w-5" />
      </Button>
    </div>
  </div>

  {/* Mobile nav tabs */}
  {mobileMenu && (
    <div className="flex gap-3 overflow-x-auto px-4 pb-2">
      {navItems.map((tab) => (
        <button
          key={tab}
          onClick={() => {
            setActive(tab);
            setMobileMenu(false);
          }}
          className={cn(
            "rounded-full px-4 py-1 text-sm transition",
            active === tab
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground"
          )}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  )}
</div>


      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 md:ml-0 mt-20 md:mt-0">
        {active === "overview" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground">{circle.description}</p>
          </div>
        )}

        {active === "strategies" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Strategies</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {circle.strategies.map((s) => (
                <div
                  key={s.id}
                  className="rounded-lg border border-border p-4 hover:shadow transition"
                >
                  <h3 className="font-semibold">{s.name}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                  <Button size="sm" variant="outline" className="mt-3 rounded-full">
                    <Zap className="mr-2 h-4 w-4" /> Clone
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {active === "members" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Members</h2>
            <div className="space-y-3">
              {circle.members.map((m) => (
                <div
                  key={m.id}
                  className="flex items-center justify-between rounded-lg border border-border p-3 hover:bg-muted/40"
                >
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={`https://i.pravatar.cc/150?u=${m.id}`} />
                      <AvatarFallback>{m.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{m.name}</p>
                      <p className="text-xs text-muted-foreground">{m.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setFollowed(true)}
                    >
                      {followed ? "Following" : "Follow"}
                    </Button>
                    <Button
                      size="sm"
                      className="rounded-full bg-primary text-primary-foreground"
                      onClick={() =>
                        router.push(`/circles/${circle.id}?chat=${m.id}`)
                      }
                    >
                      Message
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {active === "activity" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Activity</h2>
            <div className="space-y-3">
              {circle.activity.map((a) => (
                <div key={a.id} className="text-sm text-muted-foreground border-b border-border pb-2">
                  {a.text} • <span className="text-foreground">{a.time}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {active === "chat" && (
          <div className="flex flex-col h-[calc(100vh-160px)] md:h-[calc(100vh-100px)]">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-4 p-4 bg-muted/40 rounded-lg">
              {messages.map((msg, i, arr) => {
                const prev = arr[i - 1];
                const grouped = prev && prev.user === msg.user;
                return (
                  <div key={msg.id} className="flex items-start gap-3">
                    {!grouped && (
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={`https://i.pravatar.cc/100?u=${msg.user}`} />
                        <AvatarFallback>{msg.user.charAt(0)}</AvatarFallback>
                      </Avatar>
                    )}
                    <div>
                      {!grouped && (
                        <p className="text-sm font-semibold">
                          {msg.user}{" "}
                          <span className="text-xs text-muted-foreground ml-2">{msg.time}</span>
                        </p>
                      )}
                      <p className="text-sm bg-background border border-border rounded-lg px-3 py-2 mt-1">
                        {msg.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 mt-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Message Circle..."
              />
              <Button
                onClick={sendMessage}
                size="icon"
                className="rounded-full bg-gradient-to-r from-[#1cc7e7] to-[#0070f3] text-white"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
