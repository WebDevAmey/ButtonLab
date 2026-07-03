"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function CardActions({ code, prompt }: { code: string; prompt: string }) {
  return (
    <div className="flex items-center gap-2 opacity-0 transition group-hover/card:opacity-100">
      <CopyAction label="Copy code" text={code} />
      <CopyAction label="Copy prompt" text={prompt} />
    </div>
  );
}

function CopyAction({ label, text }: { label: string; text: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition hover:border-foreground/40 hover:text-foreground",
        copied && "border-foreground/40 text-foreground"
      )}
    >
      {copied ? "Copied" : label}
    </button>
  );
}
