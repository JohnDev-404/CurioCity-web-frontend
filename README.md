# 🌆 CurioCity – Frontend

[![React](https://img.shields.io/badge/React-19.2-61dafb?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.2-646cff?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.3-38b2ac?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

> **CurioCity** is a social platform where curiosity meets community. Discover new hobbies, learn through tutorials, and connect with like‑minded friends.

This repository contains the **web frontend** built with React, TypeScript, and Vite.

---

## ✨ Features (Planned)

- 🔐 **Authentication** – Sign up, login, and password reset with JWT.
- 👤 **User Profiles** – Edit avatar, bio, and list of hobbies.
- 🎯 **Hobby Discovery** – Browse hobbies, search, and filter.
- 📚 **Tutorials** – Create, view, and rate hobby tutorials.
- 🤝 **Social Features** – Follow friends, see activity feeds.
- 💬 **Messaging** – Real‑time private chat (coming soon).
- 📱 **Responsive** – Works on desktop and mobile.

---

## 🛠️ Tech Stack

| Tool           | Purpose                       |
|----------------|-------------------------------|
| **React 19**   | UI library                    |
| **TypeScript** | Type safety                   |
| **Vite**       | Build tool & dev server       |
| **Tailwind**   | Styling (utility‑first)       |
| **React Router** | Client‑side routing         |
| **React Hook Form + Zod** | Form handling & validation |
| **Axios**      | HTTP client                   |
| **ESLint**     | Code linting                  |

---

## 📁 Project Structure

```
curiocity-web-frontend/
├── public/                 # Static assets
├── src/
│   ├── api/               # Axios instance and API calls
│   ├── components/        # Reusable UI components
│   ├── contexts/          # React Context (Auth, Theme, etc.)
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Page components (Login, Dashboard, etc.)
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Helper functions
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .env.example            # Environment variables template
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v20 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/CurioCity-web-frontend.git
   cd CurioCity-web-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env` and fill in your API URL:
     ```env
     VITE_API_URL=http://localhost:5000/api
     ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

---

## 📦 Available Scripts

| Command           | Description                           |
|-------------------|---------------------------------------|
| `npm run dev`     | Starts the Vite development server    |
| `npm run build`   | Builds the app for production         |
| `npm run preview` | Previews the production build locally |
| `npm run lint`    | Runs ESLint on the codebase           |

---

## 🔧 Configuration

- **ESLint** – Config is in `eslint.config.js`. We use recommended TypeScript rules and React hooks linting.
- **Tailwind** – Config is in `tailwind.config.js`; you can customise colours, fonts, etc.
- **Vite** – Config is in `vite.config.ts`; it includes the React plugin and path aliases (if set).

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

Make sure your code passes the linting and type checks.

---

## 📄 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---

## 📌 Backend Repository

The backend API for CurioCity is available at:  
[CurioCity-api-backend](https://github.com/your-username/CurioCity-api-backend) *(coming soon)*.

---

## 🌟 Acknowledgements

- [Vite](https://vitejs.dev/) – fast development tooling.
- [React](https://reactjs.org/) – amazing UI library.
- [Tailwind CSS](https://tailwindcss.com/) – utility‑first CSS.
- [Heroicons](https://heroicons.com/) – for beautiful icons.

---

Made by the CurioCity team(which is just me). Happy exploring!