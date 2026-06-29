import type { ButtonDef } from "@/registry/buttons";
import { PlaygroundProvider } from "@/lib/playground-context";
import { ComponentHeader } from "./component-header";
import { InteractivePreview } from "./interactive-preview";
import { PlaygroundControls } from "./playground-controls";
import { CodeTabs } from "./code-tabs/code-tabs";
import { RelatedComponents } from "./related-components";

export function ComponentPage({ button }: { button: ButtonDef }) {
  return (
    <PlaygroundProvider accent={button.kind === "parametric" ? button.defaultAccent : "#6366f1"}>
      <div className="flex min-h-screen flex-col bg-background">
        <ComponentHeader button={button} />
        <InteractivePreview button={button} />
        {button.kind === "parametric" && <PlaygroundControls button={button} />}
        <CodeTabs button={button} />
        <RelatedComponents current={button} />
      </div>
    </PlaygroundProvider>
  );
}
