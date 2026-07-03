import type { ButtonDef } from "@/registry/buttons";
import { ButtonPreview } from "@/components/ButtonPreview";
import { CardActions } from "@/components/CardActions";
import { getCode } from "@/lib/codegen";
import { defaultControls } from "@/lib/playground-types";

export default function ButtonCard({ button }: { button: ButtonDef }) {
  const controls = defaultControls(button.kind === "parametric" ? button.defaultAccent : "#6366f1");

  return (
    <article
      className="relative flex min-h-[320px] flex-col overflow-hidden rounded-3xl"
      style={{
        backgroundColor: "#e0e5ec",
        boxShadow: "8px 8px 16px #b8bec7, -8px -8px 16px #ffffff",
      }}
    >
      <span className="absolute left-6 top-5 text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-500">
        {button.category}
      </span>

      <div className="flex flex-1 items-center justify-center px-8 pt-14 pb-6">
        <ButtonPreview button={button} controls={controls} />
      </div>

      <div className="flex flex-col items-center gap-3 border-t border-black/5 px-6 py-5">
        <h2 className="text-sm font-medium text-foreground">{button.name}</h2>
        <CardActions code={getCode(button)} prompt={button.prompt} />
      </div>
    </article>
  );
}
