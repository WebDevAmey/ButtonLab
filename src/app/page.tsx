import { ButtonGrid } from "@/components/ButtonGrid";
import { buttons } from "@/registry/buttons";

export default function Home() {
  const categoryCount = new Set(buttons.map((b) => b.category)).size;

  return (
    <div className="flex flex-1 flex-col" style={{ backgroundColor: "#f7f5f8" }}>
      <header className="px-6 pt-24 pb-16 text-center">
        <p className="mb-5 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
          ButtonLab
        </p>
        <h1 className="mx-auto max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-7xl">
          A handful of buttons
          <br />
          <span className="font-serif italic font-normal">worth stealing.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base text-muted-foreground">
          Hover, press, copy the code — or the prompt. Pure HTML &amp; CSS, no JavaScript required.
        </p>
        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
          {buttons.length} buttons · {categoryCount} categories
        </p>
      </header>

      <ButtonGrid buttons={buttons} />

      <footer className="border-t border-border px-6 py-8 text-center text-xs text-muted-foreground">
        Built with Next.js &amp; Tailwind CSS · inspired by{" "}
        <a
          href="https://cssbuttons.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground"
        >
          cssbuttons.io
        </a>
      </footer>
    </div>
  );
}
