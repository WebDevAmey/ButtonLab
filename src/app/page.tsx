import ButtonCard from "@/components/ButtonCard";
import { buttons } from "@/data/buttons";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-950">
      <header className="px-6 pt-24 pb-16 text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          ButtonLab
        </p>
        <h1 className="mx-auto max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-5xl">
          A handful of buttons
          <br />
          worth stealing.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-zinc-400">
          Hover, press, copy the code. Pure HTML &amp; CSS, no JavaScript required.
        </p>
      </header>

      <main className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 px-6 pb-24 sm:grid-cols-2 lg:grid-cols-3">
        {buttons.map((button) => (
          <ButtonCard key={button.id} button={button} />
        ))}
      </main>

      <footer className="border-t border-zinc-900 px-6 py-8 text-center text-xs text-zinc-600">
        Built with Next.js &amp; Tailwind CSS · inspired by{" "}
        <a
          href="https://cssbuttons.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-zinc-200"
        >
          cssbuttons.io
        </a>
      </footer>
    </div>
  );
}
