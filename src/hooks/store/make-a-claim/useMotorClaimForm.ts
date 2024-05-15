import { create } from "zustand";

type motorClaimFormType = {
  policyHolderName: string;
  policyNumber: string;
  policyType: string;
  vehicleRegNumber: string;
  email: string;
  mobileNumber: string;
  claimType: string;
  damageType: string;
  dateTimeOfLoss: string;
  descriptionOfIncident: string;
  doYouHaveAWitness: string;
  nameOfWitness: string;
  witnessContactInfo: string;
  whereCanTheVehicleBeInspected: string;
  isThirdPartyInvolved: string;
  hasThePoliceBeenInformed: string;
  whenWasThePoliceInformed: string;
  policeStationAddress: string;
  thirdPartyInformation: string;
  estimateOfRepairs: string;
  claimsAmount: string;
};

interface IMotorClaimFormProps {
  motorClaimFormData: motorClaimFormType;
  setMotorClaimFormData: (value: motorClaimFormType) => void;
}

export const useMotorClaimForm = create<IMotorClaimFormProps>()((set) => ({
  motorClaimFormData: {
    policyHolderName: "",
    policyNumber: "",
    policyType: "",
    vehicleRegNumber: "",
    email: "",
    mobileNumber: "",
    claimType: "",
    damageType: "",
    dateTimeOfLoss: "",
    descriptionOfIncident: "",
    doYouHaveAWitness: "",
    nameOfWitness: "",
    witnessContactInfo: "",
    whereCanTheVehicleBeInspected: "",
    isThirdPartyInvolved: "",
    hasThePoliceBeenInformed: "",
    whenWasThePoliceInformed: "",
    policeStationAddress: "",
    thirdPartyInformation: "",
    estimateOfRepairs: "",
    claimsAmount: "",
  },
  setMotorClaimFormData: (motorClaimFormData) =>
    set({
      motorClaimFormData: motorClaimFormData,
    }),
}));
