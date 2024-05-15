import { create } from "zustand";

type engineeringClaimFormType = {
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

interface IEngineeringClaimFormProps {
  engineeringClaimFormData: engineeringClaimFormType;
  setEngineeringClaimFormData: (value: engineeringClaimFormType) => void;
}

export const useEngineeringClaimForm = create<IEngineeringClaimFormProps>()(
  (set) => ({
    engineeringClaimFormData: {
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
    setEngineeringClaimFormData: (engineeringClaimFormData) =>
      set({
        engineeringClaimFormData: engineeringClaimFormData,
      }),
  })
);
