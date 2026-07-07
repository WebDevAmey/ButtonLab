# Contributing to Button Lab

Thank you for your interest in contributing to Button Lab! This document provides guidelines and instructions for adding new buttons and improving the project.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Adding a New Button](#adding-a-new-button)
3. [Button Types Guide](#button-types-guide)
4. [Design Guidelines](#design-guidelines)
5. [Testing & Quality](#testing--quality)
6. [Pull Request Process](#pull-request-process)

## Getting Started

### Prerequisites

- Node.js 18+
- Git
- A code editor (VS Code recommended)

### Setup Development Environment

```bash
# Clone the repository
git clone <repository-url>
cd buttonlab

# Install dependencies
npm install

# Start development server
npm run dev
```

## Adding a New Button

### The Quickest Path (5 minutes)

1. Create `src/registry/buttons/my-button.ts`
2. Write your button definition
3. Add one line to `src/registry/buttons/index.ts`
4. Done! Visit http://localhost:3000

### Step-by-Step Instructions

#### 1. Create Button File

Create `src/registry/buttons/my-awesome-button.ts`:

```typescript
import type { CustomButtonDef } from "../types";

export const myAwesomeButton: CustomButtonDef = {
  // Required: Unique identifier (kebab-case)
  id: "my-awesome-button",

  // Required: Display name
  name: "My Awesome Button",

  // Required: Category for organization
  category: "Interactive",

  // Required: Button type (see types guide below)
  kind: "custom",

  // Required: HTML structure
  html: `
<button class="my-awesome-btn">
  <span class="my-awesome-btn__text">Click Me</span>
</button>
  `,

  // Required: CSS styles
  css: `
.my-awesome-btn {
  position: relative;
  padding: 12px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
}

.my-awesome-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.4);
}

.my-awesome-btn:active {
  transform: translateY(0);
}
  `,

  // Optional: JavaScript for interactivity
  js: `
    const btn = document.querySelector('.my-awesome-btn');
    btn?.addEventListener('click', function() {
      this.classList.add('clicked');
      setTimeout(() => this.classList.remove('clicked'), 300);
    });
  `,

  // Required: One-sentence description
  description: "A vibrant gradient button with smooth hover effects.",

  // Required: 2-4 tags for discovery
  tags: ["gradient", "interactive", "hover-effect"],

  // Required: Default button text
  label: "Click Me",

  // Required: AI-friendly description for code generation
  prompt: "Create a button with a gradient background (135deg, #667eea to #764ba2). On hover, translate it up 2px and add a shadow (0 8px 16px rgba(102,126,234,0.4)). On click, use transform: scale(0.98) for 100ms to create a press effect. Text is white with 600 font-weight. Smooth transitions on all states.",
};
```

#### 2. Register Your Button

Edit `src/registry/buttons/index.ts`:

```typescript
// Add import (keep imports alphabetical)
import { myAwesomeButton } from "./my-awesome-button";

// Add to buttons array (keep entries alphabetical)
export const buttons: ButtonDef[] = [
  gradient,
  // ... other buttons in alphabetical order ...
  myAwesomeButton,  // ← Add here
];
```

#### 3. Test Your Button

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) and verify:
- Button appears in the gallery
- It looks correct
- Hover/active states work
- Dark mode works (if applicable)
- Responsive on mobile

## Button Types Guide

There are three types of buttons. Choose the right one for your design.

### 1. Custom Buttons (Most Common)

For hand-crafted designs with full control over HTML and CSS.

```typescript
import type { CustomButtonDef } from "../types";

export const myButton: CustomButtonDef = {
  id: "my-button",
  name: "My Button",
  category: "Interactive",
  kind: "custom",
  html: `<button class="my-btn">Click Me</button>`,
  css: `.my-btn { /* styles */ }`,
  js: `// Optional JavaScript`,
  description: "A custom button design.",
  tags: ["custom"],
  label: "Click Me",
  prompt: "AI-friendly description of the design...",
};
```

**When to use**: Complex designs, animations, special effects, unique interactions

**CSS Class Prefix**: Always prefix with the button ID to avoid collisions
```css
.my-button { /* good */ }
.btn { /* bad - too generic */ }
```

### 2. Parametric Buttons (Advanced)

For designs that reduce to a single accent color + control knobs.

```typescript
import type { ParametricButtonDef } from "@/registry/buttons";

export const myButton: ParametricButtonDef = {
  id: "my-button",
  name: "My Button",
  category: "Classic",
  kind: "parametric",
  accentMode: "gradient",
  defaultAccent: "#6366f1",
  supportsBlur: false,
  description: "An accent-driven button.",
  tags: ["gradient"],
  label: "Click Me",
  prompt: "AI-friendly description...",
};
```

**Available Accent Modes**:
- `gradient` - 135deg gradient
- `neumorphic` - Soft UI with shadows
- `border-tint` - Translucent border
- `glow-outline` - Glowing text outline
- `solid-step` - 3D stepped look
- `solid-pill` - Rounded pill
- `retro-gradient` - Vintage style

**When to use**: Simple designs that benefit from color customization

### 3. Component Buttons (React + Animation)

For complex interactive components using Framer Motion.

Create `my-button-component.tsx`:
```typescript
"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const MyButtonComponent: React.FC<{
  children?: React.ReactNode;
  className?: string;
}> = ({ children = "Click Me", className = "" }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "px-6 py-2 bg-blue-500 text-white rounded-lg",
        className
      )}
    >
      {children}
    </motion.button>
  );
};
```

Then in `my-button.ts`:
```typescript
import type { ComponentButtonDef } from "../types";
import { MyButtonComponent } from "./my-button-component";

