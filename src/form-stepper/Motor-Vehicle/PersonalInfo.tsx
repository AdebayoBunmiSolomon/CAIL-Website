import React from "react";
import { Controller } from "react-hook-form";
import { SelectOptions, TextInput } from "../../components";

type personalInfoType = {
  useFormProps: any;
};

const gender = ["Male", "Female"];
const nigerianStates = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

const identificationType = [
  "Driver's License",
  "International Passport",
  "National ID Card",
];
const title = [
  "Miss",
  "Master",
  "Mister",
  "Mr",
  "Mrs",
  "Dr",
  "Prof",
  "Chief",
  "Alhaji",
  "Pastor",
  "Rev",
];

export const PersonalInfo: React.FC<personalInfoType> = ({ useFormProps }) => {
  const props = useFormProps;

  return (
    <div className='flex justify-center items-center'>
      <div className='w-[95%] bg-white rounded-md self-center p-6'>
        <div className='flex items-center gap-4 mb-3'>
          <Controller
            control={props?.control}
            render={({ field }) => (
              <SelectOptions
                data={title}
                selectedOption={field.value}
                onChangeSelectedOption={(text) => field.onChange(text)}
                placeholder='Select Title'
                error={!field.value ? props?.errors?.title?.message : undefined}
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
                type='text'
                value={field.value}
                onChange={(event) => field.onChange(event.target.value)}
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
                type='text'
                value={field.value}
                onChange={(event) => field.onChange(event.target.value)}
                error={props?.errors?.first_name?.message}
              />
            )}
            name='first_name'
            defaultValue=''
          />
        </div>
        <div className='flex items-center gap-4 mb-3'>
          <Controller
            control={props?.control}
            render={({ field }) => (
              <TextInput
                placeHolder='Email address'
                type='email'
                value={field.value}
                onChange={(event) => field.onChange(event.target.value)}
                error={props?.errors?.email_address?.message}
              />
            )}
            name='email_address'
            defaultValue=''
          />
          <Controller
            control={props?.control}
            render={({ field }) => (
              <TextInput
                placeHolder='Mobile number'
                value={field.value}
                onChange={(event) => field.onChange(event.target.value)}
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
                placeHolder='Date of birth'
                type='date'
                value={field.value}
                onChange={(event) => field.onChange(event.target.value)}
                error={props?.errors?.dob?.message}
              />
            )}
            name='dob'
            defaultValue=''
          />
        </div>
        <div className='flex items-center gap-4 mb-3'>
          <Controller
            control={props?.control}
            render={({ field }) => (
              <SelectOptions
                data={gender}
                selectedOption={field.value}
                onChangeSelectedOption={(text) => field.onChange(text)}
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
                placeHolder='occupation'
                value={field.value}
                onChange={(event) => field.onChange(event.target.value)}
                error={props?.errors?.occupation?.message}
              />
            )}
            name='occupation'
            defaultValue=''
          />
          <Controller
            control={props?.control}
            render={({ field }) => (
              <TextInput
                placeHolder='Address'
                value={field.value}
                onChange={(event) => field.onChange(event.target.value)}
                error={props?.errors?.address?.message}
              />
            )}
            name='address'
            defaultValue=''
          />
        </div>
        <div className='flex items-center gap-4 mb-3'>
          <Controller
            control={props?.control}
            render={({ field }) => (
              <SelectOptions
                data={nigerianStates}
                selectedOption={field.value}
                onChangeSelectedOption={(text) => field.onChange(text)}
                placeholder='Select State'
                error={!field.value ? props?.errors?.state?.message : undefined}
              />
            )}
            name='state'
            defaultValue=''
          />
          <Controller
            control={props?.control}
            render={({ field }) => (
              <TextInput
                placeHolder='Identification Number'
                value={field.value}
                onChange={(event) => field.onChange(event.target.value)}
                error={props?.errors?.identification_number?.message}
              />
            )}
            name='identification_number'
            defaultValue=''
          />
          <Controller
            control={props?.control}
            render={({ field }) => (
              <SelectOptions
                data={identificationType}
                selectedOption={field.value}
                onChangeSelectedOption={(text) => field.onChange(text)}
                placeholder='Select identification type'
                error={
                  !field.value
                    ? props?.errors?.identification_type?.message
                    : undefined
                }
              />
            )}
            name='identification_type'
            defaultValue=''
          />
        </div>
      </div>
    </div>
  );
};
