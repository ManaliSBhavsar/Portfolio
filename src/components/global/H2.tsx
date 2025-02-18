interface H2Props {
  children: string;
}

const H2 = ({ children }: H2Props) => {
  return <h2 className="text-xl font-bold text-gray-800 leading-8">{children}</h2>;
};

export default H2
