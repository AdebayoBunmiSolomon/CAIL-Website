import React from "react";
import { Button } from "../../../components";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Stepper } from "react-form-stepper";
import { motorClaimsFormStepper } from "../../../assets/data/formStepper";
import { useForm } from "react-hook-form";
import { useFormStepper } from "../../../hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  motorClaimCircumstances,
  motorClaimDetailsTypes,
  motorClaimReqDoc,
} from "../../../form-types/Types";
import {
  motorClaimCircumstanceValidationSchema,
  motorClaimDetailsValidationSchema,
  motorClaimReqDocValidationSchema,
} from "../../../form-types/validationSchema";
import { MotorClaimDetails } from "./ClaimDetails";
import { MotorClaimSummary } from "./Summary";
import { RegisterClaimService } from "../../../api/services/make-a-claim";
import { getButtonBtnState } from "../../../helper/helper";
import { MotorClaimCircumstances } from "./Circumstances";
import { MotorClaimRequiredDocuments } from "./RequiredDocuments";
import {
  useMakeAClaimForm,
  useMotorClaimForm,
} from "../../../hooks/store/make-a-claim";
import { ClaimsNumber } from "../../../common/Claims-Number";

export const MotorClaimStepper: React.FC<{}> = () => {
  const { activeStep, nextStep, prevStep } = useFormStepper(
    motorClaimsFormStepper
  );
  const { loading, makeAClaim, showClaims, setShowClaims } =
    RegisterClaimService();
  const buttonState = getButtonBtnState(
    activeStep,
    motorClaimsFormStepper.length - 1
  );
  const { makeAClaimFormData } = useMakeAClaimForm();
  const { motorClaimFormData } = useMotorClaimForm();

  const {
    control: motorClaimDetailsControl,
    formState: { errors: motorClaimDetailsErrors },
    trigger: motorClaimDetailsTrigger,
    setValue: setMotorClaimDetailsValues,
  } = useForm<motorClaimDetailsTypes>({
    mode: "onChange",
    resolver: yupResolver(motorClaimDetailsValidationSchema),
  });

  const {
    control: motorClaimCircumstancesControl,
    formState: { errors: motorClaimCircumstancesErrors },
    trigger: motorClaimCircumstancesTrigger,
    setValue: setMotorClaimCircumstancesValues,
  } = useForm<motorClaimCircumstances>({
    mode: "onChange",
    resolver: yupResolver(motorClaimCircumstanceValidationSchema),
  });

  const {
    control: motorClaimReqDocControl,
    formState: { errors: motorClaimReqDocErrors },
    trigger: motorClaimReqDocTrigger,
    setValue: setMotorClaimReqDocValues,
    setError: setMotorClaimReqDocError,
  } = useForm<motorClaimReqDoc>({
    mode: "onChange",
    resolver: yupResolver(motorClaimReqDocValidationSchema),
  });

  const onSubmitNextStep = async () => {
    const formData = {
      policyHolderName: makeAClaimFormData.officeName,
      policyNumber: makeAClaimFormData.policyId,
      subRisk: makeAClaimFormData.subRisk,
      creationDate: makeAClaimFormData.creationDate,
      policyType: motorClaimFormData.policyType,
      vehicleRegNumber: motorClaimFormData.vehicleRegNumber,
      email: motorClaimFormData.email,
      mobileNumber: motorClaimFormData.mobileNumber,
      claimType: motorClaimFormData.claimType,
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
    };
    const fileData = {
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
    };
    let isValid = false;
    if (activeStep === 0) {
      isValid = await motorClaimDetailsTrigger();
      if (isValid) nextStep();
    } else if (activeStep === 1) {
      isValid = await motorClaimCircumstancesTrigger();
      if (isValid) nextStep();
    } else if (activeStep === 2) {
      isValid = await motorClaimReqDocTrigger();
      if (isValid) {
        makeAClaim(formData, fileData, formData.policyNumber);
      }
    }
  };

  const getActiveStepComponent = () => {
    switch (activeStep) {
      case 0:
        return (
          <MotorClaimDetails
            useFormProps={{
              control: motorClaimDetailsControl,
              errors: motorClaimDetailsErrors,
              setValues: setMotorClaimDetailsValues,
            }}
          />
        );
      case 1:
        return (
          <MotorClaimCircumstances
            useFormProps={{
              control: motorClaimCircumstancesControl,
              errors: motorClaimCircumstancesErrors,
              setValues: setMotorClaimCircumstancesValues,
            }}
          />
        );
      case 2:
        return (
          <MotorClaimRequiredDocuments
            useFormProps={{
              control: motorClaimReqDocControl,
              errors: motorClaimReqDocErrors,
              setValues: setMotorClaimReqDocValues,
              setError: setMotorClaimReqDocError,
            }}
          />
        );
      case 3:
        return <MotorClaimSummary />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className='pt-[200px] pb-20 px-2 md:px-10 lg:px-20'>
        <Stepper steps={motorClaimsFormStepper} activeStep={activeStep} />
        {getActiveStepComponent()}
        <div className='flex items-center gap-5 justify-end pr-7 mt-5'>
          {activeStep > 0 && (
            <Button
              text='Prev'
              onPress={() => prevStep()}
              className='py-[4px] md:py-[7px] lg:py-[7px] text-[white] px-5 flex rounded-lg hover:bg-[#900000d7] hover:duration-700'
              leftIcon={<GoArrowLeft size={25} />}
            />
          )}
          <Button
            text={loading === true ? "Loading" : buttonState}
            onPress={onSubmitNextStep}
            className='py-[4px] md:py-[7px] lg:py-[7px] text-[white] px-5 flex rounded-lg hover:bg-[#900000d7] hover:duration-700'
            rightIcon={<GoArrowRight size={25} />}
          />
        </div>
      </div>
      <ClaimsNumber
        showForm={showClaims.visible}
        claimNumber={showClaims.claimsNumber}
        closeForm={() =>
          setShowClaims({
            ...showClaims,
            visible: false,
            claimsNumber: "",
          })
        }
      />
    </>
  );
};
