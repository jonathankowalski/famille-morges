
import { Hero } from "@/components/hero";
import { Association } from "@/components/association";
import { Events } from "@/components/events";
import { Support } from "@/components/support";
import { Contact } from "@/components/contact";
import { PhotoStrip } from "@/components/photo-strip";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Association />
      <PhotoStrip />
      <Events />
      <Support />
      <Contact />
      <Footer />
    </main>
  );
}
