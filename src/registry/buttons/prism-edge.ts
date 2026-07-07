import type { CustomButtonDef } from "../types";

export const prismEdge: CustomButtonDef = {
  id: "prism-edge",
  name: "Prism Edge",
  category: "Optical",
  description: "A single arc of light that continuously circles the button's border via a masked conic-gradient, rather than a full spinning gradient ring.",
  tags: ["border", "chase", "conic-gradient", "optical"],
  label: "Get Started",
  kind: "custom",
  html: `
<button class="prism-edge-btn">
  <span class="prism-edge-btn__label">Get Started</span>
</button>
  `,
  css: `
.prism-edge-btn {
  position: relative;
  padding: 12px 28px;
  background: #0a0a0a;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  isolation: isolate;
}

.prism-edge-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 10px;
  padding: 1.5px;
  background: conic-gradient(from 0deg, transparent 0deg, #ffffff 40deg, transparent 90deg, transparent 360deg);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: prism-edge-rotate 3.2s linear infinite;
  z-index: 1;
  pointer-events: none;
}

@keyframes prism-edge-rotate {
  to { transform: rotate(360deg); }
}

.prism-edge-btn__label {
  position: relative;
  z-index: 2;
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #f0f0f0;
}
  `,
  prompt: "A button with a pseudo-element ring built from a conic-gradient that is transparent for most of its 360deg sweep except for a narrow 40deg-to-90deg lit arc, masked with mask-composite: exclude so only a thin border-width ring is visible rather than a filled shape. Rotating that pseudo-element continuously produces a single point of light chasing around the perimeter, distinct from the common 'spinning full-color gradient border' pattern since most of the ring stays dark at any given moment.",
};