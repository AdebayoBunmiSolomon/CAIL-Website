import { create } from "zustand";

type motorClaimFormType = {
  policyHolderName: string;
  policyNumber: string;
  policyType: string;
  vehicleRegNumber: string;
  email: string;
  mobileNumber: string;
  claimType: string;
  damageType: string;
  dateTimeOfLoss: string;
  descriptionOfIncident: string;
  doYouHaveAWitness: string;
  nameOfWitness: string;
  witnessContactInfo: string;
  whereCanTheVehicleBeInspected: string;
  isThirdPartyInvolved: string;
  hasThePoliceBeenInformed: string;
  whenWasThePoliceInformed: string;
  policeStationAddress: string;
  thirdPartyInformation: string;
  estimateOfRepairs: string;
  claimsAmount: string;
  purchaseOrReplacementInvoice: any;
  uploadScannedVehicleLicense: any;
  uploadInsuranceCertificate: any;
  policeReport: any;
  eyeWitnessReport: any;
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

interface IMotorClaimFormProps {
  motorClaimFormData: motorClaimFormType;
  setMotorClaimFormData: (value: motorClaimFormType) => void;
}

export const useMotorClaimForm = create<IMotorClaimFormProps>()((set) => ({
  motorClaimFormData: {
    policyHolderName: "",
    policyNumber: "",
    policyType: "",
    vehicleRegNumber: "",
    email: "",
    mobileNumber: "",
    claimType: "",
    damageType: "",
    dateTimeOfLoss: "",
    descriptionOfIncident: "",
    doYouHaveAWitness: "",
    nameOfWitness: "",
    witnessContactInfo: "",
    whereCanTheVehicleBeInspected: "",
    isThirdPartyInvolved: "",
    hasThePoliceBeenInformed: "",
    whenWasThePoliceInformed: "",
    policeStationAddress: "",
    thirdPartyInformation: "",
    estimateOfRepairs: "",
    claimsAmount: "",
    purchaseOrReplacementInvoice: null,
    uploadScannedVehicleLicense: null,
    uploadInsuranceCertificate: null,
    policeReport: null,
    eyeWitnessReport: null,
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
  setMotorClaimFormData: (motorClaimFormData) =>
    set({
      motorClaimFormData: motorClaimFormData,
    }),
}));
