import React, { useEffect, useState } from "react";
import { FormTitle, SelectOptions, TextInput } from "../../../components";
import { Controller } from "react-hook-form";
import { convertToDateTimeISO } from "../../../helper/helper";
import { useHomeShieldForm } from "../../../hooks/store/home-shield/useHomeShieldForm";
import {
  paymentOptions,
  policyPeriod,
} from "../../../assets/data/formOptionsData";

type formProps = {
  useFormProps: any;
};

export const HomeShieldForm2: React.FC<formProps> = ({ useFormProps }) => {
  const props = useFormProps;
  const { homeShieldFormData, setHomeShieldFormData } = useHomeShieldForm();
  const [premium, setPremium] = useState<string>("");

  useEffect(() => {
    if (homeShieldFormData.no_of_units === "1") {
      props?.setValues("premium", "10000");
      setPremium("10,000");
      setHomeShieldFormData({ ...homeShieldFormData, premium: "10000" });
    } else if (homeShieldFormData.no_of_units === "2") {
      props?.setValues("premium", "20000");
      setPremium("20,000");
      setHomeShieldFormData({ ...homeShieldFormData, premium: "20000" });
    }
  }, [homeShieldFormData.no_of_units]);

  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='w-[95%] bg-white rounded-md self-center p-6'>
          <FormTitle title='Home Shield Insurance' />
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Start date'
                  placeHolder='insurance start date'
                  type='date'
                  min={new Date().toISOString().split("T")[0]}
                  value={field.value}
                  onChange={(event) => {
                    const startDate = convertToDateTimeISO(event.target.value);
                    field.onChange(event.target.value);
                    setHomeShieldFormData({
                      ...homeShieldFormData,
                      insured_date: startDate,
                    });
                  }}
                  error={props?.errors?.insured_date?.message}
                />
              )}
              name='insured_date'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Policy Period'
                  data={paymentOptions}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    field.onChange(text);
                    setHomeShieldFormData({
                      ...homeShieldFormData,
                      policy_period: text,
                    });
                  }}
                  placeholder='Select policy period'
                  error={props?.errors?.policy_period?.message}
                />
              )}
              name='policy_period'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Number of Units'
                  data={policyPeriod}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    field.onChange(text);
                    if (text === "1") {
                      setHomeShieldFormData({
                        ...homeShieldFormData,
                        no_of_units: text,
                      });
                    }
                    if (text === "2") {
                      setHomeShieldFormData({
                        ...homeShieldFormData,
                        no_of_units: text,
                      });
                    }
                  }}
                  placeholder='Select no of units'
                  error={props?.errors?.no_of_units?.message}
                />
              )}
              name='no_of_units'
              defaultValue=''
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Insured property address'
                  placeHolder='enter address'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setHomeShieldFormData({
                      ...homeShieldFormData,
                      insured_property_address: event.target.value,
                    });
                  }}
                  error={props?.errors?.insured_property_address?.message}
                />
              )}
              name='insured_property_address'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Premium'
                  placeHolder='0'
                  value={premium}
                  disabled={true}
                  error={!premium ? props?.errors?.premium?.message : undefined}
                />
              )}
              name='premium'
              defaultValue=''
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Insured property list'
                  placeHolder='enter property list'
                  value={field.value}
                  textArea
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setHomeShieldFormData({
                      ...homeShieldFormData,
                      list_of_insured_property: event.target.value,
                    });
                  }}
                  error={props?.errors?.list_of_insured_property?.message}
                />
              )}
              name='list_of_insured_property'
              defaultValue=''
            />
          </div>
        </div>
      </div>
    </>
  );
};
