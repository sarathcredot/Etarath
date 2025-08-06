import { cva } from "class-variance-authority";
import Link from "next/link";
import { BsArrowRightCircleFill } from "react-icons/bs";
import React, { forwardRef } from "react";

type ButtonProps = {
  variant?: "solid" | "outline";
  color?: "primary" | "white" | "black";
  textColor?: "white" | "black" | "primary";
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "link" | "submit" | "reset";
  href?: string;
};

const button = cva(
  "relative inline-flex items-center justify-center rounded-full px-5 md:px-[45px] lg:px-[58px] h-[48px] transition-colors text-[15px] md:text-[16px] font-[600] cursor-pointer group overflow-hidden transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        solid: "border-2",
        outline: "border-2 !bg-transparent",
      },
      color: {
        primary: "bg-primary border-primary",
        white: "bg-white border-white",
        black: "bg-black border-black",
      },
      textColor: {
        white: "text-white",
        black: "text-black",
        primary: "text-primary",
      },
    },
    compoundVariants: [
      { variant: "outline", color: "primary", class: "!text-primary" },
      { variant: "outline", color: "white", class: "!text-white" },
      { variant: "outline", color: "black", class: "!text-black" },
    ],
    defaultVariants: {
      variant: "solid",
      color: "primary",
      textColor: "white",
    },
  }
);

const Button = forwardRef<
  HTMLAnchorElement | HTMLButtonElement | HTMLDivElement,
  ButtonProps
>(
  (
    {
      variant,
      color,
      textColor,
      className = "",
      onClick,
      disabled = false,
      type = "button",
      href = "/",
      children,
    },
    ref
  ) => {
    return type === "link" ? (
      <Link
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={`${button({ variant, color, textColor })} ${className}`}
        onClick={onClick}
      >
        {children}{" "}
        <span className="max-md:hidden absolute top-[6px] right-[6px] p-0 group-hover:translate-x-[60px] transition-transform duration-500 ease-in-out">
          <BsArrowRightCircleFill size={31} />
        </span>
      </Link>
    ) : (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${button({ variant, color, textColor })} ${className}`}
      >
        {children}{" "}
        <span className="max-md:hidden absolute top-[6px] right-[6px] p-0 group-hover:translate-x-[60px] transition-transform duration-500 ease-in-out">
          <BsArrowRightCircleFill size={31} />
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
