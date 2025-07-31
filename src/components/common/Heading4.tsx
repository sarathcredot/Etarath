import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Heading4 = ({ className = "", children }: Props) => {
  return <h4 className={` text-[30px] font-[700] capitalize   ${className}`}>{children}</h4>;
};

export default Heading4;
