"use client";

import { useState } from "react";
import type { ButtonDef } from "@/data/buttons";
import CodeModal from "./CodeModal";

export default function ButtonCard({ button }: { button: ButtonDef }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className="group flex flex-col items-center justify-center gap-7 rounded-2xl border border-zinc-800 bg-zinc-900/60 px-6 py-12 transition hover:-translate-y-1 hover:border-zinc-700">
        <button className={button.className}>{button.label}</button>

        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-zinc-500">{button.name}</p>
          <button
            onClick={() => setOpen(true)}
            className="rounded-md border border-zinc-700 px-3 py-1.5 text-xs font-medium text-zinc-300 opacity-0 transition group-hover:opacity-100 hover:border-zinc-500 hover:text-zinc-50"
          >
            Get code
          </button>
        </div>
      </article>

      {open && <CodeModal button={button} onClose={() => setOpen(false)} />}
    </>
  );
}
