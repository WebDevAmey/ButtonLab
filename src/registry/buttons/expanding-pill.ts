import type { CustomButtonDef } from "../types";

export const expandingPillSend: CustomButtonDef = {
  id: "expanding-pill-send",
  name: "Expanding Pill Send",
  category: "Mechanical",
  description: "A pill button whose icon capsule slides to the far edge and rotates 90° while its shape un-rounds into a square, as the label swaps sides.",
  tags: ["pill", "expand", "icon-swap", "hover"],
  label: "Send",
  kind: "custom",
  html: `
<button class="expanding-pill-send-btn group">
  <span class="expanding-pill-send-btn__track">
    <span class="expanding-pill-send-btn__spacer"></span>
    <span class="expanding-pill-send-btn__icon-wrap">
      <svg class="expanding-pill-send-btn__icon" viewBox="0 0 16 16" fill="none">
        <path fill="currentColor" d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"></path>
      </svg>
    </span>
  </span>
  <span class="expanding-pill-send-btn__label">Send</span>
</button>
  `,
  css: `
.expanding-pill-send-btn {
  position: relative;
  display: flex;
  align-items: center;
  width: 8.5rem;
  height: 2.9rem;
  padding: 0.5rem;
  background: #16161a;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  box-shadow: inset 1px 2px 5px rgba(0,0,0,0.5);
  overflow: hidden;
  transition: background 0.7s cubic-bezier(0.51, 0.026, 0.368, 1.016);
}

.expanding-pill-send-btn:hover {
  background: #dff5ee;
}

.expanding-pill-send-btn__track {
  position: absolute;
  inset: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.expanding-pill-send-btn__spacer {
  width: 0%;
  transition: width 0.9s cubic-bezier(0.51, 0.026, 0.368, 1.016);
}

.expanding-pill-send-btn:hover .expanding-pill-send-btn__spacer {
  width: 100%;
}

.expanding-pill-send-btn__icon-wrap {
  flex-shrink: 0;
  height: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #17d3b0;
  border-radius: 50%;
  box-shadow: inset 1px -1px 3px rgba(0,0,0,0.6);
  transition: background 0.9s cubic-bezier(0.51, 0.026, 0.368, 1.016), border-radius 0.9s ease;
}

.expanding-pill-send-btn:hover .expanding-pill-send-btn__icon-wrap {
  background: #0b0b0d;
  border-radius: 30%;
}

.expanding-pill-send-btn__icon {
  width: 0.75rem;
  height: 0.75rem;
  color: #0b0b0d;
  transition: color 0.9s ease, transform 0.9s cubic-bezier(0.51, 0.026, 0.368, 1.016);
}

.expanding-pill-send-btn:hover .expanding-pill-send-btn__icon {
  color: #dff5ee;
  transform: rotate(90deg);
}

.expanding-pill-send-btn__label {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 2.8rem;
  padding-right: 1.8rem;
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1;
  color: #f0f0f0;
  transition: color 0.9s ease, padding 0.9s cubic-bezier(0.51, 0.026, 0.368, 1.016);
}

.expanding-pill-send-btn:hover .expanding-pill-send-btn__label {
  padding-left: 1.1rem;
  padding-right: 3.4rem;
  color: #0b0b0d;
}
  `,
  prompt: "A pill button matching the Contacts reference's expand-and-swap mechanism (spacer growing to push the icon capsule to the far edge, label padding flipping sides), but with the icon rotating a full 90deg instead of 45deg, the icon capsule morphing from a circle to a rounded-square via border-radius transition instead of staying circular, and an inverted dark-to-light color scheme with a cyan/teal accent instead of green.",
};