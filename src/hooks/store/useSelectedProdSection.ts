import { create } from "zustand";

interface ISelectedProdSectionProps {
  selectedProdSection: string;
  setSelectedProdSection: (selectedProdSection: string) => void;
}

export const useSelectedProdSection = create<ISelectedProdSectionProps>()(
  (set) => ({
    selectedProdSection: "",
    setSelectedProdSection: (selectedProdSection) =>
      set({ selectedProdSection: selectedProdSection }),
  })
);
