import { create } from "zustand";

type enquiryFormType = {
  fullName: string;
  email: string;
  subject: string;
  policyNumber: string;
  message: string;
  callMe_Back: boolean;
  phone_number: string;
};

interface IEnquiryFormProps {
  enquiryFormData: enquiryFormType;
  setEnquiryFormData: (values: enquiryFormType) => void;
}

export const useEnquiryForm = create<IEnquiryFormProps>()((set) => ({
  enquiryFormData: {
    fullName: "",
    email: "",
    subject: "",
    policyNumber: "",
    message: "",
    callMe_Back: false,
    phone_number: "",
  },
  setEnquiryFormData: (enquiryFormData) =>
    set({ enquiryFormData: enquiryFormData }),
}));
