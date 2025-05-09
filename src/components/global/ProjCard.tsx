import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tech from "./Tech";
import P from "./P";

type ProjCardsProps = {
  year: number; title: string; description: string; url: string, tech: string[];
};

function ProjCard(props: ProjCardsProps) {
  return (
      <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-400 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-105 active:shadow-2xl dark:bg-white/3">
        <P>{props.year}</P>
        <a href={props.url} target="_blank" rel="noopener noreferrer" className="block w-fit">
        <div className="flex items-center space-x-2 py-2 text-gray-800 font-bold">
          <FontAwesomeIcon className="dark:text-white" icon={faGithub} />
          <P>{props.title}</P>
        </div>
        </a>
        <P>{props.description}</P>
        <Tech techs={props.tech} />
      </div>
  );
}

export default ProjCard
