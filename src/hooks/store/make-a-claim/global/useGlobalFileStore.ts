import { create } from "zustand";

type globalFileType = {
  purchaseOrReplacementInvoice: any;
  evidenceUpload1: any;
  evidenceUpload2: any;
  evidenceUpload3: any;
  evidenceUpload4: any;
  eyeWitnessReport: any;
  policeReport: any;
};

interface IGlobalFileProps {
  globalFileData: globalFileType;
  setGlobalFileData: (values: globalFileType) => void;
}

export const useGlobalFileStore = create<IGlobalFileProps>()((set) => ({
  globalFileData: {
    purchaseOrReplacementInvoice: null,
    evidenceUpload1: null,
    evidenceUpload2: null,
    evidenceUpload3: null,
    evidenceUpload4: null,
    eyeWitnessReport: null,
    policeReport: null,
  },
  setGlobalFileData: (globalFileData) =>
    set({ globalFileData: globalFileData }),
}));
