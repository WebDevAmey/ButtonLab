"use client";

import { useState } from "react";
import { motion, type TargetAndTransition } from "motion/react";
import { Maximize2, Moon, RotateCcw, Sun } from "lucide-react";
import type { ButtonDef } from "@/data/buttons";
import { usePlayground } from "@/lib/playground-context";
import { computeStyleSet } from "@/lib/codegen";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const backgrounds: Record<string, string> = {
  grid: "bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px]",
  dots: "bg-[radial-gradient(circle,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:20px_20px]",
  solid: "",
  gradient: "bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.18),transparent_55%)]",
};

function PreviewSurface({ button, expanded = false }: { button: ButtonDef; expanded?: boolean }) {
  const { controls, preview, background } = usePlayground();
  const { base, hover, active } = computeStyleSet(button, controls);

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-border transition-colors",
        expanded ? "h-[70vh]" : "h-[360px]",
        preview === "dark" ? "bg-[#050506]" : "bg-zinc-100",
        preview === "dark" && backgrounds[background]
      )}
    >
      <motion.button
        style={base as React.CSSProperties}
        whileHover={hover as TargetAndTransition}
        whileTap={active as TargetAndTransition}
        transition={{ duration: controls.speed / 1000 }}
      >
        {button.label}
      </motion.button>
    </div>
  );
}

export function InteractivePreview({ button }: { button: ButtonDef }) {
  const { preview, setPreview, background, setBackground, reset } = usePlayground();
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <TooltipProviderWrapper>
      <section className="mx-auto w-full max-w-3xl px-6 pt-10">
        <PreviewSurface button={button} />

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <ToggleGroup
            type="single"
            value={background}
            onValueChange={(v) => v && setBackground(v)}
          >
            {Object.keys(backgrounds).map((bg) => (
              <ToggleGroupItem key={bg} value={bg}>
                {bg}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>

          <div className="flex items-center gap-2">
            <IconAction
              label={preview === "dark" ? "Switch to light canvas" : "Switch to dark canvas"}
              onClick={() => setPreview(preview === "dark" ? "light" : "dark")}
            >
              {preview === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </IconAction>
            <IconAction label="Reset playground" onClick={reset}>
              <RotateCcw className="h-4 w-4" />
            </IconAction>
            <IconAction label="Fullscreen preview" onClick={() => setFullscreen(true)}>
              <Maximize2 className="h-4 w-4" />
            </IconAction>
          </div>
        </div>
      </section>

      <Dialog open={fullscreen} onOpenChange={setFullscreen}>
        <DialogContent className="max-w-5xl p-6">
          <PreviewSurface button={button} expanded />
        </DialogContent>
      </Dialog>
    </TooltipProviderWrapper>
  );
}

function IconAction({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon" onClick={onClick} aria-label={label}>
          {children}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  );
}

function TooltipProviderWrapper({ children }: { children: React.ReactNode }) {
  return <TooltipProvider delayDuration={150}>{children}</TooltipProvider>;
}
