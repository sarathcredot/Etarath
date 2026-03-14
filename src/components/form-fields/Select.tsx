"use client";

import React, { forwardRef, useEffect, useRef, useState } from "react";
import { FiChevronDown, FiX } from "react-icons/fi";

interface Props {
  id: string;
  name: string;
  placeholder?: string;
  value: string | number;
  onChange: (e: string) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  // options?: Array<string>;
  options?: Array<string | { label: string; value: string }>;

  labelStyles?: string;
  labelBg?: string;
  disabled?: boolean;
  dropdownHeight?: string;
  onSearchChange?: (value: string) => void;
}

const Select = forwardRef<HTMLInputElement, Props>(
  (
    {
      id,
      name,
      options = [],
      placeholder = "Enter the value",
      value,
      onChange,
      onSearchChange,
      onBlur,
      className = "",
      // labelStyles = "",
      dropdownHeight = "max-h-[275px]",
      labelBg = "black",
      disabled = false,
    },
    ref,
  ) => {
    const [search, setSearch] = useState("");
    const [showOptions, setShowOptions] = useState(false);
    const [isRemoving, setIsRemoving] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // const filtered = options.filter((n) =>
    //   n.toLowerCase().includes(search.toLowerCase())
    // );
    const filtered = options.filter((opt) => {
      const label = typeof opt === "string" ? opt : opt.label;
      return label.toLowerCase().includes(search.toLowerCase());
    });

    const getLabelFromValue = (val: string | number) => {
      const found = options.find((opt) =>
        typeof opt === "string" ? opt === val : opt.value === val,
      );

      return typeof found === "string" ? found : (found?.label ?? val);
    };

    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        // Check if the click target is outside the dropdown
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setShowOptions(false); // Close the dropdown
        }
      }

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [dropdownRef]); // Dependency array ensures the effect runs when dropdownRef changes (though it typically won't)
    return (
      <div
        ref={dropdownRef}
        className={` relative ${
          disabled ? "opacity-50 !cursor-not-allowed" : "opacity-100"
        } group flex  border border-white rounded-full `}
      >
        <div
          onClick={() => !disabled && setShowOptions(!showOptions)}
          className={`w-full flex px-[25px]  py-[12px] ${
            disabled ? "!cursor-not-allowed" : ""
          }`}
        >
          <input
            ref={ref}
            id={id}
            name={name}
            type={"text"}
            onBlur={onBlur}
            onChange={(e) => {
              if (!disabled) {
                setShowOptions(true);
                const val = e.target.value;
                setShowOptions(true);
                setSearch(val);
                onSearchChange?.(val);
              }
            }}
            value={search}
            className={`peer  text-[14px]  outline-0 w-full font-jakarta   ${
              disabled ? "!cursor-not-allowed" : ""
            } ${className}   `}
            autoComplete="off"
            disabled={disabled}
          />
          {!value && (
            <FiChevronDown
              size={20}
              className={`${
                showOptions ? "-rotate-180" : ""
              } transition-all duration-300 ease-in-out`}
            />
          )}
          <label
            htmlFor={id}
            className={`absolute ${
              disabled ? "!cursor-not-allowed" : ""
            } top-1/2 -translate-y-1/2 font-jakarta transition-all duration-200  peer-focus:top-[0px] peer-focus:left-5 peer-focus:text-[11px] bg-${labelBg} peer-focus:px-1
             ${
               search
                 ? `top-[0px] left-5 text-[11px] bg-${labelBg} px-1`
                 : `left-[25px] text-[14px]`
             }
             `}
          >
            {placeholder}
          </label>
        </div>
        {value && (
          <div
            className={`flex items-center justify-center gap-[10px] bg-white text-black pl-[15px] pr-[10px] m-[5px] text-[11px] md:text-[14px] font-[600] font-jakarta text-center rounded-full whitespace-nowrap ${
              disabled ? "!cursor-not-allowed" : " cursor-default"
            } transform transition-all duration-300 ease-in-out ${
              isRemoving ? "scale-0 opacity-0" : "scale-100 opacity-100"
            } animate-in slide-in-from-right-2 fade-in-0 duration-300 `}
          >
            {getLabelFromValue(value)}
            <FiX
              size={15}
              className={`${
                disabled ? "!cursor-not-allowed" : "cursor-pointer"
              }  transition-all duration-200 ease-in-out `}
              onClick={() => {
                if (!disabled) {
                  setIsRemoving(true);
                  setTimeout(() => {
                    setSearch("");
                    onChange("");
                    setIsRemoving(false);
                  }, 200);
                }
              }}
            />
          </div>
        )}
        <div
          className={`w-full ${dropdownHeight} overflow-y-scroll absolute top-[100%] mt-[5px] py-1 left-0 flex flex-col gap-1 border border-white rounded-[20px] bg-black z-10 transform transition-all duration-300 ease-in-out origin-top ${
            showOptions
              ? "opacity-100 scale-y-100 translate-y-0"
              : "opacity-0 scale-y-0 -translate-y-2 pointer-events-none"
          }`}
        >
          {filtered && filtered?.length ? (
            filtered.map((opt, index) => {
              const label = typeof opt === "string" ? opt : opt.label;
              const valueToSet = typeof opt === "string" ? opt : opt.value;

              return (
                <div
                  key={index}
                  onClick={() => {
                    setSearch("");
                    onChange(valueToSet);
                    setShowOptions(false);
                  }}
                  className="px-4 py-2 cursor-pointer hover:bg-primary"
                >
                  {label}
                </div>
              );
            })
          ) : (
            <div className="px-4 py-2 text-gray-500 transition-all duration-200">
              No results found
            </div>
          )}
        </div>
      </div>
    );
  },
);

Select.displayName = "Select"; // Needed when using forwardRef

export default Select;
