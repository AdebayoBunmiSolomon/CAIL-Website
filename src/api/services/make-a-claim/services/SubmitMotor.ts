import { toast } from "react-toastify";
import {
  useMakeAClaimForm,
  useMotorClaimForm,
} from "../../../../hooks/store/make-a-claim";
import { claimsHeaderConfiguration } from "../../../configuration/header";
import { endpoints } from "../../../enpoints";
import { PostRequest } from "../../../requests";
import { useState } from "react";
import { showClaimDataType } from "../RegisterClaimService";

export const useSubmitMotorClaim = () => {
  const { makeAClaimFormData } = useMakeAClaimForm();
  const { motorClaimFormData } = useMotorClaimForm();
  const [showClaims, setShowClaims] = useState<showClaimDataType>({
    visible: false,
    claimsNumber: "",
  });

  const submitMotorClaim = async () => {
    const motorFormData = {
      policyHolderName: makeAClaimFormData.officeName,
      policyNumber: makeAClaimFormData.policyId,
      subRisk: makeAClaimFormData.subRisk,
      creationDate: makeAClaimFormData.creationDate,
      policyType: motorClaimFormData.policyType,
      vehicleRegNumber: motorClaimFormData.vehicleRegNumber,
      email: motorClaimFormData.email,
      mobileNumber: motorClaimFormData.mobileNumber,
      claimType: "motor",
      damageType: motorClaimFormData.damageType,
      dateTimeOfLoss: motorClaimFormData.dateTimeOfLoss,
      descriptionOfIncident: motorClaimFormData.descriptionOfIncident,
      doYouHaveAWitness: motorClaimFormData.doYouHaveAWitness,
      nameOfWitness: motorClaimFormData.nameOfWitness,
      witnessContactInfo: motorClaimFormData.witnessContactInfo,
      whereCanTheVehicleBeInspected:
        motorClaimFormData.whereCanTheVehicleBeInspected,
      isThirdPartyInvolved: motorClaimFormData.isThirdPartyInvolved,
      hasThePoliceBeenInformed: motorClaimFormData.hasThePoliceBeenInformed,
      whenWasThePoliceInformed: motorClaimFormData.whenWasThePoliceInformed,
      policeStationAddress: motorClaimFormData.policeStationAddress,
      thirdPartyInformation: motorClaimFormData.thirdPartyInformation,
      estimateOfRepairs: motorClaimFormData.estimateOfRepairs,
      claimsAmount: motorClaimFormData.claimsAmount,
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
      formValue.append(key, JSON.stringify(motorFormData[key]));
    });
    console.log(motorFormData);
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
    submitMotorClaim,
  };
};
