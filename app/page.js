import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Work from "../components/Work";

export default function Home() {
  return (
   <>
   <header>
      <Navbar />
   </header>
   <main id="top">
      <Hero />
      <Work />
   </main>
   </>
  );
}
