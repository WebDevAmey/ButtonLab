import type { ButtonDef } from "@/data/buttons";
import { PlaygroundProvider } from "@/lib/playground-context";
import { ComponentHeader } from "./component-header";
import { InteractivePreview } from "./interactive-preview";
import { PlaygroundControls } from "./playground-controls";
import { CodeTabs } from "./code-tabs/code-tabs";
import { RelatedComponents } from "./related-components";

export function ComponentPage({ button }: { button: ButtonDef }) {
  return (
    <PlaygroundProvider accent={button.defaultAccent}>
      <div className="flex min-h-screen flex-col bg-background">
        <ComponentHeader button={button} />
        <InteractivePreview button={button} />
        <PlaygroundControls button={button} />
        <CodeTabs button={button} />
        <RelatedComponents current={button} />
      </div>
    </PlaygroundProvider>
  );
}
