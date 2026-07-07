import { ButtonGrid } from "@/components/ButtonGrid";
import { Hero } from "@/components/Hero";
import { serializableButtons } from "@/registry/buttons";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <Hero />

      <ButtonGrid buttons={serializableButtons} />

      <footer className="border-t border-border px-6 py-12 text-center">
        <div className="mx-auto flex max-w-lg flex-col items-center gap-2 text-xs text-muted-foreground">
          <span>Built with Next.js &amp; Tailwind CSS &middot; inspired by{" "}
            <a
              href="https://cssbuttons.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              cssbuttons.io
            </a>
          </span>
          <span className="text-muted-foreground/40">&mdash;</span>
        </div>

        <p className="mx-auto mb-6 mt-6 max-w-lg text-balance text-base italic leading-relaxed text-muted-foreground/85">
          &ldquo;I built this because I kept misplacing my favorite button styles.
          Hope it saves you a few tabs.&rdquo;
          <span className="block mt-1 not-italic text-sm text-muted-foreground/60">&mdash; Amey</span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com/WebDevAmey/ButtonLab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-muted-foreground shadow-xs transition-colors hover:border-foreground/40 hover:text-foreground"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            If this helped you, drop a star
          </a>
        </div>

        <p className="mx-auto mt-6 max-w-md text-xs text-muted-foreground/50">
          Free to contribute &mdash; open a PR, suggest a style, or share your own creations.
        </p>
      </footer>
    </div>
  );
}
