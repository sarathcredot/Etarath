import React, { forwardRef } from "react";

interface Props {
  id: string;
  name: string;
  type?: string;
  placeholder?: string | null;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  labelBg?: string;
  disabled?: boolean;
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      id,
      name,
      type = "text",
      placeholder = null,
      value,
      onChange,
      onBlur,
      className = "",
      labelBg = "black",
      disabled = false,
    },
    ref,
  ) => {
    const showLabel = Boolean(placeholder);
    return (
      <div
        className={`relative w-full group border border-white rounded-full ${
          disabled ? "!cursor-not-allowed" : "cursor-text"
        }`}
      >
        <input
          ref={ref}
          id={id}
          name={name}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          className={` peer px-[25px]  py-[12px] text-[14px]  outline-0 w-full font-jakarta ${
            disabled ? "cursor-not-allowed" : "cursor-text"
          } ${className}`}
          disabled={disabled}
        />
        {/* <label
          htmlFor={id}
          className={`
    absolute  top-1/2 -translate-y-1/2 
     font-jakarta
    transition-all duration-200
    peer-focus:top-[0px] peer-focus:left-5 peer-focus:text-[11px] bg-${labelBg} peer-focus:px-1
    ${
      value
        ? `top-[0px] left-5 text-[11px] bg-${labelBg} px-1`
        : `left-[25px] text-[14px]`
    }
  `}
        >
          {placeholder}
        </label> */}
        {showLabel && (
          <label
            htmlFor={id}
            className={` absolute  top-1/2 -translate-y-1/2 
            font-jakarta transition-all duration-200 peer-focus:top-[0px] peer-focus:left-5 peer-focus:text-[11px] bg-${labelBg} peer-focus:px-1
            ${
              value || type == "date"
                ? `top-[0px] left-5 text-[11px] bg-${labelBg} px-1`
                : `left-[25px] text-[14px]`
            }
          `}
          >
            {placeholder}
          </label>
        )}
      </div>
    );
  },
);

Input.displayName = "Input"; // Needed when using forwardRef

export default Input;
