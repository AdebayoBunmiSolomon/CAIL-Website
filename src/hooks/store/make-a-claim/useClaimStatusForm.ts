import { create } from "zustand";

type claimStatusFormType = {
  policyNumber: string;
  status: string;
  policyType: string;
};

interface IClaimStatusFormProps {
  claimStatusFormData: claimStatusFormType;
  setClaimStatusFormData: (values: claimStatusFormType) => void;
}

export const useClaimStatusForm = create<IClaimStatusFormProps>()((set) => ({
  claimStatusFormData: {
    policyNumber: "",
    status: "",
    policyType: "",
  },
  setClaimStatusFormData: (claimStatusFormData) =>
    set({ claimStatusFormData: claimStatusFormData }),
}));
