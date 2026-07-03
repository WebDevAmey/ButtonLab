import type { CustomButtonDef } from "../types";

export const scanRing: CustomButtonDef = {
  id: "scan-ring",
  name: "Scan Ring",
  category: "Glow",
  description:
    "A circular icon button that emits expanding cyan rings, like a radar ping, on hover.",
  tags: ["radar", "ring", "tailwind"],
  label: "SCAN",
  prompt:
    "Using Tailwind CSS, create a 64x64px circular icon button labeled \"SCAN\" in small bold cyan-400 tracked-out text on a neutral-950 background. Add four absolutely-positioned, full-size circular borders in cyan-400 at decreasing opacities (70%, 50%, 30%, 10%), each starting scaled to 50% and invisible. On hover, fade each ring in to full opacity and scale it outward progressively larger (100%, 125%, 150%, 175%) with staggered delays of 0ms, 100ms, 200ms, and 300ms, creating an expanding radar-ping effect around the button.",
  kind: "custom",
  html: `<button class="group relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-neutral-950 text-cyan-400">
  <span class="absolute inset-0 rounded-full border border-cyan-400/70 opacity-0 scale-50 transition-all delay-0 duration-300 group-hover:scale-100 group-hover:opacity-100"></span>
  <span class="absolute inset-0 rounded-full border border-cyan-400/50 opacity-0 scale-50 transition-all delay-100 duration-300 group-hover:scale-125 group-hover:opacity-100"></span>
  <span class="absolute inset-0 rounded-full border border-cyan-400/30 opacity-0 scale-50 transition-all delay-200 duration-300 group-hover:scale-150 group-hover:opacity-100"></span>
  <span class="absolute inset-0 rounded-full border border-cyan-400/10 opacity-0 scale-50 transition-all delay-300 duration-300 group-hover:scale-[1.75] group-hover:opacity-100"></span>
  <span class="relative z-10 text-xs font-semibold tracking-wide">SCAN</span>
</button>`,
  css: "",
};
