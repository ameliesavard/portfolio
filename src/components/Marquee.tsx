const Marquee = () => {
  const words = "Concept — Insight — Direction artistique — Storytelling — Culture — Concept — Insight — Direction artistique — Storytelling — Culture — ";

  return (
    <div className="border-y border-border/40 py-4 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        <span className="font-heading text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground">
          {words}{words}
        </span>
      </div>
    </div>
  );
};

export default Marquee;
