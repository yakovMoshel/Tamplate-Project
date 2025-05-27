# 🪙 Crypto  API (Server Only)

This is a Node.js + Express server that manages a **crypto** system using MongoDB. It integrates with the CoinGecko API and provides endpoints to fetch, store, and manage cryptocurrency data efficiently.

---

## 🚀 Description & Value

This API enables clients to:

- ✅ Add and track specific cryptocurrencies in a personal watchlist
- 🧠 Store and cache crypto data locally using MongoDB to reduce API calls
- 🔁 Automatically fetch full crypto data if not found in DB
- 🔐 Secure routes with middleware for rate-limiting, CORS, and headers
- 🧩 Extend functionality easily with modular structure

---

## 🛠️ Tech Stack

| Layer        | Technology            |
|--------------|------------------------|
| Language     | TypeScript             |
| Server       | Node.js + Express.js   |
| Database     | MongoDB + Mongoose     |
| External API | [CoinGecko API](https://www.coingecko.com/en/api) |
| Middleware   | helmet, express-rate-limit, cors |
| Dev Tools    | dotenv, ts-node-dev, ESLint |

---

## 📦 Prerequisites

| Component     | Required Version      |
|---------------|------------------------|
| Node.js       | `>= 18.x`              |
| npm           | `>= 9.x`               |
| MongoDB       | Valid URI (local or cloud) |


---

## 🔁 Data Flow (Chronological Order)

Client Request
  ↓
Route Handler (routes/)
  ↓
Controller Layer (controllers/)
  ↓
Service Layer (services/)
  ↓
Repository (db/)
  ↓
MongoDB or External API (CoinGecko)

---


## 📁 Folder Structure & Data Flow
dist/
|
api/
│
├── controller/              # Handles incoming requests (Express)
│   ├── cryptoController.ts
│   └── watchlistController.ts
│
├── services/                # Business logic
│   ├── crypto.service.ts
│   └── watchlist.service.ts
│
├── repositories/           # Database interaction layer
│   ├── cryptoRepository.ts
│   └── watchListRepository.ts
│
├── data/                   # Data fetching from external APIs
│   └── cryptoData.ts
│
├── models/                 # Mongoose schemas
│   ├── cryptoSchema.ts
│   └── watchListSchema.ts
│
├── routes/                 # API route definitions
│   ├── cryptoRoutes.ts
│   └── watchListRoutes.ts
│
├── types/                  # TypeScript interfaces
│   ├── Crypto.ts
│   ├── CryptoDetail.ts
│   ├── CryptoInfo.ts
│   ├── CryptoMarketHistory.ts
│   └── IWatchedCoin.ts
│
├── utils/                  # Helpers and utilities
│   └── ConnectToMongo.ts
│
├── server.ts               # Entry point of the app



## ⚙️ Local Installation & Running

```bash
# 1. Clone the repository
git clone https://github.com/yakovMoshel/Crypto-dashborad.git
cd server

# 2. Install dependencies
npm install

# 3. Create and configure the .env file
cp .env.example .env
# Edit .env to match your environment

# 4. Start the development server
npm start
