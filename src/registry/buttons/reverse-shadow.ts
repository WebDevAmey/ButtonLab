import type { CustomButtonDef } from "../types";

export const reverseShadow: CustomButtonDef = {
  id: "reverse-shadow",

  name: "Reverse Shadow",

  category: "Optical",

  description:
    "The shadow lifts above the button instead of staying underneath.",

  tags: ["shadow", "depth", "illusion"],

  label: "Continue",

  kind: "custom",

  html: `
<button class="reverse-shadow-btn">
    Continue
</button>
`,

  css: `
.reverse-shadow-btn{

    position:relative;

    width:180px;
    height:58px;

    border:none;

    border-radius:18px;

    background:#111827;

    color:white;

    font-weight:600;

    cursor:pointer;

    transition:
        box-shadow .45s cubic-bezier(.22,1,.36,1);

    box-shadow:
        0 12px 24px rgba(0,0,0,.20);

}

.reverse-shadow-btn:hover{

    box-shadow:
        0 -12px 24px rgba(0,0,0,.20);

}
`,

  prompt: `
Create a minimal dark button where nothing moves except the shadow.

Normally the shadow sits below the button.

On hover, smoothly move the shadow above the button without translating or scaling the button itself.

The effect should create an unexpected optical illusion where the perceived light source suddenly changes.
`,
};