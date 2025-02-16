import projectsData from "../data/projects.json";
import H2 from "./global/H2";
import ProjCard from "./global/ProjCard";

function Projects() {
  const project = projectsData;
  return (
    <section>
      <H2>Projects</H2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {project.map((proj) => (
          <ProjCard key={proj.id} {...proj} />
        ))}
      </div>
    </section>
  );
}

export default Projects
