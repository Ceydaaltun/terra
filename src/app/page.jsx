import Image from "next/image";
import Hero from "@/components/Hero";
import MissionAndVision from "./mission-and-vision/page";
import About from "./about/page";
import Contact from "./contact/page";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BacktoTopButton";

export default function Home() {
  return (
    <>

      <div className="flex flex-col">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>

        <section id="mission-and-vision">
          <MissionAndVision />
        </section>

        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
      <BackToTopButton />
    </>
  )
}