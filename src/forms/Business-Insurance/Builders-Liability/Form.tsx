import React from "react";
import { Controller, useForm } from "react-hook-form";
import { businessInsuranceAccidentFormType } from "../../../form-types/Types";
import { yupResolver } from "@hookform/resolvers/yup";
import { businessInsuranceValidationSchema } from "../../../form-types/validationSchema";
import { Button, FormTitle, TextInput } from "../../../components";
import { GoArrowRight } from "react-icons/go";
import { useBusinessInsuranceForm } from "../../../hooks/store/personal-accident/useBusinessInsuranceForm";
import { sendQuoteMsg } from "../../../api/services/Business-Insurance/SendMessageService";

export const BuildersLiabilityForm: React.FC<{}> = () => {
  const { businessInsuranceFormData, setBusinessInsuranceFormData } =
    useBusinessInsuranceForm();
  const { sendMsg, loading } = sendQuoteMsg();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<businessInsuranceAccidentFormType>({
    mode: "onChange",
    resolver: yupResolver(businessInsuranceValidationSchema),
  });

  const onsubmit = (data: businessInsuranceAccidentFormType) => {
    const formData = {
      firstName: businessInsuranceFormData.full_name,
      email: businessInsuranceFormData.email,
      mobile_number: businessInsuranceFormData.mobile_number,
      subject: businessInsuranceFormData.subject,
      message: businessInsuranceFormData.message,
      product_class: "10",
    };
    sendMsg(formData);
    // console.log(data);
  };

  return (
    <>
      <div className='flex justify-center items-center pt-[200px] px-20'>
        <div className='w-[95%] bg-white rounded-md self-center p-6'>
          <FormTitle title='Builders Liability Insurance' />
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
                    setBusinessInsuranceFormData({
                      ...businessInsuranceFormData,
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
                    setBusinessInsuranceFormData({
                      ...businessInsuranceFormData,
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
                    setBusinessInsuranceFormData({
                      ...businessInsuranceFormData,
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
                    setBusinessInsuranceFormData({
                      ...businessInsuranceFormData,
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
                    setBusinessInsuranceFormData({
                      ...businessInsuranceFormData,
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
              "Submit"
            )
          }
          onPress={handleSubmit(onsubmit)}
          className='py-[4px] md:py-[7px] lg:py-[7px] text-[white] px-5 flex rounded-lg hover:bg-[#900000d7] hover:duration-700'
          rightIcon={<GoArrowRight size={25} />}
        />
      </div>
    </>
  );
};
