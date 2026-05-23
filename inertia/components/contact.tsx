import { MapPin, Phone, Mail, Building } from "lucide-react";

const committeeMembers = [
  "Julie Flohic (Présidente)",
  "Marie Dupont",
  "Sophie Martin",
  "Claire Bernard",
  "Isabelle Roux",
];

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">
          Contact
        </h2>

        <div className="bg-card rounded-2xl p-6 md:p-10 border border-border">
          <h3 className="font-serif text-xl md:text-2xl text-foreground mb-8 text-center">
            Association Espace Famille Morges
          </h3>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Building className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Siège</p>
                <p className="text-foreground">Chemin du Petit-Dézaley 7, 1110 Morges</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Téléphone</p>
                <a 
                  href="tel:+41792832867" 
                  className="text-foreground hover:text-primary transition-colors"
                >
                  +41 79 283 28 67
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a 
                  href="mailto:contact@espacefamille-morges.ch" 
                  className="text-foreground hover:text-primary transition-colors break-all"
                >
                  contact@espacefamille-morges.ch
                </a>
              </div>
            </div>

            {/* IBAN */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">IBAN</p>
                <p className="text-foreground font-mono">CH1100767000T 5663 2365</p>
              </div>
            </div>
          </div>

          {/* Committee members */}
          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Membres du comité</p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {committeeMembers.map((member, index) => (
                <li key={index} className="text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {member}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
