import { create } from "zustand";

export type packagedPolicyClaimFormType = {
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
      evidenceUpload1: "",
      evidenceUpload2: "",
      evidenceUpload3: "",
      evidenceUpload4: "",
      eyeWitnessReport: "",
      policeReport: "",
    },
    setPackagedPolicyClaimFormData: (packagedPolicyClaimFormData) =>
      set({
        packagedPolicyClaimFormData: packagedPolicyClaimFormData,
      }),
  }));
