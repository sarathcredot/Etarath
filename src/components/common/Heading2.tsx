import React, { forwardRef } from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Heading2 = forwardRef<HTMLHeadingElement, Props>(
  ({ className = "", children }, ref) => {
    return (
      <h2
        ref={ref}
        className={`text-[24px] md:text-[38px] lg:text-[46px] md:leading-[46px] lg:leading-[56px] font-[600]  font-jakarta ${className}`}
      >
        {children}
      </h2>
    );
  }
);

Heading2.displayName = "Heading2";

export default Heading2;
