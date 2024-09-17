import { toast } from "react-toastify";
import {
  useMakeAClaimForm,
  useMarineClaimForm,
} from "../../../../hooks/store/make-a-claim";
import { claimsHeaderConfiguration } from "../../../configuration/header";
import { endpoints } from "../../../enpoints";
import { PostRequest } from "../../../requests";
import { useState } from "react";
import { showClaimDataType } from "../RegisterClaimService";

export const useSubmitMarineClaim = () => {
  const { makeAClaimFormData } = useMakeAClaimForm();
  const { marineClaimFormData } = useMarineClaimForm();
  const [showClaims, setShowClaims] = useState<showClaimDataType>({
    visible: false,
    claimsNumber: "",
  });

  const submitMarineClaim = async () => {
    const marineFormData = {
      policyHolderName: makeAClaimFormData.officeName,
      policyNumber: makeAClaimFormData.policyId,
      subRisk: makeAClaimFormData.subRisk,
      creationDate: makeAClaimFormData.creationDate,
      claimType: marineClaimFormData.claimType,
      email: marineClaimFormData.email,
      phoneNumber: marineClaimFormData.phoneNumber,
      dateTimeOfIncident: marineClaimFormData.dateTimeOfIncident,
      descriptionOfIncident: marineClaimFormData.descriptionOfIncident,
      listOfStolenItems: marineClaimFormData.listOfStolenItems,
      doYouHaveAWitness: marineClaimFormData.doYouHaveAWitness,
      nameOfWitness: marineClaimFormData.nameOfWitness,
      witnessContactInfo: marineClaimFormData.witnessContactInfo,
      hasThePoliceBeenInformed: marineClaimFormData.hasThePoliceBeenInformed,
      whenWasThePoliceInformed: marineClaimFormData.whenWasThePoliceInformed,
      policeStationAddress: marineClaimFormData.policeStationAddress,
      claimsAmount: marineClaimFormData.claimsAmount,
      evidenceUpload1: marineClaimFormData.evidenceUpload1,
      evidenceUpload2: marineClaimFormData.evidenceUpload2,
      evidenceUpload3: marineClaimFormData.evidenceUpload3,
      evidenceUpload4: marineClaimFormData.evidenceUpload4,
      eyeWitnessReport: marineClaimFormData.eyeWitnessReport,
      policeReport: marineClaimFormData.policeReport,
    };
    const formValue = new FormData();
    Object.keys(marineFormData).forEach((key) => {
      formValue.append(key, JSON.stringify(marineFormData[key]));
    });
    console.log(marineFormData);
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
    submitMarineClaim,
  };
};
