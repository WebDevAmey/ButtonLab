import type { CustomButtonDef } from "../types";

export const slidingSlot: CustomButtonDef = {
  id: "sliding-slot",

  name: "Sliding Slot",

  category: "Mechanical",

  description:
    "A small slot glides across the surface like a mechanical shutter.",

  tags: ["slot", "mechanical", "minimal"],

  label: "Export",

  kind: "custom",

  html: `
<button class="slot-btn">
    <span>Export</span>
    <span class="slot"></span>
</button>
`,

  css: `
.slot-btn{

    position:relative;

    width:180px;
    height:58px;

    border:none;

    border-radius:18px;

    background:#f5f5f4;

    color:#111827;

    overflow:hidden;

    cursor:pointer;

    font-weight:600;

    box-shadow:
        0 10px 22px rgba(0,0,0,.08);

}

.slot-btn span:first-child{

    position:relative;

    z-index:2;

}

.slot{

    position:absolute;

    left:18px;

    top:50%;

    width:36px;
    height:6px;

    margin-top:-3px;

    border-radius:999px;

    background:#d6d3d1;

    box-shadow:
        inset 0 2px 3px rgba(0,0,0,.18),
        inset 0 -1px 1px rgba(255,255,255,.5);

    transition:left .65s cubic-bezier(.22,1,.36,1);

}

.slot-btn:hover .slot{

    left:126px;

}
`,

  prompt: `
Create a premium off-white button inspired by industrial machinery.

Instead of changing the button itself, animate a thin recessed slot that glides smoothly across the surface.

The slot should look engraved into the material using inset shadows.
`,
};