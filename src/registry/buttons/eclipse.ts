import type { CustomButtonDef } from "../types";

export const eclipse: CustomButtonDef = {
  id: "eclipse",
  name: "Eclipse",
  category: "Effect",
  description:
    "A bright amber pill button with a dark circular disc that slides across it on hover, like a solar eclipse passing over.",
  tags: ["eclipse", "slide", "tailwind"],
  label: "ECLIPSE",
  kind: "custom",
  html: `<button class="group relative inline-flex h-14 w-40 items-center justify-center overflow-hidden rounded-full bg-amber-400 font-bold text-black">
  <span class="absolute right-0 top-0 h-14 w-14 rounded-full bg-neutral-950 transition-transform duration-500 ease-out [transform:translateX(50%)] group-hover:[transform:translateX(-10%)]"></span>
  <span class="relative z-10 transition-colors duration-300 group-hover:text-amber-300">
    ECLIPSE
  </span>
</button>`,
  css: "",
  prompt:
    "Using Tailwind CSS, create a 56px-tall, 160px-wide pill button with a bright amber-400 background, bold black text, overflow hidden, labeled \"ECLIPSE\". Add a 56x56px circular neutral-950 disc positioned at the top-right corner, resting translated 50% to the right (mostly off-screen). On hover, translate that disc to -10% so it slides across the button like a solar disc passing in front of the sun, and transition the label text color to amber-300 so it stays readable against the dark disc.",
};
