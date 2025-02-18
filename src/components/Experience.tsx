import experienceData from "../data/experience.json";
import ExpCard from "./global/ExpCard";
import H2 from "./global/H2";

function Experience() {
  const exp = experienceData;
  return (
    <section>
      <H2>Experience</H2>
      <div className="flex justify-center flex-col gap-6 mt-4">
        {exp.map((ex) => (
          <ExpCard key={ex.id} {...ex} />
        ))}
      </div>
    </section>
  );
}

export default Experience
