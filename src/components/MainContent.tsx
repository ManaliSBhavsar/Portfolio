import About from "./About";
import Experience from "./Experience";
import FeaturedProjects from "./FeaturedProjects";
import Skills from "./Skills";

function Main() {
  return (
    <main className="flex flex-col gap-12 mt-16">
      <About />
      <Skills />
      <Experience />
      <FeaturedProjects />
    </main>
  );
}

export default Main
