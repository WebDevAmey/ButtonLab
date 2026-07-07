import type { CustomButtonDef } from "../types";

export const gravityDrop: CustomButtonDef = {
  id: "gravity-drop",

  name: "Gravity Drop",

  category: "Physics",

  description:
    "A tiny droplet is pulled upward and transforms into the button background.",

  tags: ["gravity", "drop", "physics"],

  label: "Explore",

  kind: "custom",

  html: `
<button class="gravity-btn">
    <span>Explore</span>
    <span class="drop"></span>
</button>
`,

  css: `
.gravity-btn{

    position:relative;

    width:180px;
    height:58px;

    border:none;

    border-radius:18px;

    background:#fafafa;

    color:#111;

    overflow:hidden;

    font-weight:600;

    cursor:pointer;

    transition:
        color .35s,
        transform .3s;

}

.gravity-btn:hover{

    transform:translateY(-2px);

}

.gravity-btn span:first-child{

    position:relative;

    z-index:3;

}

.drop{

    position:absolute;

    left:50%;

    bottom:-12px;

    width:14px;
    height:14px;

    border-radius:999px;

    background:#111827;

    transform:
        translateX(-50%);

    transition:
        all .65s cubic-bezier(.2,1,.3,1);

    z-index:1;

}

.gravity-btn:hover .drop{

    bottom:50%;

    width:18px;

    height:80px;

    border-radius:999px;

    transform:
        translate(-50%,50%);

}

.gravity-btn::after{

    content:"";

    position:absolute;

    inset:0;

    background:#111827;

    transform:scaleY(0);

    transform-origin:center;

    transition:
        transform .25s .35s;

    z-index:0;

}

.gravity-btn:hover::after{

    transform:scaleY(1);

}

.gravity-btn:hover{

    color:white;

}
`,

  prompt: `
Create a button where a tiny circular droplet hangs below it.

When hovered, the droplet stretches upward like liquid under tension, travels into the button, and then the button instantly fills with the same colour.

The animation should tell a physical story instead of using a normal hover fill.
`,
};