import { toast } from "react-toastify";
import {
  useFireClaimForm,
  useMakeAClaimForm,
} from "../../../../hooks/store/make-a-claim";
import { claimsHeaderConfiguration } from "../../../configuration/header";
import { endpoints } from "../../../enpoints";
import { PostRequest } from "../../../requests";

export const useSubmitFireClaim = () => {
  const { makeAClaimFormData } = useMakeAClaimForm();
  const { fireClaimFormData } = useFireClaimForm();

  const submitFireClaim = async () => {
    const formValue = new FormData();
    const fireFormData = {
      policyHolderName: makeAClaimFormData.officeName,
      policyNumber: makeAClaimFormData.policyId,
      subRisk: makeAClaimFormData.subRisk,
      creationDate: fireClaimFormData.dateTimeOfLoss,
      claimType: fireClaimFormData.claimType,
      claimClass: "fire",
      email: fireClaimFormData.email,
      phoneNumber: fireClaimFormData.phoneNumber,
      dateTimeOfLoss: "",
      descriptionOfIncident: fireClaimFormData.descriptionOfIncident,
      listOfStolenItems: fireClaimFormData.listOfStolenItems,
      doYouHaveAWitness: fireClaimFormData.doYouHaveAWitness,
      nameOfWitness: fireClaimFormData.nameOfWitness,
      witnessContactInfo: fireClaimFormData.witnessContactInfo,
      hasTheFireServiceBeenInformed:
        fireClaimFormData.hasTheFireServiceBeenInformed,
      fireServiceStationAddress: fireClaimFormData.fireServiceStationAddress,
      doYouHaveAFireServiceReport:
        fireClaimFormData.doYouHaveAFireServiceReport,
      hasThePoliceBeenInformed: fireClaimFormData.hasThePoliceBeenInformed,
      whenWasThePoliceInformed: "",
      policeStationAddress: fireClaimFormData.policeStationAddress,
      //claimsAmount: fireClaimFormData.claimsAmount,
      purchaseOrReplacementInvoice:
        fireClaimFormData.purchaseOrReplacementInvoice,
      uploadDamagePic1: fireClaimFormData.uploadDamagePic1,
      uploadDamagePic2: fireClaimFormData.uploadDamagePic2,
      uploadDamagePic3: fireClaimFormData.uploadDamagePic3,
      uploadDamagePic4: fireClaimFormData.uploadDamagePic4,
      eyeWitnessReport: fireClaimFormData.eyeWitnessReport,
      policeReport: fireClaimFormData.policeReport,
      fireServiceReport: fireClaimFormData.fireServiceReport,
    };
    Object.keys(fireFormData).forEach((key) => {
      formValue.append(key, fireFormData[key]);
    });
    try {
      const { data } = await PostRequest(
        `/api/claims`,
        formValue,
        claimsHeaderConfiguration
      );
      if (data) {
        toast("fire claim successfully submitted", {
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
    submitFireClaim,
  };
};
