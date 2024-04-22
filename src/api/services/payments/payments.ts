import { usePaystackPayment } from "react-paystack";
import { useCalcPremFromAPI, useMotorForm } from "../../../hooks/store/motor";
import { toast } from "react-toastify";

export const paymentsServices = () => {
  const { motorFormData } = useMotorForm();
  const { calculatedPremFromAPI } = useCalcPremFromAPI();
  const initializePaysStackPayment = usePaystackPayment({
    reference: new Date().getTime().toString(),
    email: motorFormData.email,
    amount: Number(calculatedPremFromAPI) * 100,
    publicKey: "pk_test_d536259a2abfa993a7df0dac078667c39e61c0df",
  });

  // you can call this function anything
  const onSuccess = (reference: any) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    console.log(motorFormData);
    toast("Payment successful", {
      type: "success",
      theme: "colored",
    });
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
    toast("Payment canceled", {
      type: "error",
      theme: "colored",
    });
  };

  return {
    initializePaysStackPayment,
    onSuccess,
    onClose,
  };
};
