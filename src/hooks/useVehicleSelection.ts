import { useState } from "react";

type vehicleDataType = {
  id: number;
  carMake: string;
  carType: string;
  carFlag: string;
  carKeyDte: string;
  carOperationID: string;
}[];

export const useVehicleSelection = () => {
  const [vehicleData, setVehicleData] = useState<vehicleDataType>([
    {
      id: 0,
      carMake: "",
      carType: "",
      carFlag: "",
      carKeyDte: "",
      carOperationID: "",
    },
  ]);
  const [vehicleMake, setVehicleMake] = useState<any[]>([]);
  const [selectedVehicleMake, setSelectedVehicleMake] = useState<string>("");

  const getVehicleType = (queryValue: string) => {
    if (vehicleData && vehicleData.length > 0) {
      const filteredVehicleType = vehicleData.filter(
        (items) => items.carMake === queryValue
      );
      const data = filteredVehicleType.map((items) => items.carType);
      return data;
    }
  };

  return {
    vehicleData,
    setVehicleData,
    vehicleMake,
    setVehicleMake,
    selectedVehicleMake,
    setSelectedVehicleMake,
    getVehicleType,
  };
};
