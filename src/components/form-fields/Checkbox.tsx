import React from "react";

interface Props {
  id?: string;
  name?: string;
  value?: string | number;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  labelClassName?: string;
  checked?: boolean;
  btnColor?: string;
  textColor?: string;
  size?: string;
}

const Checkbox = ({
  id,
  name,
  value,
  label,
  onChange,
  className = "",
  labelClassName = "",
  checked = false,
  btnColor = "white",
  textColor = "white",
  size = "20px",
}: Props) => {
  return (
    <div className={`flex items-center gap-[13px] ${className}`}>
      <input
        id={id}
        type="checkbox"
        value={value}
        name={name}
        checked={checked}
        onChange={onChange}
        className={`!min-w-[${size}] w-[${size}] h-[${size}]  outline-2 outline-${btnColor} cursor-pointer  `}
      />
      <label
        htmlFor={id}
        className={` text-[17px] font-[600] text-${textColor} cursor-pointer ${labelClassName}`}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
