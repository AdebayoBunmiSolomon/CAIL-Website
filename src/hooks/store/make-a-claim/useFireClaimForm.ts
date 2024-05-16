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
  },
  setFireClaimFormData: (fireClaimFormData) =>
    set({
      fireClaimFormData: fireClaimFormData,
    }),
}));
