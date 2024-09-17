import { create } from "zustand";

export type accidentClaimFormType = {
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
  purchaseOrReplacementInvoice: any;
  evidenceUpload1: any;
  evidenceUpload2: any;
  eyeWitnessReport: any;
  policeReport: any;
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
      purchaseOrReplacementInvoice: null,
      evidenceUpload1: null,
      evidenceUpload2: null,
      eyeWitnessReport: null,
      policeReport: null,
    },
    setAccidentClaimFormData: (accidentClaimFormData) =>
      set({
        accidentClaimFormData: accidentClaimFormData,
      }),
  })
);
