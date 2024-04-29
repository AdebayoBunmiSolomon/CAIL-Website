import React from "react";
import { Button } from "../../../components";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Stepper } from "react-form-stepper";
import { healthCareSteps } from "../../../assets/data/formStepper";
import {
  healthCareFormType1,
  healthCareFormType2,
} from "../../../form-types/lookup";
import { useForm } from "react-hook-form";
import {
  healthCareValidationSchema1,
  healthCareValidationSchema2,
} from "../../../form-types/validationSchema";
import { useFormStepper } from "../../../hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { HealthCareForm1 } from "./Form1";
import { HealthCareForm2 } from "./Form2";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const HealthCareStepper: React.FC<{}> = () => {
  const { activeStep, nextStep, prevStep } = useFormStepper(healthCareSteps);
  const navigate: NavigateFunction = useNavigate();

  const {
    control: stepOneControl,
    // handleSubmit: handlePersonalSubmit,
    formState: { errors: stepOneErrors },
    trigger: stepOneTrigger,
    setValue: setStepOneValues,
  } = useForm<healthCareFormType1>({
    mode: "onChange",
    resolver: yupResolver(healthCareValidationSchema1),
  });

  const {
    control: stepTwoControl,
    // handleSubmit: handleCarSubmit,
    formState: { errors: stepTwoErrors },
    trigger: stepTwoTrigger,
    setValue: setStepTwoValues,
  } = useForm<healthCareFormType2>({
    mode: "onChange",
    resolver: yupResolver(healthCareValidationSchema2),
  });

  const onSubmitNextStep = async () => {
    let isValid = false;
    if (activeStep === 0) {
      isValid = await stepOneTrigger();
      // setIsValid(isValid);
      if (isValid) nextStep();
    } else if (activeStep === 1) {
      isValid = await stepTwoTrigger();
      // setIsValid(isValid);
      if (isValid) {
        navigate("/thank-you");
      }
    }
  };

  const getActiveStepComponent = () => {
    switch (activeStep) {
      case 0:
        return (
          <HealthCareForm1
            useFormProps={{
              control: stepOneControl,
              errors: stepOneErrors,
              setValues: setStepOneValues,
            }}
          />
        );
      case 1:
        return (
          <HealthCareForm2
            useFormProps={{
              control: stepTwoControl,
              errors: stepTwoErrors,
              setValues: setStepTwoValues,
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className='pt-[200px] pb-20 px-20'>
      <Stepper steps={healthCareSteps} activeStep={activeStep} />
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
          text={activeStep === 1 ? "Buy Now" : "Next"}
          onPress={onSubmitNextStep}
          className='py-[4px] md:py-[7px] lg:py-[7px] text-[white] px-5 flex rounded-lg hover:bg-[#900000d7] hover:duration-700'
          rightIcon={<GoArrowRight size={25} />}
        />
      </div>
    </div>
  );
};
