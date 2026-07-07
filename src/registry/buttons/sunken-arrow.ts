import type { CustomButtonDef } from "../types";

export const sunkenArrow: CustomButtonDef = {
  id: "sunken-arrow",
  name: "Sunken Arrow",
  category: "Material",
  description: "An Enter key whose icon sits in its own recessed socket that sinks deeper than the key face itself on press, creating two depths in one key.",
  tags: ["enter", "keycap", "depth", "3d"],
  label: "Enter",
  kind: "custom",
  html: `
<button class="sunken-arrow-btn">
  <span class="sunken-arrow-btn__well">
    <svg class="sunken-arrow-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="9 10 4 15 9 20"></polyline>
      <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
    </svg>
  </span>
  <span class="sunken-arrow-btn__label">Enter</span>
</button>
  `,
  css: `
.sunken-arrow-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 26px;
  background: #16181b;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow:
    0 1px 0 rgba(255,255,255,0.05) inset,
    0 3px 0 #050607,
    0 6px 12px rgba(0,0,0,0.35);
  transform: translateY(0);
  transition: transform 0.12s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.12s ease;
}

.sunken-arrow-btn:active {
  transform: translateY(3px);
  box-shadow:
    0 1px 0 rgba(255,255,255,0.02) inset,
    0 0px 0 #050607,
    0 1px 3px rgba(0,0,0,0.3);
}

.sunken-arrow-btn__well {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background: #101214;
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.5);
  transition: box-shadow 0.15s ease, transform 0.15s ease;
}

.sunken-arrow-btn:active .sunken-arrow-btn__well {
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.85);
  transform: translateY(0.5px) scale(0.94);
}

.sunken-arrow-btn__icon {
  width: 12px;
  height: 12px;
  color: #cfd6dc;
}

.sunken-arrow-btn__label {
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #eef0f2;
}
  `,
  prompt: "An Enter key that compresses normally on press (translateY + shadow collapse), while a small icon-well inside it — already recessed at rest via a light inset shadow — deepens that inset shadow further and independently on the same press event, so the icon appears to sink to a second, deeper level than the key surface around it, rather than moving as one flat unit.",
};