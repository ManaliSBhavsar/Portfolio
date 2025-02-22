import projectsData from "../data/projects.json";
import H2 from "./global/H2";
import ProjCard from "./global/ProjCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function FeaturedProjects() {
  const project = projectsData.slice(0, 4);
  return (
    <section>
      <H2>Projects</H2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 mb-4">
        {project.map((proj) => (
          <ProjCard key={proj.id} {...proj} />
        ))}
      </div>
      <Link to="/projects" className="text-gray-800 text-base ml-2"><u className="mr-2">View Projects</u>
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </section>
  );
}

export default FeaturedProjects
