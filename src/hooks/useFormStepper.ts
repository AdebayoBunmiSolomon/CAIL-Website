import { useEffect, useState } from "react";

export const useFormStepper = (data: any[]) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const nextStep = () => {
    if (activeStep !== data.length - 1) {
      setActiveStep(activeStep + 1);
    } else if (activeStep === data.length - 1) {
      //nothing should happen
    }
  };

  const prevStep = () => {
    if (activeStep < data.length - 1 && activeStep !== 0) {
      setActiveStep(activeStep - 1);
    } else if (activeStep === data.length - 1) {
      setActiveStep(activeStep - 1);
    }
  };

  useEffect(() => {
    console.log(activeStep);
  }, [activeStep]);

  return {
    activeStep,
    nextStep,
    prevStep,
  };
};
