import { ReactNode } from "react";

interface PProps {
  children: ReactNode;
}

const P = ({ children }: PProps) => {
  return <p className="text-base text-gray-700 leading-6">{children}</p>;
};

export default P
