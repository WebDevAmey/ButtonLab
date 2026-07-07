import type { CustomButtonDef } from "../types";

export const softToggle: CustomButtonDef = {
  id: "soft-toggle",
  name: "Soft Toggle",
  category: "Material",
  description: "A neumorphic well that holds a recessed disc until clicked, when the disc pops up to sit raised above the surface.",
  tags: ["neumorphism", "soft-ui", "toggle", "material"],
  label: "Active",
  kind: "custom",
  html: `
<div class="soft-toggle-wrap">
  <button class="soft-toggle-btn">
    <span class="soft-toggle-btn__well">
      <span class="soft-toggle-btn__disc"></span>
    </span>
    <span class="soft-toggle-btn__label">Active</span>
  </button>
</div>
  `,
  css: `
.soft-toggle-wrap {
  display: inline-block;
  padding: 20px;
  background: #e6e9ee;
  border-radius: 20px;
}

.soft-toggle-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 24px 10px 10px;
  background: #e6e9ee;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  box-shadow: 4px 4px 10px #c3c7cd, -4px -4px 10px #ffffff;
}

.soft-toggle-btn__well {
  position: relative;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #e6e9ee;
  box-shadow: inset 3px 3px 6px #c3c7cd, inset -3px -3px 6px #ffffff;
  flex-shrink: 0;
}

.soft-toggle-btn__disc {
  position: absolute;
  inset: 6px;
  border-radius: 50%;
  background: #e6e9ee;
  box-shadow: 2px 2px 5px #c3c7cd, -2px -2px 5px #ffffff;
  transform: scale(0.6);
  opacity: 0.5;
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s ease, box-shadow 0.2s ease;
}

.soft-toggle-btn.is-active .soft-toggle-btn__disc {
  transform: scale(1);
  opacity: 1;
  box-shadow: 3px 3px 7px #c3c7cd, -3px -3px 7px #ffffff, 0 0 0 2px #a3b1c2 inset;
}

.soft-toggle-btn__label {
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #4a5568;
}
  `,
  js: `
    document.querySelector('.soft-toggle-btn').addEventListener('click', function() {
      this.classList.toggle('is-active');
    });
  `,
  prompt: "A neumorphic pill button containing a small circular 'well' (inset dual-shadow, matching background) holding a disc that starts small, faint, and flat (implying it's resting at the bottom of the recess). On click, toggling an is-active class scales the disc up to fill the well and switches its shadow from none to a raised dual-shadow, so it visually rises out of the recess to sit flush with the surface — same neumorphic shadow language as Soft Emboss, applied to a distinct rise-from-a-well mechanism rather than a generic toggle switch slide.",
};