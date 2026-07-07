"use client";

import { motion, type TargetAndTransition } from "motion/react";
import type { ButtonDef } from "@/registry/buttons";
import { computeStyleSet } from "@/lib/codegen";
import { Controls } from "@/lib/playground-types";
import { useEffect, useRef } from "react";

/**
 * Renders a single button from the registry, regardless of `kind`.
 * Parametric buttons are driven by `computeStyleSet` + default controls.
 * Custom buttons render their own hand-written HTML/CSS verbatim.
 */
export function ButtonPreview({
  button,
  controls,
}: {
  button: ButtonDef;
  controls: Controls;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (button.kind === "custom" && button.js && containerRef.current) {
      const script = new Function(button.js);
      script();
    }
  }, [button]);

  if (button.kind === "component") {
    const Component = button.Component;
    return <Component />;
  }

  if (button.kind === "custom") {
    return (
      <div ref={containerRef}>
        <style dangerouslySetInnerHTML={{ __html: button.css }} />
        <span dangerouslySetInnerHTML={{ __html: button.html }} />
      </div>
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
