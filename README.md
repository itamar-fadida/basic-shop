# Basic Online Shop – React Client + Docker

## 🛒 Overview

This project is a simple React-based frontend for an online shop.  
It connects to a backend server that manages a shopping basket using Redis.  
All components run inside Docker containers using `docker-compose`.

## 🧱 Project Structure
Basic-Shop/
├── client/                     # React frontend (Vite + Tailwind)
│   ├── public/                 # favicon, static files
│   ├── src/
│   │   ├── pages/              # Home.jsx, Basket.jsx (main views)
│   │   ├── App.jsx             # Routing between pages
│   │   ├── main.jsx            # App entry point
│   │   └── index.css           # Tailwind CSS setup
│   ├── Dockerfile              # Docker build for React client
│   ├── index.html              # Entry HTML with splash + font
│   └── vite.config.js          # Vite config for client
│
├── server/                    # Express backend for basket API
│   ├── index.js               # API routes (GET/POST/DELETE /basket)
│   ├── package.json           # Dependencies
│   └── Dockerfile             # Docker build for server
│
├── docker-compose.yaml        # Runs redis, server, and client services
├── README.md                  # Project overview, setup, and structure
└── .gitignore                 # Ignoring node_modules, dist, etc.


## 🚀 Tech Stack

- React (Vite)
- Tailwind CSS
- React Router DOM
- fetch API
- Docker
- Redis
- Backend server (existing)

## 🔧 Features

- Display products from https://fakestoreapi.com/products
- Add/remove items from basket
- View current basket contents
- All basket actions use GET/POST/DELETE to server API

## 🐳 Docker Setup

### Run everything:

```bash
docker-compose up --build

