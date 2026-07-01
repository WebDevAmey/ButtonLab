"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, Heart, Share2 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CodeBlock } from "./code-block";
import type { ButtonDef } from "@/registry/buttons";
import { usePlayground } from "@/lib/playground-context";
import { buildCode, variantsFor, CodeVariant } from "@/lib/codegen";
import { cn } from "@/lib/utils";

const allTabs: { id: CodeVariant; label: string; language: string; ext: string }[] = [
  { id: "css", label: "CSS", language: "css", ext: "css" },
  { id: "tailwind", label: "Tailwind", language: "markup", ext: "html" },
];

async function openExternalWithCode(url: string, code: string) {
  try {
    await navigator.clipboard.writeText(code);
  } finally {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

export function CodeTabs({ button }: { button: ButtonDef }) {
  const { controls } = usePlayground();
  const tabs = allTabs.filter((t) => variantsFor(button).includes(t.id));
  const [active, setActive] = useState<CodeVariant>("css");
  const [favourited, setFavourited] = useState(false);
  const [shared, setShared] = useState(false);

  const code = buildCode(button, controls, active);

  async function handleShare() {
    await navigator.clipboard.writeText(window.location.href);
    setShared(true);
    setTimeout(() => setShared(false), 1600);
  }

  return (
    <section className="mx-auto w-full max-w-3xl px-6 pb-12 pt-10">
      <Tabs value={active} onValueChange={(v) => setActive(v as CodeVariant)}>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <TabsList>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id} className="relative z-10">
                {active === tab.id && (
                  <motion.span
                    layoutId="code-tab-pill"
                    className="absolute inset-0 -z-10 rounded-md bg-accent"
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  />
                )}
                {tab.label}
              </TabsTrigger>
            ))}
            <span
              className="cursor-not-allowed rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground/40"
              title="Vue support is coming soon"
            >
              Vue
            </span>
          </TabsList>

          <div className="flex items-center gap-1">
            <IconButton label="Favourite" active={favourited} onClick={() => setFavourited((v) => !v)}>
              <Heart className={cn("h-3.5 w-3.5", favourited && "fill-current")} />
            </IconButton>
            <IconButton label={shared ? "Link copied" : "Share"} onClick={handleShare}>
              <Share2 className="h-3.5 w-3.5" />
            </IconButton>
            <IconButton
              label="View on GitHub"
              onClick={() => window.open("https://github.com/WebDevAmey/ButtonLab", "_blank", "noopener,noreferrer")}
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </IconButton>
          </div>
        </div>

        {tabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id} forceMount className={active === tab.id ? "block" : "hidden"}>
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <CodeBlock
                code={code}
                language={tab.language}
                label={tab.label}
                filename={`${button.id}-button.${tab.ext}`}
              />
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-4 flex flex-wrap gap-2">
        <ExternalAction
          label="Open in CodeSandbox"
          onClick={() => openExternalWithCode("https://codesandbox.io/s/", code)}
        />
        <ExternalAction
          label="Open in StackBlitz"
          onClick={() => openExternalWithCode("https://stackblitz.com/", code)}
        />
      </div>
    </section>
  );
}

function IconButton({
  label,
  active,
  onClick,
  children,
}: {
  label: string;
  active?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
        active && "text-rose-400"
      )}
    >
      {children}
    </button>
  );
}

function ExternalAction({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-zinc-600 hover:text-foreground"
    >
      {label}
    </button>
  );
}
