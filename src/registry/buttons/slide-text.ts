import type { CustomButtonDef } from "../types";

export const slideText: CustomButtonDef = {
  id: "slide-text",
  name: "Slide Text",
  category: "Effect",
  description:
    "A glowing gradient button whose label slides out to the left on hover while a duplicate label slides in to replace it.",
  tags: ["slide", "gradient", "tailwind"],
  label: "Button",
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
