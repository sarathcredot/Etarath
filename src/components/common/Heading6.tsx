import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Heading6 = ({ className = "", children }: Props) => {
  return <h4 className={`text-[22px] md:text-[24px] lg:text-[26px] font-[600] capitalize font-jakarta  ${className}`}>{children}</h4>;
};

export default Heading6;
