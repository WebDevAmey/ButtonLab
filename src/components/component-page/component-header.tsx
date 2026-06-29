import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { ButtonDef } from "@/registry/buttons";

export function ComponentHeader({ button }: { button: ButtonDef }) {
  return (
    <header className="mx-auto w-full max-w-3xl px-6 pt-16">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        All components
      </Link>

      <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {button.category}
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {button.name} Button
      </h1>
      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
        {button.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {button.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </header>
  );
}
