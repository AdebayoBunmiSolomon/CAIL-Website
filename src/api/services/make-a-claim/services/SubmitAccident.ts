import { toast } from "react-toastify";
import {
  useAccidentClaimForm,
  useMakeAClaimForm,
} from "../../../../hooks/store/make-a-claim";
import { claimsHeaderConfiguration } from "../../../configuration/header";
import { endpoints } from "../../../enpoints";
import { PostRequest } from "../../../requests";

export const useSubmitAccidentClaim = () => {
  const { makeAClaimFormData } = useMakeAClaimForm();
  const { accidentClaimFormData } = useAccidentClaimForm();

  const submitAccidentClaim = async () => {
    const formData = new FormData();
    const accidentFormData = {
      policyHolderName: makeAClaimFormData.officeName,
      policyNumber: makeAClaimFormData.policyId,
      subRisk: makeAClaimFormData.subRisk,
      creationDate: accidentClaimFormData.dateTimeOfLoss,
      claimType: accidentClaimFormData.claimType,
      claimClass: "accident",
      email: accidentClaimFormData.email,
      phoneNumber: accidentClaimFormData.phoneNumber,
      dateTimeOfLoss: "", //accidentClaimFormData.dateTimeOfLoss,
      wasThePremiseOccupiedAtTheTime:
        accidentClaimFormData.wasThePremiseOccupiedAtTheTime,
      dateLastOccupied: "", //accidentClaimFormData.dateLastOccupied,
      descriptionOfIncident: accidentClaimFormData.descriptionOfIncident,
      listOfStolenItems: accidentClaimFormData.listOfStolenItems,
      doYouHaveAWitness: accidentClaimFormData.doYouHaveAWitness,
      nameOfWitness: accidentClaimFormData.nameOfWitness,
      witnessContactInfo: accidentClaimFormData.witnessContactInfo,
      hasThePoliceBeenInformed: accidentClaimFormData.hasThePoliceBeenInformed,
      whenWasThePoliceInformed: "", //accidentClaimFormData.whenWasThePoliceInformed,
      policeStationAddress: accidentClaimFormData.policeStationAddress,
      //claimsAmount: 7000,
      purchaseOrReplacementInvoice:
        accidentClaimFormData.purchaseOrReplacementInvoice,
      evidenceUpload1: accidentClaimFormData.evidenceUpload1,
      evidenceUpload2: accidentClaimFormData.evidenceUpload2,
      eyeWitnessReport: accidentClaimFormData.eyeWitnessReport,
      policeReport: accidentClaimFormData.policeReport,
    };

    Object.keys(accidentFormData).forEach((key) => {
      formData.append(key, accidentFormData[key]);
    });

    try {
      const { data } = await PostRequest(
        `/api/claims`,
        formData,
        claimsHeaderConfiguration
      );
      if (data) {
        toast("accident claims successfully submitted", {
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
    submitAccidentClaim,
  };
};
