# Owen Nguyen — Portfolio

Professional portfolio site (Finance and Economics, DePauw University). Built with React, Vite, TypeScript, and Tailwind CSS.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)

## Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Environment variables: copy `.env.example` to `.env.local` and set your values (for example `GEMINI_API_KEY` if you use Gemini features).

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Production build:

   ```bash
   npm run build
   npm run preview
   ```

## Scripts

| Script        | Description              |
| ------------- | ------------------------ |
| `npm run dev` | Vite dev server          |
| `npm run build` | Production bundle      |
| `npm run preview` | Preview production build |
| `npm run lint` | Typecheck (`tsc --noEmit`) |
