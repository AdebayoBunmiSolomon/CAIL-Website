import React from "react";
import { useForm, Controller } from "react-hook-form";
import { createEnquiryTypes } from "../../form/Types";
import { TextInput } from "../shared/TextInput";
import { Button } from "../shared/Button";
import { GoArrowRight } from "react-icons/go";
import { FaPhoneVolume } from "react-icons/fa6";

export const ContactForm: React.FC<{}> = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<createEnquiryTypes>({ mode: "onChange" });

  const onSubmit = (data: createEnquiryTypes) => {
    console.log(data);
  };

  return (
    <>
      <p className=' font-normal text-2xl text-[#900000]'>
        Share your ideas, inquiries and provide feedback
      </p>
      <div className='flex flex-col md:flex-col lg:flex-row justify-between items-center gap-3 w-[100%]'>
        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              placeHolder='Full name'
              value={field.value}
              onChange={(event) => field.onChange(event.target.value)}
              error={errors.full_name?.message}
              type='text'
            />
          )}
          rules={{
            required: {
              value: true,
              message: "Full name is required",
            },
          }}
          name='full_name'
          defaultValue=''
        />
        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              placeHolder='Email'
              value={field.value}
              onChange={(event) => field.onChange(event.target.value)}
              error={errors.email?.message}
              type='text'
            />
          )}
          rules={{
            required: {
              value: true,
              message: "Email is required",
            },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          }}
          name='email'
          defaultValue=''
        />
      </div>
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            placeHolder='Subject'
            value={field.value}
            onChange={(event) => field.onChange(event.target.value)}
            error={errors.subject?.message}
            type='text'
          />
        )}
        rules={{
          required: {
            value: true,
            message: "Subject is required",
          },
        }}
        name='subject'
        defaultValue=''
      />
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            placeHolder='Message'
            value={field.value}
            onChange={(event) => field.onChange(event.target.value)}
            error={errors.message?.message}
            type='text'
            textArea
          />
        )}
        rules={{
          required: {
            value: true,
            message: "Message is required",
          },
        }}
        name='message'
        defaultValue=''
      />
      <div className='flex flex-col md:flex-col lg:flex-row  gap-3 my-5'>
        <Button
          text='Send'
          onPress={handleSubmit(onSubmit)}
          className='py-[4px] md:py-[7px] lg:py-[10px] text-[white] px-10 flex'
          rightIcon={<GoArrowRight size={25} />}
        />
        <Button
          text='Request call-back'
          onPress={() => console.log("Request call back")}
          className='py-[4px] md:py-[7px] lg:py-[10px] text-[#900000] px-10 flex bg-[white] drop-shadow-xl'
          rightIcon={<FaPhoneVolume size={20} />}
        />
      </div>
    </>
  );
};
