import Link from "next/link";
import type { ButtonDef } from "@/registry/buttons";
import { ButtonPreview } from "@/components/ButtonPreview";
import { defaultControls } from "@/lib/playground-types";

export default function ButtonCard({ button }: { button: ButtonDef }) {
  const controls = defaultControls(button.kind === "parametric" ? button.defaultAccent : "#6366f1");

  return (
    <article className="group flex flex-col items-center justify-center gap-7 rounded-2xl border border-zinc-800 bg-zinc-900/60 px-6 py-12 transition hover:-translate-y-1 hover:border-zinc-700">
      <ButtonPreview button={button} controls={controls} />

      <div className="flex flex-col items-center gap-2">
        <p className="text-sm text-zinc-500">{button.name}</p>
        <Link
          href={`/button/${button.id}`}
          className="rounded-md border border-zinc-700 px-3 py-1.5 text-xs font-medium text-zinc-300 opacity-0 transition group-hover:opacity-100 hover:border-zinc-500 hover:text-zinc-50"
        >
          Get code
        </Link>
      </div>
    </article>
  );
}
