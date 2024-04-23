import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { Button, SelectOptions, TextInput } from "../../components";
import {
  arrOfYears,
  bodyType,
  coverType,
  paymentOptions,
  vehicleCategory,
  vehicleColor,
} from "../../assets/data/formOptionsData";
import { GetRequest } from "../../api/Get";
import { baseUrl1, baseUrl2 } from "../../../env";
import { endpoints } from "../../api/enpoints";
import { useVehicleSelection } from "../../hooks";
import { PostRequest } from "../../api/Post";
import { LoginDetails } from "../../api/LoginDeatils";

type carDetailsType = {
  useFormProps: any;
};

export const CarDetails: React.FC<carDetailsType> = ({ useFormProps }) => {
  const props: any = useFormProps;
  const [selectedCoverType, setSelectedCoverType] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [calculateLoading, setCalculateLoading] = useState<boolean>(false);
  const {
    setVehicleData,
    vehicleMake,
    setVehicleMake,
    selectedVehicleMake,
    setSelectedVehicleMake,
    getVehicleType,
  } = useVehicleSelection();

  const headers = {
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
    },
  };

  const userLogin = async () => {
    setCalculateLoading(true);
    try {
      setCalculateLoading(true);
      const { status, data, loading } = await PostRequest(
        `${baseUrl2}/${endpoints.login}`,
        {
          username: LoginDetails.userName,
          password: LoginDetails.passWord,
        },
        headers
      );
      if (status === 200) {
        console.log(data.data.accessToken);
        setCalculateLoading(loading);
      } else {
        console.log("Error logging in");
        setCalculateLoading(loading);
      }
    } catch (err: any) {
      console.log(err);
      setCalculateLoading(loading);
    }
  };

  const getVehicleMake = async () => {
    const { status, data, loading } = await GetRequest(
      `${baseUrl1}/${endpoints.getAllCars}`,
      {},
      {}
    );
    setLoading(loading);
    try {
      if (status === 200) {
        console.log(data.data);
        const carMakeArr =
          data.data && data.data.map((items: any) => items.carMake);
        const distinctCarMakeArr = [...new Set(carMakeArr)];
        setVehicleData(data.data);
        setVehicleMake(distinctCarMakeArr);
        setLoading(loading);
      } else {
        console.log("Error loading data");
        setLoading(loading);
      }
    } catch (err: any) {
      console.log(err);
      setLoading(loading);
    }
  };

  useEffect(() => {
    getVehicleMake();
  }, []);

  return (
    <div className='flex justify-center items-center'>
      <div className='w-[95%] bg-white rounded-md self-center p-6'>
        <div className='flex items-center gap-4 mb-3'>
          <Controller
            control={props?.control}
            render={({ field }) => (
              <SelectOptions
                data={coverType}
                selectedOption={field.value}
                onChangeSelectedOption={(text) => {
                  field.onChange(text);
                  setSelectedCoverType(text);
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
                data={vehicleCategory}
                selectedOption={field.value}
                onChangeSelectedOption={(text) => field.onChange(text)}
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
                placeHolder='Vehicle value'
                type='text'
                value={field.value}
                onChange={(event) => field.onChange(event.target.value)}
                error={props?.errors?.vehicle_value?.message}
              />
            )}
            name='vehicle_value'
            defaultValue=''
          />
        </div>
        <div className='flex items-center gap-4 mb-3'>
          <Controller
            control={props?.control}
            render={({ field }) =>
              selectedCoverType === "Comprehensive" ? (
                <SelectOptions
                  data={paymentOptions}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => field.onChange(text)}
                  placeholder='Select payment options'
                  error={props?.errors?.payment_options?.message}
                />
              ) : (
                <TextInput
                  placeHolder='Payment Option'
                  type='text'
                  value={field.value}
                  onChange={(event) => field.onChange(event.target.value)}
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
                data={vehicleMake}
                selectedOption={field.value}
                onChangeSelectedOption={(text) => {
                  field.onChange(text);
                  setSelectedVehicleMake(text);
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
                data={getVehicleType(selectedVehicleMake)}
                selectedOption={field.value}
                onChangeSelectedOption={(text) => field.onChange(text)}
                placeholder='Select Vehicle type'
                error={props?.errors?.vehicle_model?.message}
              />
            )}
            name='vehicle_model'
            defaultValue=''
          />
        </div>
        <div className='flex items-center gap-4 mb-3'>
          <Controller
            control={props?.control}
            render={({ field }) => (
              <TextInput
                placeHolder='Registration Number'
                type='text'
                value={field.value}
                onChange={(event) => field.onChange(event.target.value)}
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
                placeHolder='Chasis Number'
                type='text'
                value={field.value}
                onChange={(event) => field.onChange(event.target.value)}
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
                placeHolder='Engine Number'
                type='text'
                value={field.value}
                onChange={(event) => field.onChange(event.target.value)}
                error={props?.errors?.engine_number?.message}
              />
            )}
            name='engine_number'
            defaultValue=''
          />
        </div>
        <div className='flex items-center gap-4 mb-3'>
          <Controller
            control={props?.control}
            render={({ field }) => (
              <SelectOptions
                data={arrOfYears}
                selectedOption={field.value}
                onChangeSelectedOption={(text) => {
                  field.onChange(text);
                  setSelectedCoverType(text);
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
                data={bodyType}
                selectedOption={field.value}
                onChangeSelectedOption={(text) => {
                  field.onChange(text);
                  setSelectedCoverType(text);
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
                placeHolder='insurance start date'
                type='date'
                value={field.value}
                onChange={(event) => field.onChange(event.target.value)}
                error={props?.errors?.insurance_state_date?.message}
              />
            )}
            name='insurance_state_date'
            defaultValue=''
          />
        </div>
        <div className='flex items-center gap-4 mb-3'>
          <Controller
            control={props?.control}
            render={({ field }) => (
              <SelectOptions
                data={vehicleColor}
                selectedOption={field.value}
                onChangeSelectedOption={(text) => {
                  field.onChange(text);
                  setSelectedCoverType(text);
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
                value={field.value}
                onChange={(event) => field.onChange(event.target.value)}
                error={props?.errors?.cost?.message}
              />
            )}
            name='cost'
            defaultValue=''
          />
          <Button
            className='py-[4px] md:py-[7px] lg:py-[7px] text-[white] px-5 flex rounded-lg hover:bg-[#900000d7] hover:duration-700'
            text={calculateLoading ? "Loading..." : "Calculate"}
            onPress={() => {
              userLogin();
            }}
          />
        </div>
      </div>
    </div>
  );
};
