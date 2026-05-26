import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Portfolio from "@/components/Portfolio";
import Links from "@/components/Links";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Portfolio />
      <Links />
      <Contact />
      <Footer />
    </main>
  );
}
