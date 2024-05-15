import { create } from "zustand";

type makeAClaimFormType = {
  officeName: string;
  policyId: string;
  subRisk: string;
  creationDate: string;
};

interface IMakeAClaimProps {
  makeAClaimFormData: makeAClaimFormType;
  setMakeAClaimFormData: (values: makeAClaimFormType) => void;
}

export const useMakeAClaimForm = create<IMakeAClaimProps>()((set) => ({
  makeAClaimFormData: {
    officeName: "",
    policyId: "",
    subRisk: "",
    creationDate: "",
  },
  setMakeAClaimFormData: (makeAClaimFormData) =>
    set({ makeAClaimFormData: makeAClaimFormData }),
}));
