import { useState } from "react";
import { baseUrl1 } from "../../../../env";
import { endpoints } from "../../enpoints";
import { GetRequest } from "../../requests";
import { useVehicleSelection } from "../../../hooks";

export const VehicleMakeMotorService = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    setVehicleData,
    setVehicleMake,
    vehicleMake,
    vehicleData,
    getVehicleType,
  } = useVehicleSelection();
  const getVehicleMake = async () => {
    const { status, data } = await GetRequest(
      `${baseUrl1}/${endpoints.GET_ALL_CARS}`,
      {},
      {}
    );
    setLoading(loading);
    try {
      if (status === 200) {
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

  return {
    vehicleMake,
    vehicleData,
    loading,
    getVehicleMake,
    getVehicleType,
  };
};
