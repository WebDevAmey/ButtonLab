import type { CustomButtonDef } from "../types";

export const magneticFilings: CustomButtonDef = {
  id: "magnetic-filings",
  name: "Magnetic Filings",
  category: "Physics",
  description: "Hair-thin filings along the button's top edge that swivel individually to lean toward the cursor, like iron filings aligning to a magnet.",
  tags: ["magnetic", "field", "filings", "physics"],
  label: "Attract",
  kind: "custom",
  html: `
<div class="magnetic-filings-wrap" onmousemove="
  const filings = this.querySelectorAll('.magnetic-filings-wrap__filing');
  filings.forEach(f => {
    const r = f.getBoundingClientRect();
    const fx = r.left + r.width / 2;
    const fy = r.bottom;
    const dx = event.clientX - fx;
    const dy = event.clientY - fy;
    let angle = Math.atan2(dx, -dy) * (180 / Math.PI);
    angle = Math.max(-70, Math.min(70, angle));
    f.style.transform = 'rotate(' + angle + 'deg)';
  });
" onmouseleave="
  this.querySelectorAll('.magnetic-filings-wrap__filing').forEach(f => f.style.transform = 'rotate(0deg)');
">
  <span class="magnetic-filings-wrap__filing" style="left:8%"></span>
  <span class="magnetic-filings-wrap__filing" style="left:23%"></span>
  <span class="magnetic-filings-wrap__filing" style="left:38%"></span>
  <span class="magnetic-filings-wrap__filing" style="left:53%"></span>
  <span class="magnetic-filings-wrap__filing" style="left:68%"></span>
  <span class="magnetic-filings-wrap__filing" style="left:83%"></span>
  <button class="magnetic-filings-wrap__core">Attract</button>
</div>
  `,
  css: `
.magnetic-filings-wrap {
  position: relative;
  display: inline-block;
  padding-top: 20px;
}

.magnetic-filings-wrap__filing {
  position: absolute;
  top: 0;
  width: 1px;
  height: 16px;
  background: #7d8b98;
  transform-origin: bottom center;
  transform: rotate(0deg);
  transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
  pointer-events: none;
}

.magnetic-filings-wrap__core {
  position: relative;
  padding: 14px 32px;
  background: #12161c;
  border: 1px solid #232a33;
  border-radius: 6px;
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #dfe6ec;
  cursor: pointer;
}
  `,
  prompt: "A row of six 1px hair-thin filings anchored at their base along a button's top edge, each with transform-origin at that anchor point. A mousemove handler on the wrapper computes, per filing, the angle from the filing's own bounding-rect midpoint to the live cursor position via atan2, clamps it to ±70deg, and applies it as a live rotation — so each filing independently leans toward wherever the cursor currently is, like iron filings responding to a moving magnetic point source. On mouseleave all filings relax back to vertical.",
};