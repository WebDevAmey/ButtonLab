"use client";

import { useState } from "react";
import { Check, Copy, WandSparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function CardActions({ code, prompt }: { code: string; prompt: string }) {
  return (
    <div className="flex items-center gap-2">
      <CopyAction icon={Copy} label="Copy code" text={code} />
      <CopyAction icon={WandSparkles} label="Copy prompt" text={prompt} />
    </div>
  );
}

function CopyAction({
  icon: Icon,
  label,
  text,
}: {
  icon: typeof Copy;
  label: string;
  text: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "inline-flex h-9 items-center gap-1.5 rounded-md border border-border/60 bg-muted/50 px-3 text-xs font-medium text-muted-foreground",
        "transition-colors duration-200 hover:border-foreground/40 hover:bg-muted hover:text-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-card",
        copied && "border-emerald-500/50 text-emerald-600 dark:text-emerald-400"
      )}
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Icon className="h-3.5 w-3.5" />}
      {copied ? "Copied" : label}
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? `${label} copied to clipboard` : ""}
      </span>
    </button>
  );
}
