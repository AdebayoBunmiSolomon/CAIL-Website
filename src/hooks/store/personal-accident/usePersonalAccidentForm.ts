import { create } from "zustand";

type personalAccidentFormType = {
  full_name: string;
  email: string;
  mobile_number: string;
  subject: string;
  message: string;
};

interface IPersonalAccidentProps {
  personalAccidentFormData: personalAccidentFormType;
  setPersonalAccidentFormData: (
    personalAccidentFormData: personalAccidentFormType
  ) => void;
}

export const usePersonalAccidentForm = create<IPersonalAccidentProps>()(
  (set) => ({
    personalAccidentFormData: {
      full_name: "",
      email: "",
      mobile_number: "",
      subject: "",
      message: "",
    },
    setPersonalAccidentFormData: (personalAccidentFormData) =>
      set({ personalAccidentFormData: personalAccidentFormData }),
  })
);
