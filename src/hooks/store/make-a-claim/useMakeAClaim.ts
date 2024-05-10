import { create } from "zustand";

type makeAClaimFormType = {
  policyNumber: string;
  vehicleRegNumber: string;
  policyHolderName: string;
  policyType: string;
  email: string;
  mobile_number: string;
  claimType: string;
  damageType: string;
  dateTimeOfLoss: string;
};

interface IMakeAClaimProps {
  makeAClaimFormData: makeAClaimFormType;
  setMakeAClaimFormData: (values: makeAClaimFormType) => void;
}

export const useMakeAClaimForm = create<IMakeAClaimProps>()((set) => ({
  makeAClaimFormData: {
    policyNumber: "",
    vehicleRegNumber: "",
    policyHolderName: "",
    policyType: "",
    email: "",
    mobile_number: "",
    claimType: "",
    damageType: "",
    dateTimeOfLoss: "",
  },
  setMakeAClaimFormData: (makeAClaimFormData) =>
    set({ makeAClaimFormData: makeAClaimFormData }),
}));
