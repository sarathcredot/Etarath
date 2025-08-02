import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Heading3 = ({ className = "", children }: Props) => {
  return <h3 className={` text-[36px] md:text-[38px] lg:text-[40px] font-[600] uppercase font-jakarta  ${className}`}>{children}</h3>;
};

export default Heading3;
