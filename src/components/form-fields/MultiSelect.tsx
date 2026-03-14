"use client";

import React, { forwardRef, useEffect, useRef, useState } from "react";
import { FiChevronDown, FiX } from "react-icons/fi";

interface Props {
  id: string;
  name: string;
  placeholder?: string;
  value: string[];
  onChange: (e: string | string[]) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  labelBg?: string;

  options?: Array<string | { label: string; value: string }>;
}

const MultiSelect = forwardRef<HTMLInputElement, Props>(
  (
    {
      id,
      name,
      options = [],
      placeholder = "Enter the value",
      value,
      onChange,
      onBlur,
      className = "",
      labelBg = "white",
    },
    ref
  ) => {
    const [search, setSearch] = useState("");
    const [showOptions, setShowOptions] = useState(false);
    const [removingItems, setRemovingItems] = useState<string[]>([]);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const filtered = options.filter((opt) => {
      const label = typeof opt === "string" ? opt : opt.label;
      return label.toLowerCase().includes(search.toLowerCase());
    });

    const getLabelFromValue = (val: string) => {
      const found = options.find((opt) =>
        typeof opt === "string" ? opt === val : opt.value === val
      );

      return typeof found === "string" ? found : found?.label ?? val;
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
    }, [dropdownRef]);

    return (
      <>
        <div
          ref={dropdownRef}
          className=" relative group flex border border-black rounded-full"
        >
          <div
            onClick={() => setShowOptions(!showOptions)}
            className="w-full flex px-[25px]  py-[12px]"
          >
            <input
              ref={ref}
              id={id}
              name={name}
              type={"text"}
              onBlur={onBlur}
              onChange={(e) => {
                setShowOptions(true);
                setSearch(e.target.value.toUpperCase());
              }}
              value={search}
              className={`peer  text-[14px]  outline-0 w-full font-jakarta ${className}`}
              autoComplete="off"
            />

            <FiChevronDown
              size={20}
              className={`${
                showOptions ? "-rotate-180" : ""
              } transition-all duration-300 ease-in-out`}
            />
            <label
              htmlFor={id}
              className={`absolute  top-1/2 -translate-y-1/2 font-jakarta transition-all duration-200  peer-focus:top-[0px] peer-focus:left-5 peer-focus:text-[11px] bg-${labelBg} peer-focus:px-1
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

          <div
            className={`w-full max-h-[275px] overflow-y-scroll absolute top-[100%] mt-[5px] py-1 left-0 flex flex-col gap-1 border border-black rounded-[20px] bg-white z-10 transform transition-all duration-300 ease-in-out origin-top ${
              showOptions
                ? "opacity-100 scale-y-100 translate-y-0"
                : "opacity-0 scale-y-0 -translate-y-2 pointer-events-none"
            }`}
          >
            {filtered && filtered?.length ? (
              filtered.map((opt, index) => {
                const label = typeof opt === "string" ? opt : opt.label;
                const valueToSet = typeof opt === "string" ? opt : opt.value;
                // console.log({ label, valueToSet });
                return (
                  <div
                    onClick={() => {
                      if (!value.includes(valueToSet)) {
                        onChange([...value, valueToSet]);
                      }
                      setSearch("");
                      setShowOptions(false);
                    }}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in-out  transform ${
                      showOptions
                        ? "animate-in slide-in-from-left-1 fade-in-0"
                        : ""
                    }`}
                    key={valueToSet}
                    style={{
                      animationDelay: showOptions ? `${index * 50}ms` : "0ms",
                    }}
                  >
                    {label}
                  </div>
                );
              })
            ) : (
              <div className="px-4 py-2 transition-all duration-200 ease-in-out">
                No results found
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-[5px]  mt-[5px]">
          {value && value?.length
            ? value?.map((item: string, index: number) => (
                <div
                  key={index}
                  className={`flex items-center justify-center gap-[10px] bg-black text-white pl-[15px] pr-[10px] py-2 text-[14px] font-[600] font-jakarta text-center rounded-full whitespace-nowrap cursor-default transform transition-all duration-300 ease-in-out animate-in slide-in-from-left-2 fade-in-0  ${
                    removingItems.includes(item)
                      ? "animate-out slide-out-to-right-2 fade-out-0 scale-0"
                      : ""
                  }`}
                >
                  {getLabelFromValue(item)}
                  <FiX
                    size={15}
                    className="cursor-pointer transition-all duration-200 ease-in-out "
                    onClick={() => {
                      setSearch("");
                      // Add item to removing list for animation
                      setRemovingItems((prev) => [...prev, item]);

                      // Remove after animation completes
                      setTimeout(() => {
                        const updated = value?.filter((v) => v !== item);
                        onChange(updated);
                        setRemovingItems((prev) =>
                          prev.filter((i) => i !== item)
                        );
                      }, 300);
                    }}
                  />
                </div>
              ))
            : null}
        </div>
      </>
    );
  }
);

MultiSelect.displayName = "MultiSelect"; // Needed when using forwardRef

export default MultiSelect;
