import { create } from "zustand";

type marineClaimFormType = {
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
  },
  setMarineClaimFormData: (marineClaimFormData) =>
    set({
      marineClaimFormData: marineClaimFormData,
    }),
}));