export const myButton: ComponentButtonDef = {
  id: "my-button",
  name: "My Button",
  category: "Interactive",
  kind: "component",
  Component: MyButtonComponent,
  description: "An interactive React component.",
  tags: ["react", "framer-motion"],
  label: "Click Me",
  prompt: "A React component using Framer Motion...",
};
```

**When to use**: Complex animations, state management, Framer Motion effects

## Design Guidelines

### ✅ Do's

- **Keep it focused** - One clear design idea per button
- **Test on mobile** - Ensure responsive at all sizes
- **Support dark mode** - Use CSS variables or `@media (prefers-color-scheme: dark)`
- **Write clear prompts** - Help AI understand your design
- **Use specific IDs** - Make the purpose obvious from the ID
- **Keep animations fast** - < 500ms for user interactions
- **Add meaningful tags** - Help users discover your button
- **Test accessibility** - Keyboard navigation, color contrast, focus states

### ❌ Don'ts

- **Avoid over-animation** - Don't distract from the button's purpose
- **Don't ignore dark mode** - Provide explicit dark mode support
- **Don't hardcode colors** - Use CSS variables for flexibility
- **Don't duplicate buttons** - Check existing buttons first
- **Don't use web fonts** - Stick with system fonts or Tailwind defaults
- **Don't make buttons huge** - Keep within reasonable bounds
- **Don't use !important** - Signals CSS specificity issues

### Dark Mode Support

Always test in dark mode. Use one of these approaches:

**Approach 1: CSS Variables (Recommended)**

```css
.my-btn {
  --text-color: #000;
  --bg-color: #fff;
  color: var(--text-color);
  background: var(--bg-color);
}

@media (prefers-color-scheme: dark) {
  .my-btn {
    --text-color: #fff;
    --bg-color: #000;
  }
}
```

**Approach 2: Tailwind Classes**

```html
<button class="bg-white dark:bg-black text-black dark:text-white">
  Click Me
