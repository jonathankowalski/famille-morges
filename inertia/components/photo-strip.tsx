export function PhotoStrip() {
  const placeholders = [
    { alt: "Parents et bébés lors d'une rencontre", src: "/images/strip/rencontre.jpg" },
    { alt: "Balade poussettes à Morges", src: "/images/strip/balade.jpg" },
    { alt: "Activité d'éveil pour bébés", src: "/images/strip/activite.jpg" },
    { alt: "Moment de partage entre parents", src: "/images/strip/partage.jpg" },
  ];

  return (
    <section className="py-12 bg-muted overflow-hidden">
      <div className="flex gap-4 md:gap-6 px-4 justify-center">
        {placeholders.map((item, index) => (
          <div key={index}  >
            <div

              className="flex-shrink-0 w-64 md:w-80 h-48 md:h-64 bg-card rounded-xl border border-border overflow-hidden"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-2">
              {item.alt}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
