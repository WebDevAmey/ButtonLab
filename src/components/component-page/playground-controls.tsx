"use client";

import type { ParametricButtonDef } from "@/registry/buttons";
import { usePlayground } from "@/lib/playground-context";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Separator } from "@/components/ui/separator";

const swatches = ["#6366f1", "#ec4899", "#00e0b0", "#f59e0b", "#22c55e", "#ef4444", "#ffffff"];

export function PlaygroundControls({ button }: { button: ParametricButtonDef }) {
  const { controls, setControls } = usePlayground();

  return (
    <section className="mx-auto w-full max-w-3xl px-6 pt-10">
      <div className="rounded-2xl border border-border bg-card/60 p-6">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Playground
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field label="Radius" value={`${controls.radius}px`}>
            <Slider
              min={0}
              max={28}
              step={1}
              value={[controls.radius]}
              onValueChange={([v]) => setControls({ radius: v })}
            />
          </Field>

          <Field label="Size">
            <ToggleGroup
              type="single"
              value={controls.size}
              onValueChange={(v) => v && setControls({ size: v as typeof controls.size })}
            >
              <ToggleGroupItem value="sm">Small</ToggleGroupItem>
              <ToggleGroupItem value="md">Medium</ToggleGroupItem>
              <ToggleGroupItem value="lg">Large</ToggleGroupItem>
            </ToggleGroup>
          </Field>

          <Field label="Animation speed" value={`${controls.speed}ms`}>
            <Slider
              min={100}
              max={500}
              step={20}
              value={[controls.speed]}
              onValueChange={([v]) => setControls({ speed: v })}
            />
          </Field>

          <Field
            label="Blur"
            value={`${controls.blur}px`}
            disabled={!button.supportsBlur}
          >
            <Slider
              min={0}
              max={20}
              step={1}
              value={[controls.blur]}
              disabled={!button.supportsBlur}
              onValueChange={([v]) => setControls({ blur: v })}
            />
          </Field>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <Field label="Primary color">
            <div className="flex items-center gap-2">
              {swatches.map((color) => (
                <button
                  key={color}
                  aria-label={`Set accent to ${color}`}
                  onClick={() => setControls({ accent: color })}
                  className="h-6 w-6 rounded-full border border-border transition-transform hover:scale-110"
                  style={{
                    background: color,
                    outline: controls.accent === color ? "2px solid var(--ring)" : "none",
                    outlineOffset: 2,
                  }}
                />
              ))}
              <input
                type="color"
                value={controls.accent}
                onChange={(e) => setControls({ accent: e.target.value })}
                className="h-6 w-6 cursor-pointer rounded-full border border-border bg-transparent p-0"
                aria-label="Custom accent color"
              />
            </div>
          </Field>

          <div className="flex gap-8">
            <ToggleField
              label="Shadow"
              checked={controls.shadow}
              onCheckedChange={(v) => setControls({ shadow: v })}
            />
            <ToggleField
              label="Glow"
              checked={controls.glow}
              onCheckedChange={(v) => setControls({ glow: v })}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  disabled,
  children,
}: {
  label: string;
  value?: string;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={disabled ? "opacity-40" : undefined}>
      <div className="mb-2.5 flex items-center justify-between">
        <span className="text-sm text-foreground">{label}</span>
        {value && <span className="text-xs text-muted-foreground">{value}</span>}
      </div>
      {children}
    </div>
  );
}

function ToggleField({
  label,
  checked,
  onCheckedChange,
}: {
  label: string;
  checked: boolean;
  onCheckedChange: (v: boolean) => void;
}) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer">
      <Switch checked={checked} onCheckedChange={onCheckedChange} />
      <span className="text-sm text-foreground">{label}</span>
    </label>
  );
}
