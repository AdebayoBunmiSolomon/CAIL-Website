import React from "react";
import { Button } from "../../../components";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Stepper } from "react-form-stepper";
import { professionalIndemnitySteps } from "../../../assets/data/formStepper";
import {
  professionIndemnityFormType1,
  professionIndemnityFormType2,
} from "../../../form-types/lookup";
import { useForm } from "react-hook-form";
import {
  professionalIndemnityValidationSchema1,
  professionalIndemnityValidationSchema2,
} from "../../../form-types/validationSchema";
import { useFormStepper } from "../../../hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProfessionalIndemnityForm1 } from "./Form1";
import { ProfessionalIndemnityForm2 } from "./Form2";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const ProfessionalIndemnityStepper: React.FC<{}> = () => {
  const { activeStep, nextStep, prevStep } = useFormStepper(
    professionalIndemnitySteps
  );
  const navigate: NavigateFunction = useNavigate();

  const {
    control: stepOneControl,
    // handleSubmit: handlePersonalSubmit,
    formState: { errors: stepOneErrors },
    trigger: stepOneTrigger,
    setValue: setStepOneValues,
  } = useForm<professionIndemnityFormType1>({
    mode: "onChange",
    resolver: yupResolver(professionalIndemnityValidationSchema1),
  });

  const {
    control: stepTwoControl,
    // handleSubmit: handleCarSubmit,
    formState: { errors: stepTwoErrors },
    trigger: stepTwoTrigger,
    setValue: setStepTwoValue,
  } = useForm<professionIndemnityFormType2>({
    mode: "onChange",
    resolver: yupResolver(professionalIndemnityValidationSchema2),
  });

  const onSubmitNextStep = async () => {
    let isValid = false;
    if (activeStep === 0) {
      isValid = await stepOneTrigger();
      if (isValid) nextStep();
    } else if (activeStep === 1) {
      isValid = await stepTwoTrigger();
      if (isValid) {
        console.log("all forms filled");
        navigate("/thank-you");
      }
    }
  };

  const getActiveStepComponent = () => {
    switch (activeStep) {
      case 0:
        return (
          <ProfessionalIndemnityForm1
            useFormProps={{
              control: stepOneControl,
              errors: stepOneErrors,
              setValues: setStepOneValues,
            }}
          />
        );
      case 1:
        return (
          <ProfessionalIndemnityForm2
            useFormProps={{
              control: stepTwoControl,
              errors: stepTwoErrors,
              setValues: setStepTwoValue,
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className='pt-[200px] pb-20 px-20'>
      <Stepper steps={professionalIndemnitySteps} activeStep={activeStep} />
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
