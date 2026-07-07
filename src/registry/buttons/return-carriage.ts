import type { CustomButtonDef } from "../types";

export const returnCarriage: CustomButtonDef = {
  id: "return-carriage",
  name: "Return Carriage",
  category: "Mechanical",
  description: "An Enter key with a separate lever above it that flicks fast on press, a beat before the key face compresses, like a typewriter carriage return.",
  tags: ["enter", "keycap", "lever", "3d"],
  label: "Enter",
  kind: "custom",
  html: `
<button class="return-carriage-btn">
  <span class="return-carriage-btn__lever"></span>
  <span class="return-carriage-btn__face">
    <svg class="return-carriage-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="9 10 4 15 9 20"></polyline>
      <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
    </svg>
    <span class="return-carriage-btn__label">Enter</span>
  </span>
</button>
  `,
  css: `
.return-carriage-btn {
  position: relative;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  perspective: 220px;
}

.return-carriage-btn__lever {
  position: absolute;
  top: -3px;
  right: 12px;
  width: 3px;
  height: 14px;
  background: #6b7178;
  border-radius: 2px;
  transform-origin: bottom center;
  transform: rotate(0deg);
  transition: transform 0.18s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 2;
}

.return-carriage-btn:active .return-carriage-btn__lever {
  transform: rotate(-32deg);
  transition: transform 0.06s ease-out;
}

.return-carriage-btn__face {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: #1a1c1f;
  border-radius: 10px;
  box-shadow:
    0 1px 0 rgba(255,255,255,0.06) inset,
    0 4px 0 #050607,
    0 8px 16px rgba(0,0,0,0.4);
  transform: rotateX(6deg);
  transform-origin: bottom center;
  transition: transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.15s ease;
}

.return-carriage-btn:active .return-carriage-btn__face {
  transform: rotateX(6deg) translateY(3px);
  box-shadow:
    0 1px 0 rgba(255,255,255,0.03) inset,
    0 1px 0 #050607,
    0 2px 6px rgba(0,0,0,0.3);
  transition: transform 0.08s ease-out, box-shadow 0.08s ease-out;
}

.return-carriage-btn__icon {
  width: 15px;
  height: 15px;
  color: #dfe3e8;
  transition: transform 0.15s ease-out;
}

.return-carriage-btn:active .return-carriage-btn__icon {
  transform: translateY(1px) scale(0.92);
}

.return-carriage-btn__label {
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #dfe3e8;
}
  `,
  prompt: "An Enter key with two independently animated parts: a thin lever anchored above the key that rotates -32deg in a very fast 0.06s burst on press, and the key face itself compressing via rotateX + translateY over a slightly slower 0.08s. The lever's motion completing first, ahead of the face, is what reads as 'lever struck, mechanism follows' rather than one uniform press animation.",
};