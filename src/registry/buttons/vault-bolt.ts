import type { CustomButtonDef } from "../types";

export const vaultBolt: CustomButtonDef = {
  id: "vault-bolt",
  name: "Vault Bolt",
  category: "Mechanical",
  description: "A button secured by two bolts that retract inward on hover, like a vault door disengaging before it can open.",
  tags: ["vault", "bolt", "lock", "mechanical"],
  label: "Unlock",
  kind: "custom",
  html: `
<button class="vault-bolt-btn">
  <span class="vault-bolt-btn__bolt vault-bolt-btn__bolt--top"></span>
  <span class="vault-bolt-btn__bolt vault-bolt-btn__bolt--bottom"></span>
  <span class="vault-bolt-btn__label">Unlock</span>
</button>
  `,
  css: `
.vault-bolt-btn {
  position: relative;
  padding: 16px 34px;
  background: #3c3c3c;
  border: 2px solid #555;
  border-radius: 4px;
  font-family: system-ui, sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 14px;
  color: #e4e0d4;
  cursor: pointer;
}

.vault-bolt-btn__bolt {
  position: absolute;
  left: 50%;
  width: 6px;
  height: 18px;
  background: #b8b2a0;
  transform: translateX(-50%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
}

.vault-bolt-btn__bolt--top {
  top: -10px;
}

.vault-bolt-btn__bolt--bottom {
  bottom: -10px;
}

.vault-bolt-btn:hover .vault-bolt-btn__bolt--top,
.vault-bolt-btn:focus-visible .vault-bolt-btn__bolt--top {
  transform: translateX(-50%) translateY(-14px);
}

.vault-bolt-btn:hover .vault-bolt-btn__bolt--bottom,
.vault-bolt-btn:focus-visible .vault-bolt-btn__bolt--bottom {
  transform: translateX(-50%) translateY(14px);
}

.vault-bolt-btn__label {
  position: relative;
  z-index: 1;
}
  `,
  prompt: "A button framed by a thick border like a vault door, with two small solid rectangular 'bolts' straddling its top and bottom edges. On hover, both bolts retract outward away from the button (top bolt moves up, bottom moves down) simulating a physical unlocking motion, before any other change happens to the button itself.",
};