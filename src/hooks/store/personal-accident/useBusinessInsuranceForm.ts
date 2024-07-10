import { create } from "zustand";

type businessInsuranceFormType = {
  full_name: string;
  email: string;
  mobile_number: string;
  subject: string;
  message: string;
};

interface IBusinessInsuranceProps {
  businessInsuranceFormData: businessInsuranceFormType;
  setBusinessInsuranceFormData: (
    businessInsuranceFormData: businessInsuranceFormType
  ) => void;
}

export const useBusinessInsuranceForm = create<IBusinessInsuranceProps>()(
  (set) => ({
    businessInsuranceFormData: {
      full_name: "",
      email: "",
      mobile_number: "",
      subject: "",
      message: "",
    },
    setBusinessInsuranceFormData: (businessInsuranceFormData) =>
      set({ businessInsuranceFormData: businessInsuranceFormData }),
  })
);
