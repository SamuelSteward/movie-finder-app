# 🎬 Movie Finder App

A modern React-based web app to **search and explore movies**, displaying posters, ratings, release year, language, and overviews. Built with **React, Vite, and TMDB API**, this project demonstrates my ability to implement API integrations, manage state, and deploy applications using Docker.

---

## 🚀 Features

- **Search movies** by name or keyword.
- **View movie details**: poster, title, rating, release year, language, and overview.
- **Debounced search** for better performance.
- **Responsive design** with dark theme and smooth UI.
- **Dockerized app** for easy deployment.

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Tailwind CSS  
- **State Management:** useState, useEffect, useDebounce  
- **API:** TMDB (The Movie Database)  
- **Containerization:** Docker & Docker Compose  
- **Server:** Nginx for serving static build

---

## 🎯 What I Learned & Implemented

- Creating **reusable React components** with props.  
- **Fetching and handling API data** asynchronously.  
- Using **custom hooks** like `useDebounce` for efficient searching.  
- Implementing **conditional rendering** and interactive UI features.  
- Dockerizing a React app for **production-ready deployment**.  
- Managing **environment variables** securely using `.env.local` and `.env.example`.  
- Linking GitHub repository and demonstrating **professional version control workflow**.

---

## ⚙️ Getting Started

### **1. Clone the repo**

```bash
git clone https://github.com/SamuelSteward/movie-finder-app.git
cd movie-finder-app
```

### **2. Install dependencies**

```bash
npm install
```

### **3. Create `.env.local`**

Create a file `.env.local` in the root folder:

```env
VITE_TMDB_API_KEY=your_real_tmdb_api_key
```

> Get your API key from [TMDB](https://www.themoviedb.org/).

### **4. Run Locally**

```bash
npm run dev
```

Open your browser at [http://localhost:5173](http://localhost:5173)

---

## 🐳 Run with Docker

### **Build and run with Docker CLI**

```bash
docker build -t movie-finder-app .
docker run -p 8080:80 movie-finder-app
```

Open your browser at [http://localhost:8080](http://localhost:8080)

### **Or using Docker Compose**

```bash
docker-compose up --build
```

- App will be available at [http://localhost:8080](http://localhost:8080)

---

## 📂 Project Structure

```
first-react-app/
├─ src/                # React source code
├─ public/             # Public assets
├─ Dockerfile          # Docker build file
├─ docker-compose.yml  # Docker Compose configuration
├─ .env.example        # Example environment variables
├─ package.json
└─ README.md
```

---

## 🌟 Why This Project Shows My Skills

- End-to-end **React app development** with API integration.  
- Implemented **modern React hooks** and **state management patterns**.  
- Created **production-ready Docker images** for deployment.  
- Demonstrates **good coding practices, environment variable management, and professional Git workflow**.  

---

## 📞 Contact

- GitHub: [SamuelSteward](https://github.com/SamuelSteward)  
- LinkedIn: [www.linkedin.com/in/samuel-steward-086ba3376]  

---

> Build, search, and enjoy your favorite movies! 🍿
