import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Heading1 = ({ className = "", children }: Props) => {
  return <h1 className={` text-[28px] md:text-[48px] lg:text-[56px] font-[600] md:leading-[65px] lg:leading-[76px] capitalize font-jakarta  ${className}  transition-all duration-300 ease-in-out `}>{children}</h1>;
};

export default Heading1;
