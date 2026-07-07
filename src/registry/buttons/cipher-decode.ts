import type { CustomButtonDef } from "../types";

export const cipherDecode: CustomButtonDef = {
  id: "cipher-decode",
  name: "Cipher Decode",
  category: "Impossible",
  description: "A label that scrambles into random glyphs and decrypts left-to-right on hover, with a scan sweep behind it and corner brackets that ignite the instant it locks.",
  tags: ["cipher", "decode", "scramble", "impossible"],
  label: "ACCESS",
  kind: "custom",
  html: `
<button class="cipher-decode-btn" onmouseenter="
  const btn = this;
  const el = btn.querySelector('.cipher-decode-btn__label');
  const target = 'ACCESS';
  const glyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&$@!?*';
  let frame = 0;
  const totalFrames = 18;
  clearInterval(btn._cipherTimer);
  btn.classList.remove('is-locked');
  btn._cipherTimer = setInterval(() => {
    frame++;
    let out = '';
    for (let i = 0; i < target.length; i++) {
      const lockPoint = ((i + 1) / target.length) * totalFrames;
      out += frame >= lockPoint ? target[i] : glyphs[Math.floor(Math.random() * glyphs.length)];
    }
    el.textContent = out;
    if (frame >= totalFrames) {
      clearInterval(btn._cipherTimer);
      btn.classList.add('is-locked');
    }
  }, 40);
" onmouseleave="
  clearInterval(this._cipherTimer);
  this.classList.remove('is-locked');
  this.querySelector('.cipher-decode-btn__label').textContent = 'ACCESS';
">
  <span class="cipher-decode-btn__scan"></span>
  <span class="cipher-decode-btn__corner cipher-decode-btn__corner--tl"></span>
  <span class="cipher-decode-btn__corner cipher-decode-btn__corner--tr"></span>
  <span class="cipher-decode-btn__corner cipher-decode-btn__corner--bl"></span>
  <span class="cipher-decode-btn__corner cipher-decode-btn__corner--br"></span>
  <span class="cipher-decode-btn__label">ACCESS</span>
</button>
  `,
  css: `
.cipher-decode-btn {
  position: relative;
  overflow: hidden;
  padding: 16px 40px;
  background: #0c0f0d;
  border: none;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 2px;
  color: #8fae94;
  cursor: pointer;
}

.cipher-decode-btn__scan {
  position: absolute;
  left: 0;
  right: 0;
  height: 10px;
  top: -10px;
  background: rgba(143, 174, 148, 0.18);
  z-index: 0;
}

.cipher-decode-btn:hover:not(.is-locked) .cipher-decode-btn__scan,
.cipher-decode-btn:focus-visible:not(.is-locked) .cipher-decode-btn__scan {
  animation: cipher-decode-scan 0.72s linear infinite;
}

@keyframes cipher-decode-scan {
  0% { top: -10px; }
  100% { top: 100%; }
}

.cipher-decode-btn__label {
  position: relative;
  z-index: 1;
}

.cipher-decode-btn__corner {
  position: absolute;
  width: 10px;
  height: 10px;
  border: 1px solid #3a453d;
  z-index: 1;
  transition: border-color 0.15s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.cipher-decode-btn__corner--tl { top: 4px; left: 4px; border-right: none; border-bottom: none; }
.cipher-decode-btn__corner--tr { top: 4px; right: 4px; border-left: none; border-bottom: none; }
.cipher-decode-btn__corner--bl { bottom: 4px; left: 4px; border-right: none; border-top: none; }
.cipher-decode-btn__corner--br { bottom: 4px; right: 4px; border-left: none; border-top: none; }

.cipher-decode-btn.is-locked .cipher-decode-btn__corner {
  border-color: #e0a83c;
  transform: scale(1.15);
}

.cipher-decode-btn.is-locked .cipher-decode-btn__label {
  color: #e0a83c;
}
  `,
  prompt: "A button whose label runs a JS scramble-to-lock decode loop on hover, resolving characters left-to-right over ~18 frames. Behind the text, a translucent scan bar sweeps top-to-bottom on an infinite loop only while unlocked (gated via :not(.is-locked)). Four corner brackets sit muted at rest and simultaneously scale up and change color the instant the .is-locked class is applied at decode completion — the corner ignition is the confirm beat, not a decorative extra.",
};