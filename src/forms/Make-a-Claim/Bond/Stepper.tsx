import React from "react";
import { Button } from "../../../components";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Stepper } from "react-form-stepper";
import { bondClaimsFormStepper } from "../../../assets/data/formStepper";
import { useForm } from "react-hook-form";
import { useFormStepper } from "../../../hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  bondClaimCircumstances,
  bondClaimDetailsTypes,
  bondClaimReqDoc,
} from "../../../form-types/Types";
import {
  bondClaimCircumstancesValidationSchema,
  bondClaimDetailsValidationSchema,
  bondClaimReqDocValidationSchema,
} from "../../../form-types/validationSchema";
import { BondClaimDetails } from "./ClaimDetails";
import { BondClaimSummary } from "./Summary";
import { RegisterClaimService } from "../../../api/services/make-a-claim";
import { getButtonBtnState } from "../../../helper/helper";
import { BondClaimCircumstances } from "./Circumstances";
import { BondClaimRequiredDocumentsDetails } from "./RequiredDocuments";
import {
  useBondClaimForm,
  useMakeAClaimForm,
} from "../../../hooks/store/make-a-claim";
import { ClaimsNumber } from "../../../common/Claims-Number";

export const BondClaimStepper: React.FC<{}> = () => {
  const { activeStep, nextStep, prevStep } = useFormStepper(
    bondClaimsFormStepper
  );
  const { loading, makeAClaim, showClaims, setShowClaims } =
    RegisterClaimService();
  const buttonState = getButtonBtnState(
    activeStep,
    bondClaimsFormStepper.length - 1
  );
  const { makeAClaimFormData } = useMakeAClaimForm();
  const { bondClaimFormData } = useBondClaimForm();

  const {
    control: bondClaimDetailsControl,
    formState: { errors: bondClaimDetailsErrors },
    trigger: bondClaimDetailsTrigger,
    setValue: setBondClaimDetailsValues,
  } = useForm<bondClaimDetailsTypes>({
    mode: "onChange",
    resolver: yupResolver(bondClaimDetailsValidationSchema),
  });

  const {
    control: bondClaimCircumstancesControl,
    formState: { errors: bondClaimCircumstancesErrors },
    trigger: bondClaimCircumstancesTrigger,
    setValue: setBondClaimCircumstancesValues,
  } = useForm<bondClaimCircumstances>({
    mode: "onChange",
    resolver: yupResolver(bondClaimCircumstancesValidationSchema),
  });

  const {
    control: bondClaimReqDocControl,
    formState: { errors: bondClaimReqDocErrors },
    trigger: bondClaimReqDocTrigger,
    setValue: setBondClaimReqDocValues,
    setError: setBondClaimReqDocError,
  } = useForm<bondClaimReqDoc>({
    mode: "onChange",
    resolver: yupResolver(bondClaimReqDocValidationSchema),
  });

  const onSubmitNextStep = async () => {
    const formData = {
      policyHolderName: makeAClaimFormData.officeName,
      policyNumber: makeAClaimFormData.policyId,
      subRisk: makeAClaimFormData.subRisk,
      creationDate: makeAClaimFormData.creationDate,
      claimType: bondClaimFormData.claimType,
      email: bondClaimFormData.email,
      phoneNumber: bondClaimFormData.phoneNumber,
      dateTimeOfIncident: bondClaimFormData.dateTimeOfIncident,
      descriptionOfIncident: bondClaimFormData.descriptionOfIncident,
      listOfStolenItems: bondClaimFormData.listOfStolenItems,
      doYouHaveAWitness: bondClaimFormData.doYouHaveAWitness,
      nameOfWitness: bondClaimFormData.nameOfWitness,
      witnessContactInfo: bondClaimFormData.witnessContactInfo,
      hasThePoliceBeenInformed: bondClaimFormData.hasThePoliceBeenInformed,
      whenWasThePoliceInformed: bondClaimFormData.whenWasThePoliceInformed,
      policeStationAddress: bondClaimFormData.policeStationAddress,
      claimsAmount: bondClaimFormData.claimsAmount,
    };
    const fileData = {
      evidenceUpload1: bondClaimFormData.evidenceUpload1,
      evidenceUpload2: bondClaimFormData.evidenceUpload2,
      evidenceUpload3: bondClaimFormData.evidenceUpload3,
      evidenceUpload4: bondClaimFormData.evidenceUpload4,
      eyeWitnessReport: bondClaimFormData.eyeWitnessReport,
      policeReport: bondClaimFormData.policeReport,
    };
    let isValid = false;
    if (activeStep === 0) {
      isValid = await bondClaimDetailsTrigger();
      if (isValid) nextStep();
    } else if (activeStep === 1) {
      isValid = await bondClaimCircumstancesTrigger();
      if (isValid) nextStep();
    } else if (activeStep === 2) {
      isValid = await bondClaimReqDocTrigger();
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
          <BondClaimDetails
            useFormProps={{
              control: bondClaimDetailsControl,
              errors: bondClaimDetailsErrors,
              setValues: setBondClaimDetailsValues,
            }}
          />
        );
      case 1:
        return (
          <BondClaimCircumstances
            useFormProps={{
              control: bondClaimCircumstancesControl,
              errors: bondClaimCircumstancesErrors,
              setValues: setBondClaimCircumstancesValues,
            }}
          />
        );
      case 2:
        return (
          <BondClaimRequiredDocumentsDetails
            useFormProps={{
              control: bondClaimReqDocControl,
              errors: bondClaimReqDocErrors,
              setValues: setBondClaimReqDocValues,
              setError: setBondClaimReqDocError,
            }}
          />
        );
      case 3:
        return <BondClaimSummary />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className='pt-[200px] pb-20 px-2 md:px-10 lg:px-20'>
        <Stepper steps={bondClaimsFormStepper} activeStep={activeStep} />
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
