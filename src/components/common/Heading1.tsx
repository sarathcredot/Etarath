import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Heading1 = ({ className = "", children }: Props) => {
  return <h1 className={` text-[56px] font-[600] leading-[76px] capitalize font-jakarta  ${className}`}>{children}</h1>;
};

export default Heading1;
