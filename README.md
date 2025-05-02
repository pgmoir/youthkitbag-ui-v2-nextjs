# youthkitbag-ui-v2-nextjs

I am running three consecutive projects to rebuild my youthkitbag front end from scratch again latest tech techstacks, React, NextJS and Nuxt (Vue based). I want to compare the patterns recommended for building with these tools, and compare how they perform, and how easy it is to build, test and deploy. I want to deploy to free services, and connect to the existing API. I also want the general look and feel to remain consistent with the original, but I want style to be simplified. I have opted to go with tailwindcss (as this seems to be the recommended approach that they all use), and daisyui (for free tailwindcss based components that can be used by all three projects). I don't want to get bogged down with style, but I want a nice clean fresh feel that doesn't get in the way of the structure. I will be building the three projects in parallel, feature by feature, step by step. I've also chosen npm as a consistent approach.

URL is https://youthkitbag-ui-v2-nextjs.vercel.app/

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
```

Open [http://localhost:3002](http://localhost:3002) with your browser to see the result.

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

## Next.js 14+ (App Router)

With App Router, routing is folder-based under app/. Layouts and templates give structure; middleware handles auth redirection.

```bash
/app/
│
├── page.tsx               # Marketing landing page ("/")
├── signin/
│   └── page.tsx           # Sign-in ("/signin")
├── signup/
│   └── page.tsx           # Sign-up ("/signup")
├── help/
│   └── page.tsx           # Public help page ("/help")
├── prices/
│   └── page.tsx           # Public prices page
│
├── dashboard/
│   ├── layout.tsx         # Optional: sidebar or layout for logged-in pages
│   ├── page.tsx           # Default post-login home ("/dashboard")
│   ├── profile/
│   │   └── page.tsx       # Profile page
│   └── settings/
│       └── page.tsx       # Settings page
│
/components/
├── Navbar.tsx
├── Footer.tsx
├── AuthForm.tsx
│
/lib/
├── auth.ts                # Auth helpers (e.g., cookies, tokens)
/middleware.ts             # Edge middleware for route protection
```

> You can protect /dashboard pages via middleware or server components using session checks.

## Set up default port

Update `package.json` to use this to run dev

```ts
next dev -p 3002
```

## Implement DaisyUI (with TailwindCSS)

I wanted to keep the actual html structure very consistent across the projects, so to facilitate component development I chose DaisyUI which seems to be the only free component library based on tailwindcss that can be used across the board.

## Hook up GitHub repository to Vercel

To keep costs to zero (or at least a minimum), I have deployed this website to Vercel. I have opted at this stage to make it easy and link the GitHub repository direct in Vercel, so that any changes pushed will automatically deploy.

https://youthkitbag-ui-v2-nextjs.vercel.app/
