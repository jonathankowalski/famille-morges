import { Heart, Users, HandHeart, Baby, BookOpen } from "lucide-react";

const objectives = [
  {
    icon: Heart,
    text: "Offrir un espace de rencontre chaleureux et bienveillant pour les jeunes familles",
  },
  {
    icon: Users,
    text: "Favoriser les échanges entre parents vivant des expériences similaires",
  },
  {
    icon: HandHeart,
    text: "Soutenir les parents dans leur nouveau rôle avec des conseils de professionnels",
  },
  {
    icon: Baby,
    text: "Proposer des activités adaptées aux bébés et favorisant leur éveil",
  },
  {
    icon: BookOpen,
    text: "Informer sur les ressources locales disponibles pour les familles",
  },
];

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
        <blockquote className="relative max-w-3xl mx-auto mb-16">
          <div className="absolute -top-4 -left-4 text-6xl text-primary/20 font-serif">
            {'"'}
          </div>
          <p className="text-xl md:text-2xl text-foreground italic text-center leading-relaxed pl-8">
            Il faut tout un village pour élever un enfant
          </p>
          <div className="absolute -bottom-4 -right-4 text-6xl text-primary/20 font-serif rotate-180">
            {'"'}
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

        {/* Objectives */}
        <div className="grid gap-6 md:gap-8 mb-16">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <objective.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-foreground leading-relaxed pt-2">{objective.text}</p>
            </div>
          ))}
        </div>

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
