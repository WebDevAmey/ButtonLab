# Button Lab

A modern, theme-aware button component library featuring 50+ interactive button designs built with React, Next.js, and Framer Motion. Every button is crafted to deliver beautiful animations, smooth interactions, and responsive designs.

![Button Lab](https://img.shields.io/badge/License-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Built%20with-Next.js%2015-black)
![React](https://img.shields.io/badge/React-19%2B-61dafb)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38b2ac)

## ✨ Features

- **50+ Unique Button Designs** - From glassmorphism to neumorphism, shimmer effects to 3D transformations
- **Three Button Types**:
  - **Parametric Buttons** - Customizable via accent color, shadow, blur, and glow controls
  - **Custom Buttons** - Hand-crafted HTML/CSS designs with optional JavaScript interactions
  - **Component Buttons** - React components with Framer Motion animations and full interactivity
- **Theme Support** - Dark mode and light mode with automatic color adaptation
- **Live Preview** - See changes in real-time as you adjust button properties
- **Code Generation** - Copy CSS, HTML, or JSX code directly from the preview
- **Responsive Design** - All buttons work seamlessly on mobile, tablet, and desktop
- **Accessibility** - Proper focus states, ARIA labels, and keyboard navigation support
- **Production Ready** - TypeScript, ESLint, and comprehensive type safety

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun as package manager

### Installation & Development

```bash
# Clone the repository
git clone <repository-url>
cd buttonlab

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the button gallery.

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
buttonlab/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.tsx          # Root layout with providers
│   │   └── page.tsx            # Home page with button grid
│   │
│   ├── components/             # React components
│   │   ├── ButtonPreview.tsx   # Renders buttons with live controls
│   │   ├── ButtonCard.tsx      # Card wrapper for each button
│   │   ├── ButtonGrid.tsx      # Grid layout for all buttons
│   │   ├── CardActions.tsx     # Copy/share actions for buttons
│   │   ├── Hero.tsx            # Landing section
│   │   └── Magnetic.tsx        # Magnetic interaction effect
│   │
│   ├── registry/               # Button registry system
│   │   ├── buttons/            # All button definitions
│   │   │   ├── index.ts        # Main registry (imports all buttons)
│   │   │   ├── gradient.ts     # Parametric button example
│   │   │   ├── soft-toggle.ts  # Custom button with JS
│   │   │   ├── shimmer-mask-component.tsx  # React component button
│   │   │   └── ... (50+ more)  # Additional button designs
│   │   │
│   │   ├── types.ts            # Button definition types
│   │   └── button-components.ts # Component registry map
│   │
│   ├── lib/                    # Utility functions
│   │   ├── codegen.ts          # CSS generation for parametric buttons
│   │   ├── color.ts            # Color manipulation utilities
│   │   ├── utils.ts            # General utilities (cn, etc.)
│   │   └── playground-types.ts # Control panel types
│   │
│   └── styles/                 # Global styles
│       └── globals.css         # Tailwind directives
│
├── public/                     # Static assets
├── package.json               # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── next.config.ts            # Next.js configuration
├── LICENSE                   # MIT License
└── README.md                 # This file
```

## 🎨 Button Types

### Parametric Buttons

Customizable buttons driven by a central accent color and control panel settings.

```typescript
import type { ParametricButtonDef } from "@/registry/buttons";

export const gradient: ParametricButtonDef = {
  id: "gradient",
  name: "Gradient",
  category: "Classic",
  kind: "parametric",
  accentMode: "gradient",
  defaultAccent: "#6366f1",
  supportsBlur: false,
  description: "A gradient button that shifts brightness on hover.",
  tags: ["gradient", "vibrant"],
  label: "Click Me",
  prompt: "A button with a 135deg gradient background...",
};
```

**Available Accent Modes**: 
- `gradient` - Linear gradient background
- `neumorphic` - Soft UI with inset shadows
- `border-tint` - Translucent border with optional blur
- `glow-outline` - Glowing text outline
- `solid-step` - 3D stepped appearance
- `solid-pill` - Rounded pill shape
- `retro-gradient` - Vintage gradient style

### Custom Buttons

Hand-written HTML/CSS designs with optional JavaScript for interactivity.

```typescript
import type { CustomButtonDef } from "@/registry/buttons";

export const softToggle: CustomButtonDef = {
  id: "soft-toggle",
  name: "Soft Toggle",
  category: "Material",
  kind: "custom",
  html: `<button class="soft-toggle-btn">...</button>`,
  css: `.soft-toggle-btn { /* styles */ }`,
  js: `// Optional: Add interactivity`,
  description: "A neumorphic toggle button.",
  tags: ["neumorphism", "toggle"],
  label: "Active",
  prompt: "A button with inset shadows creating a recessed well...",
};
```

### Component Buttons

React components with Framer Motion animations and full interactivity.

```typescript
import type { ComponentButtonDef } from "@/registry/buttons";
import { ShimmerMaskComponent } from "./shimmer-mask-component";

export const shimmerMask: ComponentButtonDef = {
  id: "shimmer-mask",
  name: "Shimmer Mask",
  category: "Optical",
  kind: "component",
  Component: ShimmerMaskComponent,
  description: "A button with dual-layer shimmer animation.",
  tags: ["shimmer", "framer-motion"],
  label: "Browse Components",
  prompt: "A React component using Framer Motion...",
};
```

## ➕ Adding New Buttons

### Step 1: Create Button File

Create a new file in `src/registry/buttons/` (e.g., `my-button.ts`):

```typescript
import type { CustomButtonDef } from "../types";

export const myButton: CustomButtonDef = {
  id: "my-button",
  name: "My Button",
  category: "Custom",
  kind: "custom",
  html: `
<button class="my-btn">
  <span>Click Me</span>
</button>
  `,
  css: `
.my-btn {
  padding: 12px 24px;
  background: #3b82f6;
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
}

.my-btn:hover {
  background: #2563eb;
}
  `,
  description: "A simple custom button.",
  tags: ["custom"],
  label: "Click Me",
  prompt: "A blue button with white text and hover effect...",
};
```

### Step 2: Register in Index

Add your button to `src/registry/buttons/index.ts`:

```typescript
import { myButton } from "./my-button";

export const buttons: ButtonDef[] = [
  // ... existing buttons
  myButton,
];
```

That's it! Your button will automatically appear in the gallery.

## ⚙️ Controls & Customization

Parametric buttons support the following controls:

| Control | Range | Effect |
|---------|-------|--------|
| **Accent Color** | Any hex/RGB | Primary button color |
| **Size** | XS, S, M, L, XL | Button dimensions |
| **Radius** | 0-32px | Border radius |
| **Shadow** | On/Off | Box shadow effect |
| **Speed** | 200-1000ms | Animation duration |
| **Blur** | 0-20px | Backdrop blur (if supported) |
| **Glow** | On/Off | Additional glow effects |

## 🌓 Theme Support

The app automatically adapts to your system's dark/light mode preference.

Buttons use CSS variables and Tailwind classes:

```css
[--shine:rgba(0,0,0,.66)] dark:[--shine:rgba(255,255,255,.66)]
```

## 📋 Code Generation

Copy button code in your preferred format:

- **CSS** - Standalone styles
- **HTML** - Full markup
- **JSX** - React component code
- **Prompt** - AI-friendly description for code generation

## ⚡ Performance

- **Code Splitting** - Lazy load buttons on demand
- **GPU Acceleration** - Framer Motion uses transforms
- **CSS Optimization** - Tailwind purges unused styles
- **Bundle Size** - ~150KB gzipped (all 50+ buttons)

## ♿ Accessibility

WCAG 2.1 Level AA compliant:

- ✓ Keyboard navigation (Tab, Enter, Space)
- ✓ Focus visible states
- ✓ AAA color contrast ratios
- ✓ Semantic HTML elements
- ✓ ARIA labels and roles
- ✓ Respects `prefers-reduced-motion`

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork** the repository
2. **Create a branch** (`git checkout -b feature/new-button`)
3. **Add your button** following the structure above
4. **Test locally** (`npm run dev`)
5. **Commit** with a clear message (`git commit -m "Add new button: my-button"`)
6. **Push** to your fork
7. **Create a Pull Request**

### Design Guidelines

- Use consistent spacing and typography
- Ensure dark mode support
- Keep animations < 500ms for interactions
- Write clear, concise prompts
- Add 3-5 relevant tags
- Test on mobile devices

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

## 📚 Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/)
- **UI Library**: [React 19+](https://react.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Amey Tarmale

Permission is hereby granted, free of charge, to any person obtaining a copy...
```

## 🎓 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [cssbuttons.io](https://cssbuttons.io) - Inspiration

## 📧 Contact

Built by **Amey Tarmale** as part of the "Learn to Earn" initiative.

Questions? Reach out at **mazexop@gmail.com**

---

**Happy button crafting!** ✨
