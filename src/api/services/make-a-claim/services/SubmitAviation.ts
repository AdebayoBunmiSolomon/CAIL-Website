import { toast } from "react-toastify";
import {
  useAviationClaimForm,
  useMakeAClaimForm,
} from "../../../../hooks/store/make-a-claim";
import { claimsHeaderConfiguration } from "../../../configuration/header";
import { endpoints } from "../../../enpoints";
import { PostRequest } from "../../../requests";

export const useSubmitAviationClaim = () => {
  const { makeAClaimFormData } = useMakeAClaimForm();
  const { aviationClaimFormData } = useAviationClaimForm();

  const submitAviationClaim = async () => {
    const formValue = new FormData();
    const aviationFormData = {
      policyHolderName: makeAClaimFormData.officeName,
      policyNumber: makeAClaimFormData.policyId,
      subRisk: makeAClaimFormData.subRisk,
      creationDate: aviationClaimFormData.dateTimeOfIncident,
      claimType: aviationClaimFormData.claimType,
      claimClass: "aviation",
      email: aviationClaimFormData.email,
      phoneNumber: aviationClaimFormData.phoneNumber,
      dateTimeOfIncident: "",
      descriptionOfIncident: aviationClaimFormData.descriptionOfIncident,
      listOfStolenItems: aviationClaimFormData.listOfStolenItems,
      doYouHaveAWitness: aviationClaimFormData.doYouHaveAWitness,
      nameOfWitness: aviationClaimFormData.nameOfWitness,
      witnessContactInfo: aviationClaimFormData.witnessContactInfo,
      hasThePoliceBeenInformed: aviationClaimFormData.hasThePoliceBeenInformed,
      whenWasThePoliceInformed: "",
      policeStationAddress: aviationClaimFormData.policeStationAddress,
      //claimsAmount: aviationClaimFormData.claimsAmount,
      evidenceUpload1: aviationClaimFormData.evidenceUpload1,
      evidenceUpload2: aviationClaimFormData.evidenceUpload2,
      evidenceUpload3: aviationClaimFormData.evidenceUpload3,
      evidenceUpload4: aviationClaimFormData.evidenceUpload4,
      eyeWitnessReport: aviationClaimFormData.eyeWitnessReport,
      policeReport: aviationClaimFormData.policeReport,
    };
    Object.keys(aviationFormData).forEach((key) => {
      formValue.append(key, aviationFormData[key]);
    });
    try {
      const { data } = await PostRequest(
        `/api/claims`,
        formValue,
        claimsHeaderConfiguration
      );
      if (data) {
        toast("aviation claim successfully submitted", {
          type: "success",
          theme: "colored",
        });
        return {
          visible: true,
          claimsNumber: data.claimId,
        };
      } else {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        toast("Error submitting claims", {
          type: "error",
          theme: "colored",
        });
        return {
          visible: false,
          claimsNumber: "",
        };
      }
    } catch (err: any) {
      console.log("Error", err);
      return {
        visible: false,
        claimsNumber: "",
      };
    }
  };

  return {
    submitAviationClaim,
  };
};
