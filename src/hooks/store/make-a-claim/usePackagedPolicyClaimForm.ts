import { create } from "zustand";

type packagedPolicyClaimFormType = {
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

interface IPackagedPolicyClaimFormProps {
  packagedPolicyClaimFormData: packagedPolicyClaimFormType;
  setPackagedPolicyClaimFormData: (value: packagedPolicyClaimFormType) => void;
}

export const usePackagedPolicyClaimForm =
  create<IPackagedPolicyClaimFormProps>()((set) => ({
    packagedPolicyClaimFormData: {
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
    setPackagedPolicyClaimFormData: (packagedPolicyClaimFormData) =>
      set({
        packagedPolicyClaimFormData: packagedPolicyClaimFormData,
      }),
  }));
