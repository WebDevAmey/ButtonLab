import type { CustomButtonDef } from "../types";

export const orbitPing: CustomButtonDef = {
  id: "orbit-ping",
  name: "Orbit Ping",
  category: "Effect",
  description:
    "A dark button with a glowing satellite dot that travels the full loop of its rounded border using a CSS motion path, only while hovered.",
  tags: ["motion-path", "orbit", "novel"],
  label: "Orbit Ping",
  kind: "custom",
  html: `<button class="btn-orbit">
  <span class="btn-orbit__dot"></span>
  Orbit Ping
</button>`,
  css: `.btn-orbit {
  position: relative;
  width: 176px;
  height: 56px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid #27272a;
  background: #09090b;
  color: #e4e4e7;
  font-weight: 600;
  cursor: pointer;
}

.btn-orbit__dot {
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 6px;
  margin: -3px 0 0 -3px;
  border-radius: 999px;
  background: #38bdf8;
  box-shadow: 0 0 8px 2px rgba(56, 189, 248, 0.8);
  offset-path: path("M9,0 H167 A9,9 0 0 1 176,9 V47 A9,9 0 0 1 167,56 H9 A9,9 0 0 1 0,47 V9 A9,9 0 0 1 9,0 Z");
  offset-distance: 0%;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.btn-orbit:hover .btn-orbit__dot {
  opacity: 1;
  animation: btn-orbit-travel 2.4s linear infinite;
}

@keyframes btn-orbit-travel {
  to {
    offset-distance: 100%;
  }
}`,
  prompt:
    "Create a 176x56px dark button (background #09090b, 1px #27272a border, 10px border radius, light gray bold text) labeled \"Orbit Ping\". Add a small 6px glowing cyan dot (background #38bdf8 with a soft glow box-shadow) that is invisible by default. Give it an offset-path following the exact rounded-rectangle outline of the button (a path matching a 176x56 box with 9px corner radius) with offset-distance at 0%. On hover, fade the dot in and animate its offset-distance from 0% to 100% linearly over 2.4 seconds on an infinite loop, so it travels around the button's border like an orbiting satellite for as long as the button is hovered.",
};
