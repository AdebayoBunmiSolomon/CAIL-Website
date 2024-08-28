import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
// import { Button } from "../shared/Button";
import balloon from "../../assets/images/balloon.png";

type messageProps = {
  showMessage: boolean;
  closeModal: (value: React.SetStateAction<boolean>) => void;
  loading: boolean;
};

export const ContactMessage: React.FC<messageProps> = ({
  showMessage,
  closeModal,
  loading,
}) => {
  const [requestCallBack, setRequestCallBack] = useState<boolean>(false);

  useEffect(() => {
    if (requestCallBack === true) {
      const interval = setInterval(() => {
        setRequestCallBack(!requestCallBack);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [requestCallBack]);

  return (
    <>
      {loading
        ? null
        : showMessage && (
            <div className='fixed top-0 left-0 right-0 bottom-0 w-full h-full flex justify-center items-center bg-[#00000067] z-50'>
              {requestCallBack ? (
                <div className='w-full max-w-md md:w-2/3 lg:w-1/2 py-4 bg-white rounded-xl z-50 fixed px-3'>
                  <div className='flex flex-row items-end justify-end py-1'>
                    <button onClick={() => closeModal(!showMessage)}>
                      <MdClose color='black' size={20} />
                    </button>
                  </div>
                  <div className='flex justify-center mb-5'>
                    <figure>
                      <img
                        src={balloon}
                        alt='Balloon'
                        className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-5'
                      />
                    </figure>
                  </div>
                  <p className='text-primaryColor font-medium text-center text-sm md:text-base mb-3'>
                    Call back requested successfully
                  </p>
                  <p className='text-slate-600 font-normal text-center text-xs md:text-sm lg:text-base'>
                    You have successfully requested a call back, we will reach
                    out to you soon.
                  </p>
                </div>
              ) : (
                <div className='w-full max-w-md md:w-2/3 lg:w-1/2 py-5 bg-white rounded-xl z-50 fixed px-3'>
                  <div className='flex items-center justify-between border-b py-1'>
                    <p className='font-medium text-sm md:text-base lg:text-lg'>
                      Message Sent Successfully
                    </p>
                    <button
                      onClick={() => {
                        closeModal(!showMessage);
                        setRequestCallBack(false);
                      }}>
                      <MdClose color='black' size={20} />
                    </button>
                  </div>
                  <div className='py-5'>
                    <p className='text-slate-600 font-normal text-center text-xs md:text-sm lg:text-base'>
                      Your message has been successfully sent to us via mail.
                    </p>
                  </div>
                  {/* <div className='flex flex-row justify-evenly items-center'>
                    <Button
                      text='No'
                      onPress={() => {
                        closeModal(!showMessage);
                        setRequestCallBack(false);
                      }}
                      className='py-2 md:py-3 lg:py-4 text-[#900000] px-5 md:px-8 lg:px-10 bg-white drop-shadow-xl'
                    />
                    <Button
                      text='Request Call back'
                      onPress={() => setRequestCallBack(true)}
                      className='py-2 md:py-3 lg:py-4 text-white px-5 md:px-8 lg:px-10 bg-primaryColor'
                    />
                  </div> */}
                </div>
              )}
            </div>
          )}
    </>
  );
};
