import type { CustomButtonDef } from "../types";

export const splitCurtain: CustomButtonDef = {
  id: "split-curtain",
  name: "Split Curtain",
  category: "Effect",
  description:
    "An outlined button with two fill pseudo-elements that slide in from opposite corners on hover, like curtains closing.",
  tags: ["curtain", "slide", "tailwind"],
  label: "Split Curtain",
  prompt:
    "Using Tailwind CSS, create a button labeled \"Split Curtain\" that is transparent with a 2px emerald-600 border, emerald-600 text, rounded-lg corners, and overflow hidden. Add two full-size emerald-600 pseudo-elements behind it (z-index -1): a before: element starting translated fully up and to the left (off-screen top-left corner) and an after: element starting translated fully down and to the right (off-screen bottom-right corner). On hover, translate both back to their natural position (translate-x-0, translate-y-0) over 300ms ease-out, so they slide in from opposite corners like curtains closing to fill the button, and transition the text to white.",
  kind: "custom",
  html: `<button class="relative z-10 inline-block cursor-pointer overflow-hidden rounded-lg border-2 border-emerald-600 bg-transparent px-6 py-3 text-lg font-semibold text-emerald-600 transition-colors duration-300 before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:-translate-x-full before:-translate-y-full before:bg-emerald-600 before:transition-transform before:duration-300 before:ease-out before:content-[''] after:absolute after:left-0 after:top-0 after:z-[-1] after:h-full after:w-full after:translate-x-full after:translate-y-full after:bg-emerald-600 after:transition-transform after:duration-300 after:ease-out after:content-[''] hover:text-white hover:before:translate-x-0 hover:before:translate-y-0 hover:after:translate-x-0 hover:after:translate-y-0">
  Split Curtain
</button>`,
  css: "",
};
