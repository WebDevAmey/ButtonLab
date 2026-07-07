import type { CustomButtonDef } from "../types";

export const radarLock: CustomButtonDef = {
  id: "radar-lock",
  name: "Radar Lock",
  category: "Mechanical",
  description: "A continuously sweeping radar wedge behind the button, with corner brackets that frame in on hover and snap tight with a ring ping on click.",
  tags: ["radar", "lock", "reticle", "mechanical"],
  label: "Target",
  kind: "custom",
  html: `
<button class="radar-lock-btn" onclick="
  this.classList.remove('is-locking');
  void this.offsetWidth;
  this.classList.add('is-locking');
">
  <span class="radar-lock-btn__sweep"></span>
  <span class="radar-lock-btn__ring"></span>
  <span class="radar-lock-btn__bracket radar-lock-btn__bracket--tl"></span>
  <span class="radar-lock-btn__bracket radar-lock-btn__bracket--tr"></span>
  <span class="radar-lock-btn__bracket radar-lock-btn__bracket--bl"></span>
  <span class="radar-lock-btn__bracket radar-lock-btn__bracket--br"></span>
  <span class="radar-lock-btn__label">Target</span>
</button>
  `,
  css: `
.radar-lock-btn {
  position: relative;
  overflow: hidden;
  padding: 18px 40px;
  background: #101314;
  border: none;
  border-radius: 10px;
  font-family: system-ui, sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 1px;
  color: #cdd8d2;
  cursor: pointer;
}

.radar-lock-btn__sweep {
  position: absolute;
  inset: -10%;
  z-index: 0;
  background: rgba(122, 200, 160, 0.12);
  clip-path: polygon(50% 50%, 50% 0%, 78% 0%);
  animation: radar-lock-spin 2.4s linear infinite;
}

@keyframes radar-lock-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.radar-lock-btn__bracket {
  position: absolute;
  width: 12px;
  height: 12px;
  border: 2px solid #5b6a61;
  z-index: 1;
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.2s ease;
}

.radar-lock-btn__bracket--tl { top: 6px; left: 6px; border-right: none; border-bottom: none; transform: translate(-4px, -4px); }
.radar-lock-btn__bracket--tr { top: 6px; right: 6px; border-left: none; border-bottom: none; transform: translate(4px, -4px); }
.radar-lock-btn__bracket--bl { bottom: 6px; left: 6px; border-right: none; border-top: none; transform: translate(-4px, 4px); }
.radar-lock-btn__bracket--br { bottom: 6px; right: 6px; border-left: none; border-top: none; transform: translate(4px, 4px); }

.radar-lock-btn:hover .radar-lock-btn__bracket,
.radar-lock-btn:focus-visible .radar-lock-btn__bracket {
  transform: translate(0, 0);
  border-color: #7ac8a0;
}

.radar-lock-btn.is-locking .radar-lock-btn__bracket {
  transform: translate(0, 0) scale(0.85);
  border-color: #e0a83c;
}

.radar-lock-btn__ring {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  margin: -5px 0 0 -5px;
  border-radius: 50%;
  border: 2px solid #e0a83c;
  opacity: 0;
  z-index: 1;
}

.radar-lock-btn.is-locking .radar-lock-btn__ring {
  animation: radar-lock-ping 0.5s ease-out;
}

@keyframes radar-lock-ping {
  0%   { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(6); }
}

.radar-lock-btn__label {
  position: relative;
  z-index: 2;
}
  `,
  prompt: "A button with a translucent solid-color wedge (clip-path polygon, no gradient) rotating continuously behind it like a radar sweep. Four corner brackets sit pulled outward at rest, translate inward to snugly frame the button on hover, then on click scale in slightly tighter and change color while a separate ring element expands from the center and fades out as a shockwave 'ping' confirming lock — three layers, each with a distinct trigger (idle/hover/click).",
};