import React from "react";
import { Route, Routes } from "react-router-dom";
import * as Pages from "../pages";
import { formRoutes } from "./FormRoutes";
import { MotorVehicle } from "../form-stepper/Motor-Vehicle/Stepper";

type pagesProps = {
  path: string;
  element: React.ComponentType<any>;
};

const pages: pagesProps[] = [
  {
    path: "/",
    element: Pages.Home,
  },
  {
    path: "/about-us",
    element: Pages.About,
  },
  {
    path: "/products/:id",
    element: Pages.Products,
  },
  {
    path: "/products-section/:id",
    element: Pages.ProductSection,
  },
  {
    path: "/resources/:id",
    element: Pages.Resources,
  },
  {
    path: "/contact-us",
    element: Pages.ContactUs,
  },
  {
    path: formRoutes.motor_vehicle,
    element: MotorVehicle,
  },
];

const Routers = () => {
  return (
    <Routes>
      {pages &&
        pages.map((items, index) => (
          <Route key={index} path={items.path} element={<items.element />} />
        ))}
    </Routes>
  );
};

export default Routers;
