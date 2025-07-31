import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Paragraph = ({ children, className }: Props) => {
  return <p className={` text-[17px] font-[400]  leading-[24px]  ${className}`}>{children}</p>;
};

export default Paragraph;
