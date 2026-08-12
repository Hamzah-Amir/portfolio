import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
   <>
   <header>
      <Navbar />
   </header>
   <main id="top">
      <Hero />
   </main>
   </>
  );
}
