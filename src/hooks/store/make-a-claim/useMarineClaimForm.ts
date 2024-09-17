import { create } from "zustand";

export type marineClaimFormType = {
  claimType: string;
  email: string;
  phoneNumber: string;
  dateTimeOfIncident: string;
  descriptionOfIncident: string;
  listOfStolenItems: string;
  doYouHaveAWitness: string;
  nameOfWitness: string;
  witnessContactInfo: string;
  hasThePoliceBeenInformed: string;
  whenWasThePoliceInformed: string;
  policeStationAddress: string;
  claimsAmount: string;
  evidenceUpload1: any;
  evidenceUpload2: any;
  evidenceUpload3: any;
  evidenceUpload4: any;
  eyeWitnessReport: any;
  policeReport: any;
};

interface IMarineClaimFormProps {
  marineClaimFormData: marineClaimFormType;
  setMarineClaimFormData: (value: marineClaimFormType) => void;
}

export const useMarineClaimForm = create<IMarineClaimFormProps>()((set) => ({
  marineClaimFormData: {
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
    dateTimeOfIncident: "",
    evidenceUpload1: null,
    evidenceUpload2: null,
    evidenceUpload3: null,
    evidenceUpload4: null,
    eyeWitnessReport: null,
    policeReport: null,
  },
  setMarineClaimFormData: (marineClaimFormData) =>
    set({
      marineClaimFormData: marineClaimFormData,
    }),
}));
