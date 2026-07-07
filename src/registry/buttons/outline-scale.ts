import type { CustomButtonDef } from "../types";

export const outlineScale: CustomButtonDef = {
  id: "outline-scale",
  name: "Outline Scale",
  category: "Minimal",
  description:
    "A simple black-outlined button that scales up slightly and shifts to orange with a lifted shadow on hover.",
  tags: ["outline", "scale", "tailwind"],
  label: "Outline Button",
  prompt:
    "Using Tailwind CSS, create a pill-shaped button labeled \"Outline Button\" with a 1px black border, black text, rounded-full corners, and a medium drop shadow. On hover, scale the button up to 105%, change the border and text color to orange-600, and intensify the shadow to large, all animated over 300ms ease-in-out.",
  kind: "custom",
  html: `<button class="outline-scale-btn">
  Outline Button
</button>`,
  css: `.outline-scale-btn {
  border: 1px solid #000000;
  border-radius: 999px;
  background: transparent;
  padding: 0.5rem 1rem;
  font-family: system-ui, sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #000000;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.outline-scale-btn:hover {
  transform: scale(1.05);
  border-color: #ea580c;
  color: #ea580c;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1);
}
.outline-scale-btn:active {
  transform: scale(0.98);
}
.dark .outline-scale-btn {
  border-color: #ffffff;
  color: #ffffff;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3), 0 2px 4px -2px rgba(0,0,0,0.3);
}
.dark .outline-scale-btn:hover {
  border-color: #f97316;
  color: #ffffff;
  background: #f97316;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.4), 0 4px 6px -4px rgba(0,0,0,0.4);
}`,
};
