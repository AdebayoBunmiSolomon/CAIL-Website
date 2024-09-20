import { toast } from "react-toastify";
import {
  useFireClaimForm,
  useMakeAClaimForm,
} from "../../../../hooks/store/make-a-claim";
import { claimsHeaderConfiguration } from "../../../configuration/header";
import { endpoints } from "../../../enpoints";
import { PostRequest } from "../../../requests";
import { useState } from "react";
import { showClaimDataType } from "../RegisterClaimService";

export const useSubmitFireClaim = () => {
  const { makeAClaimFormData } = useMakeAClaimForm();
  const { fireClaimFormData } = useFireClaimForm();
  const [showClaims, setShowClaims] = useState<showClaimDataType>({
    visible: false,
    claimsNumber: "",
  });

  const submitFireClaim = async () => {
    const fireFormData = {
      policyHolderName: makeAClaimFormData.officeName,
      policyNumber: makeAClaimFormData.policyId,
      subRisk: makeAClaimFormData.subRisk,
      creationDate: makeAClaimFormData.creationDate,
      claimType: "fire",
      email: fireClaimFormData.email,
      phoneNumber: fireClaimFormData.phoneNumber,
      dateTimeOfLoss: fireClaimFormData.dateTimeOfLoss,
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
      whenWasThePoliceInformed: fireClaimFormData.whenWasThePoliceInformed,
      policeStationAddress: fireClaimFormData.policeStationAddress,
      claimsAmount: fireClaimFormData.claimsAmount,
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
    const formValue = new FormData();
    Object.keys(fireFormData).forEach((key) => {
      formValue.append(key, JSON.stringify(fireFormData[key]));
    });
    console.log(fireFormData);
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
    submitFireClaim,
  };
};
