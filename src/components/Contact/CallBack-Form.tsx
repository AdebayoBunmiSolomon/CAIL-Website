import React from "react";
import { Controller, useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import { requestCallBackFormType } from "../../form-types/Types";
import { yupResolver } from "@hookform/resolvers/yup";
import { requestCallBackValidationSchema } from "../../form-types/validationSchema";
import { TextInput } from "../shared/TextInput";
import { Button } from "../shared/Button";
type callBackFormProps = {
  showCallBackFrm: boolean;
  closeModal: (value: React.SetStateAction<boolean>) => void;
};

export const CallBackForm: React.FC<callBackFormProps> = ({
  showCallBackFrm,
  closeModal,
}) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<requestCallBackFormType>({
    mode: "onChange",
    resolver: yupResolver(requestCallBackValidationSchema),
  });

  const onSubmit = (data: requestCallBackFormType) => {
    console.log(data);
    closeModal(!showCallBackFrm);
  };

  return (
    <>
      {showCallBackFrm && (
        <div className='flex flex-row justify-center items-center fixed bg-[#00000067] top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] z-50'>
          <div className='w-[40%] py-4 bg-white rounded-xl z-50 fixed px-3'>
            <div className='flex flex-row items-center justify-between border-b-[1px] mb-5'>
              <p className='font-medium text-[15px]'>Request call-back</p>
              <button
                onClick={() => {
                  closeModal(!showCallBackFrm);
                }}>
                <MdClose color='black' size={20} />
              </button>
            </div>
            <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    label='Enter fullname'
                    placeHolder='john doe'
                    value={field.value}
                    onChange={(text) => {
                      field.onChange(text.target.value);
                    }}
                    error={errors?.full_name?.message}
                  />
                )}
                name='full_name'
                defaultValue=''
              />
            </div>
            <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    label='Enter mobile number'
                    placeHolder='080 0000 0000'
                    value={field.value}
                    onChange={(text) => {
                      field.onChange(text.target.value);
                    }}
                    error={errors?.mobile_number?.message}
                  />
                )}
                name='mobile_number'
                defaultValue=''
              />
            </div>
            <div className='flex w-[100%]'>
              <Button
                text={"Request call back"}
                onPress={handleSubmit(onSubmit)}
                className='py-[4px] md:py-[7px] lg:py-[7px] text-[white] px-5 flex rounded-lg hover:bg-[#900000d7] hover:duration-700 w-full'
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
