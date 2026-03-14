import React, { forwardRef } from "react";

interface Props {
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  className?: string;
  labelBg?: string;
  rows?: number;
}

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      id,
      name,
      placeholder = "Enter the value",
      value,
      onChange,
      onBlur,
      className = "",
      labelBg = "black",
      rows = 5,
    },
    ref
  ) => {
    console.log("text area = ", { value });
    return (
      <div className="relative group border border-white rounded-[15px] ">
        <textarea
          ref={ref}
          id={id}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          rows={rows}
          className={` peer px-[25px]  py-[12px] text-[14px]  outline-0 w-full font-jakarta ${className}`}
        />
        <label
          htmlFor={id}
          className={`
    absolute  top-[25px] -translate-y-1/2 
     font-jakarta
    transition-all duration-200
    peer-focus:top-[0px] peer-focus:left-5 peer-focus:text-[11px] bg-${labelBg} peer-focus:px-1
    ${
      value
        ? `!top-[0px] left-5 text-[11px] bg-${labelBg} px-1`
        : `left-[25px] text-[14px]`
    }
  `}
        >
          {placeholder}
        </label>
      </div>
    );
  }
);

TextArea.displayName = "TextArea"; // Needed when using forwardRef

export default TextArea;
