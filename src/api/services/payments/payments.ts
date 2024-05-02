import { usePaystackPayment } from "react-paystack";
import { useCalcPremFromAPI, useMotorForm } from "../../../hooks/store/motor";
import { toast } from "react-toastify";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const paymentsServices = (email: string, amount: string) => {
  const navigate: NavigateFunction = useNavigate();
  const initializePaysStackPayment = usePaystackPayment({
    reference: new Date().getTime().toString(),
    email: email,
    amount: Number(amount) * 100,
    publicKey: "pk_test_b412d48c21a7c347167d3ce3acbf747029b34de6",
  });

  // you can call this function anything
  const onSuccess = (reference: any) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    toast("Payment successful", {
      type: "success",
      theme: "colored",
    });
    navigate("/thank-you");
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
