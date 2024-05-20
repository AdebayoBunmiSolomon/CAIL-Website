import { create } from "zustand";

type fireClaimFormType = {
  claimType: string;
  email: string;
  phoneNumber: string;
  dateTimeOfLoss: string;
  descriptionOfIncident: string;
  listOfStolenItems: string;
  doYouHaveAWitness: string;
  nameOfWitness: string;
  witnessContactInfo: string;
  hasTheFireServiceBeenInformed: string;
  fireServiceStationAddress: string;
  doYouHaveAFireServiceReport: string;
  hasThePoliceBeenInformed: string;
  whenWasThePoliceInformed: string;
  policeStationAddress: string;
  claimsAmount: string;
  purchaseOrReplacementInvoice: any;
  uploadDamagePic1: any;
  uploadDamagePic2: any;
  uploadDamagePic3: any;
  uploadDamagePic4: any;
  eyeWitnessReport: any;
  policeReport: any;
  fireServiceReport: any;
};

interface IFireClaimFormProps {
  fireClaimFormData: fireClaimFormType;
  setFireClaimFormData: (value: fireClaimFormType) => void;
}

export const useFireClaimForm = create<IFireClaimFormProps>()((set) => ({
  fireClaimFormData: {
    claimType: "",
    email: "",
    phoneNumber: "",
    descriptionOfIncident: "",
    listOfStolenItems: "",
    doYouHaveAWitness: "",
    nameOfWitness: "",
    witnessContactInfo: "",
    hasThePoliceBeenInformed: "",
    whenWasThePoliceInformed: "",
    policeStationAddress: "",
    claimsAmount: "",
    dateTimeOfLoss: "",
    hasTheFireServiceBeenInformed: "",
    fireServiceStationAddress: "",
    doYouHaveAFireServiceReport: "",
    purchaseOrReplacementInvoice: null,
    uploadDamagePic1: null,
    uploadDamagePic2: null,
    uploadDamagePic3: null,
    uploadDamagePic4: null,
    eyeWitnessReport: null,
    policeReport: null,
    fireServiceReport: null,
  },
  setFireClaimFormData: (fireClaimFormData) =>
    set({
      fireClaimFormData: fireClaimFormData,
    }),
}));
