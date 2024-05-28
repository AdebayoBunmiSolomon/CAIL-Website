import { useState } from "react";
import { PostRequest } from "../../requests";
import { endpoints } from "../../enpoints";
import { useMotorForm } from "../../../hooks/store/motor/useMotorForm";
import { useCalcPremFromAPI } from "../../../hooks/store/motor";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type costLoadingType = {
  btnDisabled: boolean;
  requestLoading: boolean;
};

export const CalculateCostMotorService = () => {
  const [costLoading, setCostLoading] = useState<costLoadingType>({
    btnDisabled: false,
    requestLoading: false,
  });
  const { motorFormData } = useMotorForm();
  const { calculatedPremFromAPI, setCalculatedPremFromAPI } =
    useCalcPremFromAPI();

  const toCalculateCostFormData = {
    firstName: motorFormData.surName,
    lastName: motorFormData.firstName,
    email: motorFormData.email,
    phoneNumber: motorFormData.phoneNumber,
    address: motorFormData.address,
    branch: "HO",
    businessSector: 4,
    birthDate: motorFormData.birthDate,
    sumInsured: motorFormData.vehicleValue,
    coverType: motorFormData.coverTypeId,
    insuredType: "B",
    subClass: "61",
    startDate: motorFormData.startDate,
    endDate: motorFormData.startDate,
    motorPremium: {
      typeOfUsage: motorFormData.vehicleCategory,
      vehicleValue: motorFormData.vehicleValue,
      premRate: 5,
      tracking: false,
      srcc: false,
      flood: false,
      excess: false,
    },
  };

  const useCalculateCost = async () => {
    setCostLoading({
      ...costLoading,
      btnDisabled: true,
      requestLoading: true,
    });
    console.log(toCalculateCostFormData);
    const { data, status } = await PostRequest(
      `${endpoints.GET_MOTOR_POLICY_QUOTE}`,
      toCalculateCostFormData,
      {}
    );
    setCostLoading({
      ...costLoading,
      btnDisabled: true,
      requestLoading: true,
    });
    try {
      if (data.statusCode === 200) {
        console.log(data.data.premium);
        setCalculatedPremFromAPI(data.data.premium);
        setCostLoading({
          ...costLoading,
          btnDisabled: false,
          requestLoading: false,
        });
        toast(data.message, {
          type: "success",
          theme: "colored",
        });
      } else {
        console.log("Error submitting data");
        setCostLoading({
          ...costLoading,
          btnDisabled: false,
          requestLoading: false,
        });
        toast(data.message, {
          type: "error",
          theme: "colored",
        });
        setCalculatedPremFromAPI("");
      }
      // }
    } catch (err) {
      console.log(err);
      setCostLoading({
        ...costLoading,
        btnDisabled: false,
        requestLoading: false,
      });
    }
  };

  return {
    costLoading,
    useCalculateCost,
    calculatedPremFromAPI,
  };
};
