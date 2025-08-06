import React, { forwardRef } from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const SubHeading1 = forwardRef<HTMLHeadingElement, Props>(
  ({ className = "", children }, ref) => {
    return (
      <p
        ref={ref}
        className={` text-[17px] md:text-[20px] font-[400]   ${className}`}
      >
        {children}
      </p>
    );
  }
);
SubHeading1.displayName = "SubHeading1";
export default SubHeading1;
