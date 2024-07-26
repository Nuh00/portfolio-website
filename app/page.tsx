import About from "./components/About";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import SectionDivider from "./components/SectionDivider";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience/>
      <Contact />
      
    </main>
  );
}
