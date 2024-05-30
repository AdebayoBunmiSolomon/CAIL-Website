import React from "react";
import balloon from "../../assets/images/balloon.png";
import { useNavigate, NavigateFunction } from "react-router-dom";

type comingSoonProps = {
  showComingSoon: boolean;
  closeModal: (value: React.SetStateAction<boolean>) => void;
};

export const ComingSoon: React.FC<comingSoonProps> = ({
  showComingSoon,
  closeModal,
}) => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <>
      {showComingSoon && (
        <div className='flex flex-col gap-5 justify-center items-center fixed bg-[#00000067] inset-0 z-50'>
          <div className='flex flex-col w-full max-w-md gap-6 p-6 bg-white rounded-xl text-center'>
            <div className='py-10'>
              <figure className='flex items-center justify-center'>
                <img src={balloon} alt='' className='w-24 h-24 mb-4' />
              </figure>
              <p>Feature is coming soon</p>
              <p className='mt-2 text-gray-400'>
                email:{" "}
                <span className='text-rose-600'>
                  carecentre@custodianinsurance.com
                </span>{" "}
              </p>
              <button
                className='bg-[#900000] text-sm font-semibold text-white px-4 py-2 rounded-full hover:bg-[#90000065] duration-300'
                onClick={() => navigate("/")}>
                Go back home
              </button>
            </div>
          </div>
          <div className='flex justify-center'>
            <button
              className='bg-[#900000] px-4 py-2 rounded-full text-white font-semibold text-xl hover:bg-[#90000065] duration-300'
              onClick={() => closeModal(!showComingSoon)}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};
