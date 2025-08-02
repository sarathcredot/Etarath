import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Heading7 = ({ className = "", children }: Props) => {
  return <h4 className={` text-[20px] md:text-[22px] lg:text-[24px] font-[600] capitalize   ${className}`}>{children}</h4>;
};

export default Heading7;
