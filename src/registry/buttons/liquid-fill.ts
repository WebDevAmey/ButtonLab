import type { CustomButtonDef } from "../types";

export const liquidFill: CustomButtonDef = {
  id: "liquid-fill",
  name: "Liquid Fill",
  category: "Effect",
  description:
    "An outlined button with two overlapping blob pseudo-elements that rotate up from below to fill it like liquid on hover.",
  tags: ["liquid", "blob", "tailwind"],
  label: "Liquid Fill",
  prompt:
    "Using Tailwind CSS, create a button labeled \"Liquid Fill\" that is transparent with a 2px indigo-600 border, indigo-600 text, rounded-lg corners, and overflow hidden. Behind it (z-index -1), add two large oval blob shapes: a before: pseudo-element (indigo-400, 300% height, 150% width, rounded 40%) and an after: pseudo-element (indigo-600, 300% height, 160% width, rounded 43%, 75ms delay), both centered horizontally and initially positioned below the button at 120% top. On hover, animate both blobs up to -50% top and rotate the before: blob 180deg and the after: blob 360deg, so they spin up like liquid to fill the button; also transition the text color to white.",
  kind: "custom",
  html: `<button class="relative z-10 inline-block cursor-pointer overflow-hidden rounded-lg border-2 border-indigo-600 bg-transparent px-6 py-3 text-lg font-semibold text-indigo-600 transition-colors duration-300 ease-in-out before:absolute before:left-1/2 before:top-[120%] before:z-[-1] before:h-[300%] before:w-[150%] before:-translate-x-1/2 before:rounded-[40%] before:bg-indigo-400 before:transition-all before:duration-700 before:ease-out before:content-[''] after:absolute after:left-1/2 after:top-[120%] after:z-[-1] after:h-[300%] after:w-[160%] after:-translate-x-1/2 after:rounded-[43%] after:bg-indigo-600 after:transition-all after:duration-500 after:delay-75 after:ease-out after:content-[''] hover:text-white hover:before:top-[-50%] hover:before:rotate-180 hover:after:top-[-50%] hover:after:rotate-[360deg]">
  Liquid Fill
</button>`,
  css: "",
};
