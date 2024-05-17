import { create } from "zustand";

type aviationClaimFormType = {
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

interface IAviationClaimFormProps {
  aviationClaimFormData: aviationClaimFormType;
  setAviationClaimFormData: (value: aviationClaimFormType) => void;
}

export const useAviationClaimForm = create<IAviationClaimFormProps>()(
  (set) => ({
    aviationClaimFormData: {
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
    setAviationClaimFormData: (aviationClaimFormData) =>
      set({
        aviationClaimFormData: aviationClaimFormData,
      }),
  })
);
