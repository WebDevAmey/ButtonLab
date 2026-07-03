import type { CustomButtonDef } from "../types";

export const xrayScanner: CustomButtonDef = {
  id: "xray-scanner",
  name: "X-Ray Scanner",
  category: "Effect",
  description:
    "A white-bordered button whose fill sweeps up from the bottom on hover, inverting the label via mix-blend-mode as it passes.",
  tags: ["mix-blend", "scan", "tailwind"],
  label: "X-RAY SCANNER",
  kind: "custom",
  html: `<button class="relative z-10 inline-block cursor-pointer overflow-hidden rounded border-2 border-white bg-neutral-900 px-6 py-3 text-lg font-bold text-white before:absolute before:bottom-0 before:left-0 before:h-0 before:w-full before:bg-white before:mix-blend-difference before:transition-all before:duration-300 before:ease-out before:content-[''] hover:before:h-full">
  X-RAY SCANNER
</button>`,
  css: "",
};
