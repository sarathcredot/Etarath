import React, { forwardRef } from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Heading4 = forwardRef<HTMLHeadingElement, Props>(
  ({ className = "", children }, ref) => {
    return (
      <h4
        ref={ref}
        className={` text-[26px] md:text-[28px] lg:text-[30px] font-[600] capitalize   ${className}`}
      >
        {children}
      </h4>
    );
  },
);
Heading4.displayName = "Heading4";
export default Heading4;
