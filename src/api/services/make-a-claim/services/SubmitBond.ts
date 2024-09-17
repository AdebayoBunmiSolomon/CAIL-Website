import { toast } from "react-toastify";
import {
  useBondClaimForm,
  useMakeAClaimForm,
} from "../../../../hooks/store/make-a-claim";
import { claimsHeaderConfiguration } from "../../../configuration/header";
import { endpoints } from "../../../enpoints";
import { PostRequest } from "../../../requests";
import { useState } from "react";
import { showClaimDataType } from "../RegisterClaimService";

export const useSubmitBondClaim = () => {
  const { makeAClaimFormData } = useMakeAClaimForm();
  const { bondClaimFormData } = useBondClaimForm();
  const [showClaims, setShowClaims] = useState<showClaimDataType>({
    visible: false,
    claimsNumber: "",
  });

  const submitBondClaim = async () => {
    const bondFormData = {
      policyHolderName: makeAClaimFormData.officeName,
      policyNumber: makeAClaimFormData.policyId,
      subRisk: makeAClaimFormData.subRisk,
      creationDate: makeAClaimFormData.creationDate,
      claimType: "bond",
      email: bondClaimFormData.email,
      phoneNumber: bondClaimFormData.phoneNumber,
      dateTimeOfIncident: bondClaimFormData.dateTimeOfIncident,
      descriptionOfIncident: bondClaimFormData.descriptionOfIncident,
      listOfStolenItems: bondClaimFormData.listOfStolenItems,
      doYouHaveAWitness: bondClaimFormData.doYouHaveAWitness,
      nameOfWitness: bondClaimFormData.nameOfWitness,
      witnessContactInfo: bondClaimFormData.witnessContactInfo,
      hasThePoliceBeenInformed: bondClaimFormData.hasThePoliceBeenInformed,
      whenWasThePoliceInformed: bondClaimFormData.whenWasThePoliceInformed,
      policeStationAddress: bondClaimFormData.policeStationAddress,
      claimsAmount: bondClaimFormData.claimsAmount,
      evidenceUpload1: bondClaimFormData.evidenceUpload1,
      evidenceUpload2: bondClaimFormData.evidenceUpload2,
      evidenceUpload3: bondClaimFormData.evidenceUpload3,
      evidenceUpload4: bondClaimFormData.evidenceUpload4,
      eyeWitnessReport: bondClaimFormData.eyeWitnessReport,
      policeReport: bondClaimFormData.policeReport,
    };
    const formValue = new FormData();
    Object.keys(bondFormData).forEach((key) => {
      formValue.append(key, JSON.stringify(bondFormData[key]));
    });
    console.log(bondFormData);
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
        toast("Error saving claims data", {
          type: "error",
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
    submitBondClaim,
  };
};
