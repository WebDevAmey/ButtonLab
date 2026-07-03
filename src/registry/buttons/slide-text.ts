import type { CustomButtonDef } from "../types";

export const slideText: CustomButtonDef = {
  id: "slide-text",
  name: "Slide Text",
  category: "Effect",
  description:
    "A glowing gradient button whose label slides out to the left on hover while a duplicate label slides in to replace it.",
  tags: ["slide", "gradient", "tailwind"],
  label: "Button",
  prompt:
    "Using Tailwind CSS, create a button with a 1px slate-500 border, rounded-xl corners, a vertical gradient background from indigo-500 to pink-600, white medium-weight text, and a large indigo-tinted glow shadow (0px 4px 32px rgba(99,102,241,0.7)). Inside, add a relatively-positioned, overflow-hidden wrapper containing two identical \"Button\" labels: the first in normal flow, the second absolutely positioned starting 80px to the right of it (left-20). On hover, translate the first label 80px to the left (out of view) and translate the second label to left-0, both over 1.125s with a cubic-bezier(0.19,1,0.22,1) ease, so the label appears to slide out and a duplicate slides in to replace it.",
  kind: "custom",
  html: `<button class="group cursor-pointer rounded-xl border-[1px] border-slate-500 bg-gradient-to-b from-indigo-500 to-pink-600 px-6 py-3 font-medium text-white shadow-[0px_4px_32px_0_rgba(99,102,241,.70)]">
  <div class="relative overflow-hidden">
    <p class="duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-x-20">
      Button
    </p>
    <p class="absolute left-20 top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:left-0">
      Button
    </p>
  </div>
</button>`,
  css: "",
};
