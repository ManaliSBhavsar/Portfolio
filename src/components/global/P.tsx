interface PProps {
  children: string;
}

const P = ({ children }: PProps) => {
  return <p className="text-base text-gray-600 leading-6">{children}</p>;
};

export default P
