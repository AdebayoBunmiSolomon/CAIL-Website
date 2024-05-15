import React from "react";
import { FormTitle } from "../../../components";

type useFormProps = {
  useFormProps: any;
};

export const AccidentClaimRequiredDocuments: React.FC<useFormProps> = ({
  useFormProps,
}) => {
  const props = useFormProps;
  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='w-[95%] bg-white rounded-md self-center p-6'>
          <FormTitle title='Accident Claim Required Documents' />
        </div>
      </div>
    </>
  );
};
