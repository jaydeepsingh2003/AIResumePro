# AI Resume Pro

Professional, ATS-optimized resume builder with AI. Build job-winning resumes, check ATS scores, and tailor content to job descriptions.

## Tech Stack

- **Frontend**: Next.js 16 (App Router), React 19, Tailwind CSS, Framer Motion
- **Backend**: NestJS, Prisma (optional DB)
- **AI**: OpenAI integration for content improvement

## Project Structure

- `client/` – Next.js frontend
- `server/` – NestJS API (auth, resumes, AI)

## Local Development

### Prerequisites

- Node.js 18+
- npm or yarn

### 1. Install dependencies

```bash
cd client && npm install
cd ../server && npm install
```

### 2. Environment variables

**Client** (`client/.env.local`):

- Copy `client/.env.example` to `client/.env.local`.
- For local dev you can leave `NEXT_PUBLIC_API_URL` unset (defaults to `http://localhost:3001`).
- Optional: `NEXT_PUBLIC_SITE_URL` for SEO (e.g. `http://localhost:3000`).

**Server** (`server/.env`):

- Copy `server/.env.example` to `server/.env`.
- Optional: set `PORT` (default `3001`), `CLIENT_ORIGIN` (default `http://localhost:3000`), `JWT_SECRET`, `DATABASE_URL`, `OPENAI_API_KEY` as needed.

### 3. Run locally

Terminal 1 – API:

```bash
cd server
npm run start:dev
```

Terminal 2 – Frontend:

```bash
cd client
npm run dev
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- API: [http://localhost:3001](http://localhost:3001)

### 4. Production build (test before hosting)

```bash
cd client && npm run build && npm run start
cd server && npm run build && npm run start:prod
```

## Hosting (Production)

### Frontend (e.g. Vercel)

1. Push your repo to GitHub and import the project in [Vercel](https://vercel.com).
2. Set **Root Directory** to `client`.
3. Add environment variable:
   - `NEXT_PUBLIC_API_URL` = your backend URL (e.g. `https://api.yourdomain.com`)
4. Deploy. Vercel will run `npm run build` and serve the app.

### Backend (e.g. Railway, Render, Fly.io)

1. Deploy the `server/` folder as a Node.js service.
2. Set environment variables from `server/.env.example`:
   - `PORT` (often provided by the host)
   - `CLIENT_ORIGIN` = your frontend URL (e.g. `https://yourdomain.com`) so CORS works
   - `JWT_SECRET` = a strong random string
   - `DATABASE_URL` and `OPENAI_API_KEY` if you use DB and AI features
3. Point your domain (e.g. `api.yourdomain.com`) to this service.

### After going live

- Set `NEXT_PUBLIC_SITE_URL` in the client to your production site URL (for SEO metadata).
- Use HTTPS for both frontend and API.
- Keep `JWT_SECRET` and API keys secret and never commit `.env` or `.env.local`.

## Features

- Landing page, pricing, templates
- Auth (register / login)
- Resume builder with multiple templates
- ATS score and job optimizer (dashboard)
- Error and not-found pages, loading states
- SEO metadata and accessibility (skip link)

## License

Private / Unlicensed. All rights reserved.
