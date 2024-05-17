import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PagesRoutes } from "./Pages-Routes";
import { ThankYou } from "../components";
import { makeAClaimFormRoutes, policyFormRoutes } from "./Form-Routes";
import { useProtectedMakeAClaim } from "../hooks";

const Routers = () => {
  const { isPolicyNumberStored } = useProtectedMakeAClaim();
  console.log(isPolicyNumberStored);
  return (
    <Routes>
      {PagesRoutes &&
        PagesRoutes.map((items, index) => (
          <Route key={index} path={items.path} element={<items.element />} />
        ))}
      {policyFormRoutes &&
        policyFormRoutes.map((items, index) => (
          <Route key={index} path={items.path} element={<items.element />} />
        ))}

      {isPolicyNumberStored === true ? (
        makeAClaimFormRoutes &&
        makeAClaimFormRoutes.map((items, index) => (
          <Route key={index} path={items.path} element={<items.element />} />
        ))
      ) : (
        <Route
          path='*'
          element={<Navigate to={PagesRoutes[6].path} replace />}
        />
      )}
      <Route path='/thank-you' element={<ThankYou />} />
    </Routes>
  );
};

export default Routers;
