import { create } from "zustand";

type bondClaimFormType = {
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

interface IBondClaimFormProps {
  bondClaimFormData: bondClaimFormType;
  setBondClaimFormData: (value: bondClaimFormType) => void;
}

export const useBondClaimForm = create<IBondClaimFormProps>()((set) => ({
  bondClaimFormData: {
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
  setBondClaimFormData: (bondClaimFormData) =>
    set({
      bondClaimFormData: bondClaimFormData,
    }),
}));
