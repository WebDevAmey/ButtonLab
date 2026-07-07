import type { CustomButtonDef } from "../types";

export const paperCurl: CustomButtonDef = {
  id: "paper-curl",

  name: "Paper Curl",

  category: "Material",

  description:
    "A paper button whose corner gently peels upward when hovered.",

  tags: ["paper", "curl", "fold", "corner"],

  label: "Download",

  kind: "custom",

  html: `
<button class="paper-btn">
    <span>Download</span>
    <span class="paper-corner"></span>
</button>
`,

  css: `
.paper-btn{
    position:relative;
    overflow:visible;

    width:180px;
    height:58px;

    border:none;
    border-radius:18px;

    background:#fbfaf5;

    color:#111827;

    font-weight:600;
    font-size:15px;

    cursor:pointer;

    transition:
        transform .35s cubic-bezier(.22,1,.36,1),
        box-shadow .35s;

    box-shadow:
        0 10px 24px rgba(0,0,0,.10);
}

.paper-btn:hover{
    transform:translateY(-3px);

    box-shadow:
        0 18px 36px rgba(0,0,0,.16);
}

.paper-btn span:first-child{
    position:relative;
    z-index:5;
}

/* Fold */

.paper-corner{

    position:absolute;

    top:0;
    right:0;

    width:46px;
    height:46px;

    overflow:hidden;

    pointer-events:none;
}

/* Top visible paper */

.paper-corner::before{

    content:"";

    position:absolute;

    inset:0;

    background:
        linear-gradient(
            135deg,
            #ffffff 0%,
            #f5f5f2 70%
        );

    clip-path:polygon(100% 0,100% 100%,0 0);

    transform-origin:100% 0;

    transition:transform .45s cubic-bezier(.2,1,.3,1);

    z-index:2;
}

/* Back side of paper */

.paper-corner::after{

    content:"";

    position:absolute;

    top:3px;
    right:3px;

    width:34px;
    height:34px;

    background:
        linear-gradient(
            135deg,
            #dedbd4,
            #cfcac0
        );

    clip-path:polygon(100% 0,100% 100%,0 0);

    transform-origin:100% 0;

    opacity:0;

    transition:
        opacity .3s,
        transform .45s cubic-bezier(.2,1,.3,1);

    filter:blur(.3px);

}

.paper-btn:hover .paper-corner::before{

    transform:
        perspective(220px)
        rotateY(-55deg);

}

.paper-btn:hover .paper-corner::after{

    opacity:1;

    transform:
        translate(-8px,8px)
        perspective(220px)
        rotateY(-55deg);

}

.paper-btn:hover .paper-corner{

    filter:
        drop-shadow(-5px 8px 8px rgba(0,0,0,.18));

}
}
`,

  prompt: `
Create a paper-like button where the top-right corner gently curls upward on hover.

Do not scale the button.

Use a clipped triangular pseudo-corner that rotates around the top-right corner and casts a realistic shadow while lifting.

The effect should resemble a paper page folding upward instead of a digital animation.
`,
};