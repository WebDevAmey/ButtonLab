"use client";

import React from "react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ShimmerMaskComponent } from "@/registry/buttons/shimmer-mask-component";

export const componentMap: Record<string, React.ComponentType<any>> = {
  "rainbow-button": RainbowButton,
  "shimmer-mask": ShimmerMaskComponent,
};
