import { MapPin, Calendar, Camera } from "lucide-react";

const venues = [
  {
    name: "Espace Couvaloup",
    address: "Rue de Couvaloup 12",
    activity: "Balades poussettes",
    schedule: "2 lundis/mois",
  },
  {
    name: "Maison des associations",
    address: "Rue des Fossés 16",
    activity: "Rencontres thématiques",
    schedule: "Certains mercredis/samedis",
  },
];

export function Events() {
  return (
    <section id="evenements" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">
          Événements
        </h2>

        {/* Venue cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {venues.map((venue, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border hover:shadow-lg transition-shadow"
            >
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">
                {venue.name}
              </h3>
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">{venue.address}</p>
              </div>
              <div className="flex items-start gap-3 mb-4">
                <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-medium">{venue.activity}</p>
                  <p className="text-muted-foreground text-sm">{venue.schedule}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="bg-card rounded-2xl p-8 border border-border">
          <p className="text-center text-foreground mb-8">
            Consultez notre page Instagram et rejoignez notre groupe WhatsApp pour toutes les dates
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
            >
              <Camera className="w-6 h-6 text-primary" />
              <span className="text-foreground font-medium">@espacefamillemorges</span>
            </a>

            {/* WhatsApp QR */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground text-center px-2">
                  QR Code WhatsApp
                </span>
              </div>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                Rejoindre le groupe
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