</button>
```

### Writing Good Prompts

The prompt helps AI understand and regenerate your design. Make it:

- **Descriptive** - Explain the design clearly
- **Technical** - Include CSS properties, animation timing, etc.
- **Specific** - "shimmer effect" → "horizontal gradient animates right-to-left on hover for 1 second"
- **Complete** - Include all states (hover, active, etc.)

**Good Prompt Example**:
```
A button with a gradient background (135deg, #667eea to #764ba2).
On hover, translate up 2px and add shadow (0 8px 16px rgba(102,126,234,0.4)).
On click, scale(0.98) for 100ms (press effect).
White text, 600 font-weight. Smooth transitions on all properties.
```

### Categories

Use one of these existing categories:

- **Classic** - Traditional button styles
- **Material** - Material Design inspired
- **Effect** - Special effects and animations
- **Interactive** - Buttons with interaction states
- **Optical** - Visual tricks and illusions
- **3D** - Three-dimensional effects
- **Micro** - Subtle micro-interactions
- **Glassmorphism** - Frosted glass effects
- **Neumorphism** - Soft UI style
- **Fun** - Playful and entertaining

## Testing & Quality

### Manual Testing Checklist

- [ ] Button displays correctly at all screen sizes
- [ ] Hover states work as expected
- [ ] Active/press states work
- [ ] Works in light mode
- [ ] Works in dark mode
- [ ] Keyboard navigation works (Tab, Enter, Space)
- [ ] Focus outline is visible
- [ ] No layout shift when hovering
- [ ] Animations are smooth (60fps)

### Automated Checks

```bash
# TypeScript type checking
npm run build

# ESLint validation
npm run lint
```

### Accessibility Requirements

- [ ] Button is keyboard accessible
- [ ] Focus state is visible and clear
- [ ] Color contrast meets WCAG AAA (4.5:1 for text)
- [ ] Button has descriptive text
- [ ] No color alone conveys meaning
- [ ] Works with `prefers-reduced-motion`

## Commit Guidelines

Use clear, descriptive commit messages:

```bash
git commit -m "feat: add gradient-glow button with shimmer"
git commit -m "fix: improve dark mode contrast on soft-press"
git commit -m "docs: update contribution guidelines"
```

**Format**: `<type>: <description>`

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`

## Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/add-gradient-glow-button
   ```

2. **Make your changes** and test locally
   ```bash
   npm run dev
   ```

3. **Verify quality**
   ```bash
   npm run build
   npm run lint
   ```

4. **Commit with clear messages**
   ```bash
   git commit -m "feat: add gradient-glow button"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/add-gradient-glow-button
   ```

6. **Create a Pull Request** with:
   - **Title**: "Add [Button Name] button"
   - **Description**: What does it do? Why add it?
   - **Screenshots**: Show the button in action
   - **Testing**: How did you test it?
   - **Checklist**: Mark completed items

### PR Template

```markdown
## Description
Brief description of the button design and why it's useful.

## Changes
- Added gradient-glow button with X, Y, Z features
- Updated registry to include new button

## Screenshots
[Attach images of the button in light and dark mode]

## Testing
- [x] Tested on mobile
- [x] Tested dark mode
- [x] Verified keyboard navigation
- [x] Checked color contrast

## Checklist
- [x] Follows design guidelines
- [x] Has dark mode support
- [x] Code builds without errors
- [x] Accessibility requirements met
```

## Resources

### Documentation
- [MDN: HTML Button Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
- [MDN: CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions)
- [MDN: CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)

### Accessibility
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Color Contrast](https://webaim.org/articles/contrast/)
- [MDN: ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)

### Tools
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Getting Help

- **Questions?** Open an issue with the `question` label
- **Found a bug?** Open an issue with the `bug` label
- **Need feedback?** Open a draft PR and ask for reviews
- **Blocked?** Reach out at mazexop@gmail.com

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others succeed
- Report issues appropriately

---

**Happy button crafting!** ✨

Your contributions help developers create beautiful, interactive UIs. Let's build something amazing together!
