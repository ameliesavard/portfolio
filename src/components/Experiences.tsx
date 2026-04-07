const experiences = [
  {
    role: "SAQ",
    reframe: "Brand image, frame by frame",
    description:
      "Assistante styliste pour une campagne publicitaire — développement de personnages et d'univers visuels, en utilisant le vêtement comme outil de narration.",
  },
  {
    role: "Loto-Québec",
    reframe: "Commercial styling",
    description:
      "Assistante styliste pour une publicité nationale — interprétation du style de personnalités publiques à travers une approche visuelle cohérente et expressive.",
  },
  {
    role: "Festival MAD",
    reframe: "Event coordination",
    description:
      "Supervision et coordination des défilés dans leur ensemble, pour une expérience globale optimisée.",
  },
  {
    role: "Bal Afrikana",
    reframe: "Styling as storytelling",
    description: "Assistante styliste — mise en scène vestimentaire pour un événement célébrant la culture afro. Chaque look raconte une histoire.",
  },
  {
    role: "ANEB",
    reframe: "Cause-driven storytelling",
    description: "Communication sensible et création de contenu pour une cause qui demande précision et empathie.",
  },
  {
    role: "Social Media",
    reframe: "Content that performs",
    description: "Création de contenu stratégique — pas juste beau, mais efficace. Des posts qui génèrent de l'action.",
  },
];

const Experiences = () => {
  return (
    <section className="px-6 md:px-16 py-32 bg-secondary/35">
      <div className="grid md:grid-cols-12 gap-12 mb-16">
        <div className="md:col-span-4">
          <span className="text-xs tracking-widest uppercase text-muted-foreground">Expériences</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-4">
            Le terrain comme école.
          </h2>
        </div>
        <div className="md:col-span-7">
          <p className="text-muted-foreground text-lg font-body">
            Chaque rôle a été une occasion de penser créativement — pas juste d'exécuter.
          </p>
        </div>
      </div>

      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <div key={i} className="border-t border-border/40 py-10 grid md:grid-cols-12 gap-6 group hover-shift">
            <div className="md:col-span-3">
              <p className="font-heading font-bold text-xl text-foreground">{exp.role}</p>
            </div>
            <div className="md:col-span-3">
              <p className="text-xs tracking-widest uppercase text-accent">{exp.reframe}</p>
            </div>
            <div className="md:col-span-6">
              <p className="text-muted-foreground font-body">{exp.description}</p>
            </div>
          </div>
        ))}
        <div className="border-t border-border/40" />
      </div>
    </section>
  );
};

export default Experiences;
