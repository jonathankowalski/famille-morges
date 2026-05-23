export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo placeholder */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
            <span className="font-serif text-4xl md:text-5xl text-primary">EF</span>
          </div>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-balance">
          Espace Famille Morges
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed mb-4 text-balance">
          Des{" "}
          <span className="font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
            activités gratuites
          </span>{" "}
          pour les parents et leurs bébés à Morges
        </p>

        <p className="text-muted-foreground text-base md:text-lg mt-8 italic">
          Meetups and sharing for new parents and babies • The midwives speak English if needed
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#association"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Découvrir
          </a>
          <a
            href="#evenements"
            className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-medium"
          >
            Voir les événements
          </a>
        </div>
      </div>
    </section>
  );
}
