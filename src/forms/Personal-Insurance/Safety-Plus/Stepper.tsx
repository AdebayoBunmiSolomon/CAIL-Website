import React from "react";
import { Button } from "../../../components";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Stepper } from "react-form-stepper";
import { safetyPlusSteps } from "../../../assets/data/formStepper";
import {
  safetyPlusFormType1,
  safetyPlusFormType2,
} from "../../../form-types/lookup";
import { useForm } from "react-hook-form";
import {
  safetyPlusValidationSchema1,
  safetyPlusValidationSchema2,
} from "../../../form-types/validationSchema";
import { useFormStepper } from "../../../hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { SafetyPlusForm1 } from "./Form1";
import { SafetyPlusForm2 } from "./Form2";
import { SafetyPlusSummary } from "./Summary";
import { CreateQuoteService } from "../../../api/services/safety-plus/CreateQuoteService";
import { getButtonBtnState } from "../../../helper/helper";

export const SafetyPlusStepper: React.FC<{}> = () => {
  const { activeStep, nextStep, prevStep } = useFormStepper(safetyPlusSteps);
  const { useCreateQuote, loading } = CreateQuoteService();
  const buttonState = getButtonBtnState(activeStep, 2);

  const {
    control: stepOneControl,
    formState: { errors: stepOneErrors },
    trigger: stepOneTrigger,
    setValue: setStepOneValue,
  } = useForm<safetyPlusFormType1>({
    mode: "onChange",
    resolver: yupResolver(safetyPlusValidationSchema1),
  });

  const {
    control: stepTwoControl,
    formState: { errors: stepTwoErrors },
    trigger: stepTwoTrigger,
    setValue: setStepTwoValue,
  } = useForm<safetyPlusFormType2>({
    mode: "onChange",
    resolver: yupResolver(safetyPlusValidationSchema2),
  });

  const onSubmitNextStep = async () => {
    let isValid = false;
    if (activeStep === 0) {
      isValid = await stepOneTrigger();
      if (isValid) nextStep();
    } else if (activeStep === 1) {
      isValid = await stepTwoTrigger();
      if (isValid) nextStep();
    } else if (activeStep === 2) {
      isValid = true;
      if (isValid) {
        useCreateQuote();
      }
    }
  };

  const getActiveStepComponent = () => {
    switch (activeStep) {
      case 0:
        return (
          <SafetyPlusForm1
            useFormProps={{
              control: stepOneControl,
              errors: stepOneErrors,
              setValues: setStepOneValue,
            }}
          />
        );
      case 1:
        return (
          <SafetyPlusForm2
            useFormProps={{
              control: stepTwoControl,
              errors: stepTwoErrors,
              setValues: setStepTwoValue,
            }}
          />
        );
      case 2:
        return <SafetyPlusSummary />;
      default:
        return null;
    }
  };

  return (
    <div className='pt-[200px] pb-20 px-20'>
      <Stepper steps={safetyPlusSteps} activeStep={activeStep} />
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
