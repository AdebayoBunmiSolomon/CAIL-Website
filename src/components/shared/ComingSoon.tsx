import React from "react";
import balloon from "../../assets/images/balloon.png";

type comingSoonProps = {
  showComingSoon: boolean;
  closeModal: (value: React.SetStateAction<boolean>) => void;
};

export const ComingSoon: React.FC<comingSoonProps> = ({
  showComingSoon,
  closeModal,
}) => {
  return (
    <>
      {showComingSoon && (
        <div className='flex flex-row justify-center items-center fixed bg-[#00000067] top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] z-50'>
          <div className='flex flex-col z-50 fixed w-[40%] gap-10 '>
            <div className='py-10 bg-white rounded-xl px-3 text-center'>
              <figure className='flex flex-row items-center justify-center'>
                <img
                  src={balloon}
                  alt=''
                  className='w-[150px] h-[150px] mb-[20px]'
                />
              </figure>
              <p>Product is coming soon</p>
            </div>
            <div className='flex flex-row justify-center items-center'>
              <button
                className='bg-[#9000009e] px-4 py-2 rounded-full text-white font-semibold text-xl hover:bg-[#90000065] duration-700'
                onClick={() => closeModal(!showComingSoon)}>
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
