import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Products from "@/components/Products";
import CaseStudy from "@/components/CaseStudy";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";

export default function Home() {
  return (
    <>
      <MouseGlow />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Products />
        <CaseStudy />
        <Industries />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
