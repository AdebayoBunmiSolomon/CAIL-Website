import { toast } from "react-toastify";
import {
  useMakeAClaimForm,
  usePackagedPolicyClaimForm,
} from "../../../../hooks/store/make-a-claim";
import { claimsHeaderConfiguration } from "../../../configuration/header";
import { endpoints } from "../../../enpoints";
import { PostRequest } from "../../../requests";

export const useSubmitPkgedPolicyClaim = () => {
  const { makeAClaimFormData } = useMakeAClaimForm();
  const { packagedPolicyClaimFormData } = usePackagedPolicyClaimForm();

  const submitPackagedPolicyClaim = async () => {
    const formValue = new FormData();
    const pkgedPolicyForm = {
      policyHolderName: makeAClaimFormData.officeName,
      policyNumber: makeAClaimFormData.policyId,
      subRisk: makeAClaimFormData.subRisk,
      creationDate: packagedPolicyClaimFormData.dateTimeOfIncident,
      claimType: packagedPolicyClaimFormData.claimType,
      claimClass: "combinepackage",
      email: packagedPolicyClaimFormData.email,
      phoneNumber: packagedPolicyClaimFormData.phoneNumber,
      dateTimeOfIncident: packagedPolicyClaimFormData.dateTimeOfIncident,
      descriptionOfIncident: packagedPolicyClaimFormData.descriptionOfIncident,
      listOfStolenItems: packagedPolicyClaimFormData.listOfStolenItems,
      doYouHaveAWitness: packagedPolicyClaimFormData.doYouHaveAWitness,
      nameOfWitness: packagedPolicyClaimFormData.nameOfWitness,
      witnessContactInfo: packagedPolicyClaimFormData.witnessContactInfo,
      hasThePoliceBeenInformed:
        packagedPolicyClaimFormData.hasThePoliceBeenInformed,
      whenWasThePoliceInformed: "",
      policeStationAddress: packagedPolicyClaimFormData.policeStationAddress,
      //claimsAmount: packagedPolicyClaimFormData.claimsAmount,
      evidenceUpload1: packagedPolicyClaimFormData.evidenceUpload1,
      evidenceUpload2: packagedPolicyClaimFormData.evidenceUpload2,
      evidenceUpload3: packagedPolicyClaimFormData.evidenceUpload3,
      evidenceUpload4: packagedPolicyClaimFormData.evidenceUpload4,
      eyeWitnessReport: packagedPolicyClaimFormData.eyeWitnessReport,
      policeReport: packagedPolicyClaimFormData.policeReport,
    };
    Object.keys(pkgedPolicyForm).forEach((key) => {
      formValue.append(key, pkgedPolicyForm[key]);
    });
    try {
      const { data } = await PostRequest(
        `/api/claims`,
        formValue,
        claimsHeaderConfiguration
      );
      if (data) {
        toast("packaged policy claim successfully submitted", {
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
          type: "success",
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
    submitPackagedPolicyClaim,
  };
};
