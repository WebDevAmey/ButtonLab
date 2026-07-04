import type { CustomButtonDef } from "../types";

export const morseSos: CustomButtonDef = {
  id: "morse-sos",
  name: "Morse SOS",
  category: "Playful",
  description:
    "A pill button with an LED indicator that blinks the actual Morse code timing for S-O-S, looping only while the button is hovered.",
  tags: ["morse", "led", "novel"],
  label: "SOS",
  kind: "custom",
  html: `<button class="btn-morse">
  <span class="btn-morse__led"></span>
  SOS
</button>`,
  css: `.btn-morse {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 26px;
  border-radius: 999px;
  border: 1px solid #3f3f46;
  background: #18181b;
  color: #fafafa;
  font-weight: 700;
  letter-spacing: 0.05em;
  cursor: pointer;
}

.btn-morse__led {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #3f3f46;
  opacity: 0.3;
}

.btn-morse:hover .btn-morse__led {
  background: #ef4444;
  box-shadow: 0 0 6px 2px rgba(239, 68, 68, 0.7);
  animation: btn-morse-sos 3.4s steps(1, end) infinite;
}

@keyframes btn-morse-sos {
  0%, 4% { opacity: 1; }
  4.01%, 8% { opacity: 0.15; }
  8.01%, 12% { opacity: 1; }
  12.01%, 16% { opacity: 0.15; }
  16.01%, 20% { opacity: 1; }
  20.01%, 28% { opacity: 0.15; }
  28.01%, 40% { opacity: 1; }
  40.01%, 44% { opacity: 0.15; }
  44.01%, 56% { opacity: 1; }
  56.01%, 60% { opacity: 0.15; }
  60.01%, 72% { opacity: 1; }
  72.01%, 80% { opacity: 0.15; }
  80.01%, 84% { opacity: 1; }
  84.01%, 88% { opacity: 0.15; }
  88.01%, 92% { opacity: 1; }
  92.01%, 96% { opacity: 0.15; }
  96.01%, 99% { opacity: 1; }
  99.01%, 100% { opacity: 0.15; }
}`,
  prompt:
    "Create a dark pill-shaped button (background #18181b, 1px #3f3f46 border, fully rounded, bold tracked-out white text) labeled \"SOS\" with a small 8px round LED dot before the text, dim gray and 30% opacity by default. On hover, turn the LED red (#ef4444) with a soft red glow and animate its opacity with a hard-stepped (no easing) keyframe loop of 3.4s that blinks out the Morse code pattern for S-O-S: three short flashes, a pause, three long flashes, a pause, three short flashes, then a longer pause before repeating — using paired same-value keyframe stops so the transitions are instant cuts, not fades.",
};
