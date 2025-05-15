# Basic Online Shop – React Client + Docker

## 🛒 Overview

This project is a simple React-based frontend for an online shop.  
It connects to a backend server that manages a shopping basket using Redis.  
All components run inside Docker containers using `docker-compose`.


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

