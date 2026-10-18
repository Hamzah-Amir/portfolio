import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Stack from "@/components/Stack";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <>
   <header>
      <Navbar />
   </header>
   <main id="top">
      <Hero />
      <Work />
      <About />
      <Stack />
      <Contact />
   </main>
   <footer>
      <Footer />
   </footer>
   </>
  );
}
