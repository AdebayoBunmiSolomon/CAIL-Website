import React from "react";
import { Button } from "../../../components";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Stepper } from "react-form-stepper";
import { engineeringClaimsFormStepper } from "../../../assets/data/formStepper";
import { useForm } from "react-hook-form";
import { useFormStepper } from "../../../hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  engineeringClaimCircumstances,
  engineeringClaimDetailsTypes,
  engineeringClaimReqDoc,
} from "../../../form-types/Types";
import {
  engineeringClaimCircumstancesValidationSchema,
  engineeringClaimDetailsValidationSchema,
  engineeringClaimReqDocValidationSchema,
} from "../../../form-types/validationSchema";
import { EngineeringClaimDetails } from "./ClaimDetails";
import { EngineeringClaimSummary } from "./Summary";
import { RegisterClaimService } from "../../../api/services/make-a-claim";
import { getButtonBtnState } from "../../../helper/helper";
import { EngineeringClaimCircumstances } from "./Circumstances";
import { EngineeringClaimRequiredDocumentsDetails } from "./RequiredDocuments";

export const EngineeringClaimStepper: React.FC<{}> = () => {
  const { activeStep, nextStep, prevStep } = useFormStepper(
    engineeringClaimsFormStepper
  );
  const { loading } = RegisterClaimService();
  const buttonState = getButtonBtnState(
    activeStep,
    engineeringClaimsFormStepper.length
  );

  const {
    control: engineeringClaimDetailsControl,
    formState: { errors: engineeringClaimDetailsErrors },
    trigger: engineeringClaimDetailsTrigger,
    setValue: setEngineeringClaimDetailsValues,
  } = useForm<engineeringClaimDetailsTypes>({
    mode: "onChange",
    resolver: yupResolver(engineeringClaimDetailsValidationSchema),
  });

  const {
    control: engineeringClaimCircumstancesControl,
    formState: { errors: engineeringClaimCircumstancesErrors },
    trigger: engineeringClaimCircumstancesTrigger,
    setValue: setEngineeringClaimCircumstancesValues,
  } = useForm<engineeringClaimCircumstances>({
    mode: "onChange",
    resolver: yupResolver(engineeringClaimCircumstancesValidationSchema),
  });

  const {
    control: engineeringClaimReqDocControl,
    formState: { errors: engineeringClaimReqDocErrors },
    trigger: engineeringClaimReqDocTrigger,
    setValue: setEngineeringClaimReqDocValues,
    setError: setEngineeringClaimReqDocError,
  } = useForm<engineeringClaimReqDoc>({
    mode: "onChange",
    resolver: yupResolver(engineeringClaimReqDocValidationSchema),
  });

  const onSubmitNextStep = async () => {
    let isValid = false;
    if (activeStep === 0) {
      isValid = await engineeringClaimDetailsTrigger();
      if (isValid) nextStep();
    } else if (activeStep === 1) {
      isValid = await engineeringClaimCircumstancesTrigger();
      if (isValid) nextStep();
    } else if (activeStep === 2) {
      isValid = await engineeringClaimReqDocTrigger();
      if (isValid) nextStep();
    } else if (activeStep === 3) {
      isValid = true;
      if (isValid) {
        //perform submit operation
      }
    }
  };

  const getActiveStepComponent = () => {
    switch (activeStep) {
      case 0:
        return (
          <EngineeringClaimDetails
            useFormProps={{
              control: engineeringClaimDetailsControl,
              errors: engineeringClaimDetailsErrors,
              setValues: setEngineeringClaimDetailsValues,
            }}
          />
        );
      case 1:
        return (
          <EngineeringClaimCircumstances
            useFormProps={{
              control: engineeringClaimCircumstancesControl,
              errors: engineeringClaimCircumstancesErrors,
              setValues: setEngineeringClaimCircumstancesValues,
            }}
          />
        );
      case 2:
        return (
          <EngineeringClaimRequiredDocumentsDetails
            useFormProps={{
              control: engineeringClaimReqDocControl,
              errors: engineeringClaimReqDocErrors,
              setValues: setEngineeringClaimReqDocValues,
              setError: setEngineeringClaimReqDocError,
            }}
          />
        );
      case 3:
        return <EngineeringClaimSummary />;
      default:
        return null;
    }
  };

  return (
    <div className='pt-[200px] pb-20 px-20'>
      <Stepper steps={engineeringClaimsFormStepper} activeStep={activeStep} />
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
  );
};
