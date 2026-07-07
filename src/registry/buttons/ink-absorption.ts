import type { CustomButtonDef } from "../types";

export const inkAbsorption: CustomButtonDef = {
  id: "ink-absorption",

  name: "Ink Absorption",

  category: "Material",

  description:
    "A paper-like button where ink naturally spreads through the surface.",

  tags: ["ink", "paper", "organic", "material"],

  label: "Explore",

  kind: "custom",

  html: `
<button class="ink-btn">
    <span class="ink-fill"></span>
    <span class="ink-label">Explore</span>
</button>
`,

  css: `
.ink-btn{
    position:relative;
    overflow:hidden;

    width:180px;
    height:58px;

    border:none;
    border-radius:18px;

    background:#faf8f2;

    color:#111;

    font-weight:600;

    cursor:pointer;

    isolation:isolate;
}

.ink-fill{

    position:absolute;
    inset:-40%;

    background:
        radial-gradient(circle at 18% 30%,rgba(0,0,0,.9) 0 18%,transparent 19%),
        radial-gradient(circle at 70% 60%,rgba(0,0,0,.95) 0 14%,transparent 15%),
        radial-gradient(circle at 40% 80%,rgba(0,0,0,.9) 0 22%,transparent 23%),
        radial-gradient(circle,#111 0%,#111 100%);

    filter:blur(18px);

    transform:scale(.15);

    opacity:0;

    transition:
        transform .8s cubic-bezier(.2,1,.2,1),
        opacity .4s;

}

.ink-label{

    position:relative;

    z-index:2;

    transition:color .45s;
}

.ink-btn:hover .ink-fill{

    transform:scale(1.8);

    opacity:1;

}

.ink-btn:hover .ink-label{

    color:white;

}
`,

  prompt:
`Create a premium paper-inspired button where black ink organically spreads through the surface instead of using a normal hover fill. The button should have a warm off-white paper background, rounded corners, and medium-bold text. Use multiple blurred radial gradients layered together so the expanding shape has an uneven, natural edge. On hover, scale the blurred ink layer from a tiny blob to fully cover the button while transitioning the label from black to white. The animation should feel like fountain-pen ink soaking into textured paper rather than a perfect circular expansion.`,
};