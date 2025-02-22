import Footer from "../components/global/Footer";
import H2 from "../components/global/H2";
import Header from "../components/global/Header";
import ProjCard from "../components/global/ProjCard";
import projectsData from "../data/projects.json";
import MetaTags from "../hooks/meta";

function Projects() {
    return (
      <>
        <MetaTags 
          title="Projects | Manali Bhavsar" 
          description="Explore projects by Manali Bhavsar, a front-end developer." />
        <Header />
        <H2>Projects</H2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {projectsData.map((proj) => (
              <ProjCard key={proj.id} {...proj} />
          ))}
        </div>
        <Footer />
      </>
    );
}

export default Projects
