"use client";

import { motion, type TargetAndTransition } from "motion/react";
import type { ButtonDef } from "@/registry/buttons";
import { computeStyleSet } from "@/lib/codegen";
import { Controls } from "@/lib/playground-types";

/**
 * Renders a single button from the registry, regardless of `kind`.
 * Parametric buttons are driven by `computeStyleSet` + the given
 * `controls`. Custom buttons render their own hand-written HTML/CSS
 * verbatim — `controls` is ignored for those.
 */
export function ButtonPreview({
  button,
  controls,
}: {
  button: ButtonDef;
  controls: Controls;
}) {
  if (button.kind === "custom") {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: button.css }} />
        <span dangerouslySetInnerHTML={{ __html: button.html }} />
      </>
    );
  }

  const { base, hover, active } = computeStyleSet(button, controls);
  return (
    <motion.button
      style={base as React.CSSProperties}
      whileHover={hover as TargetAndTransition}
      whileTap={active as TargetAndTransition}
      transition={{ duration: controls.speed / 1000 }}
    >
      {button.label}
    </motion.button>
  );
}
