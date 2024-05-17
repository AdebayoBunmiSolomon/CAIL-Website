import { useGlobalStore } from "./store/make-a-claim";

export const useProtectedMakeAClaim = () => {
  const { globalData } = useGlobalStore();
  if (globalData.policyNumber) {
    return {
      isPolicyNumberStored: true,
    };
  } else {
    return {
      isPolicyNumberStored: false,
    };
  }
};
