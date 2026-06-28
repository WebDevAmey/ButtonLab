"use client";

import { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { Download, FileCode2, Maximize2 } from "lucide-react";
import { CopyButton } from "./copy-button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export function CodeBlock({
  code,
  language,
  label,
  filename,
}: {
  code: string;
  language: string;
  label: string;
  filename: string;
}) {
  const [expanded, setExpanded] = useState(false);

  function handleDownload() {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-border bg-[#0b0b0d] shadow-lg">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-[#0b0b0d]/90 px-4 py-2.5 backdrop-blur">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <FileCode2 className="h-3.5 w-3.5" />
            <span className="font-medium text-foreground">{label}</span>
            <span className="text-muted-foreground/50">•</span>
            <span>{filename}</span>
          </div>
          <div className="flex items-center gap-1">
            <CopyButton text={code} />
            <button
              onClick={handleDownload}
              aria-label="Download file"
              className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <Download className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => setExpanded(true)}
              aria-label="Expand code"
              className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <Maximize2 className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="max-h-80 overflow-auto">
          <Highlighted code={code} language={language} />
        </div>
      </div>

      <Dialog open={expanded} onOpenChange={setExpanded}>
        <DialogContent className="max-w-3xl">
          <div className="flex items-center justify-between border-b border-border px-5 py-3">
            <span className="text-sm font-medium text-foreground">{filename}</span>
            <CopyButton text={code} />
          </div>
          <div className="max-h-[70vh] overflow-auto p-1">
            <Highlighted code={code} language={language} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

function Highlighted({ code, language }: { code: string; language: string }) {
  return (
    <Highlight code={code} language={language} theme={themes.vsDark}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={cn(className, "px-4 py-4 text-[13px] leading-relaxed")}
          style={{ ...style, background: "transparent" }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })} className="table-row">
              <span className="table-cell select-none pr-4 text-right text-muted-foreground/40">
                {i + 1}
              </span>
              <span className="table-cell font-mono">
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
