import axios from "axios";

export interface ContactFormValues {
  fullName: string;
  working_email: string;
  contact_number: string;
  subject: string;
  description: string;
  isAgreed: boolean;
}

export async function submitContactForm(values: ContactFormValues) {
  const { isAgreed, ...payload } = values;

  if (!isAgreed) {
    throw new Error("Please agree to data collection and storage.");
  }

  const response = await axios.post("/api/contact", payload);
  return response.data;
}
