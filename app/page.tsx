import { About } from "@/components/About";
import { BackToTop } from "@/components/BackToTop";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { HighlightsCarousel } from "@/components/HighlightsCarousel";
import { HeroSlider } from "@/components/HeroSlider";
import { HomeTiles } from "@/components/HomeTiles";
import { LocationBand } from "@/components/LocationBand";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { MenuSection } from "@/components/MenuSection";
import { MobileStickyActions } from "@/components/MobileActions";
import { ReservationCTA } from "@/components/Reservation";
import { jsonLd } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BackgroundEffects />
      <Header />
      <main className="site-main">
        <HeroSlider />
        <HomeTiles />
        <HighlightsCarousel />
        <MenuSection />
        <About />
        <Gallery />
        <LocationBand />
        <ReservationCTA />
        <Contact />
        <MarqueeStrip />
      </main>
      <Footer />
      <BackToTop />
      <MobileStickyActions />
    </>
  );
}
