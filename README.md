# 🎬 CineMind AI
> **An Intelligent Media Discovery Engine powered by Generative AI and TMDB Orchestration.**

**CineMind AI** is a high-performance movie discovery platform that merges real-time cinematic data. By integrating the **Google Gemini API**, the platform moves beyond keyword search to provide context-aware movie recommendations, delivered through a seamless, Redux-managed state architecture.

---

## 🌟 FEATURES
* **Algorithmic Discovery:** Organizes real-time media into Now Playing, Popular, and Top Rated clusters using the TMDB API.
* **On-Demand Media Engine:** Triggers high-definition YouTube trailer embeds instantly upon selecting a movie poster.
* **Responsive Portal Architecture:** Delivers a mobile-first UI utilizing **React Portals** for sleek, distraction-free modal windows.
* **Centralized State Orchestration:** Manages global data flow and movie metadata using **Redux Toolkit** for a single source of truth.
* **Accessibility-Focused Controls:** Implements global event listeners to enable instant media exit via the **Escape key**.
* **Automated Cinema Mode:** Features **autoplaying, muted trailers** to provide an immersive preview while adhering to browser policies.
---

## 🛠️ TECHNICAL STACK

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React.js |
| **State Management** | Redux Toolkit |
| **Intelligence** | Google Gemini API  |
| **Data Source** | TMDB API|
| **Styling** | Tailwind CSS |
| **Build Tool** | Vite|

---

## ⚙️ INSTALLATION & SETUP

### 1. Prerequisites
* **Node.js** (v18+)
 
* **TMDB API Key** (from [The Movie Database](https://www.themoviedb.org/))

* **Gemini API Key** (from [Google AI Studio](https://aistudio.google.com/))

---

### 2. Clone the Repository
```bash
git clone [https://github.com/your-username/CineMind-AI.git](https://github.com/your-username/CineMind-AI.git)

cd CineMind-AI


# Install dependencies

npm install

```

### 🛠️ Configuration
1. TMDB API Key

Sign up at TMDB and generate an API key.

Create a .env file in the root:
```
VITE_TMDB_API_KEY=your_tmdb_api_key
```
Update your API call file (constants.js) accordingly:
```
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
  },
};
```
2. Gemini API

If you're integrating AI-based features (like search or recommendations), use Google Gemini API.

Create another entry in .env:
```
VITE_GEMINI_API_KEY=your_gemini_api_key
```
---

## 💡 HOW IT WORKS

**1. Smart Data Loading (Redux & TMDB)**
The app talks to **TMDB** (The Movie Database) to get lists of the latest and most popular movies. Instead of loading this data over and over, we save it in a "Global Brain" called **Redux**. This makes the app feel very fast because the data is always ready when you click a button.


**2. AI-Powered Search (Google Gemini)**
Our **AI Search** uses the **Google Gemini API** to understand what you feel like watching. You can type things like *"Scary movies set in space"* or *"Heartwarming movies about dogs,"* and the AI will figure out the best recommendations for you.


**3. Dynamic Trailer Fetching**
The app doesn't load every trailer at once (which would be slow). Instead, it waits until you click a movie card. Only then does it quickly find the right **YouTube** link using a "Custom Hook" and prepares the video for you instantly.

**4. Immersive Video Player**
When you select a movie, a "Modal" (a pop-up window) appears over the screen. It uses a **React Portal** to show the video in high quality. We added a "Mute" and "Autoplay" feature so the trailer starts playing immediately, just like a real cinema experience.

**5. Smart User Controls**
We designed the player to be easy to use. You can click anywhere outside the video or simply press the **"Escape" (Esc)** key on your keyboard to close the trailer and go back to browsing.

---
