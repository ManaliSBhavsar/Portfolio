import P from "./P";
import Tech from "./Tech";

type ExpCardProps = {
  duration: string; role: string; company: string; description: string; url: string; tech: string[];
};

function ExpCard(props: ExpCardProps) {
  return (
    <div className="p-4 md:p-6 border-2 border-gray-300 rounded-lg shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 focus:shadow-xl focus:-translate-y-1">
      <div className="flex justify-between items-center">
        <div className="mb-2">
          <p className="font-bold text-base text-teal-800">{props.role}</p>
          <a href={props.url} target="_blank" rel="noopener noreferrer"><p className="font-bold text-sm text-gray-800">{props.company}</p></a>
        </div>
        <P>{props.duration}</P>
      </div>
      <P>{props.description}</P>
      <Tech techs={props.tech} />
    </div>
  );
}

export default ExpCard
