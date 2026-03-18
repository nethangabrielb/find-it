# Find it

> A fullstack "Where's Waldo"-style web game with timed rounds, click-based character validation, and per-scene leaderboards.

![GitHub last commit](https://img.shields.io/github/last-commit/nethangabrielb/eye-spy)
![GitHub repo size](https://img.shields.io/github/repo-size/nethangabrielb/eye-spy)

## 🚀 Live Demo

[Live preview](https://eye-spy-fawn.vercel.app/)

> 💡 **Test Credentials**  
> Not required. This project does not use account authentication for gameplay.

## 📖 About the Project

Find it is a fullstack image-tagging game inspired by classic "find the hidden character" puzzles. Players pick one of three scenes, click on a suspected location in the image, and then choose the character they think they found. The app validates that click against predefined coordinate ranges stored in PostgreSQL and immediately returns success/failure feedback.

The frontend is built with React and React Router, with a game loop that tracks found characters, runs a timer, and submits final scores. The backend is an Express API that serves scenes/characters, validates click coordinates, and stores leaderboard entries. Prisma is used as the database access layer, and Supabase Storage hosts image assets.

This project is designed for people who enjoy lightweight browser games and for developers who want a practical fullstack example covering image coordinate normalization, API-driven gameplay logic, and leaderboard persistence.

### Why I Built This

I wanted to build a polished fullstack game project that combines frontend interaction
design with backend validation logic. A "Where's Waldo" mechanic is a great fit because
it requires meaningful coordination between UI click events, image scaling math, and API
validation.

> 📚 Built in partial fulfillment of [The Odin Project – Where's Waldo (A Photo Tagging App)](https://www.theodinproject.com/lessons/nodejs-where-s-waldo-a-photo-tagging-app)
> project assignment.

### What I Learned

- How to translate raw UI click events into validated game logic — bridging frontend
  interaction design with backend coordinate checking.
- How to normalize click coordinates from rendered image dimensions to intrinsic image
  dimensions before backend validation, solving the cross-screen-size consistency
  problem the assignment specifically calls out.
- How to model scene, character, and score relationships cleanly with Prisma, including
  anonymous user session tracking for the leaderboard.
- How to structure route-driven gameplay in React with reusable hooks and shared outlet
  context.
- How to test coordinate validation behavior using Jest + Supertest across multiple
  scene datasets.

## Features

- [x] Scene selection - Choose from Gamerverse, 5 Days, and Universe 11.
- [x] Click-to-find gameplay - Click image locations and map selections to characters.
- [x] Coordinate normalization - Frontend normalizes click points for accurate backend validation.
- [x] Real-time feedback - Immediate "Correct" / "Try again" visual and audio responses.
- [x] Timed rounds - In-game timer runs until all characters are found.
- [x] Leaderboards - Fastest times are stored and displayed per scene.
- [x] Duplicate-name guard - Prevents duplicate player names per photo leaderboard.
- [x] API health endpoint - Keeps backend responsive for uptime monitoring.

## Tech Stack

### Frontend

- **React 19** - Component-based UI
- **React Router 7** - Client-side routing
- **Tailwind CSS 4** - Styling and responsive design
- **Vite** - Dev server and bundling
- **date-fns** - Time/duration formatting
- **easytimer.js / easytimer-react-hook** - In-game timer logic

### Backend

- **Node.js + Express 5** - REST API server
- **Prisma ORM** - Database modeling and access
- **express-validator** - Input validation for submitted scores
- **Lodash** - Coordinate range validation helper
- **CORS + dotenv** - API middleware and configuration

### Database

- **PostgreSQL (Supabase Postgres)** - Primary relational database
- **Supabase Storage** - Hosted game and character image assets

### DevOps & Tooling

- **Render** - Backend hosting
- **Vercel** - Frontend hosting configuration
- **GitHub Actions** - Scheduled keep-alive workflow for backend health ping
- **Jest + Supertest** - Integration tests for coordinate validation endpoints

## Architecture

```text
Browser (React + Vite)
   |
   | HTTP (fetch)
   v
Express API (Node.js)
   |-- GET /photos
   |-- GET /photos/:photoId
   |-- POST /photos/:photoId
   |-- POST /photos/:photoId/users
   |-- GET /health
   |
   v
Prisma ORM
   |
   v
PostgreSQL (Supabase)

Assets (scene + character images)
   ^
   |
Supabase Storage (public URLs)
```

The frontend handles interaction and timer state, while the backend owns authoritative validation and score persistence. Click positions are normalized in the client to avoid mismatch between displayed and original image dimensions.

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9
- PostgreSQL database URL (or Supabase project)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/nethangabrielb/eye-spy.git
cd eye-spy

# 2. Install dependencies
cd wheres-waldo-backend && npm install
cd ../wheres-waldo-frontend && npm install

# 3. Set up environment variables
cd ../wheres-waldo-backend
touch .env

# 4. Run database migrations and seed
npx prisma migrate dev
node db/seed.js

# 5. Start the development servers (in separate terminals)
# Terminal A
cd wheres-waldo-backend
npm run dev

# Terminal B
cd wheres-waldo-frontend
npm run dev
```

### Environment Variables

Create `.env` in `wheres-waldo-backend`:

```env
DATABASE_URL=postgresql://USER:PASSWORD@HOST:5432/DB_NAME?schema=public
SUPABASE_URL=https://YOUR-PROJECT.supabase.co
SUPABASE_SERVICE_ROLE_KEY=YOUR_SUPABASE_SERVICE_ROLE_KEY
PORT=5000
```

Optional frontend variable if you decide to make API base URL configurable:

```env
VITE_API_URL=http://localhost:5000
```

## API Reference

Base URL (local): `http://localhost:5000`  
Base URL (deployed backend): `https://wheres-waldo-backend-jwgd.onrender.com`

### Sample Endpoints

| Method | Endpoint                 | Description                                             | Auth Required |
| ------ | ------------------------ | ------------------------------------------------------- | :-----------: |
| GET    | `/health`                | Health check and lightweight service touch              |      ❌       |
| GET    | `/photos`                | Get all scenes with characters and leaderboard data     |      ❌       |
| GET    | `/photos/:photoId`       | Get one scene with characters and leaderboard data      |      ❌       |
| POST   | `/photos/:photoId`       | Validate click coordinates against a selected character |      ❌       |
| POST   | `/photos/:photoId/users` | Submit a username + score for leaderboard               |      ❌       |

## Folder Structure

```text
.
├── .github/
│   └── workflows/
│       └── keepalive.yml               # Scheduled backend /health ping
├── wheres-waldo-backend/
│   ├── app.js                          # Express app entry
│   ├── controllers/                    # Route handler logic
│   ├── routes/                         # API route definitions
│   ├── prisma/                         # Prisma schema and migrations
│   ├── db/                             # Seed scripts and datasets
│   ├── generated/prisma/               # Generated Prisma client output
│   └── tests/                          # Jest + Supertest endpoint tests
└── wheres-waldo-frontend/
    ├── src/
    │   ├── components/                 # Reusable UI pieces
    │   ├── hooks/                      # Custom data/game hooks
    │   ├── layouts/                    # Header/Footer layouts
    │   ├── pages/                      # Route-level pages
    │   ├── routes/                     # Router definitions
    │   └── services/                   # API service layer
    └── public/                         # Static assets (audio/icons)
```

## Roadmap

- [x] Multi-scene gameplay with character validation
- [x] Per-scene leaderboard persistence
- [x] Integration tests for coordinate validation
- [x] Add global leaderboard across all scenes
- [x] Improve backend error handling/status codes for validation responses
- [ ] Add richer analytics (average times, attempt counts)

## 🤝 Contributing

This is a personal project, but feedback and suggestions are welcome.

1. Fork the project
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

Please check open issues before submitting a PR.

