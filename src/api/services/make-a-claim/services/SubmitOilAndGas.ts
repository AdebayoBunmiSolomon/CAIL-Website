import { toast } from "react-toastify";
import {
  useMakeAClaimForm,
  useOilAndGasClaimForm,
} from "../../../../hooks/store/make-a-claim";
import { claimsHeaderConfiguration } from "../../../configuration/header";
import { endpoints } from "../../../enpoints";
import { PostRequest } from "../../../requests";
import { getBooleanFromYesOrNo } from "../../../../helper/helper";

export const useSubmitOilAndGasClaim = () => {
  const { makeAClaimFormData } = useMakeAClaimForm();
  const { oilAndGasClaimFormData } = useOilAndGasClaimForm();

  const submitOilAndGasClaim = async () => {
    const formValue = new FormData();
    const oilAndGasForm = {
      policyHolderName: makeAClaimFormData.officeName,
      policyNumber: makeAClaimFormData.policyId,
      subRisk: makeAClaimFormData.subRisk,
      creationDate: oilAndGasClaimFormData.dateTimeOfIncident,
      claimType: oilAndGasClaimFormData.claimType,
      claimClass: "oilandgas",
      email: oilAndGasClaimFormData.email,
      phoneNumber: oilAndGasClaimFormData.phoneNumber,
      dateTimeOfIncident: "", //oilAndGasClaimFormData.dateTimeOfIncident,
      descriptionOfIncident: oilAndGasClaimFormData.descriptionOfIncident,
      listOfStolenItems: oilAndGasClaimFormData.listOfStolenItems,
      doYouHaveAWitness: getBooleanFromYesOrNo(
        oilAndGasClaimFormData.doYouHaveAWitness
      ),
      nameOfWitness: oilAndGasClaimFormData.nameOfWitness,
      witnessContactInfo: oilAndGasClaimFormData.witnessContactInfo,
      hasThePoliceBeenInformed: getBooleanFromYesOrNo(
        oilAndGasClaimFormData.hasThePoliceBeenInformed
      ),
      whenWasThePoliceInformed: "", //oilAndGasClaimFormData.whenWasThePoliceInformed,
      policeStationAddress: oilAndGasClaimFormData.policeStationAddress,
      //claimsAmount: oilAndGasClaimFormData.claimsAmount,
      evidenceUpload1: oilAndGasClaimFormData.evidenceUpload1,
      evidenceUpload2: oilAndGasClaimFormData.evidenceUpload2,
      evidenceUpload3: oilAndGasClaimFormData.evidenceUpload3,
      evidenceUpload4: oilAndGasClaimFormData.evidenceUpload4,
      eyeWitnessReport: oilAndGasClaimFormData.eyeWitnessReport,
      policeReport: oilAndGasClaimFormData.policeReport,
    };
    Object.keys(oilAndGasForm).forEach((key) => {
      formValue.append(key, oilAndGasForm[key]);
    });
    try {
      const { data } = await PostRequest(
        `/api/claims`,
        formValue,
        claimsHeaderConfiguration
      );
      if (data) {
        toast("oil and gas claim successfully submitted", {
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
    submitOilAndGasClaim,
  };
};
