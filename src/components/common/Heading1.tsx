import React, { forwardRef } from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Heading1 = forwardRef<HTMLHeadingElement, Props>(
  ({ className = "", children }, ref) => {
    return (
      <h1
        ref={ref}
        className={`text-[28px] md:text-[48px] lg:text-[56px] font-[600] md:leading-[65px] lg:leading-[76px] capitalize font-jakarta ${className} transition-all duration-300 ease-in-out`}
      >
        {children}
      </h1>
    );
  }
);

Heading1.displayName = "Heading1";

export default Heading1;
