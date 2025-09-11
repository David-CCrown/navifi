# NaviFi — Liquidity Autopilot for Saros DLMM

NaviFi is a developer-friendly project that simplifies liquidity management on **Solana** by integrating with **Saros DLMM (Dynamic Liquidity Market Maker)**. Think of it as a **co-pilot** for liquidity providers (LPs): it helps select bins, rebalance liquidity, run strategies, and visualize performance.

---

## 🚀 Features

- **Automated LP Management**: Smart strategies for bin selection and rebalancing.
- **Analytics Dashboard**: Monitor LP positions, fees, and yields in real time.
- **Backtesting Tools**: Simulate strategies on historical price data.
- **Telegram Bot Integration**: Alerts + one-click transactions.
- **Developer Friendly**: Built on Next.js, TypeScript, and Saros DLMM SDK.

---

## 📖 Key Concepts

- **DeFi**: Decentralized finance, powered by smart contracts.
- **LP (Liquidity Provider)**: A user who deposits tokens into a pool.
- **Liquidity Pool**: A smart contract holding tokens (e.g., SOL + USDC).
- **LP Position**: Your share of the pool (tracked with LP tokens).
- **Saros DLMM**: A liquidity model with **bins** (price levels) for efficient capital allocation.
- **DLMM Bin**: A container for liquidity at a specific price.
- **Rebalancing**: Moving liquidity between bins as markets shift.
- **Backtesting**: Running a strategy on past data.

---

## 🛠 Tech Stack

- **Frontend**: Next.js 13+, React, Tailwind CSS
- **Backend**: Node.js, Express/Fastify
- **Blockchain SDKs**: `@saros-finance/dlmm-sdk`, `@solana/web3.js`
- **Database**: PostgreSQL / MongoDB (optional)
- **Deployment**: Vercel, Docker, or custom infra

---

## ⚙️ Project Structure

```bash
navifi/
├─ frontend/                     # Next.js app
│  ├─ app/                       # App router (Next.js 13+)
│  │  ├─ layout.tsx              # Global layout
│  │  ├─ page.tsx                # Dashboard landing
│  │  ├─ api/                    # API routes
│  │  │  ├─ pool/                # Pool data endpoints
│  │  │  ├─ rebalance/           # Strategy logic endpoints
│  │  │  └─ backtest/            # Backtesting endpoints
│  ├─ components/                # Reusable UI
│  │  ├─ WalletConnect.tsx
│  │  ├─ BinChart.tsx
│  │  └─ PositionCard.tsx
│  ├─ hooks/                     # React hooks
│  │  ├─ useWallet.ts
│  │  └─ useSaros.ts
│  ├─ lib/                       # Utilities
│  │  ├─ sarosClient.ts
│  │  └─ strategies.ts
│  └─ styles/                    # Global styles
│
├─ backend/                      # Node.js API & workers
│  ├─ src/
│  │  ├─ index.ts                # Server entry
│  │  ├─ routes/                 # API endpoints
│  │  │  ├─ pool.ts
│  │  │  ├─ rebalance.ts
│  │  │  └─ tx.ts
│  │  ├─ services/               # Business logic
│  │  │  ├─ rebalanceService.ts
│  │  │  └─ backtestService.ts
│  │  ├─ utils/                  # Helpers
│  │  │  └─ connection.ts
│  │  └─ db.ts                   # DB connection
│
├─ scripts/                      # CLI tools
│  ├─ backtest.ts
│  └─ seedData.ts
│
├─ infra/                        # Deployment configs
│  ├─ docker-compose.yml
│  └─ vercel.json
└─ README.md
```

---

## ⚡ Quickstart

```bash
# Clone the repo
git clone https://github.com/your-username/navifi.git
cd navifi

# Install dependencies (frontend & backend)
cd frontend && npm install
cd ../backend && npm install

# Run frontend
npm run dev
```

---

## 📦 Example: Fetching DLMM Bins

```ts
import { Connection, PublicKey } from "@solana/web3.js";
import { DlmmClient } from "@saros-finance/dlmm-sdk";

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

async function fetchBins(market: string) {
  const dlmm = new DlmmClient(connection, new PublicKey(market));
  const bins = await dlmm.getBins();
  console.log(bins);
}
```

---

## 🎯 Why NaviFi?

- **For LPs**: Reduce impermanent loss, maximize returns.
- **For Developers**: Real-world demo of Saros DLMM SDK.
- **For Hackathons**: Scalable, innovative, and easy to extend.

---
📌 In short: **NaviFi is your autopilot for liquidity management on Solana.**
```
