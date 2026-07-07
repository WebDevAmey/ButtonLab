import type { CustomButtonDef } from "../types";

export const coinSlot: CustomButtonDef = {
  id: "coin-slot",
  name: "Coin Slot",
  category: "Mechanical",
  description: "A vending-machine slot that swallows a falling coin before the button confirms its action.",
  tags: ["coin", "vending", "mechanical", "slot"],
  label: "Insert & Confirm",
  kind: "custom",
  html: `
<button class="coin-slot-btn" onclick="
  this.classList.remove('is-dropping');
  void this.offsetWidth;
  this.classList.add('is-dropping');
">
  <span class="coin-slot-btn__slot"></span>
  <span class="coin-slot-btn__coin"></span>
  <span class="coin-slot-btn__label">Insert &amp; Confirm</span>
</button>
  `,
  css: `
.coin-slot-btn {
  position: relative;
  padding: 14px 30px;
  background: #1c1c1e;
  color: #e8e6df;
  border: none;
  border-radius: 6px;
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  overflow: visible;
}

.coin-slot-btn__slot {
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  width: 22px;
  height: 4px;
  background: #000;
  border-radius: 2px;
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.8);
}

.coin-slot-btn__coin {
  position: absolute;
  top: -26px;
  left: 50%;
  width: 16px;
  height: 16px;
  margin-left: -8px;
  border-radius: 50%;
  background: #cda44c;
  box-shadow: inset 0 0 0 2px #8a6d2f;
  opacity: 0;
  z-index: 2;
}

.coin-slot-btn.is-dropping .coin-slot-btn__coin {
  animation: coin-slot-drop 0.5s cubic-bezier(0.55,0,1,0.45) forwards;
}

@keyframes coin-slot-drop {
  0%   { top: -26px; opacity: 1; transform: rotate(0deg) scale(1); }
  70%  { top: 4px;   opacity: 1; transform: rotate(180deg) scale(0.9); }
  85%  { top: 6px;   opacity: 1; transform: rotate(220deg) scale(0.3); }
  100% { top: 6px;   opacity: 0; transform: rotate(220deg) scale(0); }
}

.coin-slot-btn__label {
  position: relative;
  z-index: 1;
  display: inline-block;
}

.coin-slot-btn.is-dropping .coin-slot-btn__label {
  animation: coin-slot-thunk 0.5s ease-out;
}

@keyframes coin-slot-thunk {
  0%, 68% { transform: translateY(0); }
  74%     { transform: translateY(2px); }
  82%     { transform: translateY(0); }
}
  `,
  prompt: "A button with a cut slot at its top edge. On every click (not just once), a flat coin (solid fill with a ring outline, no gradients) falls from above, rotates as it drops, shrinks into the slot, and disappears, followed by a small downward 'thunk' shift of the label — replaying identically on repeated presses via a class-toggle + reflow trick rather than relying on :focus.",
};