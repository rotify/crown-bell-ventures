import Intro from "@/components/Intro";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Company from "@/components/Company";
import PhotoJourney from "@/components/PhotoJourney";
import Perspective from "@/components/Perspective";
import Essence from "@/components/Essence";
import Developments from "@/components/Developments";
import Services from "@/components/Services";
import Explore from "@/components/Explore";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MotionToggle from "@/components/MotionToggle";
import { journeys } from "@/content/site";

export default function Home() {
  return (
    <>
      <Intro />
      <Header />
      <main>
        <Hero />
        <Company />
        <PhotoJourney {...journeys.interiors} next={{ href: "#perspective", label: "Next chapter" }} />
        <Perspective />
        <Essence />
        <Developments />
        <PhotoJourney {...journeys.outdoors} next={{ href: "#living", label: "Next chapter" }} />
        <PhotoJourney {...journeys.living} next={{ href: "#services", label: "Next chapter" }} />
        <Services />
        <Explore />
        <Contact />
      </main>
      <Footer />
      <MotionToggle />
    </>
  );
}
