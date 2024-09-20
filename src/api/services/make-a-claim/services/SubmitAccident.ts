import { toast } from "react-toastify";
import {
  useAccidentClaimForm,
  useMakeAClaimForm,
} from "../../../../hooks/store/make-a-claim";
import { claimsHeaderConfiguration } from "../../../configuration/header";
import { endpoints } from "../../../enpoints";
import { PostRequest } from "../../../requests";
import { useState } from "react";
import { showClaimDataType } from "../RegisterClaimService";

export const useSubmitAccidentClaim = () => {
  const { makeAClaimFormData } = useMakeAClaimForm();
  const { accidentClaimFormData } = useAccidentClaimForm();
  const [showClaims, setShowClaims] = useState<showClaimDataType>({
    visible: false,
    claimsNumber: "",
  });

  const submitAccidentClaim = async () => {
    const accidentFormData = {
      policyHolderName: makeAClaimFormData.officeName,
      policyNumber: makeAClaimFormData.policyId,
      subRisk: makeAClaimFormData.subRisk,
      creationDate: makeAClaimFormData.creationDate,
      claimType: "accident",
      email: accidentClaimFormData.email,
      phoneNumber: accidentClaimFormData.phoneNumber,
      dateTimeOfLoss: accidentClaimFormData.dateTimeOfLoss,
      wasThePremiseOccupiedAtTheTime:
        accidentClaimFormData.wasThePremiseOccupiedAtTheTime,
      dateLastOccupied: accidentClaimFormData.dateLastOccupied,
      descriptionOfIncident: accidentClaimFormData.descriptionOfIncident,
      listOfStolenItems: accidentClaimFormData.listOfStolenItems,
      doYouHaveAWitness: accidentClaimFormData.doYouHaveAWitness,
      nameOfWitness: accidentClaimFormData.nameOfWitness,
      witnessContactInfo: accidentClaimFormData.witnessContactInfo,
      hasThePoliceBeenInformed: accidentClaimFormData.hasThePoliceBeenInformed,
      whenWasThePoliceInformed: accidentClaimFormData.whenWasThePoliceInformed,
      policeStationAddress: accidentClaimFormData.policeStationAddress,
      claimsAmount: accidentClaimFormData.claimsAmount,
      purchaseOrReplacementInvoice:
        accidentClaimFormData.purchaseOrReplacementInvoice,
      evidenceUpload1: accidentClaimFormData.evidenceUpload1,
      evidenceUpload2: accidentClaimFormData.evidenceUpload2,
      eyeWitnessReport: accidentClaimFormData.eyeWitnessReport,
      policeReport: accidentClaimFormData.policeReport,
    };
    const formValue = new FormData();
    Object.keys(accidentFormData).forEach((key) => {
      formValue.append(key, JSON.stringify(accidentFormData[key]));
    });
    console.log(accidentClaimFormData);
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
    submitAccidentClaim,
  };
};
