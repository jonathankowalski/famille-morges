import { MapPin, Calendar, Camera } from "lucide-react";

const venues = [
  {
    name: "Espace Couvaloup",
    address: "Rue de Couvaloup 12, 1110 Morges",
    activity: "Balades poussettes",
    schedule: "2 lundis/mois",
  },
  {
    name: "Maison des associations",
    address: "Rue des Fossés 16, 1110 Morges",
    activity: "Rencontres thématiques / Permanences ",
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

        <h3 className="text-lg md:text-xl text-foreground text-center mb-8">
          Pour connaître les prochaines dates, consultez notre page Instagram et/ou rejoignez notre groupe WhatsApp
        </h3>

        <div className="mb-12 flex justify-center">
          <a href="https://www.instagram.com/espacefamillemorges" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
            @espacefamillemorges sur Instagram
          </a>
          <a href="https://chat.whatsapp.com/Bnl0zW5qoBd9FfTyIyrGji?mode=hq1tswi" target="_blank" rel="noopener noreferrer" className="ml-4 text-sm text-primary hover:underline">
            Rejoindre le groupe WhatsApp
          </a>
        </div>

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

          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-8 sm:gap-24">
            {/* Instagram */}
            <div>
              <img src="/images/qrcode_instagram.png" alt="QR code Instagram" className="w-32 h-32 rounded-lg border border-border" />
              <img src="/images/instagram.png" alt="Instagram logo" className="w-8 h-8 mt-2 mx-auto" />
            </div>

            {/* WhatsApp QR */}
            <div>
              <img src="/images/qrcode_whatsapp.png" alt="QR code WhatsApp" className="w-32 h-32 rounded-lg border border-border" />
              <img src="/images/whatsapp.svg" alt="WhatsApp logo" className="h-6 mt-2 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
