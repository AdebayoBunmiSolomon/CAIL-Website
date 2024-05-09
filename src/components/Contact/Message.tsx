import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { Button } from "../shared/Button";
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
            <div className='flex flex-row justify-center items-center fixed bg-[#00000067] top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] z-50'>
              {requestCallBack ? (
                <div className='w-[40%] py-4 bg-white rounded-xl z-50 fixed px-3'>
                  <div className='flex flex-row items-end justify-end py-1'>
                    <button onClick={() => closeModal(!showMessage)}>
                      <MdClose color='black' size={20} />
                    </button>
                  </div>
                  <div className='flex flex-row justify-center'>
                    <figure>
                      <img
                        src={balloon}
                        alt=''
                        className='w-[50px] h-[50px] mb-[20px]'
                      />
                    </figure>
                  </div>
                  <p className='text-primaryColor font-medium text-center text-sm mb-3'>
                    Call back requested successfully
                  </p>

                  <p className='text-slate-600 font-normal text-center text-[13px]'>
                    you have successfully requested a call back, we will reach
                    out to you soon
                  </p>
                </div>
              ) : (
                <div className='w-[40%] py-5 bg-white rounded-xl z-50 fixed px-3'>
                  <div className='flex flex-row items-center justify-between border-b-[1px] py-1'>
                    <p className='font-medium text-[15px]'>
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
                  <div className=' py-5'>
                    <p className='text-slate-600 font-normal text-center text-[13px]'>
                      Your message has been successfully sent to us via mail, do
                      you want to request a call back?{" "}
                    </p>
                  </div>
                  <div className='flex flex-row justify-evenly items-center '>
                    <Button
                      text='No'
                      onPress={() => {
                        closeModal(!showMessage);
                        setRequestCallBack(false);
                      }}
                      className='py-[4px] md:py-[7px] lg:py-[7px] text-[#900000] px-15 flex bg-[white] drop-shadow-xl'
                    />
                    <Button
                      text='Request Call back'
                      onPress={() => {
                        setRequestCallBack(true);
                      }}
                      className='py-[4px] md:py-[7px] lg:py-[7px] text-[white] px-7 flex'
                    />
                  </div>
                </div>
              )}
            </div>
          )}
    </>
  );
};
