import React, { forwardRef } from "react";
import { FiPaperclip } from "react-icons/fi";
import { TiDocumentDelete } from "react-icons/ti";

interface Props {
  id: string;
  name: string;
  placeholder?: string;
  value: string | File | string[] | File[] | null;
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | { target: { name: string; value: null; files: null } }
  ) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  labelBg?: string;
  multiple?: boolean;
}

const FileUpload = forwardRef<HTMLInputElement, Props>(
  (
    {
      id,
      name,
      placeholder = "Enter the value",
      value,
      onChange,
      onBlur,
      className = "",
      labelBg = "white",
      multiple = false,
    },
    ref
  ) => {
    const hasFiles = Array.isArray(value) ? value.length > 0 : !!value;
    console.log("VALUES = = =", value);
    return (
      <div className="relative group flex border border-black rounded-full">
        <input
          ref={ref}
          id={id}
          name={name}
          type="file"
          onChange={onChange}
          onBlur={onBlur}
          // value={value}
          className={`peer opacity-0 px-[25px]  py-[12px] text-[14px]  outline-0 w-full font-jakarta ${className}`}
          multiple={multiple}
        />
        {/* {value ? (
          <button
            type="button"
            // onClick={() => {
            //   onChange({
            //     target: { name, value: null, files: null },
            //   } as React.ChangeEvent<HTMLInputElement>);
            // }}
            onClick={() =>
              onChange({ target: { name, value: null, files: null } })
            }
            className={`flex items-center justify-center  gap-[10px] bg-black text-white px-[25px] m-[5px] text-[14px] font-[600] font-jakarta text-center rounded-full  cursor-pointer`}
          >
            REMOVE
            <TiDocumentDelete size={20} className="" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              const inputElement = document.getElementById(
                id
              ) as HTMLInputElement; // Cast to HTMLInputElement
              if (inputElement) {
                inputElement.click();
              }
            }}
            className={`flex items-center justify-center  gap-[10px] bg-black text-white px-[25px] m-[5px] text-[14px] font-[600] font-jakarta text-center rounded-full  cursor-pointer`}
          >
            UPLOAD
            <FiPaperclip size={20} className="rotate-45" />
          </button>
        )} */}
        {hasFiles ? (
          <button
            type="button"
            onClick={() =>
              onChange({ target: { name, value: null, files: null } })
            }
            className="flex items-center justify-center gap-[10px] bg-black text-white px-[25px] m-[5px] text-[14px] font-[600] font-jakarta text-center rounded-full cursor-pointer"
          >
            REMOVE
            <TiDocumentDelete size={20} />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              const inputElement = document.getElementById(
                id
              ) as HTMLInputElement;
              if (inputElement) inputElement.click();
            }}
            className="flex items-center justify-center gap-[10px] bg-black text-white px-[25px] m-[5px] text-[14px] font-[600] font-jakarta text-center rounded-full cursor-pointer"
          >
            UPLOAD
            <FiPaperclip size={20} className="rotate-45" />
          </button>
        )}

        {/* <label
          htmlFor={id}
          className={`${value ? "" : "hidden"} 
    absolute  top-1/2 -translate-y-1/2 left-[25px] text-[14px]
     font-jakarta
    transition-all duration-200
  `}
        >
          {typeof value !== "string" ? value?.name : value}
        </label> */}
        <label
          htmlFor={id}
          className={`${value ? "" : "hidden"} 
    absolute top-1/2 -translate-y-1/2 left-[25px] text-[14px]
    font-jakarta transition-all duration-200 line-clamp-1
  `}
        >
          {(() => {
            if (!value) return "";
            if (value instanceof File) return "Uploaded"; // single file
            // if (value instanceof File) return value.name; // single file
            if (Array.isArray(value)) {
              // multiple files or strings
              return value.length > 0 ? `${value.length} Files Uploaded` : "";
            }
            return `Uploaded`; // string
          })()}
        </label>

        <label
          htmlFor={id}
          className={`
    absolute  top-1/2 -translate-y-1/2 
     font-jakarta
    transition-all duration-200
    peer-focus:top-[0px] peer-focus:left-5 peer-focus:text-[11px] bg-${labelBg} peer-focus:px-1
    ${
      hasFiles
        ? `top-[0px] left-5 text-[11px] bg-${labelBg} px-1`
        : "left-[25px] text-[14px]"
    }
  `}
        >
          {placeholder}
        </label>
      </div>
    );
  }
);

FileUpload.displayName = "FileUpload"; // Needed when using forwardRef

export default FileUpload;
