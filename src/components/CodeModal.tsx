"use client";

import { useEffect, useState } from "react";
import type { ButtonDef } from "@/data/buttons";

export default function CodeModal({
  button,
  onClose,
}: {
  button: ButtonDef;
  onClose: () => void;
}) {
  const [tab, setTab] = useState<"html" | "css">("html");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const code = tab === "html" ? button.html : button.css;

  async function handleCopy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
          <div>
            <p className="text-sm font-semibold text-zinc-100">{button.name}</p>
            <p className="text-xs text-zinc-500">{button.category}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-md p-1 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-200"
          >
            ✕
          </button>
        </div>

        <div className="flex gap-1 px-5 pt-4">
          {(["html", "css"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium uppercase tracking-wide transition ${
                tab === t
                  ? "bg-zinc-800 text-zinc-50"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <pre className="m-5 max-h-72 overflow-auto rounded-lg bg-black p-4 text-xs leading-relaxed text-zinc-300">
          <code>{code}</code>
        </pre>

        <div className="flex justify-end border-t border-zinc-800 px-5 py-4">
          <button
            onClick={handleCopy}
            className="rounded-md bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
          >
            {copied ? "Copied!" : "Copy code"}
          </button>
        </div>
      </div>
    </div>
  );
}
