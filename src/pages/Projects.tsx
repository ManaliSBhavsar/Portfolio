import H2 from "../components/global/H2";
import Header from "../components/global/Header";
import ProjCard from "../components/global/ProjCard";
import projectsData from "../data/projects.json";

function Projects() {
    return (
      <>
        <Header />
        <H2>Projects</H2>
        <div className="flex flex-col gap-6 mt-4 pb-16">
          {projectsData.map((proj) => (
              <ProjCard key={proj.id} {...proj} />
          ))}
          </div>
      </>
    );
}

export default Projects
