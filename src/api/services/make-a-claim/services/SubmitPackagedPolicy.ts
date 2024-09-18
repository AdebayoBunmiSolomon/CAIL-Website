import { toast } from "react-toastify";
import {
  useMakeAClaimForm,
  usePackagedPolicyClaimForm,
} from "../../../../hooks/store/make-a-claim";
import { claimsHeaderConfiguration } from "../../../configuration/header";
import { endpoints } from "../../../enpoints";
import { PostRequest } from "../../../requests";
import { useState } from "react";
import { showClaimDataType } from "../RegisterClaimService";

export const useSubmitPkgedPolicyClaim = () => {
  const { makeAClaimFormData } = useMakeAClaimForm();
  const { packagedPolicyClaimFormData } = usePackagedPolicyClaimForm();
  const [showClaims, setShowClaims] = useState<showClaimDataType>({
    visible: false,
    claimsNumber: "",
  });

  const submitPackagedPolicyClaim = async () => {
    const pkgedPolicyForm = {
      policyHolderName: makeAClaimFormData.officeName,
      policyNumber: makeAClaimFormData.policyId,
      subRisk: makeAClaimFormData.subRisk,
      creationDate: makeAClaimFormData.creationDate,
      claimType: "packaged policy",
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
      whenWasThePoliceInformed:
        packagedPolicyClaimFormData.whenWasThePoliceInformed,
      policeStationAddress: packagedPolicyClaimFormData.policeStationAddress,
      claimsAmount: packagedPolicyClaimFormData.claimsAmount,
      evidenceUpload1: packagedPolicyClaimFormData.evidenceUpload1,
      evidenceUpload2: packagedPolicyClaimFormData.evidenceUpload2,
      evidenceUpload3: packagedPolicyClaimFormData.evidenceUpload3,
      evidenceUpload4: packagedPolicyClaimFormData.evidenceUpload4,
      eyeWitnessReport: packagedPolicyClaimFormData.eyeWitnessReport,
      policeReport: packagedPolicyClaimFormData.policeReport,
    };
    const formValue = new FormData();
    Object.keys(pkgedPolicyForm).forEach((key) => {
      formValue.append(key, JSON.stringify(pkgedPolicyForm[key]));
    });
    console.log(pkgedPolicyForm);
    try {
      const { data } = await PostRequest(
        `${endpoints.POST_CLAIM}`,
        formValue,
        claimsHeaderConfiguration
      );
      if (data) {
        toast(data.message, {
          type: "success",
          theme: "colored",
        });
        setShowClaims({
          ...showClaims,
          visible: true,
          claimsNumber: data.data.claimId,
        });
      } else {
        toast("Claim submitted successfully", {
          type: "success",
          theme: "colored",
        });
        setShowClaims({
          ...showClaims,
          visible: false,
          claimsNumber: "",
        });
      }
    } catch (err: any) {
      console.log("Error", err);
    }
  };

  return {
    submitPackagedPolicyClaim,
  };
};
