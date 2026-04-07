const headlines = [
  { text: "Tu n'achètes pas un produit. Tu achètes qui tu veux devenir.", type: "Tagline" },
  { text: "Une brand sans idée n'est qu'un décor bien rangé.", type: "Copywriting" },
  { text: "Les marques qui durent ne crient pas. Elles murmurent au bon moment.", type: "Réflexion" },
  { text: "A brief tells you what to do. I find what to say.", type: "Headline" },
  { text: "Le contenu existe. Le concept persiste.", type: "Manifeste" },
  { text: "Don't brief me a format. Brief me a feeling.", type: "Tagline" },
];

const Playground = () => {
  return (
    <section className="px-6 md:px-16 py-32">
      <div className="mb-20">
        <span className="text-xs tracking-widest uppercase text-muted-foreground">Creative Playground</span>
        <h2 className="font-heading font-bold text-4xl md:text-6xl text-foreground mt-4">
          En vrac.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {headlines.map((item, i) => (
          <div
            key={i}
            className="border border-border/40 p-8 md:p-12 group hover:border-accent/50 transition-colors duration-500 relative overflow-hidden"
          >
            <span className="text-xs tracking-widest uppercase text-accent mb-6 block">
              {item.type}
            </span>
            <p className="font-heading text-xl md:text-2xl text-foreground leading-snug">
              {item.text}
            </p>
            <div className="absolute bottom-0 left-0 w-full h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Playground;
