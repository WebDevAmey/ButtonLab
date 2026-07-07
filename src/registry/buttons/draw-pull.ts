import type { CustomButtonDef } from "../types";

export const drawerPull: CustomButtonDef = {
  id: "drawer-pull",
  name: "Drawer Pull",
  category: "Mechanical",
  description: "A button rendered as a drawer front that slides outward on press, revealing a recessed cavity behind it.",
  tags: ["drawer", "slide", "mechanical", "depth"],
  label: "Open",
  kind: "custom",
  html: `
<div class="drawer-pull-wrap">
  <span class="drawer-pull-wrap__cavity"></span>
  <button class="drawer-pull-btn">Open</button>
</div>
  `,
  css: `
.drawer-pull-wrap {
  position: relative;
  display: inline-block;
  padding: 6px;
  background: #1b1b1b;
  border-radius: 6px;
}

.drawer-pull-wrap__cavity {
  position: absolute;
  inset: 6px;
  background: #0a0a0a;
  border-radius: 4px;
}

.drawer-pull-btn {
  position: relative;
  display: block;
  padding: 14px 32px;
  background: #d8d3c5;
  border: none;
  border-radius: 4px;
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #1b1b1b;
  cursor: pointer;
  box-shadow: 0 2px 0 #a49d88;
  transform: translateY(0);
  transition: transform 0.18s ease-out, box-shadow 0.18s ease-out;
}

.drawer-pull-btn:active {
  transform: translateY(6px);
  box-shadow: 0 0 0 #a49d88;
}
  `,
  prompt: "A button set inside a darker recessed frame (the cavity), with a hard drop-shadow ledge beneath it instead of any blur. On press, the button face slides straight down into the cavity, compressing its shadow to zero, like a drawer being pushed shut; on release it pops back up to full ledge height.",
};