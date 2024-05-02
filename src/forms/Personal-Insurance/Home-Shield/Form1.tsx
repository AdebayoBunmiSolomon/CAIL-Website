import React, { useEffect, useState } from "react";
import { FormTitle, SelectOptions, TextInput } from "../../../components";
import { Controller } from "react-hook-form";
import {
  gender,
  identificationType,
  nigerianStates,
  title,
} from "../../../assets/data/formOptionsData";
import { useHomeShieldForm } from "../../../hooks/store/home-shield/useHomeShieldForm";
import { convertToDateTimeISO } from "../../../helper/helper";
import { FileInput } from "../../../components/shared/FileInput";

type formProps = {
  useFormProps: any;
};

export const HomeShieldForm1: React.FC<formProps> = ({ useFormProps }) => {
  const props = useFormProps;
  const { homeShieldFormData, setHomeShieldFormData } = useHomeShieldForm();
  const [fileName, setFileName] = useState<string>("");

  useEffect(() => {
    const updateValueOfFileInputToRemoveErrorMsg = () => {
      // if (!motorFormData.file) {
      props?.setValues("means_of_id", homeShieldFormData.means_of_id);
      setFileName(homeShieldFormData.means_of_id);
    };
    // };
    updateValueOfFileInputToRemoveErrorMsg();
  }, [homeShieldFormData.means_of_id, fileName]);
  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='w-[95%] bg-white rounded-md self-center p-6'>
          <FormTitle title='Home Shield Insurance' />
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Select Title'
                  data={title}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    field.onChange(text);
                    setHomeShieldFormData({
                      ...homeShieldFormData,
                      title: text,
                    });
                  }}
                  placeholder='Select Title'
                  error={
                    !field.value ? props?.errors?.title?.message : undefined
                  }
                />
              )}
              name='title'
              defaultValue=''
            />
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  placeHolder='Surname'
                  label='Surname'
                  type='text'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setHomeShieldFormData({
                      ...homeShieldFormData,
                      surname: event.target.value,
                    });
                  }}
                  error={props?.errors?.surname?.message}
                />
              )}
              name='surname'
              defaultValue=''
            />
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  placeHolder='First name'
                  label='First name'
                  type='text'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setHomeShieldFormData({
                      ...homeShieldFormData,
                      first_name: event.target.value,
                    });
                  }}
                  error={props?.errors?.first_name?.message}
                />
              )}
              name='first_name'
              defaultValue=''
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  placeHolder='Date of birth'
                  label='Date Of Birth'
                  type='date'
                  value={field.value}
                  onChange={(event) => {
                    const date = convertToDateTimeISO(event.target.value);
                    field.onChange(event.target.value);
                    setHomeShieldFormData({
                      ...homeShieldFormData,
                      dob: date,
                    });
                  }}
                  error={props?.errors?.dob?.message}
                />
              )}
              name='dob'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Select Gender'
                  data={gender}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    field.onChange(text);
                    setHomeShieldFormData({
                      ...homeShieldFormData,
                      gender: text,
                    });
                  }}
                  placeholder='Select gender'
                  error={
                    !field.value ? props?.errors?.gender?.message : undefined
                  }
                />
              )}
              name='gender'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  placeHolder='a@example.com'
                  label='Email Address'
                  type='email'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setHomeShieldFormData({
                      ...homeShieldFormData,
                      email: event.target.value,
                    });
                  }}
                  error={props?.errors?.email?.message}
                />
              )}
              name='email'
              defaultValue=''
            />
          </div>

          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  placeHolder='Mobile number'
                  label='Mobile Number'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setHomeShieldFormData({
                      ...homeShieldFormData,
                      mobile_number: event.target.value,
                    });
                  }}
                  error={props?.errors?.mobile_number?.message}
                />
              )}
              name='mobile_number'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Address'
                  placeHolder='Address'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setHomeShieldFormData({
                      ...homeShieldFormData,
                      address: event.target.value,
                    });
                  }}
                  error={props?.errors?.address?.message}
                />
              )}
              name='address'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Select State'
                  data={nigerianStates}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    field.onChange(text);
                    setHomeShieldFormData({
                      ...homeShieldFormData,
                      state: text,
                    });
                  }}
                  placeholder='Select State'
                  error={
                    !field.value ? props?.errors?.state?.message : undefined
                  }
                />
              )}
              name='state'
              defaultValue=''
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Occupation'
                  placeHolder='occupation'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setHomeShieldFormData({
                      ...homeShieldFormData,
                      occupation: event.target.value,
                    });
                  }}
                  error={props?.errors?.occupation?.message}
                />
              )}
              name='occupation'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Identification Type'
                  data={identificationType}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    field.onChange(text);
                    setHomeShieldFormData({
                      ...homeShieldFormData,
                      id_type: text,
                    });
                  }}
                  placeholder='Select identification type'
                  error={
                    !field.value ? props?.errors?.id_type?.message : undefined
                  }
                />
              )}
              name='id_type'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Identification number'
                  placeHolder='Identification Number'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setHomeShieldFormData({
                      ...homeShieldFormData,
                      id_number: event.target.value,
                    });
                  }}
                  error={props?.errors?.id_number?.message}
                />
              )}
              name='id_number'
              defaultValue=''
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <FileInput
                  label='Upload File'
                  placeHolder='Choose File'
                  defaultValue={fileName && fileName}
                  onChange={(event) => {
                    const target = event.target as HTMLInputElement;
                    if (target) {
                      const selectedFile = target.files?.[0];
                      console.log(selectedFile);
                      setHomeShieldFormData({
                        ...homeShieldFormData,
                        means_of_id: selectedFile,
                      });
                    }
                  }}
                  error={!field.value && props?.errors?.means_of_id?.message}
                />
              )}
              name='means_of_id'
              defaultValue=''
            />
          </div>
        </div>
      </div>
    </>
  );
};
