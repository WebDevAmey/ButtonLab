import type { CustomButtonDef } from "../types";

export const vinylSpin: CustomButtonDef = {
  id: "vinyl-spin",
  name: "Vinyl Spin",
  category: "Playful",
  description:
    "A pill button with a small grooved record disc that spins continuously for as long as it's hovered.",
  tags: ["vinyl", "spin", "tailwind"],
  label: "Now Playing",
  kind: "custom",
  html: `<button class="group inline-flex h-14 w-44 items-center justify-center gap-3 rounded-full border border-zinc-700 bg-zinc-950 px-5 font-semibold text-zinc-200">
  <span class="h-6 w-6 rounded-full bg-[repeating-radial-gradient(circle_at_center,#18181b_0px,#18181b_1.5px,#3f3f46_1.5px,#3f3f46_3px)] shadow-[inset_0_0_0_2px_#09090b] group-hover:animate-spin"></span>
  Now Playing
</button>`,
  css: "",
  prompt:
    "Using Tailwind CSS, create a dark pill-shaped button (zinc-950 background, zinc-700 border, zinc-200 semibold text) labeled \"Now Playing\" with a small 24px circular disc to the left, styled like a vinyl record using a repeating radial gradient (alternating near-black and dark gray rings every 1.5px from the center) plus an inset ring shadow. On hover, spin that disc continuously (360 degrees, linear, infinite, ~1s per rotation) for as long as the button is hovered, like a record spinning on a turntable.",
};
