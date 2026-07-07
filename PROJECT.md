# Button Lab - Project Overview

## Mission

Button Lab is a modern, theme-aware button component library showcasing 50+ interactive button designs. It serves both as a gallery for inspiration and as a copy-paste resource for developers building UIs.

## Vision

Become the go-to resource for beautiful, accessible, production-ready button components that developers trust and designers love.

## Core Principles

1. **Simplicity** - Adding a button takes 5 minutes (one file + one import)
2. **Flexibility** - Support three button types (parametric, custom, component)
3. **Accessibility** - WCAG 2.1 Level AA compliant by default
4. **Performance** - GPU-accelerated animations, optimized bundle size
5. **Variety** - Diverse styles from minimal to complex, light to dark

## Architecture Overview

### High-Level Flow

```
User visits localhost:3000
    ↓
Next.js App Router renders /page.tsx
    ↓
ButtonGrid fetches buttons from registry
    ↓
ButtonCard wraps each button
    ↓
ButtonPreview renders the button (parametric, custom, or component)
    ↓
User sees gallery with preview, controls, and code tabs
```

### Key Systems

#### 1. Button Registry (`src/registry/buttons/`)

**Purpose**: Centralized source of truth for all buttons

**Files**:
- `index.ts` - Imports all buttons and exports registry array
- `types.ts` - TypeScript definitions for button types
- `button-components.ts` - Map of component buttons for lazy loading

**How it works**:
1. Each button has its own file (e.g., `gradient.ts`, `soft-toggle.ts`)
2. Button files export a button definition (ParametricButtonDef, CustomButtonDef, or ComponentButtonDef)
3. `index.ts` imports all buttons and exports a single `buttons[]` array
4. Rest of the app reads from this array

**Adding a button**:
```
1. Create src/registry/buttons/my-button.ts
2. Export button definition
3. Add import to src/registry/buttons/index.ts
4. Add to buttons array
```

#### 2. Preview System (`src/components/ButtonPreview.tsx`)

**Purpose**: Render any button type with live controls

**Supports**:
- **Parametric buttons** → Uses `computeStyleSet()` to generate styles from controls
- **Custom buttons** → Injects HTML/CSS and optional JavaScript
- **Component buttons** → Renders React component from `componentMap`

**Controls** (for parametric buttons):
- Accent color picker
- Size slider
- Border radius slider
- Shadow toggle
- Speed slider
- Blur slider
- Glow toggle

#### 3. Code Generation (`src/lib/codegen.ts`)

**Purpose**: Generate copyable code in multiple formats

**Functions**:
- `computeStyleSet(button, controls)` - Generate CSS object from parametric button + controls
- `buildCss(button, controls)` - Convert CSS object to CSS string
- `getCode(button)` - Return code in appropriate format (CSS, HTML, prompt)

**Formats**:
- **Custom buttons**: Shows hand-written HTML/CSS
- **Parametric buttons**: Generates CSS based on controls
- **Component buttons**: Shows the prompt (AI-friendly description)

#### 4. Color Utilities (`src/lib/color.ts`)

**Purpose**: Transform colors for buttons and UI

**Exports**:
- `hexToRgba(hex, alpha)` - Convert hex to rgba with opacity
- `shade(hex, percent)` - Darken/lighten a color
- `readableTextColor(bgHex)` - Determine if text should be black or white

**Used by**:
- Parametric button styles (gradients, shadows, text color)
- Control panel backgrounds
- Accessibility contrast checking

### Data Flow

```
Registry (buttons[])
    ↓
ButtonGrid (maps over buttons)
    ↓
ButtonCard (wraps each)
    ↓
ButtonPreview (renders)
    ↓
computeStyleSet (if parametric)
    ↓
Styled button + controls
    ↓
CardActions (copy buttons)
    ↓
getCode (generate code)
    ↓
User copies code
```

## File Organization

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   └── (routes)/               # Route groups for future pages
│
├── components/                  # React components
│   ├── ButtonPreview.tsx       # Core: renders buttons
│   ├── ButtonCard.tsx          # Wrapper with metadata
│   ├── ButtonGrid.tsx          # 3-column responsive grid
│   ├── CardActions.tsx         # Copy/share controls
│   ├── Hero.tsx                # Landing hero section
│   └── Magnetic.tsx            # Magnetic mouse effect
│
├── registry/
│   ├── buttons/
│   │   ├── index.ts            # Main registry
│   │   ├── types.ts            # Type definitions
│   │   ├── button-components.ts # Component map
│   │   └── [50+ button files]
│   │       ├── gradient.ts     # Parametric example
│   │       ├── soft-toggle.ts  # Custom example
│   │       ├── shimmer-mask.ts # Component example
│   │       └── ...
│   │
│   └── peephole.ts             # Special button implementation
│
├── lib/
│   ├── codegen.ts              # CSS generation + code export
│   ├── color.ts                # Color utilities
│   ├── utils.ts                # cn() + general utilities
│   ├── playground-types.ts     # Control panel types
│   └── tailwind-config.ts      # Tailwind configuration
│
├── styles/
│   └── globals.css             # Tailwind @apply rules
│
└── config.ts                   # Next.js configuration
```

## Development Workflow

### Local Development

```bash
npm run dev
# Runs Next.js dev server on http://localhost:3000
# Hot reload on file changes
# TypeScript checking in background
```

### Building & Testing

```bash
npm run build
# Compiles TypeScript
# Generates optimized production bundle
# Static generation of button pages

