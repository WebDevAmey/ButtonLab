import type { CustomButtonDef } from "../types";

export const terminalType: CustomButtonDef = {
  id: "terminal-type",
  name: "Terminal Type",
  category: "Effect",
  description:
    "A terminal-styled button that sits idle as a blinking cursor and types out its own label character by character while hovered.",
  tags: ["typewriter", "terminal", "novel"],
  label: "Compile",
  kind: "custom",
  html: `<button class="btn-terminal">
  <span class="btn-terminal__text">Compile</span>
</button>`,
  css: `.btn-terminal {
  padding: 14px 22px;
  border-radius: 6px;
  border: 1px solid #2dd4bf;
  background: #042f2e;
  color: #2dd4bf;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-weight: 600;
  cursor: pointer;
}

.btn-terminal__text {
  display: inline-block;
  width: 0ch;
  overflow: hidden;
  white-space: nowrap;
  vertical-align: bottom;
  border-right: 2px solid #2dd4bf;
  animation: btn-terminal-blink 0.8s step-end infinite;
}

.btn-terminal:hover .btn-terminal__text {
  width: 7ch;
  animation:
    btn-terminal-type 0.9s steps(7) forwards,
    btn-terminal-blink 0.8s step-end infinite;
}

@keyframes btn-terminal-type {
  from {
    width: 0ch;
  }
  to {
    width: 7ch;
  }
}

@keyframes btn-terminal-blink {
  50% {
    border-color: transparent;
  }
}`,
  prompt:
    "Create a dark terminal-styled button (background #042f2e, 1px #2dd4bf border, 6px radius, monospace teal bold text) that, by default, shows no label text at all — only a blinking teal caret (a 2px right border on an empty inline-block span, blinking via a step-end animation toggling border-color to transparent every 0.8s). On hover, animate that span's width from 0ch to 7ch over 0.9s using steps(7) so the label \"Compile\" appears to type itself out character by character, monospaced, while the caret keeps blinking at the end.",
};
