import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Heading8 = ({ className = "", children }: Props) => {
  return <h4 className={` text-[20px] font-[600]   ${className}`}>{children}</h4>;
};

export default Heading8;
