# 🧩 Crypto Dashboard (Client-Side)

This is the Frontend part of the Crypto Dashboard application, built with React, TypeScript, and Redux Toolkit. It provides a clean, responsive, and modular user interface for exploring and tracking cryptocurrencies in real-time, fully integrated with a secure and scalable backend (Node.js + MongoDB).

---

## 🚀 Key Features

✅ Interactive dashboard to browse and search cryptocurrencies

⭐ Add/remove coins to/from a personal watchlist

🔁 Sync with backend server via secure REST API

⚡ Asynchronous state management with Redux Toolkit + Thunk

🔒 Fully typed with TypeScript and modular architecture

🎨 Responsive design using CSS Modules

---

## 🛠️ Tech Stack

| Layer      | Technology              |
| ---------- | ----------------------- |
| Framework  | React + Vite            |
| Language   | TypeScript              |
| State Mgmt | Redux Toolkit           |
| Routing    | React Router v6         |
| HTTP       | Axios                   |
| Styling    | CSS Modules             |
| Dev Tools  | ESLint, Prettier, JSDoc |

---

## 📁 Folder Structure

src/
│
├── components/             # Reusable UI components
│   ├── atoms/              # generic UI elements(input,labal,button)
│   ├── molecules/          # Small UI elements (e.g., Header)
│   |── organisms/          # Complex actions components (e.g., AddToWatchList)
│   └── templates/          # layout componnets
│
├── domain/
│   └── models/             # Global TypeScript interfacest
│
├── hooks/                  # redux hooks, control coins state, add & remove
│    └── redux/
│
│
├── navigation/             # responsive Nav Bar 
│
├── pages/                  # Main pages of the app
│   ├── HomePage.tsx
│   ├── WatchlistPage.tsx
│   └── ErrorPage.tsx
│
│
├── services/               # API communication logic
│    ├── CryptoHistory.ts
│    ├── cryptoServices.ts         
│    └── WatchListServices.ts
│
├── store/                  # Redux slices and configuration
│    ├── store
│    └── watchlistSlice.ts
│
│
│
├── utils/                  # Helper functions & Axios instance 
│   ├── loading.tsx 
│   └── api.ts               
│
├── styles/                 # CSS modules
│   └── *.module.css
└──
 │
 ├── App.tsx                # Holds the router object, takes care of the loader  
 │                            functions, holds the errorElement that handles all errors
 └──                  
---

## 🔁 Data Flow

User action
  ↓
React component dispatches Redux thunk
  ↓
Thunk triggers API call via Axios
  ↓
Server responds with updated crypto data
  ↓
Redux slice updates global state
  ↓
React components re-render with new data

---

## 🌐 API Integration
All HTTP requests are handled via utils/api.ts using a centralized Axios instance.

| Action           | Endpoint            | Method |
| ---------------- | ------------------- | ------ |
| Fetch watchlist  | `/watchlist`        | GET    |
| Add coin to list | `/watchlist/add`    | POST   |
| Remove coin      | `/watchlist/remove` | DELETE |

---

## ⚙️ Local Setup & Development

# 1. Clone the repository
git clone https://github.com/yakovMoshel/Crypto-dashborad.git
cd client

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev

---

## ✍️ Documentation
All services, slices, and core components are documented with JSDoc

100% fully typed using TypeScript

