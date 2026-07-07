"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useReducedMotion } from "motion/react";
import { buttons } from "@/registry/buttons";

gsap.registerPlugin(ScrambleTextPlugin);

export function Hero() {
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLParagraphElement>(null);
  const reduceMotion = useReducedMotion();
  const categoryCount = new Set(buttons.map((b) => b.category)).size;

  useEffect(() => {
    if (reduceMotion) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (line1Ref.current && line2Ref.current) {
      tl.to(line1Ref.current, {
        scrambleText: {
          text: "A handful of buttons",
          chars: "abcdefghijklmnopqrstuvwxyz",
          revealDelay: 0.12,
          speed: 0.35,
        },
        duration: 1.2,
      }, 0);
      tl.to(line2Ref.current, {
        scrambleText: {
          text: "worth stealing.",
          chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!?",
          revealDelay: 0.35,
          speed: 0.2,
        },
        duration: 2,
      }, 0.12);
    }

    if (subtitleRef.current) {
      tl.from(subtitleRef.current, {
        opacity: 0,
        y: 12,
        duration: 0.5,
      }, "-=0.4");
    }

    if (statsRef.current) {
      tl.from(statsRef.current, {
        opacity: 0,
        y: 8,
        duration: 0.4,
      }, "-=0.2");
    }
  }, [reduceMotion]);

  return (
    <header className="px-6 pt-24 pb-16 text-center">
      <p className="mb-5 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
        ButtonLab
      </p>
      <h1 className="mx-auto max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-7xl">
        <span ref={line1Ref}>A handful of buttons</span>
        <br />
        <span ref={line2Ref} className="font-serif italic font-normal">worth stealing.</span>
      </h1>
      <p ref={subtitleRef} className="mx-auto mt-5 max-w-md text-base text-muted-foreground">
        Hover, press, copy the code — or the prompt. Pure HTML &amp; CSS, no
        JavaScript required.
      </p>
      <p ref={statsRef} className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
        {buttons.length} buttons · {categoryCount} categories
      </p>
    </header>
  );
}
