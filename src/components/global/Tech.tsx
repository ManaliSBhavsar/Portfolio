type TechProps = {
  techs: string[];
}

function Tech(props: TechProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {props.techs.map((t,i) => (
        <p key={i} className="py-1 px-4 rounded text-xs text-teal-800 bg-cyan-50 shadow-inner dark:text-teal-400 dark:bg-white/10">
          {t}
        </p>
      ))}
    </div>
  );
};

export default Tech
