import { toast } from "react-toastify";
import {
  useEngineeringClaimForm,
  useMakeAClaimForm,
} from "../../../../hooks/store/make-a-claim";
import { claimsHeaderConfiguration } from "../../../configuration/header";
import { endpoints } from "../../../enpoints";
import { PostRequest } from "../../../requests";

export const useSubmitEngineeringClaim = () => {
  const { makeAClaimFormData } = useMakeAClaimForm();
  const { engineeringClaimFormData } = useEngineeringClaimForm();

  const submitEngineeringClaim = async () => {
    const formValue = new FormData();
    const engineeringFormData = {
      policyHolderName: makeAClaimFormData.officeName,
      policyNumber: makeAClaimFormData.policyId,
      subRisk: makeAClaimFormData.subRisk,
      creationDate: engineeringClaimFormData.dateTimeOfIncident,
      claimType: engineeringClaimFormData.claimType,
      claimClass: "engineering",
      email: engineeringClaimFormData.email,
      phoneNumber: engineeringClaimFormData.phoneNumber,
      dateTimeOfIncident: "",
      descriptionOfIncident: engineeringClaimFormData.descriptionOfIncident,
      listOfStolenItems: engineeringClaimFormData.listOfStolenItems,
      doYouHaveAWitness: engineeringClaimFormData.doYouHaveAWitness,
      nameOfWitness: engineeringClaimFormData.nameOfWitness,
      witnessContactInfo: engineeringClaimFormData.witnessContactInfo,
      hasThePoliceBeenInformed:
        engineeringClaimFormData.hasThePoliceBeenInformed,
      whenWasThePoliceInformed: "",
      policeStationAddress: engineeringClaimFormData.policeStationAddress,
      //claimsAmount: engineeringClaimFormData.claimsAmount,
      evidenceUpload1: engineeringClaimFormData.evidenceUpload1,
      evidenceUpload2: engineeringClaimFormData.evidenceUpload2,
      evidenceUpload3: engineeringClaimFormData.evidenceUpload3,
      evidenceUpload4: engineeringClaimFormData.evidenceUpload4,
      eyeWitnessReport: engineeringClaimFormData.eyeWitnessReport,
      policeReport: engineeringClaimFormData.policeReport,
    };
    Object.keys(engineeringFormData).forEach((key) => {
      formValue.append(key, engineeringFormData[key]);
    });
    console.log(engineeringFormData);
    try {
      const { data } = await PostRequest(
        `/api/claims`,
        formValue,
        claimsHeaderConfiguration
      );
      if (data) {
        toast("engineering claims successfully submitted", {
          type: "success",
          theme: "colored",
        });
        return {
          visible: true,
          claimsNumber: data.claimId,
        };
      } else {
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
    submitEngineeringClaim,
  };
};
