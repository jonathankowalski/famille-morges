export function PhotoStrip() {
  const placeholders = [
    { alt: "Parents et bébés lors d'une rencontre" },
    { alt: "Balade poussettes à Morges" },
    { alt: "Activité d'éveil pour bébés" },
    { alt: "Moment de partage entre parents" },
  ];

  return (
    <section className="py-12 bg-muted overflow-hidden">
      <div className="flex gap-4 md:gap-6 px-4">
        {placeholders.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 md:w-80 h-48 md:h-64 bg-card rounded-xl border border-border flex items-center justify-center"
          >
            <div className="text-center p-4">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-sm text-muted-foreground">{item.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
