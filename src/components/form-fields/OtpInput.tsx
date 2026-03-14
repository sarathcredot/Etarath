"use client";

import { useRef } from "react";

const OTP_LENGTH = 5;

export default function OtpInput({
  formik,
  focus = false,
}: {
  formik: any;
  focus?: boolean;
}) {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  // Convert string → array
  const otpArray = Array.from(
    { length: OTP_LENGTH },
    (_, i) => formik.values.otp?.[i] || "",
  );

  const updateOtp = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const otpChars = otpArray;
    otpChars[index] = value;

    const newOtp = otpChars.join("");
    formik.setFieldValue("otp", newOtp);

    if (value && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !otpArray[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex flex-col items-center gap-1 ">
      {/* OTP Inputs */}
      <div className="flex gap-[10px] sm:gap-[15px]">
        {otpArray.map((value, index) => (
          <input
            key={index}
            ref={(el) => {
              inputsRef.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={value}
            autoFocus={index === 0 && focus}
            onChange={(e) => updateOtp(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="
               h-[40px] sm:h-[50px]  md:h-[60px] w-[40px]  sm:w-[50px]  md:w-[60px] rounded-full border border-black
              text-center text-xl 
              outline-none transition
              focus:border-black
            "
          />
        ))}
      </div>

      {/* Error */}
      {formik.touched.otp && formik.errors.otp && (
        <p className="text-secondary text-[11px] mt-[2px]">
          {formik.errors.otp}
        </p>
      )}
    </div>
  );
}
