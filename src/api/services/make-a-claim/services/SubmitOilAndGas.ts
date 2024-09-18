import { toast } from "react-toastify";
import {
  useMakeAClaimForm,
  useOilAndGasClaimForm,
} from "../../../../hooks/store/make-a-claim";
import { claimsHeaderConfiguration } from "../../../configuration/header";
import { endpoints } from "../../../enpoints";
import { PostRequest } from "../../../requests";
import { useState } from "react";
import { showClaimDataType } from "../RegisterClaimService";

export const useSubmitOilAndGasClaim = () => {
  const { makeAClaimFormData } = useMakeAClaimForm();
  const { oilAndGasClaimFormData } = useOilAndGasClaimForm();
  const [showClaims, setShowClaims] = useState<showClaimDataType>({
    visible: false,
    claimsNumber: "",
  });

  const submitOilAndGasClaim = async () => {
    const oilAndGasForm = {
      policyHolderName: makeAClaimFormData.officeName,
      policyNumber: makeAClaimFormData.policyId,
      subRisk: makeAClaimFormData.subRisk,
      creationDate: makeAClaimFormData.creationDate,
      claimType: "oil and gas",
      email: oilAndGasClaimFormData.email,
      phoneNumber: oilAndGasClaimFormData.phoneNumber,
      dateTimeOfIncident: oilAndGasClaimFormData.dateTimeOfIncident,
      descriptionOfIncident: oilAndGasClaimFormData.descriptionOfIncident,
      listOfStolenItems: oilAndGasClaimFormData.listOfStolenItems,
      doYouHaveAWitness: oilAndGasClaimFormData.doYouHaveAWitness,
      nameOfWitness: oilAndGasClaimFormData.nameOfWitness,
      witnessContactInfo: oilAndGasClaimFormData.witnessContactInfo,
      hasThePoliceBeenInformed: oilAndGasClaimFormData.hasThePoliceBeenInformed,
      whenWasThePoliceInformed: oilAndGasClaimFormData.whenWasThePoliceInformed,
      policeStationAddress: oilAndGasClaimFormData.policeStationAddress,
      claimsAmount: oilAndGasClaimFormData.claimsAmount,
      evidenceUpload1: oilAndGasClaimFormData.evidenceUpload1,
      evidenceUpload2: oilAndGasClaimFormData.evidenceUpload2,
      evidenceUpload3: oilAndGasClaimFormData.evidenceUpload3,
      evidenceUpload4: oilAndGasClaimFormData.evidenceUpload4,
      eyeWitnessReport: oilAndGasClaimFormData.eyeWitnessReport,
      policeReport: oilAndGasClaimFormData.policeReport,
    };
    const formValue = new FormData();
    Object.keys(oilAndGasForm).forEach((key) => {
      formValue.append(key, JSON.stringify(oilAndGasForm[key]));
    });
    console.log(oilAndGasForm);
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
    submitOilAndGasClaim,
  };
};
