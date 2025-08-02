import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
  ref?: React.Ref<HTMLHeadingElement>;
};

const Heading5 = ({ className = "", children,ref }: Props) => {
  return <h5 ref={ref} className={` text-[24px] md:text-[26px] lg:text-[28px] font-[600] capitalize   ${className}`}>{children}</h5>;
};

export default Heading5;
