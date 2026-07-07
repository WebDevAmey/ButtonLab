import type { CustomButtonDef } from "../types";

export const marionetteThread: CustomButtonDef = {
  id: "marionette-thread",
  name: "Marionette Thread",
  category: "Mechanical",
  description: "A button suspended by a thread that goes taut and lifts it on hover, then goes slack and drops it on release.",
  tags: ["thread", "puppet", "suspend", "mechanical"],
  label: "Pull",
  kind: "custom",
  html: `
<div class="marionette-thread-wrap">
  <span class="marionette-thread-wrap__thread"></span>
  <button class="marionette-thread-btn">Pull</button>
</div>
  `,
  css: `
.marionette-thread-wrap {
  position: relative;
  display: inline-block;
  padding-top: 24px;
}

.marionette-thread-wrap__thread {
  position: absolute;
  top: 0;
  left: 50%;
  width: 1px;
  height: 20px;
  background: #8a8578;
  transform-origin: top center;
  transform: translateX(-50%) scaleY(0.7) rotate(2deg);
  transition: transform 0.4s cubic-bezier(0.3, 0, 0.2, 1);
}

.marionette-thread-wrap:hover .marionette-thread-wrap__thread {
  transform: translateX(-50%) scaleY(1) rotate(0deg);
}

.marionette-thread-btn {
  position: relative;
  padding: 14px 32px;
  background: #efe9dc;
  border: 1px solid #c9c1ac;
  border-radius: 4px;
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #2b2b2b;
  cursor: pointer;
  transform: translateY(4px);
  transition: transform 0.4s cubic-bezier(0.3, 0, 0.2, 1);
}

.marionette-thread-wrap:hover .marionette-thread-btn {
  transform: translateY(-6px);
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
  `,
  prompt: "A thin 1px thread above a button, slightly slack (scaleY less than 1, tiny rotation) at rest. On hover, the thread straightens to full taut length while the button rises with an elastic overshoot, as if pulled upward by the thread; on hover-exit both revert together back to the slack, resting position.",
};