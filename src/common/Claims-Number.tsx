import React from "react";
import { Button, FormTitle } from "../components";
// import balloon from "../assets/images/balloon.png";
import { GoArrowRight } from "react-icons/go";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { formRoutes } from "../routes/FormRoutes";

type claimsNumberProps = {
  showForm: boolean;
  closeForm: (value: React.SetStateAction<boolean>) => void;
  claimNumber: string;
};

export const ClaimsNumber: React.FC<claimsNumberProps> = ({
  showForm,
  closeForm,
  claimNumber,
}) => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <>
      {showForm && (
        <div className='flex flex-col gap-5 justify-center items-center fixed bg-[#00000067] inset-0 z-50'>
          <div className='flex flex-col w-full max-w-md gap-6 p-6 bg-white rounded-xl text-center'>
            <div className='py-10'>
              <FormTitle title='Congratulations' />
              {/* <figure className='flex items-center justify-center'>
                <img src={balloon} alt='' className='w-24 h-24 mb-4' />
              </figure> */}
              <p className='text-lg font-semibold text-gradient'>
                Your generated claims number is:
              </p>
              <p className='text-lg font-semibold text-slate-400'>
                {claimNumber}
              </p>

              <div className='flex flex-row justify-center items-center gap-5 pt-5'>
                <Button
                  text={"Continue"}
                  onPress={() => {
                    closeForm(!showForm);
                    navigate(formRoutes.makeAClaim);
                  }}
                  className='py-[4px] md:py-[7px] lg:py-[7px] text-[white] px-5 flex rounded-lg hover:bg-[#900000d7] hover:duration-700'
                  rightIcon={<GoArrowRight size={25} />}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
