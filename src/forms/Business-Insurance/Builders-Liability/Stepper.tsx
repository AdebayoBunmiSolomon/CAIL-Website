import React from "react";
import { useFormStepper } from "../../../hooks";
import { buildersLiabilitySteps } from "../../../assets/data/formStepper";
import {
  builderLiabilityFormLookUpTypes1,
  buildersLiabilityFormLookUpTypes2,
} from "../../../form-types/lookup";
import {
  buildersLiabilityValidationSchema1,
  buildersLiabilityValidationSchema2,
} from "../../../form-types/validationSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BuildersLiabilityForm1 } from "./Form1";
import { BuildersLiabilityForm2 } from "./Form2";
import { Stepper } from "react-form-stepper";
import { Button } from "../../../components";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

export const BuildersLiabilityStepper: React.FC<{}> = () => {
  const { activeStep, nextStep, prevStep } = useFormStepper(
    buildersLiabilitySteps
  );

  const {
    control: stepOneControl,
    // handleSubmit: handlePersonalSubmit,
    formState: { errors: stepOneErrors },
    trigger: stepOneTrigger,
    setValue: setStepOneValues,
  } = useForm<builderLiabilityFormLookUpTypes1>({
    mode: "onChange",
    resolver: yupResolver(buildersLiabilityValidationSchema1),
  });

  const {
    control: stepTwoControl,
    // handleSubmit: handlePersonalSubmit,
    formState: { errors: stepTwoErrors },
    trigger: stepTwoTrigger,
    setValue: setStepTwoValues,
  } = useForm<buildersLiabilityFormLookUpTypes2>({
    mode: "onChange",
    resolver: yupResolver(buildersLiabilityValidationSchema2),
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
      }
    }
  };

  const getActiveStepComponent = () => {
    switch (activeStep) {
      case 0:
        return (
          <BuildersLiabilityForm1
            useFormProps={{
              control: stepOneControl,
              errors: stepOneErrors,
              setValues: setStepOneValues,
            }}
          />
        );
      case 1:
        return (
          <BuildersLiabilityForm2
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
        <Stepper steps={buildersLiabilitySteps} activeStep={activeStep} />
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
