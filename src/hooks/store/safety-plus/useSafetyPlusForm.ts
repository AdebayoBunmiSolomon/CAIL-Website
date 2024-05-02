import { create } from "zustand";

type safetyPlusFormType = {
  title: string;
  surname: string;
  first_name: string;
  dob: string;
  gender: string;
  email: string;
  mobile_number: string;
  address: string;
  state: string;
  occupation: string;
  id_type: string;
  id_number: string;
  means_of_id: any; //file
  insured_date: string;
  policy_period: string;
  number_of_units: string;
  premium: string;
  id_type2: string;
  id_number2: string;
  company_name: string;
  company_address: string;
  beneficiary_name: string;
  beneficiary_dob: string;
  beneficiary_gender: string;
  beneficiary_relationship: string;
  means_of_id2: any; //file
};

interface ISafetyPlusFormProps {
  safetyPlusFormData: safetyPlusFormType;
  setSafetyPlusFormData: (safetyPlusFormData: safetyPlusFormType) => void;
}

export const useSafetyPlusForm = create<ISafetyPlusFormProps>()((set) => ({
  safetyPlusFormData: {
    title: "",
    surname: "",
    first_name: "",
    dob: "",
    gender: "",
    email: "",
    mobile_number: "",
    address: "",
    state: "",
    occupation: "",
    id_type: "",
    id_number: "",
    means_of_id: "", //file
    insured_date: "",
    policy_period: "",
    number_of_units: "",
    premium: "",
    id_type2: "",
    id_number2: "",
    company_name: "",
    company_address: "",
    beneficiary_name: "",
    beneficiary_dob: "",
    beneficiary_gender: "",
    beneficiary_relationship: "",
    means_of_id2: "",
  },
  setSafetyPlusFormData: (safetyPlusFormData) =>
    set({ safetyPlusFormData: safetyPlusFormData }),
}));
