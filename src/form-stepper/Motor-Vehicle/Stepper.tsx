import React, { useEffect, useState } from "react";
import { PersonalInfo } from "./PersonalInfo";
import { CarDetails } from "./CarDetails";
import { Summary } from "./Summary";
import { Button } from "../../components";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Stepper } from "react-form-stepper";
import { motorVehicleFormSteps } from "../../assets/data/formStepper";
import {
  carDetailsLookUpTypes,
  personalInformationLookUpTypes,
} from "../../form/lookup";
import { useForm } from "react-hook-form";
import {
  carDetailsValidationSchema,
  personalInformationValidationSchema,
} from "../../form/validationSchema";
import { useFormStepper } from "../../hooks";
import { yupResolver } from "@hookform/resolvers/yup";

export const MotorVehicle: React.FC<{}> = () => {
  const { activeStep, nextStep, prevStep } = useFormStepper(
    motorVehicleFormSteps
  );
  const [formData, setFormData] = useState<any>({});
  const [isValid, setIsValid] = useState<boolean>(false);

  const {
    control: personalControl,
    // handleSubmit: handlePersonalSubmit,
    formState: { errors: personalErrors },
    trigger: personalTrigger,
    getValues: getPersonalValues,
  } = useForm<personalInformationLookUpTypes>({
    mode: "onChange",
    resolver: yupResolver(personalInformationValidationSchema),
  });

  const {
    control: carControl,
    // handleSubmit: handleCarSubmit,
    formState: { errors: carErrors },
    trigger: carTrigger,
    getValues: getCarDetailsValues,
  } = useForm<carDetailsLookUpTypes>({
    mode: "onChange",
    resolver: yupResolver(carDetailsValidationSchema),
  });

  const onSubmitNextStep = async () => {
    let isValid = false;
    if (activeStep === 0) {
      isValid = await personalTrigger();
      setIsValid(isValid);
      if (isValid) nextStep();
    } else if (activeStep === 1) {
      isValid = await carTrigger();
      setIsValid(isValid);
      if (isValid) nextStep();
    } else if (activeStep === 2) {
      isValid = true;
      setIsValid(isValid);
      setFormData({
        ...getPersonalValues(),
        ...getCarDetailsValues(),
      });
      console.log(getPersonalValues(), getCarDetailsValues());
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [activeStep]);

  const getActiveStepComponent = () => {
    switch (activeStep) {
      case 0:
        return (
          <PersonalInfo
            useFormProps={{ control: personalControl, errors: personalErrors }}
          />
        );
      case 1:
        return (
          <CarDetails
            useFormProps={{ control: carControl, errors: carErrors }}
          />
        );
      case 2:
        return <Summary />;
      default:
        return null;
    }
  };

  return (
    <div className='pt-[200px] pb-20 px-20'>
      <Stepper steps={motorVehicleFormSteps} activeStep={activeStep} />
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
          text={activeStep === 2 ? "Submit" : "Next"}
          onPress={onSubmitNextStep}
          className='py-[4px] md:py-[7px] lg:py-[7px] text-[white] px-5 flex rounded-lg hover:bg-[#900000d7] hover:duration-700'
          rightIcon={<GoArrowRight size={25} />}
        />
      </div>
    </div>
  );
};
