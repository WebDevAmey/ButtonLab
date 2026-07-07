import type { CustomButtonDef } from "../types";

export const inkStamp: CustomButtonDef = {
  id: "ink-stamp",
  name: "Ink Stamp",
  category: "Material",
  description: "A label with no ink, embossed blind into the paper, that only reveals itself when struck like a rubber stamp.",
  tags: ["stamp", "paper", "emboss", "ink", "material"],
  label: "Approve",
  kind: "custom",
  html: `
<button class="ink-stamp-btn">
  <span class="ink-stamp-btn__label">Approve</span>
</button>
  `,
  css: `
.ink-stamp-btn {
  position: relative;
  padding: 14px 32px;
  background: #f4f0e6;
  border: 1px solid #d8d2c2;
  border-radius: 2px;
  font-family: 'Courier New', monospace;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  color: #f4f0e6;
  text-shadow: 1px 1px 0 rgba(255,255,255,0.9), -1px -1px 0 rgba(0,0,0,0.15);
  transition: color 0.05s linear;
}

.ink-stamp-btn__label {
  position: relative;
  display: inline-block;
}

.ink-stamp-btn:hover,
.ink-stamp-btn:focus-visible {
  color: #a3282a;
  text-shadow: none;
}

.ink-stamp-btn:hover .ink-stamp-btn__label,
.ink-stamp-btn:focus-visible .ink-stamp-btn__label {
  animation: ink-stamp-impact 0.28s ease-out;
}

@keyframes ink-stamp-impact {
  0% {
    transform: rotate(-3deg) scale(1.05);
    letter-spacing: 3.6px;
  }
  40% {
    transform: rotate(2deg) scale(0.99);
  }
  100% {
    transform: rotate(0deg) scale(1);
    letter-spacing: 3px;
  }
}
  `,
  prompt: "A button whose label is invisible by default, rendered only as a debossed emboss (text-shadow matching background), which snaps into visible ink with a single imperfect off-angle impact animation on hover/focus, like a rubber stamp striking paper.",
};