import ButtonCard from "@/components/ButtonCard";
import { buttons } from "@/registry/buttons";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <header className="px-6 pt-24 pb-16 text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          ButtonLab
        </p>
        <h1 className="mx-auto max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
          A handful of buttons
          <br />
          worth stealing.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground">
          Hover, press, copy the code. Pure HTML &amp; CSS, no JavaScript required.
        </p>
      </header>

      <main className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-6 pb-24 sm:grid-cols-2 lg:grid-cols-3">
        {buttons.map((button) => (
          <ButtonCard key={button.id} button={button} />
        ))}
      </main>

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
