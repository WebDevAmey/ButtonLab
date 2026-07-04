"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Search, X } from "lucide-react";
import type { ButtonDef } from "@/registry/buttons";
import ButtonCard from "@/components/ButtonCard";
import { Magnetic } from "@/components/Magnetic";
import { cn } from "@/lib/utils";

export function ButtonGrid({ buttons }: { buttons: ButtonDef[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const reduceMotion = useReducedMotion();

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(buttons.map((b) => b.category))).sort()],
    [buttons]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return buttons.filter((b) => {
      const matchesCategory = category === "All" || b.category === category;
      const matchesQuery =
        !q ||
        b.name.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q) ||
        b.tags.some((tag) => tag.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [buttons, query, category]);

  return (
    <div>
      <div className="mx-auto mb-10 flex w-full max-w-6xl flex-col items-center gap-5 px-6">
        <label className="relative w-full max-w-sm">
          <span className="sr-only">Search buttons</span>
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, category, or tag…"
            className="w-full rounded-full border border-border bg-card py-2.5 pl-10 pr-9 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-foreground/40 focus-visible:ring-2 focus-visible:ring-foreground/20"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </label>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <Magnetic key={cat} strength={10}>
              <button
                type="button"
                onClick={() => setCategory(cat)}
                aria-pressed={category === cat}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30",
                  category === cat
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                )}
              >
                {cat}
              </button>
            </Magnetic>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mx-auto max-w-6xl px-6 pb-24 text-center text-sm text-muted-foreground">
          No buttons match “{query}”. Try a different search or category.
        </p>
      ) : (
        <main className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-6 pb-24 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((button, i) => (
            <motion.div
              key={button.id}
              initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: (i % 6) * 0.04, ease: "easeOut" }}
            >
              <ButtonCard button={button} />
            </motion.div>
          ))}
        </main>
      )}
    </div>
  );
}
