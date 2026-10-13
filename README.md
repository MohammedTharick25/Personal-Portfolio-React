# Mohammed Tharick — Portfolio

A React, Vite, and Tailwind CSS portfolio with project pages, contact form, animated interactions, and an AI assistant powered by Groq.

## Run locally

Use the Node.js version pinned by `.nvmrc` before running npm commands:

```sh
nvm use 24.21.0
node --version
```

If that version is not installed, run `nvm install 24.21.0` first.

```sh
npm install
npm run dev
```

Copy `.env.example` to `.env` in the repository root and add your Groq API key:

```env
GROQ_API_KEY=your_groq_api_key
```

`npm run dev` starts Netlify Dev, which runs the Vite frontend and the `/api/chat` Netlify Function together. The first run may download Netlify CLI. The key is read only by the function and must not use a `VITE_` prefix. Use `npm run dev:vite` only when you need to work on the frontend without serverless functions.

The default model is `openai/gpt-oss-120b`. If you set `GROQ_MODEL` in the root `.env`, make sure it matches an active model available to your Groq account. After changing either Groq setting, restart Netlify Dev. A rejected key means create a valid key in GroqCloud.

## Deploy to Netlify

1. Add `GROQ_API_KEY` under **Site configuration → Environment variables** in Netlify. Optionally set `GROQ_MODEL`; the default is `openai/gpt-oss-120b`.
2. Deploy the site. Netlify builds with `npm run build`, publishes `dist`, and deploys `netlify/functions`.
3. The site URL in the SEO metadata, sitemap, and robots file is `https://mt-personal-portfolio.netlify.app/`. Update those references if you use a custom domain.

Groq's free-tier limits and model availability are controlled by Groq and may change. The function limits each chat turn to eight messages and 1,000 characters per message.

## Other commands

- `npm run dev` — start Netlify Dev with the frontend and serverless functions.
- `npm run dev:vite` — start Vite only; `/api/chat` will not be available.
- `npm run build` — create the production build in `dist`.
- `npm run lint` — run ESLint.
- `npm run preview` — preview the production build locally.
