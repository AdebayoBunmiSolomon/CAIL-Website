import { toast } from "react-toastify";
import {
  useAviationClaimForm,
  useMakeAClaimForm,
} from "../../../../hooks/store/make-a-claim";
import { claimsHeaderConfiguration } from "../../../configuration/header";
import { endpoints } from "../../../enpoints";
import { PostRequest } from "../../../requests";
import { useState } from "react";
import { showClaimDataType } from "../RegisterClaimService";

export const useSubmitAviationClaim = () => {
  const { makeAClaimFormData } = useMakeAClaimForm();
  const { aviationClaimFormData } = useAviationClaimForm();
  const [showClaims, setShowClaims] = useState<showClaimDataType>({
    visible: false,
    claimsNumber: "",
  });

  const submitAviationClaim = async () => {
    const aviationFormData = {
      policyHolderName: makeAClaimFormData.officeName,
      policyNumber: makeAClaimFormData.policyId,
      subRisk: makeAClaimFormData.subRisk,
      creationDate: makeAClaimFormData.creationDate,
      claimType: "aviation",
      email: aviationClaimFormData.email,
      phoneNumber: aviationClaimFormData.phoneNumber,
      dateTimeOfIncident: aviationClaimFormData.dateTimeOfIncident,
      descriptionOfIncident: aviationClaimFormData.descriptionOfIncident,
      listOfStolenItems: aviationClaimFormData.listOfStolenItems,
      doYouHaveAWitness: aviationClaimFormData.doYouHaveAWitness,
      nameOfWitness: aviationClaimFormData.nameOfWitness,
      witnessContactInfo: aviationClaimFormData.witnessContactInfo,
      hasThePoliceBeenInformed: aviationClaimFormData.hasThePoliceBeenInformed,
      whenWasThePoliceInformed: aviationClaimFormData.whenWasThePoliceInformed,
      policeStationAddress: aviationClaimFormData.policeStationAddress,
      claimsAmount: aviationClaimFormData.claimsAmount,
      evidenceUpload1: aviationClaimFormData.evidenceUpload1,
      evidenceUpload2: aviationClaimFormData.evidenceUpload2,
      evidenceUpload3: aviationClaimFormData.evidenceUpload3,
      evidenceUpload4: aviationClaimFormData.evidenceUpload4,
      eyeWitnessReport: aviationClaimFormData.eyeWitnessReport,
      policeReport: aviationClaimFormData.policeReport,
    };
    const formValue = new FormData();
    Object.keys(aviationFormData).forEach((key) => {
      formValue.append(key, JSON.stringify(aviationFormData[key]));
    });
    console.log(aviationFormData);
    try {
      const { data } = await PostRequest(
        `${endpoints.POST_CLAIM}`,
        formValue,
        claimsHeaderConfiguration
      );
      if (data) {
        // toast(data.message, {
        //   type: "success",
        //   theme: "colored",
        // });
        setShowClaims({
          ...showClaims,
          visible: true,
          claimsNumber: data.data.claimId,
        });
      } else {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        toast("Claim submitted successfully", {
          type: "success",
          theme: "colored",
        });
        setShowClaims({
          ...showClaims,
          visible: false,
          claimsNumber: "",
        });
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (err: any) {
      console.log("Error", err);
    }
  };

  return {
    submitAviationClaim,
  };
};
