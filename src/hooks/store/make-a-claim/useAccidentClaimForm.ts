import { create } from "zustand";

type accidentClaimFormType = {
  claimType: string;
  email: string;
  phoneNumber: string;
  dateTimeOfLoss: string;
  wasThePremiseOccupiedAtTheTime: string;
  dateLastOccupied: string;
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

interface IAccidentClaimFormProps {
  accidentClaimFormData: accidentClaimFormType;
  setAccidentClaimFormData: (value: accidentClaimFormType) => void;
}

export const useAccidentClaimForm = create<IAccidentClaimFormProps>()(
  (set) => ({
    accidentClaimFormData: {
      claimType: "",
      email: "",
      phoneNumber: "",
      dateTimeOfLoss: "",
      wasThePremiseOccupiedAtTheTime: "",
      dateLastOccupied: "",
      descriptionOfIncident: "",
      listOfStolenItems: "",
      doYouHaveAWitness: "",
      nameOfWitness: "",
      witnessContactInfo: "",
      hasThePoliceBeenInformed: "",
      whenWasThePoliceInformed: "",
      policeStationAddress: "",
      claimsAmount: "",
    },
    setAccidentClaimFormData: (accidentClaimFormData) =>
      set({
        accidentClaimFormData: accidentClaimFormData,
      }),
  })
);
