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
    },
    setOilAndGasClaimFormData: (oilAndGasClaimFormData) =>
      set({
        oilAndGasClaimFormData: oilAndGasClaimFormData,
      }),
  })
);
