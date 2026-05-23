import { Gift, Users } from "lucide-react";

export function Support() {
  return (
    <section id="soutenir" className="py-20 px-4 bg-card">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">
          Faire un don / Devenir membre
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Donation */}
          <div className="bg-background rounded-2xl p-6 md:p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Gift className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-foreground">
                Faire un don
              </h3>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Votre générosité nous permet de continuer à offrir des activités 
              gratuites et de qualité aux familles de Morges.
            </p>

            {/* Bank info card */}
            <div className="bg-muted rounded-xl p-6">
              <p className="text-sm text-muted-foreground mb-2">IBAN</p>
              <p className="font-mono text-foreground text-lg break-all">
                CH1100767000T 5663 2365
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Association Espace Famille Morges
              </p>
            </div>
          </div>

          {/* Membership */}
          <div className="bg-background rounded-2xl p-6 md:p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-foreground">
                Devenir membre
              </h3>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Rejoignez notre association et soutenez notre mission auprès 
              des jeunes familles de la région.
            </p>

            <div className="bg-muted rounded-xl p-6 mb-6">
              <p className="text-sm text-muted-foreground mb-1">Cotisation individuelle</p>
              <p className="text-3xl font-serif text-primary">50 CHF</p>
              <p className="text-sm text-muted-foreground mt-1">par année</p>
            </div>

            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              {"S'inscrire via Google Forms"}
            </a>

            <p className="text-sm text-muted-foreground mt-4 text-center">
              Professionnels et fondations : contactez-nous par email
            </p>
          </div>
        </div>

        {/* Highlighted quote */}
        <div className="bg-secondary rounded-2xl p-8 text-center">
          <p className="text-xl md:text-2xl text-foreground font-serif italic">
            {"Chaque don, petit ou grand, compte."}
          </p>
        </div>
      </div>
    </section>
  );
}
