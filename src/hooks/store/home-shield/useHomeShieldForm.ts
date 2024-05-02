import { create } from "zustand";

type homeShieldFormType = {
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
  means_of_id: any;
  insured_date: string;
  policy_period: string;
  no_of_units: string;
  insured_property_address: string;
  list_of_insured_property: string;
  premium: string;
};

interface IHomeShieldProps {
  homeShieldFormData: homeShieldFormType;
  setHomeShieldFormData: (homeShieldFormData: homeShieldFormType) => void;
}

export const useHomeShieldForm = create<IHomeShieldProps>()((set) => ({
  homeShieldFormData: {
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
    means_of_id: "",
    insured_date: "",
    policy_period: "",
    no_of_units: "",
    insured_property_address: "",
    list_of_insured_property: "",
    premium: "",
  },
  setHomeShieldFormData: (homeShieldFormData) =>
    set({ homeShieldFormData: homeShieldFormData }),
}));
