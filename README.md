# youthkitbag-ui-v2-nextjs

Building the youthkitbag front end from scratch again using modern technologies. This phase will use the existing rest api and database, but may interact with some elements direct. This version is going to be built using NextJS.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Recommended Way to Start NextJS 14+

Recommended Way to Start (as of Next.js 14+)

```bash
npx create-next-app@latest my-app
```

This will guide you through prompts such as:

- TypeScript or JavaScript
- App Router (recommended) or Pages Router
- Tailwind CSS (optional)
- ESLint (optional)
- src/ directory structure (recommended)
- import alias (@/)

Chose to use Turbopack

Turbopack is the next-generation bundler from Vercel (creators of Next.js), designed to eventually replace Webpack in Next.js. It's written in Rust and aims to offer much faster builds and HMR (hot module replacement). That said, its current use is still experimental for production apps.

Chose to use import aliases (like @/components)

Cleaner imports, easier refactoring, less error prone, supported out of the box

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
