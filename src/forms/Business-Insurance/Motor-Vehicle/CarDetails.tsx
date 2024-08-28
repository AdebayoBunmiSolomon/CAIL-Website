import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import {
  Button,
  FormTitle,
  SelectOptions,
  TextInput,
} from "../../../components";
import {
  arrOfYears,
  bodyType,
  coverType,
  paymentOptions,
  vehicleCategory,
  vehicleColor,
} from "../../../assets/data/formOptionsData";
import {
  CalculateCostMotorService,
  VehicleMakeMotorService,
} from "../../../api/services/motor";
import { useMotorForm } from "../../../hooks/store/motor/useMotorForm";
import { convertToDateTimeISO, formatAmount } from "../../../helper/helper";

type carDetailsType = {
  useFormProps: any;
};

export const CarDetails: React.FC<carDetailsType> = ({ useFormProps }) => {
  const props: any = useFormProps;
  const [selectedCoverType, setSelectedCoverType] = useState<string>(""); // helps to store selected vehicle type of the selected vehicle make.
  const { setMotorFormData, motorFormData } = useMotorForm(); // store to update form data
  // const { costLoading, useCalculateCost, calculatedPremFromAPI } =
  //   CalculateCostMotorService(); // API service to calculate cost
  const { vehicleMake, loading, getVehicleMake, getVehicleType } =
    VehicleMakeMotorService(); // function to perform vehicle make selection and vehicle type selection
  const [selectedVehicleMake, setSelectedVehicleMake] = useState<string>(""); // helps to store selected vehicle make for filtering vehicle type of the selected vehicle make
  const [quotePrice, setQuotePrice] = useState<string>("");

  useEffect(() => {
    getVehicleMake();
    const updateCostInputFieldValWithCalculatedPremium = () => {
      if (quotePrice) {
        props?.setValues("cost", String(formatAmount(Number(quotePrice))));
      }
    };
    updateCostInputFieldValWithCalculatedPremium();
  }, [quotePrice]);

  useEffect(() => {
    if (motorFormData.paymentOption) {
      props?.clearError("payment_options");
    }
  }, [motorFormData]);

  const calcCost = () => {
    if (motorFormData.vehicleCategory === vehicleCategory[0]) {
      setQuotePrice("15000");
      setMotorFormData({
        ...motorFormData,
        cost: "15000",
      });
    } else if (motorFormData.vehicleCategory === vehicleCategory[1]) {
      setQuotePrice("20000");
      setMotorFormData({
        ...motorFormData,
        cost: "20000",
      });
    } else if (motorFormData.vehicleCategory === vehicleCategory[2]) {
      setQuotePrice("100000");
      setMotorFormData({
        ...motorFormData,
        cost: "100000",
      });
    }
  };

  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='w-[95%] bg-white rounded-md self-center p-6'>
          <FormTitle title='Motor Vehicle Insurance' />
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Cover type'
                  data={coverType}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    field.onChange(text);
                    setSelectedCoverType(text);
                    if (text === "Comprehensive") {
                      setMotorFormData({
                        ...motorFormData,
                        coverTypeId: "1",
                        coverTypeName: text,
                      });
                    } else if (text === "Third Party") {
                      props?.setValues("payment_options", "Annually");
                      setMotorFormData({
                        ...motorFormData,
                        coverTypeId: "2",
                        coverTypeName: text,
                        paymentOption: "Annually",
                      });
                    } else if (text === "Third Party Fire and Theft") {
                      setMotorFormData({
                        ...motorFormData,
                        coverTypeId: "3",
                        coverTypeName: text,
                      });
                    } else if (text === "Select cover type") {
                      setMotorFormData({
                        ...motorFormData,
                        coverTypeId: "1",
                        coverTypeName: "Comprehensive",
                      });
                    }
                  }}
                  placeholder='Select cover type'
                  error={props?.errors?.cover_type?.message}
                />
              )}
              name='cover_type'
              defaultValue=''
            />
            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Vehicle category'
                  data={vehicleCategory}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    if (text !== "Select Vehicle category") {
                      field.onChange(text);
                      setMotorFormData({
                        ...motorFormData,
                        vehicleCategory: text,
                      });
                    }
                  }}
                  placeholder='Select Vehicle category'
                  error={props?.errors?.vehicle_category?.message}
                />
              )}
              name='vehicle_category'
              defaultValue=''
            />
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Vehicle value'
                  placeHolder='Vehicle value'
                  type='text'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setMotorFormData({
                      ...motorFormData,
                      vehicleValue: event.target.value,
                    });
                  }}
                  error={props?.errors?.vehicle_value?.message}
                />
              )}
              name='vehicle_value'
              defaultValue=''
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) =>
                selectedCoverType === "Comprehensive" ? (
                  <SelectOptions
                    label='Payment options'
                    data={paymentOptions}
                    selectedOption={field.value}
                    onChangeSelectedOption={(text) => {
                      field.onChange(text);
                      setMotorFormData({
                        ...motorFormData,
                        paymentOption: text,
                      });
                    }}
                    placeholder='Select payment options'
                    error={props?.errors?.payment_options?.message}
                  />
                ) : (
                  <TextInput
                    placeHolder='Payment option'
                    label='Payment option'
                    type='text'
                    disabled={true}
                    value={field.value}
                    onChange={(event) => {
                      field.onChange(event.target.value);
                      setMotorFormData({
                        ...motorFormData,
                        paymentOption: "Annually",
                      });
                    }}
                    error={props?.errors?.payment_options?.message}
                  />
                )
              }
              name='payment_options'
              defaultValue=''
            />
            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Vehicle make'
                  data={vehicleMake}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    field.onChange(text);
                    setSelectedVehicleMake(text);
                    setMotorFormData({ ...motorFormData, vehicleMake: text });
                  }}
                  placeholder='Select Vehicle make'
                  error={props?.errors?.vehicle_make?.message}
                  loading={loading}
                />
              )}
              name='vehicle_make'
              defaultValue=''
            />
            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Vehicle type'
                  data={getVehicleType(selectedVehicleMake)}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    field.onChange(text);
                    setMotorFormData({ ...motorFormData, vehicleType: text });
                  }}
                  placeholder='Select Vehicle type'
                  error={props?.errors?.vehicle_model?.message}
                />
              )}
              name='vehicle_model'
              defaultValue=''
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  placeHolder='Registration Number'
                  label='Registration number'
                  type='text'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setMotorFormData({
                      ...motorFormData,
                      registrationNumber: event.target.value,
                    });
                  }}
                  error={props?.errors?.registration_number?.message}
                />
              )}
              name='registration_number'
              defaultValue=''
            />
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Chasis number'
                  placeHolder='Chasis Number'
                  type='text'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setMotorFormData({
                      ...motorFormData,
                      chasisNumber: event.target.value,
                    });
                  }}
                  error={props?.errors?.chasis_number?.message}
                />
              )}
              name='chasis_number'
              defaultValue=''
            />
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Engine number'
                  placeHolder='Engine Number'
                  type='text'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setMotorFormData({
                      ...motorFormData,
                      engineNumber: event.target.value,
                    });
                  }}
                  error={props?.errors?.engine_number?.message}
                />
              )}
              name='engine_number'
              defaultValue=''
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Select year'
                  data={arrOfYears}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    field.onChange(text);
                    setSelectedCoverType(text);
                    setMotorFormData({ ...motorFormData, year: text });
                  }}
                  placeholder='Select year'
                  error={props?.errors?.year_of_make?.message}
                />
              )}
              name='year_of_make'
              defaultValue=''
            />
            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Body type'
                  data={bodyType}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    field.onChange(text);
                    setSelectedCoverType(text);
                    setMotorFormData({
                      ...motorFormData,
                      vehicleBodyType: text,
                    });
                  }}
                  placeholder='Select body type'
                  error={
                    !field.value ? props?.errors?.body_type?.message : undefined
                  }
                />
              )}
              name='body_type'
              defaultValue=''
            />
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
                    setMotorFormData({
                      ...motorFormData,
                      startDate: startDate,
                    });
                  }}
                  error={props?.errors?.insurance_state_date?.message}
                />
              )}
              name='insurance_state_date'
              defaultValue=''
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Vehicle color'
                  data={vehicleColor}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    field.onChange(text);
                    setSelectedCoverType(text);
                    setMotorFormData({ ...motorFormData, vehicleColor: text });
                  }}
                  placeholder='Vehicle Color'
                  error={
                    !field.value
                      ? props?.errors?.vehicle_color?.message
                      : undefined
                  }
                />
              )}
              name='vehicle_color'
              defaultValue=''
            />
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  placeHolder='cost'
                  label='Cost'
                  disabled={true}
                  value={motorFormData.cost}
                  error={
                    !field.value ? props?.errors?.cost?.message : undefined
                  }
                />
              )}
              name='cost'
              defaultValue=''
            />
            <Button
              disabled={false}
              className='py-[4px] md:py-[7px] lg:py-[7px] text-[white] px-5 flex rounded-lg hover:bg-[#900000d7] hover:duration-700'
              text={"Calculate"}
              onPress={() => {
                calcCost();
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
