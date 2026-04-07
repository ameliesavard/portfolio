const Contact = () => {
  return (
    <section id="contact" className="px-6 md:px-16 py-32 flex flex-col items-center text-center">
      <span className="text-xs tracking-widest uppercase text-muted-foreground mb-8">Contact</span>
      <h2 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-foreground max-w-4xl leading-tight">
        Let's create something people actually{" "}
        <span className="text-accent">feel</span>.
      </h2>
      <a
        href="mailto:amesavard@hotmail.com"
        className="mt-12 border border-foreground px-10 py-4 text-sm tracking-widest uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
      >
        Écris-moi
      </a>
      <div className="mt-20 flex gap-8 text-xs tracking-widest uppercase text-muted-foreground">
        <a
          href="https://www.linkedin.com/in/amelie-savard/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors duration-300"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/theameliecode/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors duration-300"
        >
          Instagram
        </a>
      </div>
    </section>
  );
};

export default Contact;
