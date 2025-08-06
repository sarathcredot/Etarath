import React, { forwardRef } from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Paragraph = forwardRef<HTMLParagraphElement, Props>(
  ({ children, className = "" }, ref) => {
    return (
      <p
        ref={ref}
        className={`text-[16px] md:text-[17px] font-[400] leading-[24px] ${className}`}
      >
        {children}
      </p>
    );
  }
);

Paragraph.displayName = "Paragraph";

export default Paragraph;
