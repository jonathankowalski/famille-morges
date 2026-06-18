const objectives = [
  {
    title: 'UN LIEU. UN TEMPS. POUR VOUS',
    descriptions: [
      'Activités libres et gratuites',
      'Un espace chaleureux et bienveillant',
      'Des sages-femmes à l’écoute'
    ]
  },
  {
    title: 'PARLER. PARTAGER. SE SENTIR MOINS SEUL·E.',
    descriptions: [
      'Rencontrer d’autres parents',
      'Échanger ses expériences',
      'Partager ses joies, ses doutes, ses rires',
      'Découvrir que l’on n’est pas seul·e',
      'S’entraider simplement'
    ],
  },
  {
    title: 'GRANDIR ENSEMBLE.',
    descriptions: [
      'Renforcer ses compétences parentales',
      'Prendre confiance',
      'S’accorder un moment pour souffler, se ressourcer',
      'Prévenir l’isolement, la dépression post-partum et l’épuisement parental',
      'Parce qu’ensemble, c’est plus doux'
    ],
  },
];

export function Objectives() {
  return (
    <section id="objectives" className="py-20 px-4 mb-8 bg-background">
      <div className="max-w-5xl mx-auto">

        <div className="grid md:grid-cols-3 gap-8">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border hover:shadow-lg transition-shadow flex flex-col"
            >
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4 flex-1">
                {objective.title}
              </h3>
              <ul className="text-muted-foreground leading-relaxed">
                {objective.descriptions.map((description, i) => (
                  <li key={i} className="mb-2">
                    {description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
