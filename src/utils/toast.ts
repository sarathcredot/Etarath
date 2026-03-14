"use client";

import toast, { Toaster } from "react-hot-toast";

const extractMessage = (input: unknown): string | null => {
  if (!input) return null;

  // AxiosError shape
  const axiosMessage =
    (input as any)?.response?.data?.message || // custom message from backend
    (input as any)?.data?.message || 
    (input as any)?.response?.data?.error || // alternate backend format
    (input as any)?.response?.statusText; // e.g. "Internal Server Error"

  if (axiosMessage) return axiosMessage;

  // Standard JS Error
  if ((input as any)?.message) return (input as any).message;

  // String fallback
  if (typeof input === "string") return input;

  return null;
};

export const toastError = (error: unknown) => {
  console.log("Toast Error:", error);
  const message = extractMessage(error);
  toast.error(message || "Unexpected server error. Try again later.");
};

export const toastSuccess = (success: unknown) => {
  console.log("Toast Success:", success);
  const message = extractMessage(success);
  toast.success(message || "Success");
};
