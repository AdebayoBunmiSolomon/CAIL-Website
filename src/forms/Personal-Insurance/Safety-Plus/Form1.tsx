import React from "react";
import { FormTitle } from "../../../components";

type formProps = {
  useFormProps: any;
};

export const SafetyPlusForm1: React.FC<formProps> = ({ useFormProps }) => {
  const props = useFormProps;
  console.log(props);
  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='w-[95%] bg-white rounded-md self-center p-6'>
          <FormTitle title='Safety Plus Insurance' />
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'></div>
        </div>
      </div>
    </>
  );
};
