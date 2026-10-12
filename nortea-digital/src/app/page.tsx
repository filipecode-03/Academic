import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Differentials } from "@/components/sections/differentials";
import { FAQ } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Intro } from "@/components/sections/intro";
import { Process } from "@/components/sections/process";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="fixed left-4 top-4 z-[100] -translate-y-24 bg-natural px-4 py-3 text-sm font-semibold text-forest-black focus:translate-y-0"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Intro />
        <Projects />
        <Services />
        <Process />
        <Differentials />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
