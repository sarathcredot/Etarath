import React, { forwardRef } from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Heading7 = forwardRef<HTMLHeadingElement, Props>(
  ({ className = "", children }, ref) => {
    return (
      <h4
        ref={ref}
        className={` text-[20px] md:text-[22px] lg:text-[24px] font-[600] capitalize   ${className}`}
      >
        {children}
      </h4>
    );
  },
);
Heading7.displayName = "Heading7";
export default Heading7;
