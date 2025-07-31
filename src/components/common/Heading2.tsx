import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Heading2 = ({ className = "", children }: Props) => {
  return <h2 className={` text-[46px] leading-[56px] font-[600] capitalize font-jakarta  ${className}`}>{children}</h2>;
};

export default Heading2;
