import type { CustomButtonDef } from "../types";

export const shardBurst: CustomButtonDef = {
  id: "shard-burst",
  name: "Shard Burst",
  category: "Impossible",
  description: "A button that fractures into four shards on click, flings them outward with a stagger, snaps them back together, and flashes the label at the moment of reconnection.",
  tags: ["shatter", "shard", "reform", "impossible"],
  label: "Break",
  kind: "custom",
  html: `
<button class="shard-burst-btn" onclick="
  this.classList.remove('is-bursting');
  void this.offsetWidth;
  this.classList.add('is-bursting');
">
  <span class="shard-burst-btn__backing"></span>
  <span class="shard-burst-btn__shard shard-burst-btn__shard--a"></span>
  <span class="shard-burst-btn__shard shard-burst-btn__shard--b"></span>
  <span class="shard-burst-btn__shard shard-burst-btn__shard--c"></span>
  <span class="shard-burst-btn__shard shard-burst-btn__shard--d"></span>
  <span class="shard-burst-btn__label">Break</span>
</button>
  `,
  css: `
.shard-burst-btn {
  position: relative;
  overflow: visible;
  padding: 16px 36px;
  background: transparent;
  border: none;
  border-radius: 6px;
  font-family: system-ui, sans-serif;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
}

.shard-burst-btn__backing {
  position: absolute;
  inset: 0;
  z-index: 0;
  background: #dd5b3a;
  border-radius: 6px;
}

.shard-burst-btn__shard {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: #f2704c;
  border-radius: 6px;
}

.shard-burst-btn__shard--a { clip-path: polygon(0 0, 50% 0, 50% 50%, 0 50%); }
.shard-burst-btn__shard--b { clip-path: polygon(50% 0, 100% 0, 100% 50%, 50% 50%); }
.shard-burst-btn__shard--c { clip-path: polygon(0 50%, 50% 50%, 50% 100%, 0 100%); }
.shard-burst-btn__shard--d { clip-path: polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%); }

.shard-burst-btn.is-bursting .shard-burst-btn__shard--a { animation: shard-burst-a 0.6s cubic-bezier(0.34, 1.56, 0.64, 1); }
.shard-burst-btn.is-bursting .shard-burst-btn__shard--b { animation: shard-burst-b 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.02s; }
.shard-burst-btn.is-bursting .shard-burst-btn__shard--c { animation: shard-burst-c 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.04s; }
.shard-burst-btn.is-bursting .shard-burst-btn__shard--d { animation: shard-burst-d 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.06s; }

@keyframes shard-burst-a {
  0% { transform: translate(0,0) rotate(0deg); }
  35% { transform: translate(-8px,-6px) rotate(-8deg); }
  100% { transform: translate(0,0) rotate(0deg); }
}
@keyframes shard-burst-b {
  0% { transform: translate(0,0) rotate(0deg); }
  35% { transform: translate(8px,-6px) rotate(8deg); }
  100% { transform: translate(0,0) rotate(0deg); }
}
@keyframes shard-burst-c {
  0% { transform: translate(0,0) rotate(0deg); }
  35% { transform: translate(-8px,6px) rotate(8deg); }
  100% { transform: translate(0,0) rotate(0deg); }
}
@keyframes shard-burst-d {
  0% { transform: translate(0,0) rotate(0deg); }
  35% { transform: translate(8px,6px) rotate(-8deg); }
  100% { transform: translate(0,0) rotate(0deg); }
}

.shard-burst-btn__label {
  position: relative;
  z-index: 2;
  color: #fff6f0;
}

.shard-burst-btn.is-bursting .shard-burst-btn__label {
  animation: shard-burst-flash 0.7s ease-out;
}

@keyframes shard-burst-flash {
  0%, 55% { opacity: 0.55; }
  65% { opacity: 1; }
  100% { opacity: 1; }
}
  `,
  prompt: "A button face split into four clip-path quadrant shards over a slightly darker backing layer. On every click (via remove/reflow/add class toggle), each shard runs its own keyframe animation translating and rotating outward then back to rest, staggered by ~20ms per shard so they don't move as one rigid block, exposing thin gaps of the backing color mid-burst. The label's opacity dips then flashes back to full brightness timed to land right as the shards fully reconnect, acting as a reform confirmation rather than a decorative pulse.",
};