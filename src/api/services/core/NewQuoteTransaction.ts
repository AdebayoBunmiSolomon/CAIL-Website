import { useState } from "react";
import { PostRequest } from "../../requests";
import { PaymentServices } from "../payments/payments";
import { toast } from "react-toastify";

export const NewQuoteTransaction = (
  payload: any,
  url: string,
  headers: any
) => {
  const [loading, setLoading] = useState<boolean>(false);
  //custom hook to initialize paystack payment...
  const { useMakePaymentWithPaystack } = PaymentServices(
    payload.email,
    payload.amount
  );

  //perform quote operations with saving form data & initializing payment
  const useGetAQuote = async () => {
    // console.log(payload);
    setLoading(true);
    try {
      //save form data
      const { status, data } = await PostRequest(url, payload, headers);
      if (status === 200) {
        //initialize paystack payment
        useMakePaymentWithPaystack();
        toast(data.message, {
          type: "success",
          theme: "colored",
        });
        setLoading(false);
      } else {
        // console.log("Error saving form data");
        toast(data.message, {
          type: "error",
          theme: "colored",
        });
        setLoading(false);
      }
    } catch (err: any) {
      // console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    useGetAQuote,
    loading,
  };
};
