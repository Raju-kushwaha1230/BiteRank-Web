# BiteRank Showcase Website

A premium, high-performance showcase website designed for **BiteRank**, the ultimate social network tailored specifically for food enthusiasts.

![BiteRank Showcase](public/assets/hero.png)

## 💎 Features

- **Ultra-Premium Design**: Built with a sophisticated **Glassmorphism v2** system, featuring organic noise textures, border gradients, and interactive glint effects.
- **Cinematic Animations**: High-fidelity motion powered by **GSAP (GreenSock)**, including:
  - **Smooth Parallax Scrolling**: App mockups that float and rotate dynamically as you scroll.
  - **Entrance Staggers**: Elements that reveal gracefully with high-end easing.
  - **Magnetic Micro-Interactions**: Recursive logic that draws primary CTA buttons toward the user's cursor.
- **Functional APK Distribution**: Integrated download system configured to serve an 89MB application directly to enthusiasts.
- **Mobile First & Responsive**: Seamlessly optimized for everything from ultra-wide monitors to handheld devices.

## 🛠️ Technology Stack

- **Core**: HTML5, Vanilla JavaScript (ESLM)
- **Styling**: Modern CSS3 (CSS Grid, Flexbox, Backdrop-filters)
- **Animations**: [GSAP](https://greensock.com/gsap/) with [ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Optimization**: Modular asset structure for sub-second load times.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository or open the project folder.
2. Install dependencies:
   ```bash
   npm install
   ```

### Local Development

Run the development server:
```bash
npm run dev
```
The site will be available at `http://localhost:5173/`.

### Building for Production

To create an optimized production build:
```bash
npm run build
```
The production-ready files will be generated in the `dist/` folder.

## 📥 APK Distribution

The website is configured to serve the BiteRank mobile app. 
1. Place your final `.apk` file in the `public/` directory.
2. Rename it to `BiteRank.apk`.
3. The "Download APK" buttons will automatically serve this file.

## 📁 Project Structure

```text
.
├── public/
│   ├── assets/       # Screen mockups and logo
│   └── BiteRank.apk  # Mobile application file
├── src/
│   ├── main.js       # GSAP & Scroll logic
│   └── style.css     # Premium Design System
├── index.html        # Main Entry Point
└── package.json      # Dependencies & Scripts
```

---

Created with ❤️ for BiteRank Food Enthusiasts.
