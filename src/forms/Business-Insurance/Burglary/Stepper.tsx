import React from "react";
import { useFormStepper } from "../../../hooks";
import { burglarySteps } from "../../../assets/data/formStepper";
import {
  burglaryFormLookUpTypes1,
  burglaryFormLookUpTypes2,
} from "../../../form-types/lookup";
import {
  burglaryValidationSchema1,
  burglaryValidationSchema2,
} from "../../../form-types/validationSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BurglaryForm1 } from "./Form1";
import { BurglaryForm2 } from "./Form2";
import { Stepper } from "react-form-stepper";
import { Button } from "../../../components";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const BurglaryStepper: React.FC<{}> = () => {
  const { activeStep, nextStep, prevStep } = useFormStepper(burglarySteps);
  const navigate: NavigateFunction = useNavigate();

  const {
    control: stepOneControl,
    // handleSubmit: handlePersonalSubmit,
    formState: { errors: stepOneErrors },
    trigger: stepOneTrigger,
    setValue: setStepOneValues,
  } = useForm<burglaryFormLookUpTypes1>({
    mode: "onChange",
    resolver: yupResolver(burglaryValidationSchema1),
  });

  const {
    control: stepTwoControl,
    // handleSubmit: handlePersonalSubmit,
    formState: { errors: stepTwoErrors },
    trigger: stepTwoTrigger,
    setValue: setStepTwoValues,
  } = useForm<burglaryFormLookUpTypes2>({
    mode: "onChange",
    resolver: yupResolver(burglaryValidationSchema2),
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
          <BurglaryForm1
            useFormProps={{
              control: stepOneControl,
              errors: stepOneErrors,
              setValues: setStepOneValues,
            }}
          />
        );
      case 1:
        return (
          <BurglaryForm2
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
    <>
      <div className='pt-[200px] pb-20 px-20'>
        <Stepper steps={burglarySteps} activeStep={activeStep} />
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
            text={activeStep === 2 ? "Buy Now" : "Next"}
            onPress={onSubmitNextStep}
            className='py-[4px] md:py-[7px] lg:py-[7px] text-[white] px-5 flex rounded-lg hover:bg-[#900000d7] hover:duration-700'
            rightIcon={<GoArrowRight size={25} />}
          />
        </div>
      </div>
    </>
  );
};
