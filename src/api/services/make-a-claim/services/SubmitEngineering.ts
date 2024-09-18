import { toast } from "react-toastify";
import {
  useAccidentClaimForm,
  useEngineeringClaimForm,
  useMakeAClaimForm,
} from "../../../../hooks/store/make-a-claim";
import { claimsHeaderConfiguration } from "../../../configuration/header";
import { endpoints } from "../../../enpoints";
import { PostRequest } from "../../../requests";
import { useState } from "react";
import { showClaimDataType } from "../RegisterClaimService";

export const useSubmitEngineeringClaim = () => {
  const { makeAClaimFormData } = useMakeAClaimForm();
  const { engineeringClaimFormData } = useEngineeringClaimForm();
  const [showClaims, setShowClaims] = useState<showClaimDataType>({
    visible: false,
    claimsNumber: "",
  });

  const submitEngineeringClaim = async () => {
    const engineeringFormData = {
      policyHolderName: makeAClaimFormData.officeName,
      policyNumber: makeAClaimFormData.policyId,
      subRisk: makeAClaimFormData.subRisk,
      creationDate: makeAClaimFormData.creationDate,
      claimType: "engineering",
      email: engineeringClaimFormData.email,
      phoneNumber: engineeringClaimFormData.phoneNumber,
      dateTimeOfIncident: engineeringClaimFormData.dateTimeOfIncident,
      descriptionOfIncident: engineeringClaimFormData.descriptionOfIncident,
      listOfStolenItems: engineeringClaimFormData.listOfStolenItems,
      doYouHaveAWitness: engineeringClaimFormData.doYouHaveAWitness,
      nameOfWitness: engineeringClaimFormData.nameOfWitness,
      witnessContactInfo: engineeringClaimFormData.witnessContactInfo,
      hasThePoliceBeenInformed:
        engineeringClaimFormData.hasThePoliceBeenInformed,
      whenWasThePoliceInformed:
        engineeringClaimFormData.whenWasThePoliceInformed,
      policeStationAddress: engineeringClaimFormData.policeStationAddress,
      claimsAmount: engineeringClaimFormData.claimsAmount,
      evidenceUpload1: engineeringClaimFormData.evidenceUpload1,
      evidenceUpload2: engineeringClaimFormData.evidenceUpload2,
      evidenceUpload3: engineeringClaimFormData.evidenceUpload3,
      evidenceUpload4: engineeringClaimFormData.evidenceUpload4,
      eyeWitnessReport: engineeringClaimFormData.eyeWitnessReport,
      policeReport: engineeringClaimFormData.policeReport,
    };
    const formValue = new FormData();
    Object.keys(engineeringFormData).forEach((key) => {
      formValue.append(key, JSON.stringify(engineeringFormData[key]));
    });
    console.log(engineeringFormData);
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
    submitEngineeringClaim,
  };
};
