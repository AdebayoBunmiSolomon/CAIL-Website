import React from "react";
import { ToastContainer } from "react-toastify";
import { FormTitle } from "../../../components";

export const SafetyPlusSummary: React.FC<{}> = () => {
  return (
    <>
      <div>
        <ToastContainer />
        <div className='flex justify-center items-center'>
          <div className='w-[95%] bg-white rounded-md self-center p-6'>
            <FormTitle title='Motor Vehicle Summary' />
          </div>
        </div>
      </div>
    </>
  );
};
