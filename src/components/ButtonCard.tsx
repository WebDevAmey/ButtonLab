import type { ButtonDef } from "@/registry/buttons";
import { ButtonPreview } from "@/components/ButtonPreview";
import { CardActions } from "@/components/CardActions";
import { getCode } from "@/lib/codegen";
import { defaultControls } from "@/lib/playground-types";

export default function ButtonCard({ button }: { button: ButtonDef }) {
  const controls = defaultControls(button.kind === "parametric" ? button.defaultAccent : "#6366f1");

  return (
    <article
      className="group/card flex min-h-[320px] flex-col items-center justify-center gap-8 rounded-3xl px-8 py-16"
      style={{
        backgroundColor: "#e0e5ec",
        boxShadow: "8px 8px 16px #b8bec7, -8px -8px 16px #ffffff",
      }}
    >
      <ButtonPreview button={button} controls={controls} />

      <div className="flex flex-col items-center gap-2">
        <p className="text-sm text-muted-foreground">{button.name}</p>
        <CardActions code={getCode(button)} prompt={button.prompt} />
      </div>
    </article>
  );
}
