"use client";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export function ThemeToggle() {
  return (
    <div className="fixed right-6 top-6 z-40">
      <AnimatedThemeToggler
        variant="diamond"
        duration={500}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-colors hover:border-foreground/40 hover:text-foreground"
      />
    </div>
  );
}
