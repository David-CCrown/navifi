"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Copy, LogOut, Check, AlertTriangle, Wallet as WalletIcon } from "lucide-react";
import { shortenAddress } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

type Network = "mainnet-beta" | "devnet" | "testnet";

export default function ConnectWallet({
  onNetworkChange,
}: {
  /** Optional callback so the app can re-init providers when user switches network */
  onNetworkChange?: (network: Network) => void;
}) {
  const { wallets, select, connect, disconnect, publicKey, connected, connecting } =
    useWallet();

  const [balance, setBalance] = useState<number | null>(null);
  const [network, setNetwork] = useState<Network>("devnet");
  const [loadingWallet, setLoadingWallet] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [showWalletList, setShowWalletList] = useState(false);

  // Simple memo for wallet list (adapter name + ready)
  const walletList = useMemo(() => wallets ?? [], [wallets]);

  // fetch balance whenever publicKey or network changes
  useEffect(() => {
    let mounted = true;
    setBalance(null);
    if (!publicKey) return;
    const conn = new Connection(clusterApiUrl(network));
    conn
      .getBalance(new PublicKey(publicKey))
      .then((lamports) => {
        if (!mounted) return;
        setBalance(lamports / 1e9);
      })
      .catch(() => {
        if (!mounted) return;
        setBalance(null);
      });
    return () => {
      mounted = false;
    };
  }, [publicKey, network]);

  // handle network changes locally and inform parent if provided
  const handleNetworkChange = (n: Network) => {
    setNetwork(n);
    setBalance(null);
    if (onNetworkChange) onNetworkChange(n); // parent can re-init WalletProvider if desired
  };

  // Clean connect helper: select wallet (if select exists) then connect
  const handleSelectAndConnect = async (walletName: string) => {
    try {
      setError(null);
      setLoadingWallet(walletName);
      if (select) {
        // select the wallet by name (some adapters support select)
        try {
          await select(walletName as any);
        } catch {
          // ignore select errors (some versions may not expose select)
        }
      }
      await connect(); // connect uses selected wallet
      setLoadingWallet(null);
      setShowWalletList(false);
    } catch (err: any) {
      setLoadingWallet(null);
      setError(
        err?.message ??
          `Could not connect to ${walletName}. Make sure the wallet extension/app is installed and unlocked.`
      );
    }
  };

  // Copy address handler
  const copyAddress = async () => {
    if (!publicKey) return;
    try {
      await navigator.clipboard.writeText(publicKey.toBase58());
      // visual feedback (temporary)
      setMsg("Address copied to clipboard");
      setTimeout(() => setMsg(null), 1500);
    } catch {
      setError("Failed to copy address");
      setTimeout(() => setError(null), 1500);
    }
  };

  // Render when user is NOT connected: show a primary gradient "Connect Wallet" button which opens wallet list
  if (!connected) {
    return (
      <>
        <Button
          onClick={() => setShowWalletList((s) => !s)}
          aria-expanded={showWalletList}
          className="rounded-full bg-gradient-to-r from-[#1cc7e7] to-[#0070f3] px-5 py-2 text-sm font-medium text-white shadow-lg hover:shadow-xl transition-transform hover:scale-[1.02]"
        >
          <WalletIcon className="mr-2 h-4 w-4 inline" />
          Connect Wallet
        </Button>

        {/* Inline wallet selector panel (small popover-like panel anchored to the button) */}
        <Dialog open={showWalletList} onOpenChange={()=> setShowWalletList(!showWalletList)} modal>
            <DialogHeader>
              <DialogTitle hidden>Choose a wallet</DialogTitle>
            </DialogHeader>
            <DialogContent>
            <div className="mb-2 flex items-center justify-between">
                  <p className="text-sm font-semibold text-foreground">Choose a wallet</p>
                  {/* <button
                    onClick={() => setShowWalletList(false)}
                    className="text-xs text-muted-foreground hover:text-foreground"
                  >
                    Close
                  </button> */}
                </div>

                <div className="grid gap-2">
                  {walletList.length === 0 && (
                    <div className="rounded-md border border-border p-3 text-sm text-muted-foreground">
                      No wallet adapters available
                    </div>
                  )}

                  {walletList.map((w) => {
                    const name = (w as any).name || (w.adapter && (w.adapter as any).name) || "Wallet";
                    const readyText =
                      (w as any).readyState || (w.adapter && (w.adapter as any).readyState) || null;
                    return (
                      <div
                        key={name}
                        className="flex items-center justify-between rounded-lg border border-border p-2"
                      >
                        <div className="flex items-center gap-3">
                          {/* wallet icon placeholder */}
                          <div className="h-8 w-8 rounded-md bg-background/50 flex items-center justify-center text-sm text-muted-foreground">
                            {name.slice(0, 2).toUpperCase()}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-foreground">{name}</div>
                            {readyText && (
                              <div className="text-xs text-muted-foreground">{String(readyText)}</div>
                            )}
                          </div>
                        </div>

                        <div>
                          <Button
                            onClick={() => handleSelectAndConnect(name)}
                            disabled={loadingWallet !== null}
                            size="sm"
                            className="rounded-full bg-primary text-primary-foreground px-3 py-1 text-sm"
                          >
                            {loadingWallet === name ? "Connecting..." : "Connect"}
                          </Button>
                        </div>
                      </div>
                    );
                  })}

                  <div className="mt-2 text-xs text-muted-foreground">
                    Can't see your wallet? Install Phantom, Solflare, or Backpack and refresh the page.
                  </div>

                  {error && (
                    <div className="mt-2 rounded-md bg-destructive/10 border border-destructive p-2 text-sm text-destructive">
                      {error}
                    </div>
                  )}
                </div>
            </DialogContent>
          </Dialog>
       
      </>
    );
  }

  // Connected state: popover with wallet info, balance, network selector, disconnect
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="rounded-full bg-gradient-to-r from-[#1cc7e7] to-[#0070f3] px-4 py-2 text-sm font-medium text-white shadow-md hover:shadow-lg">
          {publicKey ? shortenAddress(publicKey.toBase58()) : "Wallet"}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-80 space-y-4 rounded-xl border border-border bg-card/80 p-4 backdrop-blur-xl shadow-xl" side="bottom" align="end">
        {/* Address section */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground">
              {publicKey ? shortenAddress(publicKey.toBase58()) : ""}
            </p>
            <p className="mt-1 text-xs text-muted-foreground break-all">
              {publicKey?.toBase58() ?? ""}
            </p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <button
              onClick={copyAddress}
              className="rounded-md p-1 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Copy address"
            >
              <Copy className="h-4 w-4" />
            </button>

            <div className="text-sm text-muted-foreground">{connected ? <Check className="inline mr-1 h-4 w-4 text-green-400" /> : null}</div>
          </div>
        </div>

        {/* Balance */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Balance</p>
            <p className="text-sm font-medium text-foreground">{balance !== null ? `${balance.toFixed(4)} SOL` : "—"}</p>
          </div>
          <div className="text-xs text-muted-foreground">Network</div>
        </div>

        {/* Network selector */}
        <div>
          <Select value={network} onValueChange={(v) => handleNetworkChange(v as Network)}>
            <SelectTrigger className="w-full rounded-lg border border-border bg-background text-sm">
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="mainnet-beta">Mainnet Beta</SelectItem>
              <SelectItem value="devnet">Devnet</SelectItem>
              <SelectItem value="testnet">Testnet</SelectItem>
            </SelectContent>
          </Select>

          <p className="mt-2 text-xs text-muted-foreground">
            Changing network updates balances displayed locally. To fully switch provider/network (for signing against a different cluster) re-init the WalletProvider with the desired RPC endpoint.
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex-1 rounded-lg text-sm hover:bg-accent hover:text-accent-foreground"
            onClick={() => {
              // Disconnect
              try {
                disconnect();
              } catch {
                /* ignore */
              }
            }}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Disconnect
          </Button>

          <Button
            className="rounded-lg bg-primary px-3 py-2 text-sm text-primary-foreground shadow-sm hover:shadow-md"
            onClick={() => {
              // Quick action: open explorer in a new tab
              const base = network === "mainnet-beta" ? "https://explorer.solana.com" : `https://explorer.solana.com?cluster=${network}`;
              if (publicKey) {
                const url = `${base}/address/${publicKey.toBase58()}${network === "devnet" ? "?cluster=devnet" : ""}`;
                window.open(url, "_blank");
              }
            }}
          >
            View on Explorer
          </Button>
        </div>

        {error && (
          <div className="rounded-md bg-destructive/10 border border-destructive p-2 text-sm text-destructive">
            {error}
          </div>
        )}
         {msg && (
          <div className="rounded-md bg-accent/10 border border-accent p-2 text-sm text-accent">
            {msg}
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
