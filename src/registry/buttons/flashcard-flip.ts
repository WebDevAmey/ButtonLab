import type { CustomButtonDef } from "../types";

export const flashcardFlip: CustomButtonDef = {
  id: "flashcard-flip",
  name: "Flashcard Flip",
  category: "Mechanical",
  description: "A button whose entire label sits on a two-sided 3D card that flips 180° to its back face on hover and flips back on mouse leave.",
  tags: ["flip", "3d", "card", "toggle"],
  label: "Sign Up",
  kind: "custom",
  html: `
<button class="flashcard-flip-btn" onmouseenter="this.classList.add('is-flipped')" onmouseleave="this.classList.remove('is-flipped')">
  <span class="flashcard-flip-btn__card">
    <span class="flashcard-flip-btn__face flashcard-flip-btn__face--front">Sign Up</span>
    <span class="flashcard-flip-btn__face flashcard-flip-btn__face--back">Let's go!</span>
  </span>
</button>
  `,
  css: `
.flashcard-flip-btn {
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  perspective: 400px;
}

.flashcard-flip-btn__card {
  position: relative;
  display: block;
  width: 150px;
  height: 50px;
  transform-style: preserve-3d;
  transition: transform 0.55s cubic-bezier(0.4, 0.15, 0.2, 1);
}

.flashcard-flip-btn.is-flipped .flashcard-flip-btn__card {
  transform: rotateY(180deg);
}

.flashcard-flip-btn__face {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 10px;
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
}

.flashcard-flip-btn__face--front {
  background: #18181b;
  color: #f4f4f5;
  box-shadow: 0 4px 0 #000, 0 10px 18px rgba(0,0,0,0.35);
}

.flashcard-flip-btn__face--back {
  background: #efe9ff;
  color: #3d2b66;
  transform: rotateY(180deg);
  box-shadow: 0 4px 0 #c9b8f0, 0 10px 18px rgba(0,0,0,0.15);
}
  `,
  prompt: "A fixed-size button containing a card element with transform-style: preserve-3d inside a perspective parent. Two absolutely-positioned faces, each with backface-visibility: hidden, occupy the same space — the front face at rotateY(0deg), the back pre-rotated to rotateY(180deg) so it only becomes visible once the card rotates. Hovering adds a class that rotates the whole card 180deg on the Y-axis; mouse leave reverses it — a genuine two-sided object, not a per-letter text animation.",
};