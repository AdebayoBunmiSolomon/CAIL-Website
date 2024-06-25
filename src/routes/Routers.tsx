import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PagesRoutes } from "./Pages-Routes";
import { ThankYou } from "../components";
import { makeAClaimFormRoutes, policyFormRoutes } from "./Form-Routes";
import { useProtectedMakeAClaim } from "../hooks";
import { PrivatePolicy } from "../common/Privacy-Policy";
import { TermsNConditions } from "../common/Terms-N-Condition";
import { ComplaintsProcedure } from "../common/Complaints-Procedure";

const Routers = () => {
  const { isPolicyNumberStored } = useProtectedMakeAClaim();

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
          element={<Navigate to={PagesRoutes[0].path} replace />}
        />
      )}
      <Route path='/thank-you' element={<ThankYou />} />
      <Route path='/privacy-policy' element={<PrivatePolicy />} />
      <Route path='/terms&conditions' element={<TermsNConditions />} />
      <Route path='/complaints-procedure' element={<ComplaintsProcedure />} />
    </Routes>
  );
};

export default Routers;
