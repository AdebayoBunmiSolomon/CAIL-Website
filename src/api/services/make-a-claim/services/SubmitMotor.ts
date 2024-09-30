import { toast } from "react-toastify";
import {
  useMakeAClaimForm,
  useMotorClaimForm,
} from "../../../../hooks/store/make-a-claim";
import { claimsHeaderConfiguration } from "../../../configuration/header";
import { endpoints } from "../../../enpoints";
import { PostRequest } from "../../../requests";
import { getFirstWord } from "../../../../helper/helper";

export const useSubmitMotorClaim = () => {
  const { makeAClaimFormData } = useMakeAClaimForm();
  const { motorClaimFormData } = useMotorClaimForm();

  const submitMotorClaim = async () => {
    const motorFormData = {
      policyHolderName: makeAClaimFormData.officeName,
      policyNumber: makeAClaimFormData.policyId,
      subRisk: makeAClaimFormData.subRisk,
      creationDate: motorClaimFormData.dateTimeOfLoss,
      policyType: motorClaimFormData.policyType,
      vehicleRegNumber: makeAClaimFormData.vehicleRegNumber,
      email: motorClaimFormData.email,
      mobileNumber: motorClaimFormData.mobileNumber,
      claimType: motorClaimFormData.claimType,
      claimClass: "motor",
      damageType: motorClaimFormData.damageType,
      dateTimeOfLoss: "", //motorClaimFormData.dateTimeOfLoss,
      descriptionOfIncident: motorClaimFormData.descriptionOfIncident,
      doYouHaveAWitness: motorClaimFormData.doYouHaveAWitness,
      nameOfWitness: motorClaimFormData.nameOfWitness,
      witnessContactInfo: motorClaimFormData.witnessContactInfo,
      whereCanTheVehicleBeInspected:
        motorClaimFormData.whereCanTheVehicleBeInspected,
      isThirdPartyInvolved: getFirstWord(
        motorClaimFormData.isThirdPartyInvolved
      ),
      hasThePoliceBeenInformed: motorClaimFormData.hasThePoliceBeenInformed,
      whenWasThePoliceInformed: "", //motorClaimFormData.whenWasThePoliceInformed,
      policeStationAddress: motorClaimFormData.policeStationAddress,
      thirdPartyInformation: motorClaimFormData.thirdPartyInformation,
      //estimateOfRepairs: motorClaimFormData.estimateOfRepairs,
      //claimsAmount: motorClaimFormData.claimsAmount
      purchaseOrReplacementInvoice:
        motorClaimFormData.purchaseOrReplacementInvoice,
      uploadScannedVehicleLicense:
        motorClaimFormData.uploadScannedVehicleLicense,
      uploadInsuranceCertificate: motorClaimFormData.uploadInsuranceCertificate,
      policeReport: motorClaimFormData.policeReport,
      eyeWitnessReport: motorClaimFormData.eyeWitnessReport,
      thirdPartyEvidenceOfInsuranceCover:
        motorClaimFormData.thirdPartyEvidenceOfInsuranceCover,
      thirdPartyRepairEstimate: motorClaimFormData.thirdPartyRepairEstimate,
      thirdPartyDamageEvidence1: motorClaimFormData.thirdPartyDamageEvidence1,
      thirdPartyDamageEvidence2: motorClaimFormData.thirdPartyDamageEvidence2,
      repairEstimateInvoice: motorClaimFormData.repairEstimateInvoice,
      vehicleFrontView: motorClaimFormData.vehicleFrontView,
      vehicleRearView: motorClaimFormData.vehicleRearView,
      vehicleLeftView: motorClaimFormData.vehicleLeftView,
      vehicleRightView: motorClaimFormData.vehicleRightView,
      driversLicense: motorClaimFormData.driversLicense,
    };
    const formValue = new FormData();
    Object.keys(motorFormData).forEach((key) => {
      formValue.append(key, motorFormData[key]);
    });
    try {
      const { data } = await PostRequest(
        `/api/claims`,
        formValue,
        claimsHeaderConfiguration
      );
      if (data) {
        toast("motor claim successfully submitted", {
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
    submitMotorClaim,
  };
};
