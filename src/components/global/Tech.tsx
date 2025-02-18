type TechProps = {
  techs: string[];
}

function Tech(props: TechProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {props.techs.map((t,i) => (
        <p key={i} className="border py-1 px-2 rounded-full text-xs">
          {t}
        </p>
      ))}
    </div>
  );
};

export default Tech
