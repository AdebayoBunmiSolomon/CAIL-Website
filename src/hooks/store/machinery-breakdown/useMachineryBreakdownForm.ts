import { create } from "zustand";

type machineryBreakdownFormType = {
  first_name: string;
  surname: string;
  company_name: string;
  email: string;
  mobile_number: string;
  sum_insured: string;
  cover_type: string;
  address: string;
  state: string;
  id_type: string;
  id_number: string;
  means_of_id: string;
  machine_category: string;
  machine_value: string;
  payment_option: string;
  machine_maker: string;
  model_number: string;
  reg_number: string;
  chasis_no: string;
  engine_no: string;
  year_of_make: string;
  body_type: string;
  insured_date: string;
  machine_color: string;
  cost: string;
};

interface IMachineryBreakdownFormProps {
  machineryBreakdownFormData: machineryBreakdownFormType;
  setMachineryBreakDownFormData: (
    machineryBreakdownForm: machineryBreakdownFormType
  ) => void;
}

export const useMachineryBreakdownForm = create<IMachineryBreakdownFormProps>()(
  (set) => ({
    machineryBreakdownFormData: {
      first_name: "",
      surname: "",
      company_name: "",
      email: "",
      mobile_number: "",
      sum_insured: "",
      cover_type: "",
      address: "",
      state: "",
      id_type: "",
      id_number: "",
      means_of_id: "",
      machine_category: "",
      machine_value: "",
      payment_option: "",
      machine_maker: "",
      model_number: "",
      reg_number: "",
      chasis_no: "",
      engine_no: "",
      year_of_make: "",
      body_type: "",
      insured_date: "",
      machine_color: "",
      cost: "",
    },
    setMachineryBreakDownFormData: (machineryBreakdownFormData) =>
      set({ machineryBreakdownFormData: machineryBreakdownFormData }),
  })
);
