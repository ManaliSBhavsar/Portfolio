import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tech from "./Tech";

type ProjCardsProps = {
  year: number; title: string; description: string; url: string, tech: string[];
};

function ProjCard(props: ProjCardsProps) {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <div className="cursor-pointer bg-white p-6 shadow-lg rounded-lg border border-gray-400 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:scale-105 focus:shadow-2xl">
        <p>{props.year}</p>
        <div className="flex items-center space-x-2 py-2">
          <FontAwesomeIcon icon={faGithub} />
          <p>{props.title}</p>
        </div>
        <p>{props.description}</p>
        <Tech techs={props.tech} />
      </div>
    </a>
  );
}

export default ProjCard
