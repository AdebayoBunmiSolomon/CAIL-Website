import React from "react";
import { FormTitle } from "../../../components";

type useFormProps = {
  useFormProps: any;
};

export const OilAndGasClaimRequiredDocumentsDetails: React.FC<useFormProps> = ({
  useFormProps,
}) => {
  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='w-[95%] bg-white rounded-md self-center p-6'>
          <FormTitle title='Oil and Gas Claim Required Documents' />
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'></div>
        </div>
      </div>
    </>
  );
};
