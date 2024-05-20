import { create } from "zustand";

type globalFileType = {
  purchaseOrReplacementInvoice: any;
  uploadDamagePic1: any;
  uploadDamagePic2: any;
  uploadDamagePic3: any;
  uploadDamagePic4: any;
  evidenceUpload1: any;
  evidenceUpload2: any;
  evidenceUpload3: any;
  evidenceUpload4: any;
  eyeWitnessReport: any;
  policeReport: any;
  fireServiceReport: any;
  uploadScannedVehicleLicense: any;
  uploadInsuranceCertificate: any;
  thirdPartyEvidenceOfInsuranceCover: any;
  thirdPartyRepairEstimate: any;
  thirdPartyDamageEvidence1: any;
  thirdPartyDamageEvidence2: any;
  repairEstimateInvoice: any;
  vehicleFrontView: any;
  vehicleRearView: any;
  vehicleLeftView: any;
  vehicleRightView: any;
};

interface IGlobalFileProps {
  globalFileData: globalFileType;
  setGlobalFileData: (values: globalFileType) => void;
}

export const useGlobalFileStore = create<IGlobalFileProps>()((set) => ({
  globalFileData: {
    purchaseOrReplacementInvoice: null,
    uploadDamagePic1: null,
    uploadDamagePic2: null,
    uploadDamagePic3: null,
    uploadDamagePic4: null,
    evidenceUpload1: null,
    evidenceUpload2: null,
    evidenceUpload3: null,
    evidenceUpload4: null,
    eyeWitnessReport: null,
    policeReport: null,
    fireServiceReport: null,
    uploadScannedVehicleLicense: null,
    uploadInsuranceCertificate: null,
    thirdPartyEvidenceOfInsuranceCover: null,
    thirdPartyRepairEstimate: null,
    thirdPartyDamageEvidence1: null,
    thirdPartyDamageEvidence2: null,
    repairEstimateInvoice: null,
    vehicleFrontView: null,
    vehicleRearView: null,
    vehicleLeftView: null,
    vehicleRightView: null,
  },
  setGlobalFileData: (globalFileData) =>
    set({ globalFileData: globalFileData }),
}));
