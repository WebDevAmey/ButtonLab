import type { CustomButtonDef } from "../types";

export const emberCore: CustomButtonDef = {
  id: "ember-core",
  name: "Ember Core",
  category: "Physics",
  description: "A button that charges brighter the longer it's held, then discharges in a bright flash on release, like a capacitor building and releasing energy.",
  tags: ["glow", "charge", "flash", "physics"],
  label: "Hold to Charge",
  kind: "custom",
  html: `
<button class="ember-core-btn"
  onmousedown="this.classList.remove('is-discharging'); this.classList.add('is-charging');"
  onmouseup="
    this.classList.remove('is-charging');
    this.classList.remove('is-discharging');
    void this.offsetWidth;
    this.classList.add('is-discharging');
  "
  onmouseleave="this.classList.remove('is-charging');"
>
  <span class="ember-core-btn__label">Hold to Charge</span>
</button>
  `,
  css: `
.ember-core-btn {
  position: relative;
  padding: 14px 32px;
  background: #1c1310;
  border: 1px solid #7a3a1e;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 0 6px 1px rgba(255,122,60,0.25);
  transition: box-shadow 0.4s ease, border-color 0.4s ease;
}

.ember-core-btn.is-charging {
  border-color: #ff7a3c;
  box-shadow: 0 0 28px 6px rgba(255,122,60,0.85), inset 0 0 12px 2px rgba(255,160,90,0.5);
  transition: box-shadow 1.2s ease-in, border-color 1.2s ease-in;
}

.ember-core-btn.is-discharging {
  animation: ember-core-flash 0.5s ease-out;
}

@keyframes ember-core-flash {
  0%   { box-shadow: 0 0 60px 14px rgba(255,220,180,1), inset 0 0 20px 6px rgba(255,220,180,0.9); border-color: #ffe3c2; }
  100% { box-shadow: 0 0 6px 1px rgba(255,122,60,0.25); border-color: #7a3a1e; }
}

.ember-core-btn__label {
  position: relative;
  font-family: system-ui, sans-serif;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.5px;
  color: #ffbf94;
  transition: color 0.4s ease, text-shadow 0.4s ease;
}

.ember-core-btn.is-charging .ember-core-btn__label {
  color: #fff1e0;
  text-shadow: 0 0 8px rgba(255,200,140,0.9);
  transition: color 1.2s ease-in, text-shadow 1.2s ease-in;
}

.ember-core-btn.is-discharging .ember-core-btn__label {
  animation: ember-core-label-flash 0.5s ease-out;
}

@keyframes ember-core-label-flash {
  0%   { color: #fffdf8; text-shadow: 0 0 14px #fff; }
  100% { color: #ffbf94; text-shadow: none; }
}
  `,
  prompt: "A button whose glow (box-shadow + border-color) is normally muted. On mousedown, a class-driven transition ramps box-shadow spread and brightness up slowly over 1.2s — the longer it's held, the further along that transition gets. On mouseup, a separate keyframe animation fires an instant bright flash starting from wherever the charge currently was and decaying back to the resting glow over 0.5s, so the glow is driven by hold-duration and release, not by hover state.",
};