import { Header } from "@/components/header";
import { CinematicHero } from "@/components/cinematic-hero";
import { Gallery } from "@/components/gallery";
import { Services } from "@/components/services";
import { WhyUs } from "@/components/why-us";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <CinematicHero />
        <Services />
        <Gallery />
        <WhyUs />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
