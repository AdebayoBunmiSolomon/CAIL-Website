import { create } from "zustand";

const currentDate = new Date();

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
  identification_type: string;
  coverTypeId: string;
  coverTypeName: string;
  vehicleCategory: string;
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
  file: any;
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
    identification_type: "",
    coverTypeName: "",
    coverTypeId: "",
    vehicleCategory: "",
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
  },
  setMotorFormData: (motorFormData) => set({ motorFormData: motorFormData }),
}));
