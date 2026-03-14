"use client";
import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; // Default styles

type CustomPhoneInputProps = {
  value: string;
  onChange: (value: any) => any;
  disabled?: boolean;
  [key: string]: any; // for any additional props
};

const CustomPhoneInput = ({
  value,
  disabled = false,
  onChange,
  ...props
}: CustomPhoneInputProps) => {
  return (
    <PhoneInput
      international
      // defaultCountry="IN"
      value={value}
      onChange={onChange}
      disabled={disabled}
      
      {...props}
      className={` relative w-full group ${
        disabled ? "phone-input-disabled" : "phone-input"
      }  gap-[5px]`}
    />
  );
};

export default CustomPhoneInput;
