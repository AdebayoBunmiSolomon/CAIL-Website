import React from "react";
import "./App.css";
import Layout from "./layout/Layout";
import { CustomCookieConsent } from "./common/Cookie-Consent";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <main>
        <ToastContainer />
        <CustomCookieConsent />
        <Layout />
      </main>
    </>
  );
}

export default App;
