import type { CustomButtonDef } from "../types";

export const outline: CustomButtonDef = {
  id: "outline",
  name: "Outline",
  category: "Minimal",
  description:
    "A quiet, minimal button that fills in on hover. Ideal for secondary actions next to a primary button.",
  tags: ["outline", "minimal", "secondary"],
  label: "Learn More",
  kind: "custom",
  html: `<button class="outline-btn">
  Learn More
</button>`,
  css: `.outline-btn {
  border: 1.5px solid #27272a;
  border-radius: 10px;
  background: transparent;
  padding: 10px 22px;
  font-family: system-ui, sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #27272a;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}
.outline-btn:hover {
  background: #27272a;
  color: #ffffff;
}
.outline-btn:active {
  filter: brightness(0.94);
}
.dark .outline-btn {
  border-color: #ffffff;
  color: #ffffff;
}
.dark .outline-btn:hover {
  background: #f97316;
  border-color: #f97316;
  color: #ffffff;
}
.dark .outline-btn:active {
  filter: brightness(0.85);
}`,
  prompt:
    "Create a button labeled \"Learn More\" that is transparent with a 1.5px solid dark border (#27272a) and dark text of the same color, 10px border radius, no shadow. On hover, fill the background solid with that same dark color and switch the text to a readable contrasting color (white). On press, dim the brightness slightly. In dark mode, the button has a white border and white text by default; on hover it fills with orange (#f97316) and the border also becomes orange.",
};
