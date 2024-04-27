import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import NavBar from "@/components/NavBar";
import OurPartners from "@/components/OurPartners";
import OurServices from "@/components/OurServices";

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />
        <OurPartners />
        <OurServices />
        <AboutUs />
        <HowItWorks />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
