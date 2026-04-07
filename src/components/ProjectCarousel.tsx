import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const photoProjects = [
  {
    image: "/bal-afrikana-1.png",
    title: "Bal Afrikana",
    role: "Assistante styliste",
    date: "Septembre 2024",
  },
  {
    image: "/aubainerie-3.png",
    title: "Aubainerie",
    role: "Assistante styliste",
    date: "Decembre 2024",
  },
  {
    image: "/festival-mad-2.png",
    title: "Festival MAD",
    role: "Coordonatrice de defile",
    date: "Aout 2025",
  },
  {
    image: "/souffle-ivoire-2.png",
    title: "Souffle d'ivoire",
    role: "Styliste",
    date: "Octobre 2025",
  },
  {
    image: "/loto-quebec-3.png",
    title: "Loto-Quebec",
    role: "Assistante styliste",
    date: "Novembre 2025",
  },
];

const ProjectCarousel = () => {
  return (
    <section id="projets" className="px-6 md:px-16 py-28 border-t border-border/40">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12">
        <h2 className="font-heading font-bold text-4xl md:text-6xl text-foreground">Projets</h2>
        <span className="text-xs tracking-widest uppercase text-muted-foreground">Backstage & projets</span>
      </div>

      <Carousel opts={{ align: "start", loop: true }} className="w-full pr-0 md:px-12">
        <CarouselContent>
          {photoProjects.map((item, index) => (
            <CarouselItem key={item.image} className="md:basis-1/2 lg:basis-1/3">
              <article className="group">
                <div className="relative overflow-hidden rounded-2xl border border-border/50">
                  <img
                    src={item.image}
                    alt={`${item.role} - ${item.title}`}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] md:aspect-[3/4]"
                    loading="lazy"
                  />
                </div>
                <div className="pt-5">
                  <p className="text-xs tracking-widest uppercase text-accent">{item.role}</p>
                  <h3
                    className="mt-2 font-heading text-2xl text-foreground opacity-0 translate-y-3 [animation:fade-up_0.7s_cubic-bezier(0.16,1,0.3,1)_forwards]"
                    style={{ animationDelay: `${index * 120 + 120}ms` }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.date}</p>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-1 md:-left-2" />
        <CarouselNext className="right-1 md:-right-2" />
      </Carousel>
    </section>
  );
};

export default ProjectCarousel;
