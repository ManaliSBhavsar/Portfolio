import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";

function Main() {
  return (
    <main className="flex flex-col gap-12">
      <About />
      <Skills />
      <Experience />
      <Projects />
    </main>
  );
}

export default Main
