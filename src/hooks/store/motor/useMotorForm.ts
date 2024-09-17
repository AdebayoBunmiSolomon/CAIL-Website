import { create } from "zustand";

type motorFormType = {
  title: string;
  firstName: string;
  surName: string;
  email: string;
  phoneNumber: string;
  birthDate: any;
  gender: string;
  occupation: string;
  address: string;
  state: string;
  identification_number: string;
  identification_type: number;
  identification_name: string;
  coverTypeId: number;
  coverTypeName: string;
  vehicleCategory: number;
  vehicleCategoryName: string;
  vehicle_usage_id: number;
  vehicleValue: string;
  paymentOption: string;
  vehicleMake: string;
  vehicleType: string;
  registrationNumber: string;
  chasisNumber: string;
  engineNumber: string;
  year: string;
  vehicleBodyType: string;
  startDate: any; //insurance start date
  endDate: any; // insurance end date
  vehicleColor: string;
  cost: string;
  file: any; //means of identification
  base64File: string;
};

interface IMotorFormProps {
  motorFormData: motorFormType;
  setMotorFormData: (motorFormData: motorFormType) => void;
}

export const useMotorForm = create<IMotorFormProps>()((set) => ({
  motorFormData: {
    title: "",
    firstName: "",
    surName: "",
    email: "",
    phoneNumber: "",
    birthDate: "",
    gender: "",
    occupation: "",
    address: "",
    state: "",
    identification_number: "",
    identification_type: 0,
    identification_name: "",
    coverTypeName: "",
    coverTypeId: 0,
    vehicleCategory: 0,
    vehicleCategoryName: "",
    vehicle_usage_id: 0,
    vehicleValue: "",
    paymentOption: "",
    vehicleMake: "",
    vehicleType: "",
    registrationNumber: "",
    chasisNumber: "",
    engineNumber: "",
    year: "",
    vehicleBodyType: "",
    startDate: "", //insurance start date
    endDate: "", // insurance end date
    vehicleColor: "",
    cost: "",
    file: null,
    base64File: "",
  },
  setMotorFormData: (motorFormData) => set({ motorFormData: motorFormData }),
}));
