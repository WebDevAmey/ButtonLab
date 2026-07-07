import type { CustomButtonDef } from "../types";

export const letterSpacing: CustomButtonDef = {
  id: "letter-spacing",
  name: "Letter Spacing",
  category: "Minimal",
  description: "A quiet uppercase button whose letters spread apart on hover.",
  tags: ["typography", "tracking", "tailwind"],
  label: "Explore",
  kind: "custom",
  html: `<button class="letter-spacing-btn">
  Explore
</button>`,
  css: `.letter-spacing-btn {
  border: none;
  border-bottom: 1px solid #18181b;
  background: transparent;
  padding: 0.5rem 0.25rem;
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #18181b;
  transition: all 0.3s ease;
  cursor: pointer;
}
.letter-spacing-btn:hover {
  letter-spacing: 0.3em;
  color: #71717a;
}
.dark .letter-spacing-btn {
  border-bottom-color: #d4d4d8;
  color: #d4d4d8;
}
.dark .letter-spacing-btn:hover {
  color: #a1a1aa;
}`,
  prompt:
    "Using Tailwind CSS, create a minimal uppercase text button labeled \"Explore\" with no background, a bottom border only (border-b) in zinc-900, semibold zinc-900 text, and a wide letter-spacing (tracking-widest). On hover, increase the letter-spacing further (tracking to 0.3em) and fade the text to zinc-500, both animated over 300ms.",
};
