import { create } from "zustand";

interface ICalcPremFromAPIProps {
  calculatedPremFromAPI: string;
  setCalculatedPremFromAPI: (calculatedPremFromAPI: string) => void;
}

export const useCalcPremFromAPI = create<ICalcPremFromAPIProps>()((set) => ({
  calculatedPremFromAPI: "",
  setCalculatedPremFromAPI: (calculatedPremFromAPI) =>
    set({ calculatedPremFromAPI: calculatedPremFromAPI }),
}));
