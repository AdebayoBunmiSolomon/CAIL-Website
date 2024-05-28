import { useState } from "react";
import { PostRequest } from "../../requests";
import { paymentsServices } from "../payments/payments";
import { toast } from "react-toastify";

export const NewQuoteTransaction = (email: string, amount: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  //custom hook to initialize payment...
  const { initializePaysStackPayment, onClose, onSuccess } = paymentsServices(
    email,
    amount
  );

  const useGetAQuote = async (url: string, payload: any, headers: any) => {
    setLoading(true);
    try {
      //save form data
      const { status, data } = await PostRequest(url, payload, headers);
      if (status === 200) {
        //initialize paystack payment
        initializePaysStackPayment({ onSuccess, onClose });
        toast(data.message, {
          type: "success",
          theme: "colored",
        });
        setLoading(false);
      } else {
        console.log("Error saving data");
        toast(data.message, {
          type: "error",
          theme: "colored",
        });
        setLoading(false);
      }
    } catch (err: any) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    useGetAQuote,
    loading,
  };
};
