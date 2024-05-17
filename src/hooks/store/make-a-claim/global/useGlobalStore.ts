import { create } from "zustand";

type globalType = {
  doYouHaveAWitness: boolean;
  hasTheFireServiceBeenInformed: boolean;
  hasThePoliceBeenInformed: boolean;
  claimType: string;
  thirdPartyInvolved: string;
  policyNumber: string;
};

interface IGlobalProps {
  globalData: globalType;
  setGlobalData: (values: globalType) => void;
}

export const useGlobalStore = create<IGlobalProps>()((set) => ({
  globalData: {
    doYouHaveAWitness: false,
    hasTheFireServiceBeenInformed: false,
    hasThePoliceBeenInformed: false,
    claimType: "",
    thirdPartyInvolved: "",
    policyNumber: "",
  },
  setGlobalData: (globalData) => set({ globalData: globalData }),
}));