npm run lint
# ESLint validation
# Catches code quality issues
```

### Adding a Button (Typical Workflow)

1. **Create file**
   ```bash
   touch src/registry/buttons/my-new-button.ts
   ```

2. **Write definition**
   ```typescript
   // Copy structure from existing button
   // Customize HTML, CSS, and prompt
   ```

3. **Register**
   ```typescript
   // Add import and entry to index.ts
   ```

4. **Test**
   ```bash
   npm run dev
   # Check button appears
   # Test light/dark modes
   # Test mobile responsiveness
   # Verify keyboard navigation
   ```

5. **Commit**
   ```bash
   git add src/registry/buttons/my-new-button.ts src/registry/buttons/index.ts
   git commit -m "feat: add my-new-button"
   ```

## Button Anatomy

Every button definition has:

```typescript
{
  id: string,              // Unique identifier
  name: string,            // Display name
  category: string,        // Organization category
  description: string,     // One-sentence description
  tags: string[],          // 2-4 discovery tags
  label: string,           // Default button text
  kind: "parametric" | "custom" | "component",  // Type
  prompt: string,          // AI-friendly description
  
  // Type-specific fields:
  // Parametric:
  accentMode: string,
  defaultAccent: string,
  supportsBlur: boolean,
  
  // Custom:
  html: string,
  css: string,
  js?: string,
  
  // Component:
  Component: React.ComponentType,
}
```

## Design Patterns

### 1. CSS Class Naming

All buttons use a BEM-inspired convention to avoid collisions:

```css
.my-button { /* Block */ }
.my-button__text { /* Element */ }
.my-button--active { /* Modifier */ }
```

**Why**: Buttons can coexist on the same page without style conflicts.

### 2. Theme Support

Every button supports light and dark modes:

```css
.my-btn {
  --text: #000;
  --bg: #fff;
}

@media (prefers-color-scheme: dark) {
  .my-btn {
    --text: #fff;
    --bg: #000;
  }
}

.my-btn {
  color: var(--text);
  background: var(--bg);
}
```

### 3. Animation Performance

All animations use GPU-accelerated properties:

```css
/* Good - GPU accelerated */
transform: translateY(-2px);
opacity: 0.5;

/* Bad - causes reflow */
top: -2px;
background: new-color;
```

### 4. Accessibility Defaults

```html
<!-- Good -->
<button class="btn" aria-label="Close menu">✕</button>

<!-- Bad -->
<div class="btn" onClick="...">✕</div>
```

## Performance Metrics

- **Initial Load**: ~50KB gzipped (Next.js + React)
- **Button Registry**: ~150KB total (50+ buttons)
- **Core Bundle**: ~200KB gzipped
- **Animation FPS**: 60fps (GPU-accelerated)
- **Lighthouse Score**: 95+ (Performance, Accessibility)

## Testing Strategy

### Unit Tests (if added)
- Color utilities
- Code generation functions
- Type validation

### Integration Tests (if added)
- Button registry loading
- Preview rendering
- Code generation accuracy

### Manual Testing
- Visual verification on desktop/mobile
- Light/dark mode switching
- Keyboard navigation
- Screen reader compatibility
- Different browsers

## Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Full support |
| Firefox | 88+ | ✅ Full support |
| Safari | 14+ | ✅ Full support |
| Edge | 90+ | ✅ Full support |
| Opera | 76+ | ✅ Full support |

## Accessibility Standards

- **WCAG 2.1 Level AA** - All buttons meet this standard
- **Color Contrast** - AAA ratio (4.5:1 minimum)
- **Keyboard Navigation** - Tab, Enter, Space supported
- **Focus States** - Visible on all buttons
- **Motion** - Respects `prefers-reduced-motion`

## Future Roadmap

### Phase 1 (Current)
- [x] 50+ button designs
- [x] Three button types support
- [x] Light/dark mode
- [x] Code export

### Phase 2 (Planned)
- [ ] Button filtering by tags
- [ ] Favorites/bookmarks
- [ ] Dark mode toggle
- [ ] Code snippet library
- [ ] Button combinations showcase

### Phase 3 (Future)
- [ ] Interactive playground for each button
- [ ] Custom color themes
- [ ] Animation speed customization
- [ ] Export as component packages
- [ ] Community contributions dashboard

## Deployment

### Vercel (Recommended)
```bash
# Connect GitHub repo to Vercel
# Automatic deploys on push to main
# Preview deployments for PRs
```

### Manual Deployment
```bash
npm run build
npm run start
# Runs production server
```

## Environment Variables

```env
# Optional - for future features
NEXT_PUBLIC_ANALYTICS_ID=
```

## Common Tasks

### Debugging a Button
1. Check browser DevTools (Inspect → Styles)
2. Verify classes match CSS selectors
3. Check for z-index conflicts
4. Test in dark mode explicitly
5. Clear Next.js cache: `rm -rf .next`

### Updating a Button
1. Edit button file
2. Changes hot-reload automatically
3. No registry re-import needed

### Removing a Button
1. Delete button file
2. Remove import from index.ts
3. Remove from buttons array

### Performance Profiling
```bash
# DevTools → Performance tab
# Record interaction
# Analyze flame graph
# Look for long tasks > 50ms
```

## Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| next | 15+ | Framework |
| react | 19+ | UI library |
| framer-motion | Latest | Animations |
| tailwindcss | 4+ | Styling |
| typescript | Latest | Type safety |

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

Quick summary:
1. Create button file
2. Add to registry
3. Test locally
4. Create PR

## Support

- **Issues**: GitHub Issues
- **Questions**: mazexop@gmail.com
- **Documentation**: README.md + CONTRIBUTING.md

## License

MIT License - See [LICENSE](./LICENSE) file

---

**Button Lab** - Built with ❤️ by Amey Tarmale
