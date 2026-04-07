const About = () => {
  return (
    <section id="apropos" className="px-6 md:px-16 py-32">
      <span className="text-xs tracking-widest uppercase text-muted-foreground block mb-8 md:mb-10">
        À propos
      </span>
      <div className="grid md:grid-cols-12 gap-10 md:gap-14 lg:gap-16 items-start">
        <div className="md:col-span-5 lg:col-span-4">
          <img
            src="/about-portrait.png"
            alt="Amélie Savard"
            className="w-full max-w-[260px] sm:max-w-[318px] md:max-w-none md:w-[92%] rounded-2xl border border-border/50 object-cover aspect-[3/4]"
            loading="lazy"
          />
        </div>
        <div className="md:col-span-7 lg:col-span-8 md:pt-10 lg:pt-12">
          <p className="font-heading text-2xl md:text-3xl leading-relaxed text-foreground">
            Amélie développe des concepts à l'intersection des mots et de l'image.
            Formée en stylisme, elle vient du{" "}
            <span className="text-accent">backstage</span> — là où le storytelling
            prend forme avant d'être vu. Mode, événements, contenu : elle transforme
            des insights humains en idées créatives qui peuvent vivre en campagne.
          </p>
          <div className="mt-12 md:mt-16 flex flex-wrap gap-4">
            {["Concept", "Insight", "Direction artistique", "Storytelling", "Stylisme", "Culture"].map((tag) => (
              <span
                key={tag}
                className="border border-border px-4 py-2 text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground hover:border-foreground transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
