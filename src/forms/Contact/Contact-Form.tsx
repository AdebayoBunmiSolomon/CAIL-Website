import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { createEnquiryTypes } from "../../form-types/Types";
import { TextInput } from "../../components/shared/TextInput";
import { Button } from "../../components/shared/Button";
import { GoArrowRight } from "react-icons/go";
import { FaPhoneVolume } from "react-icons/fa6";
import { CallBackForm, ContactMessage } from "../../components";
import { useEnquiryForm } from "../../hooks/store/enquiry";
import { MakeEnquiry } from "../../api/services/enquiry/MakeEnquiry";
import { ToastContainer } from "react-toastify";
import { validatePolicyNumber } from "../../helper/helper";

export const ContactForm: React.FC<{}> = () => {
  const { loading, useMakeEnquiry } = MakeEnquiry();
  const { setEnquiryFormData, enquiryFormData } = useEnquiryForm();
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [callBckForm, setCallBackForm] = useState<boolean>(false);
  const [policyHolderChecked, setPolicyHolderChecked] =
    useState<boolean>(false);
  const {
    control,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<createEnquiryTypes>({ mode: "onChange" });

  const onSubmit = (data: createEnquiryTypes) => {
    console.log(data);
    const { isPolicyValid } = validatePolicyNumber(data.policy_number);
    if (policyHolderChecked && !isPolicyValid) {
      setError("policy_number", { message: "Invalid policy number" });
    } else {
      useMakeEnquiry();
    }
  };

  useEffect(() => {
    if (loading) {
      setShowMessage(true);
    }
  }, [loading]);

  useEffect(() => {
    if (!policyHolderChecked) {
      setValue("policy_number", "NIL");
    } else {
      setValue("policy_number", "");
    }
  }, [policyHolderChecked]);

  return (
    <>
      <ToastContainer />
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
              onChange={(event) => {
                field.onChange(event.target.value);
                setEnquiryFormData({
                  ...enquiryFormData,
                  fullName: event.target.value,
                });
              }}
              error={errors.full_name?.message}
              type='text'
            />
          )}
          rules={{
            required: {
              value: true,
              message: "Full name is required",
            },
            pattern: {
              value: /^[a-zA-Z\s]*$/,
              message: "Only letters and spaces are allowed",
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
              onChange={(event) => {
                field.onChange(event.target.value);
                setEnquiryFormData({
                  ...enquiryFormData,
                  email: event.target.value,
                });
              }}
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
      <div className='flex flex-col md:flex-col lg:flex-row justify-between items-center gap-3 w-[100%]'>
        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              placeHolder='Subject'
              value={field.value}
              onChange={(event) => {
                field.onChange(event.target.value);
                setEnquiryFormData({
                  ...enquiryFormData,
                  subject: event.target.value,
                });
              }}
              error={errors.subject?.message}
              type='text'
            />
          )}
          rules={{
            required: {
              value: true,
              message: "Subject is required",
            },
            pattern: {
              value: /^[a-zA-Z\s]*$/,
              message: "Only letters and spaces are allowed",
            },
          }}
          name='subject'
          defaultValue=''
        />
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center'>
          <input
            type='checkbox'
            id='policyHolder'
            name='policyHolder'
            className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
            checked={policyHolderChecked}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setPolicyHolderChecked(event.target.checked)
            }
          />
          <label
            htmlFor='policyHolder'
            className='ml-2 block text-sm text-gray-900'>
            Are you a policy holder?
          </label>
        </div>
        <div>
          <Controller
            control={control}
            render={({ field }) => (
              <TextInput
                placeHolder=''
                value={field.value}
                onChange={(event) => {
                  field.onChange(event.target.value);
                  setEnquiryFormData({
                    ...enquiryFormData,
                    policyNumber: event.target.value,
                  });
                }}
                error={errors.policy_number?.message}
                type='text'
                disabled={!policyHolderChecked ? true : false}
              />
            )}
            rules={{
              required: {
                value: true,
                message: "Policy number is required",
              },
            }}
            name='policy_number'
            defaultValue=''
          />
        </div>
      </div>
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            placeHolder='Message'
            value={field.value}
            onChange={(event) => {
              field.onChange(event.target.value);
              setEnquiryFormData({
                ...enquiryFormData,
                message: event.target.value,
              });
            }}
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
          pattern: {
            value: /^[a-zA-Z\s]*$/,
            message: "Only letters and spaces are allowed",
          },
        }}
        name='message'
        defaultValue=''
      />
      <div className='flex flex-col md:flex-col lg:flex-row  gap-3 my-5'>
        <Button
          text={
            loading ? (
              <svg
                aria-hidden='true'
                className='inline w-6 h-6 mr-2 text-gray-200 animate-spin fill-white'
                viewBox='0 0 100 101'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                  fill='currentColor'
                />
                <path
                  d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                  fill='currentFill'
                />
              </svg>
            ) : (
              "Send"
            )
          }
          onPress={handleSubmit(onSubmit)}
          className='py-[4px] md:py-[7px] lg:py-[10px] text-[white] px-10 flex'
          rightIcon={<GoArrowRight size={25} />}
        />
        <Button
          text='Request call-back'
          onPress={() => setCallBackForm(!callBckForm)}
          className='py-[4px] md:py-[7px] lg:py-[10px] text-[#900000] px-10 flex bg-[white] drop-shadow-xl'
          rightIcon={<FaPhoneVolume size={20} />}
        />
      </div>
      <ContactMessage
        showMessage={showMessage}
        closeModal={(value) => setShowMessage(value)}
        loading={loading}
      />
      <CallBackForm
        showCallBackFrm={callBckForm}
        closeModal={(value) => setCallBackForm(value)}
      />
    </>
  );
};
