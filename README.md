# 🚀 Full-Stack Template (React + Express + MongoDB)

A ready-to-use full-stack template that includes a frontend built with React + TypeScript and a backend using Express + MongoDB + TypeScript.  
Perfect for starting new projects with a clean folder structure, basic configuration, and production-ready features.

---
## 🚀 Key Features

✅ Modern and responsive frontend built with React and TypeScript

⭐ Modular and scalable folder structure for easy development

🔁 Integrated backend API with Express and MongoDB

⚡ Asynchronous state management using Redux Toolkit (with Thunk or Zustand support)

🔒 Fully typed with TypeScript on both client and server

🎨 Customizable UI with support for CSS Modules

🛡️ Security features: CORS, Helmet, Rate Limiting, Error Handling



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



## 📁 Project Folder Structure

This template is designed to help you get started with a scalable full-stack project using **React + TypeScript** on the frontend, and **Express + MongoDB + TypeScript** on the backend.

---

### 🧠 Frontend (`/client`)

src/
│
├── components/ # Reusable UI components
│ ├── atoms/ # Basic elements (e.g., Input, Label, Button)
│ ├── molecules/ # Small grouped elements (e.g., Header)
│ ├── organisms/ # Complex components (e.g., AddToWatchList)
│ └── templates/ # Page layout components
│
├── domain/
│ └── models/ # Global TypeScript interfaces
│
├── hooks/ # Custom hooks & Redux logic
│ └── redux/ # Redux-specific hooks and logic
│
├── navigation/ # Responsive navigation components
│
├── pages/ # Application views / route components
│ 
│ 
│ 
│
├── services/ # API service calls
│
│
├── store/ # Redux configuration and slices
│ 
│
├── utils/ # Utility functions (e.g., loading spinner, Axios instance)
│ 
│
├── styles/ # CSS Modules
│ └── *.module.css
│
├── App.tsx # Application root with routing and error handling


---

### 🔧 Backend (`/server`)

server/
│
├── api/ # Main application logic
│
│ ├── controller/ # Express route handlers
│
│
│ ├── services/ # Core business logic
│ │ 
│
│ ├── repositories/ # MongoDB interaction layer
│ │ 
│
│ ├── data/ # External API integration
│ │ 
│
│ ├── models/ # Mongoose schemas
│ │ 
│
│ ├── routes/ # API route declarations
│ │
│
│ ├── types/ # Shared TypeScript types
│ │ 
│
│ ├── utils/ # Utility files
│ │ └── ConnectToMongo.ts
│
├── server.ts # App entry point
├── dist/ # Compiled JavaScript output        
---

## 🔁 Data Flow Overview

This project uses a unidirectional data flow pattern, connecting **React**, **Redux Toolkit**, **Axios**, and the **Express backend** with clean separation of concerns.

### 📊 Full Flow

[🖱️ User Interaction]
↓
[🧩 React Component]
(dispatches a Redux thunk)
↓
[🔁 Redux Thunk]
(sends HTTP request via Axios)
↓
[🌐 Backend API]
(Express + MongoDB returns data)
↓
[🗂️ Redux Slice]
(updates global state with new data)
↓
[⚛️ React View]
(automatically re-renders with updated state)

---

## 🌐 API Integration
All HTTP requests are handled via utils/api.ts using a centralized Axios instance.


## ⚙️ Local Setup & Development

# 1. Clone the repository
git clone https://github.com/yakovMoshel/Crypto-dashborad.git
cd client

# 2. Install dependencies
npm install

# 3. Run the dev server
tsc
npm start

# 3. Run the dev client
npm start

---

## ✍️ Documentation
All services, slices, and core components are documented with JSDoc

100% fully typed using TypeScript

## 👨‍💻 Developed by
Yaakov Moshel — Full-Stack Developer passionate about building modern, scalable, and modular applications.

📫 [LinkedIn](https://linkedin.com/in/yakov-moshel)
