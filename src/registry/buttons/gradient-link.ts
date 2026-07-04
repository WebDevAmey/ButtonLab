import type { CustomButtonDef } from "../types";

export const gradientLink: CustomButtonDef = {
  id: "gradient-link",
  name: "Gradient Link",
  category: "Minimal",
  description:
    "A large underlined text link whose gradient fill sweeps across on hover, fading the text itself to transparent.",
  tags: ["gradient", "text", "tailwind"],
  label: "Link",
  kind: "custom",
  html: `<button class="cursor-pointer rounded bg-clip-text bg-gradient-to-r from-black via-blue-600 to-indigo-500 bg-[size:200%_100%] bg-[position:0%_0] px-4 py-2 text-5xl font-black text-black underline transition-all duration-500 ease-out hover:bg-[position:100%_0] hover:text-transparent">
  Link
</button>`,
  css: "",
  prompt:
    "Using Tailwind CSS, create a large (text-5xl) black, bold, underlined text-only button labeled \"Link\" with a horizontal gradient (black to blue-600 to indigo-500) clipped to the text (bg-clip-text) but sized at 200% width and positioned at 0% so the gradient is initially off-screen and the text renders solid black. On hover, animate the background-position to 100% over 500ms ease-out and set the text color to transparent, revealing the sweeping gradient through the text.",
};
