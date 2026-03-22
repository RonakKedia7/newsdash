# 📰 NewsDash

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-7-purple?logo=vite)
![Node](https://img.shields.io/badge/Node.js-Backend-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-darkgreen?logo=mongodb)
![License](https://img.shields.io/badge/License-MIT-yellow)

A modern **news dashboard** that displays real-time headlines using **NewsAPI**.
Built with **React, Vite, TailwindCSS, and GSAP**, the application focuses on smooth animations, clean UI, and fast performance.

Users can explore headlines by category, bookmark articles, and open full stories from the original sources.

---

# 🌐 Live Demo

Frontend
👉 https://newsdash-three.vercel.app

Backend API
👉 https://newsdash-4xyi.onrender.com

---

# ✨ Features

* 📰 Real-time news headlines
* 📂 Category-based filtering
* 📌 Bookmark articles
* ⚡ Skeleton loading states
* 🎨 Smooth GSAP animations
* 🔗 Open full articles from original sources
* ⏱ Relative time formatting (e.g., *2h ago*)
* 💾 Bookmark persistence using MongoDB

---

# 🛠 Tech Stack

## Frontend

<p align="left">
<img src="https://skillicons.dev/icons?i=react" height="40"/>
<img src="https://skillicons.dev/icons?i=vite" height="40"/>
<img src="https://skillicons.dev/icons?i=tailwind" height="40"/>
<img src="https://skillicons.dev/icons?i=javascript" height="40"/>
<img src="https://skillicons.dev/icons?i=html" height="40"/>
<img src="https://skillicons.dev/icons?i=css" height="40"/>
</p>

Libraries

* GSAP
* @gsap/react
* React Router DOM
* Lucide React Icons
* Remix Icons

---

## Backend

<p align="left">
<img src="https://skillicons.dev/icons?i=nodejs" height="40"/>
<img src="https://skillicons.dev/icons?i=express" height="40"/>
<img src="https://skillicons.dev/icons?i=mongodb" height="40"/>
</p>

Backend Packages

* Express.js
* MongoDB + Mongoose
* Axios
* Cors
* Dotenv
* Nodemon

---

# ⚙️ Environment Variables

Create a `.env` file in the **frontend root**:

```
VITE_BACKEND_BASE_URL=http://localhost:5000
```

Create a `.env` file in the **backend root**:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
NEWS_API_KEY=your_newsapi_key
```

---

# 🚀 Installation

## 1️⃣ Clone the repository

```
git clone https://github.com/RonakKedia7/newsdash.git
cd newsdash
```

---

## 2️⃣ Install frontend dependencies

```
cd frontend
npm install
npm run dev
```

---

## 3️⃣ Install backend dependencies

```
cd backend
npm install
npm run dev
```

---

# 🔌 API Used

This project fetches news from **NewsAPI**.

Example request:

```
https://newsapi.org/v2/top-headlines?country=in&category=technology
```

Documentation
https://newsapi.org/docs

---

# 🎯 Future Improvements

* 🔍 News search
* 🌙 Dark mode
* 📊 Trending analytics
* 🔔 Notifications
* 📱 Progressive Web App (PWA)

---

# 👨‍💻 Author

**Ronak Kedia**

GitHub
https://github.com/RonakKedia7

---

