import techs from "../data/skills.json";
import H2 from "./global/H2";
import P from "./global/P";

function Skills() {
  return (
    <section>
      <H2>Skills</H2>
      <P>Below are the technologies and tools I specialize in and have been working with lately:</P>
      <div className="flex flex-wrap flex-row gap-4 mt-4">
        {techs.map((tech, index) => (
          <p key={index} className="border py-1 px-4 rounded-full text-sm">
            {tech.name}
          </p>
        ))}
      </div>
    </section>
  );
}

export default Skills
