import type { CustomButtonDef } from "../types";

export const shine: CustomButtonDef = {
  id: "shine",
  name: "Shine Sweep",
  category: "Effect",
  description:
    "A dark pill button with a diagonal light sweep that animates across it on hover, built with a single pseudo-element.",
  tags: ["shine", "sweep", "pseudo-element"],
  label: "Explore",
  prompt:
    "Create a pill-shaped button labeled \"Explore\" with a dark (#18181b) background, off-white text (#fafafa), 600 font weight, 13px 28px padding, fully rounded corners (999px radius), no border, overflow hidden, and isolation set so blending stays contained. Add a ::before pseudo-element that is a 50%-wide, full-height diagonal light band skewed -20deg, using a linear-gradient at 115deg from transparent, through white at 50% opacity, back to transparent, positioned off-screen to the left (left: -75%). On hover, animate the ::before element's left position to 125% over 0.6s ease so it sweeps across the button like a shine.",
  kind: "custom",
  html: `<button class="btn-shine">Explore</button>`,
  css: `.btn-shine {
  position: relative;
  overflow: hidden;
  padding: 13px 28px;
  border: none;
  border-radius: 999px;
  font-weight: 600;
  color: #fafafa;
  background: #18181b;
  cursor: pointer;
  isolation: isolate;
}

.btn-shine::before {
  content: "";
  position: absolute;
  top: 0;
  left: -75%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    115deg,
    transparent 0%,
    rgba(255, 255, 255, 0.5) 50%,
    transparent 100%
  );
  transform: skewX(-20deg);
  transition: left 0.6s ease;
}

.btn-shine:hover::before {
  left: 125%;
}`,
};
