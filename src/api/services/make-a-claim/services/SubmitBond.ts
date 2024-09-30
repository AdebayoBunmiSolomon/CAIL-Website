import { toast } from "react-toastify";
import {
  useBondClaimForm,
  useMakeAClaimForm,
} from "../../../../hooks/store/make-a-claim";
import { claimsHeaderConfiguration } from "../../../configuration/header";
import { endpoints } from "../../../enpoints";
import { PostRequest } from "../../../requests";

export const useSubmitBondClaim = () => {
  const { makeAClaimFormData } = useMakeAClaimForm();
  const { bondClaimFormData } = useBondClaimForm();

  const submitBondClaim = async () => {
    const formValue = new FormData();
    const bondFormData = {
      policyHolderName: makeAClaimFormData.officeName,
      policyNumber: makeAClaimFormData.policyId,
      subRisk: makeAClaimFormData.subRisk,
      creationDate: bondClaimFormData.dateTimeOfIncident,
      claimType: bondClaimFormData.claimType,
      claimClass: "bond",
      email: bondClaimFormData.email,
      phoneNumber: bondClaimFormData.phoneNumber,
      dateTimeOfIncident: "",
      descriptionOfIncident: bondClaimFormData.descriptionOfIncident,
      listOfStolenItems: bondClaimFormData.listOfStolenItems,
      doYouHaveAWitness: bondClaimFormData.doYouHaveAWitness,
      nameOfWitness: bondClaimFormData.nameOfWitness,
      witnessContactInfo: bondClaimFormData.witnessContactInfo,
      hasThePoliceBeenInformed: bondClaimFormData.hasThePoliceBeenInformed,
      whenWasThePoliceInformed: "",
      policeStationAddress: bondClaimFormData.policeStationAddress,
      //claimsAmount: bondClaimFormData.claimsAmount,
      evidenceUpload1: bondClaimFormData.evidenceUpload1,
      evidenceUpload2: bondClaimFormData.evidenceUpload2,
      evidenceUpload3: bondClaimFormData.evidenceUpload3,
      evidenceUpload4: bondClaimFormData.evidenceUpload4,
      eyeWitnessReport: bondClaimFormData.eyeWitnessReport,
      policeReport: bondClaimFormData.policeReport,
    };
    Object.keys(bondFormData).forEach((key) => {
      formValue.append(key, bondFormData[key]);
    });
    console.log(bondFormData);
    try {
      const { data } = await PostRequest(
        `/api/claims`,
        formValue,
        claimsHeaderConfiguration
      );
      if (data) {
        toast("bond claim successfully submitted", {
          type: "success",
          theme: "colored",
        });
        return {
          visible: true,
          claimsNumber: data.claimId,
        };
      } else {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        toast("Error submitting claim", {
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
    submitBondClaim,
  };
};
