"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { buttons } from "@/registry/buttons";

gsap.registerPlugin(SplitText);

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const categoryCount = new Set(buttons.map((b) => b.category)).size;

  useEffect(() => {
    if (!headingRef.current) return;

    const split = SplitText.create(headingRef.current, {
      type: "lines, words",
      autoSplit: true,
    });

    gsap.from(split.words, {
      duration: 0.8,
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
      ease: "power3.out",
    });

    return () => {
      split.revert();
    };
  }, []);

  return (
    <header className="px-6 pt-24 pb-16 text-center">
      <p className="mb-5 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
        ButtonLab
      </p>
      <h1
        ref={headingRef}
        className="mx-auto max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-7xl"
      >
        A handful of buttons
        <br />
        <span className="font-serif italic font-normal">worth stealing.</span>
      </h1>
      <p className="mx-auto mt-5 max-w-md text-base text-muted-foreground">
        Hover, press, copy the code — or the prompt. Pure HTML &amp; CSS, no
        JavaScript required.
      </p>
      <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
        {buttons.length} buttons · {categoryCount} categories
      </p>
    </header>
  );
}
