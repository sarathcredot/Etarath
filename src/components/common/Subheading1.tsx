import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const SubHeading1 = ({ className = "", children }: Props) => {
  return <p className={` text-[20px] font-[400]   ${className}`}>{children}</p>;
};

export default SubHeading1;
