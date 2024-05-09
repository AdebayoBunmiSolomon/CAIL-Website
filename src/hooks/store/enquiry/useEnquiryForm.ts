import { create } from "zustand";

type enquiryFormType = {
  fullName: string;
  email: string;
  subject: string;
  policyNumber: string;
  message: string;
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
  },
  setEnquiryFormData: (enquiryFormData) =>
    set({ enquiryFormData: enquiryFormData }),
}));
