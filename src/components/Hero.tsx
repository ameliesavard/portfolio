import { useEffect, useState } from "react";

const TYPEWRITER_TAGLINE = "Ce qui ne se dit pas,\nse crée.";

const TypewriterTagline = () => {
  const [visibleCount, setVisibleCount] = useState(() => {
    if (typeof window === "undefined") return 0;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? TYPEWRITER_TAGLINE.length : 0;
  });

  useEffect(() => {
    if (visibleCount >= TYPEWRITER_TAGLINE.length) return;
    const nextChar = TYPEWRITER_TAGLINE[visibleCount];
    const delay =
      nextChar === "\n" ? 620 : nextChar === "," ? 380 : nextChar === " " ? 105 : 72;
    const id = window.setTimeout(() => setVisibleCount((c) => c + 1), delay);
    return () => clearTimeout(id);
  }, [visibleCount]);

  const slice = TYPEWRITER_TAGLINE.slice(0, visibleCount);
  const lines = slice.split("\n");
  const done = visibleCount >= TYPEWRITER_TAGLINE.length;

  return (
    <p
      className="text-muted-foreground text-lg md:text-xl font-body max-w-md min-h-[3.5rem] md:min-h-[4rem]"
      aria-label={TYPEWRITER_TAGLINE.replace("\n", " ")}
    >
      {lines.map((line, i) => (
        <span key={i}>
          {i > 0 && <br />}
          {line}
        </span>
      ))}
      {!done && (
        <span
          className="inline-block w-px h-[1.15em] bg-muted-foreground align-[-0.12em] ml-0.5 animate-type-cursor"
          aria-hidden
        />
      )}
    </p>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-end px-6 md:px-16 pb-16 pt-32 relative">
      {/* Top nav */}
      <nav className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 md:px-16 py-8">
        <a
          href="/"
          className="font-heading text-sm tracking-widest uppercase text-foreground hover:text-accent transition-colors duration-300"
        >
          Amélie Savard
        </a>
        <div className="flex flex-wrap justify-end gap-6 md:gap-8 text-xs tracking-widest uppercase text-muted-foreground">
          <a href="/#apropos" className="hover:text-foreground transition-colors duration-300">
            À propos
          </a>
          <a href="/#projets" className="hover:text-foreground transition-colors duration-300">
            Projets
          </a>
          <a href="/#travaux" className="hover:text-foreground transition-colors duration-300">
            Idées
          </a>
          <a href="/#contact" className="hover:text-foreground transition-colors duration-300">
            Contact
          </a>
        </div>
      </nav>

      {/* Main headline */}
      <div className="max-w-6xl">
        <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight text-foreground animate-fade-up">
          Je ne fais pas
          <br />
          du contenu.
          <br />
          <span className="text-stroke">Je crée des idées.</span>
        </h1>

        <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8 animate-fade-up-delay-1">
          <div>
            <p className="text-muted-foreground text-sm tracking-widest uppercase">
              Conceptrice-rédactrice / Directrice artistique
              <span className="text-accent ml-2">junior</span>
            </p>
          </div>
          <TypewriterTagline />
        </div>
      </div>

    </section>
  );
};

export default Hero;
