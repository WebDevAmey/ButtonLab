import type { CustomButtonDef } from "../types";

export const ghostFade: CustomButtonDef = {
  id: "ghost-fade",
  name: "Ghost Fade",
  category: "Minimal",
  description: "A borderless ghost button whose background fades in softly on hover.",
  tags: ["ghost", "fade", "tailwind"],
  label: "Ghost Fade",
  kind: "custom",
  html: `<button class="ghost-fade-btn">
  Ghost Fade
</button>`,
  css: `.ghost-fade-btn {
  border-radius: 0.5rem;
  background: transparent;
  padding: 0.75rem 1.5rem;
  font-family: system-ui, sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #3f3f46;
  transition: color 0.3s ease, background 0.3s ease;
  cursor: pointer;
  border: none;
}
.ghost-fade-btn:hover {
  background: rgba(24, 24, 27, 0.05);
}
.dark .ghost-fade-btn {
  color: #d4d4d8;
}
.dark .ghost-fade-btn:hover {
  background: rgba(255, 255, 255, 0.06);
}`,
  prompt:
    "Using Tailwind CSS, create a simple ghost button labeled \"Ghost Fade\" that is transparent by default with zinc-700 text, rounded-lg corners, and no border. On hover, fade in a very light zinc-900 background at 5% opacity over 300ms, with no other change.",
};
