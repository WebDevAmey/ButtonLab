import type { CustomButtonDef } from "../types";

export const softPress: CustomButtonDef = {
  id: "soft-press",

  name: "Soft Press",

  category: "Physics",

  description:
    "A soft rubber button that lifts on hover and gently compresses when pressed.",

  tags: ["press", "physics", "depth", "minimal"],

  label: "Continue",

  kind: "custom",

  html: `
<button class="soft-press-btn">
  Continue
</button>
`,

  css: `
.soft-press-btn{
    position:relative;
    display:inline-flex;
    align-items:center;
    justify-content:center;

    width:170px;
    height:58px;

    border:none;
    border-radius:18px;

    background:#111827;
    color:white;

    font-weight:600;
    font-size:15px;
    letter-spacing:.02em;

    cursor:pointer;

    transition:
        transform .22s cubic-bezier(.22,1,.36,1),
        box-shadow .22s cubic-bezier(.22,1,.36,1),
        background .22s;

    box-shadow:
        0 12px 24px rgba(17,24,39,.22),
        inset 0 1px 0 rgba(255,255,255,.08);

    user-select:none;
}

.soft-press-btn:hover{

    transform:
        translateY(-4px);

    box-shadow:
        0 18px 34px rgba(17,24,39,.28),
        inset 0 1px 0 rgba(255,255,255,.08);

}

.soft-press-btn:active{

    transform:
        translateY(2px)
        scaleY(.94)
        scaleX(1.02);

    box-shadow:
        0 5px 10px rgba(17,24,39,.18),
        inset 0 3px 8px rgba(0,0,0,.18);

}
`,

  prompt: `
Create a premium dark button that behaves like soft rubber instead of shrinking.

The button should be 170px wide, 58px tall, have a dark neutral background, rounded corners, medium-bold white text, and a realistic soft shadow.

On hover:
- Lift upward by about 4px.
- Increase the shadow naturally.

On active:
- Compress vertically using scaleY(0.94).
- Slightly widen using scaleX(1.02).
- Move downward by 2px.
- Reduce the shadow so it feels physically pressed.

Avoid flashy animations. The interaction should feel subtle, premium, and tactile.
`,
};