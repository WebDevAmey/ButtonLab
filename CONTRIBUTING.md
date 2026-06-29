# Contributing a button

Every button lives at `src/registry/buttons/<id>.ts` and is listed once in
`src/registry/buttons/index.ts`. That's the whole registration step — the
homepage grid, the `/button/<id>` page, the code tabs, and "related
components" all read from that one array.

There are two kinds of button. Pick whichever fits your design.

## 1. Parametric — gets the live playground for free

Use this when your button's look reduces to "one accent color + a few
knobs" (radius, size, blur, glow...). It plugs into the existing
`computeStyleSet` switch in `src/lib/codegen.ts`, so visitors get a color
picker, sliders, and HTML/CSS/Tailwind/React/Motion code export for free.

```ts
// src/registry/buttons/my-button.ts
import type { ParametricButtonDef } from "../types";

export const myButton: ParametricButtonDef = {
  id: "my-button",
  name: "My Button",
  category: "Fill",
  description: "One sentence describing the effect.",
  tags: ["fill", "primary"],
  label: "Click Me",
  kind: "parametric",
  accentMode: "gradient", // reuse an existing mode, or add a new case to
                           // computeStyleSet() in src/lib/codegen.ts
  defaultAccent: "#6366f1",
  supportsBlur: false,
};
```

If none of the existing `accentMode`s match your design, add a new case to
the `switch` in `computeStyleSet` (src/lib/codegen.ts) and a matching entry
to the `AccentMode` union in `src/registry/types.ts`.

## 2. Custom — bring your own HTML/CSS

Use this for anything that doesn't reduce to a single accent color: gooey
filters, multi-layer pseudo-elements, keyframe animations, icons, SVGs.
Write the snippet exactly as you'd want someone to copy-paste it — that's
literally what gets shown on the button's HTML/CSS tabs. There's no
playground for these (nothing to parametrize), so skip the sliders.

```ts
// src/registry/buttons/my-button.ts
import type { CustomButtonDef } from "../types";

export const myButton: CustomButtonDef = {
  id: "my-button",
  name: "My Button",
  category: "Effect",
  description: "One sentence describing the effect.",
  tags: ["effect"],
  label: "Click Me",
  kind: "custom",
  html: `<button class="btn-my-button">Click Me</button>`,
  css: `.btn-my-button {
  /* ... */
}`,
};
```

Prefix your CSS class with `btn-<id>` so it can't collide with another
button on the same page.

## Registering it

Add the import and slot it into the array in
`src/registry/buttons/index.ts`:

```ts
import { myButton } from "./my-button";

export const buttons: ButtonDef[] = [
  // ...existing buttons,
  myButton,
];
```

That's it — `npm run build` will statically generate `/button/my-button`
automatically via `generateStaticParams`.

## Guidelines

- `id` must be unique and URL-safe (used as the route slug and CSS class
  suffix).
- Keep `description` to one sentence — it's shown right under the title.
- 2-4 `tags` is plenty; they're just labels, not yet filterable.
