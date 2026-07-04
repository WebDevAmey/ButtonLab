import type { CustomButtonDef } from "../types";

export const playNow: CustomButtonDef = {
  id: "play-now",
  name: "Play Now",
  category: "Fill",
  description:
    "A large, rounded gradient button with an oversized label and a dramatic colored glow that appears on hover.",
  tags: ["gradient", "glow", "tailwind"],
  label: "Play Now",
  kind: "custom",
  html: `<button class="relative flex cursor-pointer overflow-hidden rounded-[24px] bg-gradient-to-r from-[#2891c5] to-[#13b6da] px-8 py-3 text-[1.9rem] font-bold text-white hover:shadow-[0_15px_50px_-15px_#13b6da]">
  Play Now
</button>`,
  css: "",
  prompt:
    "Using Tailwind CSS, create a large button labeled \"Play Now\" with an oversized 1.9rem bold font, a horizontal gradient background from #2891c5 to #13b6da, generously rounded corners (24px), white text, and overflow hidden. On hover, add a large soft colored shadow beneath it (0 15px 50px -15px #13b6da) so the button appears to glow and lift off the page.",
};
