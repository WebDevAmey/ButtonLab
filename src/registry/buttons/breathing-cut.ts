import type { CustomButtonDef } from "../types";

export const breathingCut: CustomButtonDef = {
  id: "breathing-cut",

  name: "Breathing Cut",

  category: "Impossible",

  description:
    "A tiny slit opens through the surface as if the button briefly breathes.",

  tags: ["cut", "slit", "minimal", "illusion"],

  label: "Launch",

  kind: "custom",

  html: `
<button class="breathing-cut-btn">
    <span>Launch</span>
    <span class="cut"></span>
</button>
`,

  css: `
.breathing-cut-btn{

    position:relative;

    width:180px;
    height:58px;

    border:none;

    border-radius:18px;

    background:#111827;

    color:white;

    font-weight:600;

    overflow:hidden;

    cursor:pointer;

    box-shadow:
        0 12px 26px rgba(0,0,0,.18);

}

.breathing-cut-btn span:first-child{

    position:relative;

    z-index:2;

    transition:
        letter-spacing .45s ease;

}

.cut{

    position:absolute;

    left:50%;
    top:50%;

    width:0px;
    height:2px;

    background:#e0e5ec;

    border-radius:999px;

    transform:translate(-50%,-50%);

    transition:
        width .45s cubic-bezier(.22,1,.36,1),
        height .45s cubic-bezier(.22,1,.36,1);

    z-index:3;

}

.breathing-cut-btn:hover .cut{

    width:34px;
    height:4px;

}

.breathing-cut-btn:hover span:first-child{

    letter-spacing:.18em;

}
`,

  prompt: `
Create a dark premium button where a tiny slit opens in the middle during hover.

Do not animate the button itself.

Instead, reveal a thin horizontal cut that grows from the centre while the label subtly separates, making the surface feel like it briefly opens and exhales.

Avoid glows, fills, gradients or scaling.
`,
};