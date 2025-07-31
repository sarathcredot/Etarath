import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Paragraph = ({ children, className }: Props) => {
  return <p className={` text-[17px] font-[400]    ${className}`}>{children}</p>;
};

export default Paragraph;
