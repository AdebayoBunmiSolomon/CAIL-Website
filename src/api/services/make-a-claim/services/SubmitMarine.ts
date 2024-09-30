import { toast } from "react-toastify";
import {
  useMakeAClaimForm,
  useMarineClaimForm,
} from "../../../../hooks/store/make-a-claim";
import { claimsHeaderConfiguration } from "../../../configuration/header";
import { endpoints } from "../../../enpoints";
import { PostRequest } from "../../../requests";

export const useSubmitMarineClaim = () => {
  const { makeAClaimFormData } = useMakeAClaimForm();
  const { marineClaimFormData } = useMarineClaimForm();

  const submitMarineClaim = async () => {
    const formValue = new FormData();
    const marineFormData = {
      policyHolderName: makeAClaimFormData.officeName,
      policyNumber: makeAClaimFormData.policyId,
      subRisk: makeAClaimFormData.subRisk,
      creationDate: marineClaimFormData.dateTimeOfIncident,
      claimType: marineClaimFormData.claimType,
      claimClass: "marine",
      email: marineClaimFormData.email,
      phoneNumber: marineClaimFormData.phoneNumber,
      dateTimeOfIncident: "", //marineClaimFormData.dateTimeOfIncident,
      descriptionOfIncident: marineClaimFormData.descriptionOfIncident,
      listOfStolenItems: marineClaimFormData.listOfStolenItems,
      doYouHaveAWitness: marineClaimFormData.doYouHaveAWitness,
      nameOfWitness: marineClaimFormData.nameOfWitness,
      witnessContactInfo: marineClaimFormData.witnessContactInfo,
      hasThePoliceBeenInformed: marineClaimFormData.hasThePoliceBeenInformed,
      whenWasThePoliceInformed: "", //marineClaimFormData.whenWasThePoliceInformed,
      policeStationAddress: marineClaimFormData.policeStationAddress,
      //claimsAmount: marineClaimFormData.claimsAmount,
      evidenceUpload1: marineClaimFormData.evidenceUpload1,
      evidenceUpload2: marineClaimFormData.evidenceUpload2,
      evidenceUpload3: marineClaimFormData.evidenceUpload3,
      evidenceUpload4: marineClaimFormData.evidenceUpload4,
      eyeWitnessReport: marineClaimFormData.eyeWitnessReport,
      policeReport: marineClaimFormData.policeReport,
    };
    Object.keys(marineFormData).forEach((key) => {
      formValue.append(key, marineFormData[key]);
    });

    try {
      const { data } = await PostRequest(
        `/api/claims`,
        formValue,
        claimsHeaderConfiguration
      );
      if (data) {
        toast("marine claim successfully submitted", {
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
    submitMarineClaim,
  };
};
