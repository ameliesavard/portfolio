import { useState } from "react";

interface Project {
  number: string;
  title: string;
  insight: string;
  bigIdea: string;
  executions: string[];
  category: string;
}

const projects: Project[] = [
  {
    number: "01",
    title: "DRESS CODE",
    insight: "La Gen Z ne s'habille pas pour plaire. Elle s'habille pour exister.",
    bigIdea: "Une campagne mode qui ne vend pas des vêtements — mais une attitude. Chaque pièce est un statement. Chaque look, un manifeste.",
    executions: ["Campagne affichage sauvage", "Série social media (anti-lookbook)", "Activation pop-up : miroirs publics", "Film manifeste 60s"],
    category: "Mode / Gen Z",
  },
  {
    number: "02",
    title: "CE QUE TU NE VOIS PAS",
    insight: "Les troubles alimentaires sont invisibles. C'est exactement ce qui les rend dangereux.",
    bigIdea: "Rendre visible l'invisible. Une campagne de sensibilisation qui utilise l'absence comme langage créatif.",
    executions: ["Affichage : visuels à moitié effacés", "Activation : assiettes vides en vitrine", "Stories interactives (swipe pour révéler)", "Partenariat ANEB"],
    category: "Cause sociale",
  },
  {
    number: "03",
    title: "REBRAND THE BORING",
    insight: "Les marques « plates » ne sont pas ennuyantes. Elles ont juste peur d'avoir une opinion.",
    bigIdea: "Repositionner une marque institutionnelle en lui donnant une voix — directe, humaine, inattendue.",
    executions: ["Nouvelle plateforme de marque", "Campagne lancement : « On a changé. Pour vrai. »", "Ton éditorial refait (web + social)", "Brand book"],
    category: "Repositionnement",
  },
  {
    number: "04",
    title: "LE MONDE REGARDE",
    insight: "En 2024, la culture ne vient plus d'en haut. Elle vient des marges.",
    bigIdea: "Une campagne culturelle qui célèbre les créateurs invisibles — ceux qui influencent sans le savoir.",
    executions: ["Documentaire court format", "Série portraits social", "Billboard : citations anonymes", "Activation : mur collaboratif"],
    category: "Culture / Insight",
  },
  {
    number: "05",
    title: "AFTER HOURS",
    insight: "Les meilleures idées arrivent quand personne ne regarde.",
    bigIdea: "Une campagne pour un festival nocturne qui transforme l'attente en expérience. Le spectacle commence avant le spectacle.",
    executions: ["Teasing : contenus mystères à 3h du matin", "Affichage luminescent (visible la nuit)", "Playlist collaborative pré-événement", "Activation : files d'attente scénographiées"],
    category: "Événementiel",
  },
];

const WorkSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="travaux" className="px-6 md:px-16 py-32">
      <div className="flex justify-between items-end mb-20">
        <h2 className="font-heading font-bold text-4xl md:text-6xl text-foreground">
          Idées
        </h2>
        <span className="text-xs tracking-widest uppercase text-muted-foreground">
          Concepts créatifs spéculatifs
        </span>
      </div>
      <p className="text-muted-foreground max-w-3xl mb-12 text-sm md:text-base">
        Ce ne sont pas des campagnes produites, mais des pistes créatives: des idées conçues pour montrer une direction stratégique, un ton et un potentiel d'exécution.
      </p>

      <div className="space-y-0">
        {projects.map((project, index) => (
          <div
            key={project.number}
            className="border-t border-border/40 group cursor-pointer"
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
          >
            <div className="py-8 md:py-10 flex items-start md:items-center justify-between gap-4 hover-shift">
              <div className="flex items-start md:items-center gap-6 md:gap-12">
                <span className="text-xs text-muted-foreground font-heading mt-1 md:mt-0">{project.number}</span>
                <div>
                  <h3 className="font-heading font-bold text-2xl md:text-4xl text-foreground group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-xs tracking-widest uppercase text-muted-foreground mt-1 block">
                    {project.category}
                  </span>
                </div>
              </div>
              <span className="text-2xl text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {expandedIndex === index ? "−" : "+"}
              </span>
            </div>

            {expandedIndex === index && (
              <div className="pb-10 md:pb-16 pl-10 md:pl-24 grid md:grid-cols-2 gap-8 animate-fade-up">
                <div>
                  <p className="text-xs tracking-widest uppercase text-accent mb-3">Insight</p>
                  <p className="text-foreground/80 font-body leading-relaxed italic">
                    « {project.insight} »
                  </p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-accent mb-3">Concept</p>
                  <p className="text-foreground/80 font-body leading-relaxed">
                    {project.bigIdea}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-xs tracking-widest uppercase text-accent mb-3">Pistes d'exécution</p>
                  <div className="flex flex-wrap gap-3">
                    {project.executions.map((exec) => (
                      <span
                        key={exec}
                        className="border border-border/60 px-4 py-2 text-sm text-muted-foreground"
                      >
                        {exec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        <div className="border-t border-border/40" />
      </div>
    </section>
  );
};

export default WorkSection;
