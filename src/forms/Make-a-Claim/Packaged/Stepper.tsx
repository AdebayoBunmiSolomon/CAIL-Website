import React from "react";
import { Button } from "../../../components";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Stepper } from "react-form-stepper";
import { packagedPolicyFormStepper } from "../../../assets/data/formStepper";
import { useForm } from "react-hook-form";
import { useFormStepper } from "../../../hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  packagedPolicyClaimCircumstances,
  packagedPolicyClaimDetailsTypes,
  packagedPolicyClaimReqDoc,
} from "../../../form-types/Types";
import {
  packagedPolicyCircumstancesValidationSchema,
  packagedPolicyClaimDetailsValidationSchema,
  packagedPolicyClaimReqDocValidationSchema,
} from "../../../form-types/validationSchema";
import { PackagedPolicyClaimDetails } from "./ClaimDetails";
import { RegisterClaimService } from "../../../api/services/make-a-claim";
import { getButtonBtnState } from "../../../helper/helper";
import { PackagedPolicyClaimCircumstances } from "./Circumstances";
import { PackagedPolicyClaimRequiredDocumentsDetails } from "./RequiredDocuments";
import { PackagedPolicyClaimSummary } from "./Summary";
import {
  useMakeAClaimForm,
  usePackagedPolicyClaimForm,
} from "../../../hooks/store/make-a-claim";
import { ClaimsNumber } from "../../../common/Claims-Number";

export const PackagedPolicyClaimStepper: React.FC<{}> = () => {
  const { activeStep, nextStep, prevStep } = useFormStepper(
    packagedPolicyFormStepper
  );
  const { loading, makeAClaim, setShowClaims, showClaims } =
    RegisterClaimService();
  const buttonState = getButtonBtnState(
    activeStep,
    packagedPolicyFormStepper.length - 1
  );
  const { makeAClaimFormData } = useMakeAClaimForm();
  const { packagedPolicyClaimFormData } = usePackagedPolicyClaimForm();

  const {
    control: packagedPolicyClaimDetailsControl,
    formState: { errors: packagedPolicyClaimDetailsErrors },
    trigger: packagedPolicyClaimDetailsTrigger,
    setValue: setPackagedPolicyClaimDetailsValues,
  } = useForm<packagedPolicyClaimDetailsTypes>({
    mode: "onChange",
    resolver: yupResolver(packagedPolicyClaimDetailsValidationSchema),
  });

  const {
    control: packagedPolicyClaimCircumstancesControl,
    formState: { errors: packagedPolicyClaimCircumstancesErrors },
    trigger: packagedPolicyClaimCircumstancesTrigger,
    setValue: setPackagedPolicyClaimCircumstancesValues,
  } = useForm<packagedPolicyClaimCircumstances>({
    mode: "onChange",
    resolver: yupResolver(packagedPolicyCircumstancesValidationSchema),
  });

  const {
    control: packagedPolicyClaimReqDocControl,
    formState: { errors: packagedPolicyClaimReqDocErrors },
    trigger: packagedPolicyClaimReqDocTrigger,
    setValue: setPackagedPolicyClaimReqDocValues,
    setError: setPackagedPolicyClaimReqDocError,
  } = useForm<packagedPolicyClaimReqDoc>({
    mode: "onChange",
    resolver: yupResolver(packagedPolicyClaimReqDocValidationSchema),
  });

  const onSubmitNextStep = async () => {
    const formData = {
      policyHolderName: makeAClaimFormData.officeName,
      policyNumber: makeAClaimFormData.policyId,
      subRisk: makeAClaimFormData.subRisk,
      creationDate: makeAClaimFormData.creationDate,
      claimType: packagedPolicyClaimFormData.claimType,
      email: packagedPolicyClaimFormData.email,
      phoneNumber: packagedPolicyClaimFormData.phoneNumber,
      dateTimeOfIncident: packagedPolicyClaimFormData.dateTimeOfIncident,
      descriptionOfIncident: packagedPolicyClaimFormData.descriptionOfIncident,
      listOfStolenItems: packagedPolicyClaimFormData.listOfStolenItems,
      doYouHaveAWitness: packagedPolicyClaimFormData.doYouHaveAWitness,
      nameOfWitness: packagedPolicyClaimFormData.nameOfWitness,
      witnessContactInfo: packagedPolicyClaimFormData.witnessContactInfo,
      hasThePoliceBeenInformed:
        packagedPolicyClaimFormData.hasThePoliceBeenInformed,
      whenWasThePoliceInformed:
        packagedPolicyClaimFormData.whenWasThePoliceInformed,
      policeStationAddress: packagedPolicyClaimFormData.policeStationAddress,
      claimsAmount: packagedPolicyClaimFormData.claimsAmount,
    };
    const fileData = {
      evidenceUpload1: packagedPolicyClaimFormData.evidenceUpload1,
      evidenceUpload2: packagedPolicyClaimFormData.evidenceUpload2,
      evidenceUpload3: packagedPolicyClaimFormData.evidenceUpload3,
      evidenceUpload4: packagedPolicyClaimFormData.evidenceUpload4,
      eyeWitnessReport: packagedPolicyClaimFormData.eyeWitnessReport,
      policeReport: packagedPolicyClaimFormData.policeReport,
    };
    let isValid = false;
    if (activeStep === 0) {
      isValid = await packagedPolicyClaimDetailsTrigger();
      if (isValid) nextStep();
    } else if (activeStep === 1) {
      isValid = await packagedPolicyClaimCircumstancesTrigger();
      if (isValid) nextStep();
    } else if (activeStep === 2) {
      isValid = await packagedPolicyClaimReqDocTrigger();
      if (isValid) nextStep();
    } else if (activeStep === 3) {
      isValid = true;
      if (isValid) {
        makeAClaim(formData, fileData, formData.policyNumber);
      }
    }
  };

  const getActiveStepComponent = () => {
    switch (activeStep) {
      case 0:
        return (
          <PackagedPolicyClaimDetails
            useFormProps={{
              control: packagedPolicyClaimDetailsControl,
              errors: packagedPolicyClaimDetailsErrors,
              setValues: setPackagedPolicyClaimDetailsValues,
            }}
          />
        );
      case 1:
        return (
          <PackagedPolicyClaimCircumstances
            useFormProps={{
              control: packagedPolicyClaimCircumstancesControl,
              errors: packagedPolicyClaimCircumstancesErrors,
              setValues: setPackagedPolicyClaimCircumstancesValues,
            }}
          />
        );
      case 2:
        return (
          <PackagedPolicyClaimRequiredDocumentsDetails
            useFormProps={{
              control: packagedPolicyClaimReqDocControl,
              errors: packagedPolicyClaimReqDocErrors,
              setValues: setPackagedPolicyClaimReqDocValues,
              setError: setPackagedPolicyClaimReqDocError,
            }}
          />
        );
      case 3:
        return <PackagedPolicyClaimSummary />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className='pt-[200px] pb-20 px-2 md:px-10 lg:px-20'>
        <Stepper steps={packagedPolicyFormStepper} activeStep={activeStep} />
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
