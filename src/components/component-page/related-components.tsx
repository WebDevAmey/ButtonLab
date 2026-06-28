import Link from "next/link";
import { buttons, type ButtonDef } from "@/data/buttons";

export function RelatedComponents({ current }: { current: ButtonDef }) {
  const related = buttons.filter((b) => b.id !== current.id).slice(0, 3);

  return (
    <section className="mx-auto w-full max-w-3xl border-t border-border px-6 py-12">
      <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        More components
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {related.map((button) => (
          <Link
            key={button.id}
            href={`/button/${button.id}`}
            className="group rounded-xl border border-border bg-card/40 p-5 transition-colors hover:border-zinc-600"
          >
            <p className="text-sm font-medium text-foreground transition-colors group-hover:text-foreground">
              {button.name}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">{button.category}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
