import { create } from "zustand";

type oilAndGasClaimFormType = {
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

interface IOilAndGasClaimFormProps {
  oilAndGasClaimFormData: oilAndGasClaimFormType;
  setOilAndGasClaimFormData: (value: oilAndGasClaimFormType) => void;
}

export const useOilAndGasClaimForm = create<IOilAndGasClaimFormProps>()(
  (set) => ({
    oilAndGasClaimFormData: {
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
    setOilAndGasClaimFormData: (oilAndGasClaimFormData) =>
      set({
        oilAndGasClaimFormData: oilAndGasClaimFormData,
      }),
  })
);
