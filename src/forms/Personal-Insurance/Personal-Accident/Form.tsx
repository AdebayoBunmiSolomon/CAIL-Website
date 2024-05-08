import React from "react";
import { Controller, useForm } from "react-hook-form";
import { personalAccidentFormType } from "../../../form-types/Types";
import { yupResolver } from "@hookform/resolvers/yup";
import { personalAccidentValidationSchema } from "../../../form-types/validationSchema";
import { Button, FormTitle, TextInput } from "../../../components";
import { GoArrowRight } from "react-icons/go";
import { usePersonalAccidentForm } from "../../../hooks/store/personal-accident/usePersonalAccidentForm";
import { sendPersonalAccidentMsg } from "../../../api/services/personal-accident/SendMessageService";
import { ToastContainer } from "react-toastify";

export const PersonalAccidentForm: React.FC<{}> = () => {
  const { personalAccidentFormData, setPersonalAccidentFormData } =
    usePersonalAccidentForm();
  const { useSendMsg, loading } = sendPersonalAccidentMsg();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<personalAccidentFormType>({
    mode: "onChange",
    resolver: yupResolver(personalAccidentValidationSchema),
  });

  const onsubmit = (data: personalAccidentFormType) => {
    useSendMsg();
    console.log(data);
  };

  return (
    <>
      <ToastContainer />
      <div className='flex justify-center items-center pt-[200px] px-20'>
        <div className='w-[95%] bg-white rounded-md self-center p-6'>
          <FormTitle title='Personal Accident Insurance' />
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
                    setPersonalAccidentFormData({
                      ...personalAccidentFormData,
                      full_name: text.target.value,
                    });
                  }}
                  error={errors?.full_name?.message}
                />
              )}
              name='full_name'
              defaultValue=''
            />

            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  label='Enter email'
                  placeHolder='a@example.com'
                  value={field.value}
                  type='email'
                  onChange={(text) => {
                    field.onChange(text.target.value);
                    setPersonalAccidentFormData({
                      ...personalAccidentFormData,
                      email: text.target.value,
                    });
                  }}
                  error={errors?.email?.message}
                />
              )}
              name='email'
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
                    setPersonalAccidentFormData({
                      ...personalAccidentFormData,
                      mobile_number: text.target.value,
                    });
                  }}
                  error={errors?.mobile_number?.message}
                />
              )}
              name='mobile_number'
              defaultValue=''
            />

            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  label='Enter subject'
                  placeHolder='email subject'
                  value={field.value}
                  onChange={(text) => {
                    field.onChange(text.target.value);
                    setPersonalAccidentFormData({
                      ...personalAccidentFormData,
                      subject: text.target.value,
                    });
                  }}
                  error={errors?.subject?.message}
                />
              )}
              name='subject'
              defaultValue=''
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  label='Enter message'
                  placeHolder='email message'
                  value={field.value}
                  textArea
                  onChange={(text) => {
                    field.onChange(text.target.value);
                    setPersonalAccidentFormData({
                      ...personalAccidentFormData,
                      message: text.target.value,
                    });
                  }}
                  error={errors?.message?.message}
                />
              )}
              name='message'
              defaultValue=''
            />
          </div>
        </div>
      </div>
      <div className='flex justify-end items-center w-[95%] px-14 md:px-12 lg:px-10 pt-5 pb-20'>
        <Button
          text={loading ? "Loading..." : "Submit"}
          onPress={handleSubmit(onsubmit)}
          className='py-[4px] md:py-[7px] lg:py-[7px] text-[white] px-5 flex rounded-lg hover:bg-[#900000d7] hover:duration-700'
          rightIcon={<GoArrowRight size={25} />}
        />
      </div>
    </>
  );
};
