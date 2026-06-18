import { Objectives } from "./objectives";

const badges = ["Solidarité", "Rencontres", "Soutien"];

const committeeMembers = [
  "Sarah Aouad (communication, réseaux sociaux)",
  "Cécile Blumenfeld (trésorière)",
  "Julie Flohic (présidente)",
  "Anita Krüger (balades poussettes et groupe whatsapp)",
  "Mélanie Samson (secrétaire)",
  "Kelda Weeks (site internet et graphisme)"
];

export function Association() {
  return (
    <section id="association" className="py-20 px-4 bg-card">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">
          Un projet de santé publique local
        </h2>

        {/* Quote block */}
        <blockquote className="relative mx-auto mb-16">
          <div className="text-xl md:text-2xl text-foreground italic text-center leading-relaxed pl-8">
            Des sages-femmes se mobilisent pour créer :<br />
            <div className="flex justify-center md:gap-8 md:flex-row flex-col mt-4">
              <p className="text-foreground text-center">un accueil chaleureux et accessible à tous</p>
              <p className="text-foreground text-center">des liens sociaux et combattre l’isolement</p>
              <p className="text-foreground text-center">un espace pour se ressourcer et échanger</p>
            </div>
          </div>
        </blockquote>

        {/* Keyword badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {badges.map((badge) => (
            <span
              key={badge}
              className="px-6 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Objectives */}
      <Objectives />

      <div className="max-w-5xl mx-auto">
        {/* Committee info */}
        <div className="bg-muted rounded-2xl p-8 mb-12">
          <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">
            Notre comité
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Sages-femmes venues d’horizons différents, toutes passionnées par l’accompagnement des parents. Chacune apporte son expertise unique, et ensemble, nous construisons un projet riche et complet, pour offrir des informations de qualité et un véritable soutien aux familles. Nous nous engageons bénévolement pour faire vivre cette association.
          </p>
          <ul className="grid sm:grid-cols-2 gap-2">
            {committeeMembers.map((member, index) => (
              <li key={index} className="text-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {member}
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground text-sm mt-4 italic">(par ordre alphabétique)</p>
        </div>

        {/* City support */}
        <div className="flex flex-col md:flex-row items-center gap-6 justify-center mb-12">
          <p className="text-muted-foreground text-center md:text-left">
            Avec le soutien de la Ville de Morges
          </p>
          <div className="w-24 h-24 rounded-lg bg-muted flex items-center justify-center">
            <img
              src="/images/logo_morges.svg"
              alt="Logo Ville de Morges"
              className="max-w-full max-h-full p-2 object-contain"
            />
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-medium"
          >
            Télécharger les statuts (PDF)
          </a>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 bg-secondary rounded-2xl p-8 text-center">
          <p className="text-lg text-foreground mb-4">
            Envie de nous soutenir dans notre mission ?
          </p>
          <a
            href="#soutenir"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Devenir membre ou faire un don
          </a>
        </div>
      </div>
    </section>
  );
}
