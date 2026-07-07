import type { CustomButtonDef } from "../types";

export const slidingHole: CustomButtonDef = {
  id: "sliding-hole",

  name: "Sliding Hole",

  category: "Optical",

  description:
    "A circular cut-out glides across the button, revealing the background underneath.",

  tags: ["mask", "hole", "optical", "minimal"],

  label: "Discover",

  kind: "custom",

  html: `
<button class="hole-btn">
    <span>Discover</span>
</button>
`,

  css: `
.hole-btn{

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

    transition:
        transform .35s cubic-bezier(.22,1,.36,1),
        box-shadow .35s;

    box-shadow:
        0 10px 28px rgba(17,24,39,.22);

}

.hole-btn:hover{

    transform:translateY(-3px);

}

.hole-btn span{

    position:relative;

    z-index:3;

}

/* Moving hole */

.hole-btn::before{

    content:"";

    position:absolute;

    top:50%;
    left:-36px;

    width:34px;
    height:34px;

    border-radius:999px;

    background:#e0e5ec; /* Match your card background */

    transform:translateY(-50%);

    box-shadow:

        inset -3px -3px 8px rgba(255,255,255,.45),

        inset 3px 3px 8px rgba(0,0,0,.12);

    transition:
        left .75s cubic-bezier(.22,1,.36,1);

    z-index:2;

}

.hole-btn:hover::before{

    left:calc(100% + 2px);

}
`,

  prompt: `
Create a premium dark button with a circular cut-out that travels smoothly from left to right when hovered.

The button itself should never change colour.

Instead, animate a circular element matching the page background so it looks like a moving hole revealing whatever is behind the button.

The effect should feel clean, minimal and unexpected rather than flashy.
`,
};