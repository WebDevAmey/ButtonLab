import type { CustomButtonDef } from "../types";

export const shine: CustomButtonDef = {
  id: "shine",
  name: "Shine Sweep",
  category: "Effect",
  description:
    "A dark pill button with a diagonal light sweep that animates across it on hover, built with a single pseudo-element.",
  tags: ["shine", "sweep", "pseudo-element"],
  label: "Explore",
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
