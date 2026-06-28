"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { Controls, defaultControls } from "@/lib/playground-types";

type PlaygroundContextValue = {
  controls: Controls;
  setControls: (next: Partial<Controls>) => void;
  reset: () => void;
  preview: "light" | "dark";
  setPreview: (mode: "light" | "dark") => void;
  background: string;
  setBackground: (bg: string) => void;
};

const PlaygroundContext = createContext<PlaygroundContextValue | null>(null);

export function PlaygroundProvider({
  accent,
  children,
}: {
  accent: string;
  children: React.ReactNode;
}) {
  const initial = useMemo(() => defaultControls(accent), [accent]);
  const [controls, setControlsState] = useState<Controls>(initial);
  const [preview, setPreview] = useState<"light" | "dark">("dark");
  const [background, setBackground] = useState("grid");

  const setControls = (next: Partial<Controls>) =>
    setControlsState((prev) => ({ ...prev, ...next }));

  const reset = () => {
    setControlsState(initial);
    setPreview("dark");
    setBackground("grid");
  };

  return (
    <PlaygroundContext.Provider
      value={{ controls, setControls, reset, preview, setPreview, background, setBackground }}
    >
      {children}
    </PlaygroundContext.Provider>
  );
}

export function usePlayground() {
  const ctx = useContext(PlaygroundContext);
  if (!ctx) throw new Error("usePlayground must be used within PlaygroundProvider");
  return ctx;
}
