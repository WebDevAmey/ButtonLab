"use client";

import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

export function Switch({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      className={cn(
        "relative h-5 w-9 shrink-0 cursor-pointer rounded-full bg-secondary transition-colors data-[state=checked]:bg-foreground",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb className="block h-4 w-4 translate-x-0.5 rounded-full bg-zinc-400 transition-transform duration-200 data-[state=checked]:translate-x-[18px] data-[state=checked]:bg-background" />
    </SwitchPrimitive.Root>
  );
}
