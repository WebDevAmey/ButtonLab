# ButtonLab

A handful of buttons worth stealing — hover, press, copy the code. Built with Next.js, Tailwind, and Motion. Inspired by [cssbuttons.io](https://cssbuttons.io).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Each button has its own page at `/button/<id>` with a live preview, a playground (when supported), and copyable code in several formats.

## Adding a button

See [CONTRIBUTING.md](./CONTRIBUTING.md) — it's a single new file plus one line in a registry index.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Motion for hover/tap interaction
- Radix UI primitives for the playground controls
