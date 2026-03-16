# 📰 NewsDash

A modern **news dashboard** that displays real-time headlines using **NewsAPI**.
Built with **React, Vite, TailwindCSS, and GSAP**, the application focuses on smooth animations, clean UI, and fast performance.

Users can explore headlines by category, bookmark articles, and open full stories from the original sources.

---

# ⚠️ Important Notice

> ⚠️ **This project is NOT responsive yet.**
> It is currently optimized **only for large laptop / desktop screens**.
> Viewing on tablets or mobile devices may break the layout.

---

# ✨ Features

* 📰 Real-time news headlines
* 📂 Category based filtering
* 📌 Bookmark articles
* ⚡ Skeleton loading states
* 🎨 GSAP powered animations
* 🔗 External article links
* ⏱ Relative time formatting (e.g., *2h ago*)
* 📚 Bookmark persistence with MongoDB

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

Additional Libraries

* **GSAP** – advanced animations
* **@gsap/react**
* **React Router DOM**
* **Lucide React Icons**
* **Remix Icons**

---

## Backend

<p align="left">

<img src="https://skillicons.dev/icons?i=nodejs" height="40"/>
<img src="https://skillicons.dev/icons?i=express" height="40"/>
<img src="https://skillicons.dev/icons?i=mongodb" height="40"/>

</p>

Backend Packages

* **Express.js**
* **MongoDB + Mongoose**
* **Axios**
* **Cors**
* **Dotenv**
* **Nodemon**

---

# ⚙️ Environment Variables

Create a `.env` file in the **frontend** root:

```
VITE_BACKEND_BASE_URL=http://localhost:5000
```

Create a `.env` file in the **backend** root:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
NEWS_API_KEY=your_newsapi_key 
```

---

# 🚀 Installation

## 1️⃣ Clone Repository

```
git clone https://github.com/yourusername/newsdash.git
cd newsdash
```

---

## 2️⃣ Install Frontend

```
cd frontend
npm install
npm run dev
```

---

## 3️⃣ Install Backend

```
cd backend
npm install
npm run dev
```

---

# 🔌 API Used

This project fetches news from:

**NewsAPI**

Example request:

```
https://newsapi.org/v2/top-headlines?country=in&category=technology
```

Docs
https://newsapi.org/docs

---

# 🎯 Future Improvements

* 📱 Responsive design
* 🔍 News search
* 🌙 Dark mode
* 📊 Trending analytics
* 🔔 Notifications
* 📱 PWA support

---

# 👨‍💻 Author

**Ronak Kedia**

GitHub
https://github.com/RonakKedia7

---

