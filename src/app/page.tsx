import Image from "next/image";
import Navbar from "@/components/Navbar";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  // typewriter data
  const words = [
    {
      text: "A",
    },
    {
      text: "Creative",
    },
    {
      text: "Web Designer",
      className:
        "dark:bg-gradient-to-br dark:from-blue-400 dark:to-indigo-500 dark:bg-clip-text dark:text-transparent",
    },
    {
      text: "from the",
    },
    {
      text: "Philippines",
    },
  ];

  return (
    <main className="h-screen w-full bg-black dark:bg-black bg-grid-white/[0.1] dark:bg-grid-white/[0.2] relative p-6 tracking-wide">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
