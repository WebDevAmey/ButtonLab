import type { CustomButtonDef } from "../types";

export const starlightGenerate: CustomButtonDef = {
  id: "starlight-generate",
  name: "Starlight Generate",
  category: "Mechanical",
  description: "A button whose label flips letter-by-letter into 'Generating' on click while a literal progress ring circles its icon, then flips back once the ring completes.",
  tags: ["generate", "flip", "progress", "twinkle"],
  label: "Generate",
  kind: "custom",
  html: `
<button class="starlight-generate-btn" onclick="
  const btn = this;
  if (btn.classList.contains('is-generating')) return;
  btn.classList.add('is-generating');
  clearTimeout(btn._genTimer);
  btn._genTimer = setTimeout(() => { btn.classList.remove('is-generating'); }, 2400);
">
  <span class="starlight-generate-btn__ring">
    <svg class="starlight-generate-btn__spark" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 L13.8 9.2 L21 11 L13.8 12.8 L12 20 L10.2 12.8 L3 11 L10.2 9.2 Z"></path>
    </svg>
  </span>
  <span class="starlight-generate-btn__stack">
    <span class="starlight-generate-btn__word starlight-generate-btn__word--idle">
      <span>G</span><span>e</span><span>n</span><span>e</span><span>r</span><span>a</span><span>t</span><span>e</span>
    </span>
    <span class="starlight-generate-btn__word starlight-generate-btn__word--active">
      <span>G</span><span>e</span><span>n</span><span>e</span><span>r</span><span>a</span><span>t</span><span>i</span><span>n</span><span>g</span>
    </span>
  </span>
</button>
  `,
  css: `
.starlight-generate-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 28px;
  background: #121014;
  border: 1px solid #3a3440;
  border-radius: 999px;
  cursor: pointer;
}

.starlight-generate-btn__ring {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

.starlight-generate-btn__ring::before {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 1.5px solid transparent;
  border-top-color: #c9a6ff;
  opacity: 0;
}

.starlight-generate-btn.is-generating .starlight-generate-btn__ring::before {
  opacity: 1;
  animation: starlight-generate-spin 0.9s linear infinite;
}

@keyframes starlight-generate-spin {
  to { transform: rotate(360deg); }
}

.starlight-generate-btn__spark {
  width: 12px;
  height: 12px;
  color: #c9a6ff;
  animation: starlight-generate-twinkle 2.4s ease-in-out infinite;
}

@keyframes starlight-generate-twinkle {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

.starlight-generate-btn.is-generating .starlight-generate-btn__spark {
  animation: none;
  opacity: 1;
}

.starlight-generate-btn__stack {
  position: relative;
  display: inline-block;
  height: 1.1em;
  min-width: 6.5em;
  perspective: 200px;
}

.starlight-generate-btn__word {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #e7defb;
}

.starlight-generate-btn__word span {
  display: inline-block;
  transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease;
}

.starlight-generate-btn__word--idle span { opacity: 1; transform: rotateX(0deg); }
.starlight-generate-btn__word--active span { opacity: 0; transform: rotateX(-90deg); }

.starlight-generate-btn.is-generating .starlight-generate-btn__word--idle span {
  opacity: 0;
  transform: rotateX(90deg);
}
.starlight-generate-btn.is-generating .starlight-generate-btn__word--active span {
  opacity: 1;
  transform: rotateX(0deg);
}

.starlight-generate-btn__word span:nth-child(1) { transition-delay: 0ms; }
.starlight-generate-btn__word span:nth-child(2) { transition-delay: 30ms; }
.starlight-generate-btn__word span:nth-child(3) { transition-delay: 60ms; }
.starlight-generate-btn__word span:nth-child(4) { transition-delay: 90ms; }
.starlight-generate-btn__word span:nth-child(5) { transition-delay: 120ms; }
.starlight-generate-btn__word span:nth-child(6) { transition-delay: 150ms; }
.starlight-generate-btn__word span:nth-child(7) { transition-delay: 180ms; }
.starlight-generate-btn__word span:nth-child(8) { transition-delay: 210ms; }
.starlight-generate-btn__word span:nth-child(9) { transition-delay: 240ms; }
.starlight-generate-btn__word span:nth-child(10) { transition-delay: 270ms; }
  `,
  prompt: "A button with two stacked labels ('Generate' idle, 'Generating' active), each split into per-letter spans with staggered transition-delays. Clicking adds an is-generating class: idle letters rotateX(90deg) away while active letters rotateX in from -90deg, staggered letter-by-letter inside a perspective container for a real 3D flip rather than an opacity cross-fade. Simultaneously a ::before ring around the icon spins continuously and the icon's idle twinkle animation is replaced by a steady lit state. After a fixed 2.4s timeout the class is removed and both the letters and ring reverse in sync, so the ring's spin duration reads as an actual progress indicator rather than decoration.",
};