import { ButtonGrid } from "@/components/ButtonGrid";
import { Hero } from "@/components/Hero";
import { buttons } from "@/registry/buttons";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col" style={{ backgroundColor: "#f7f5f8" }}>
      <Hero />

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
