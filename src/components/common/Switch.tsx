"use client";

import { useState } from "react";

type ToggleProps = {
  checked?: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
  label?: string;
};

export default function Switch({
  checked = false,
  onChange,
  disabled = false,
  label = "",
}: ToggleProps) {
  // const [isOn, setIsOn] = useState(checked);

  const handleToggle = () => {
    if (disabled) return;
    // const value = !isOn;
    // setIsOn(value);
    onChange?.(!checked);
  };

  return (
    <div className="inline-flex gap-[5px] items-center">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={handleToggle}
        disabled={disabled}
        className={`
        relative inline-flex h-[26px] w-[44px] items-center rounded-full
        transition-colors duration-300
        ${checked ? "bg-[#404040]" : "bg-[#404040]"}
        ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
      `}
      >
        <span
          className={`
          inline-block h-[20px] w-[20px] transform rounded-full bg-white
          transition-transform duration-300
          ${checked ? "translate-x-5" : "translate-x-1"}
        `}
        />
      </button>
      {label && <span className=" text-[16px] font-semibold">{label}</span>}
    </div>
  );
}
