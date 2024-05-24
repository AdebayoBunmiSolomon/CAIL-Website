import React from "react";
import "./App.css";
import Layout from "./layout/Layout";
import { CustomCookieConsent } from "./common/Cookie-Consent";

function App() {
  return (
    <>
      <main>
        <CustomCookieConsent />
        <Layout />
      </main>
    </>
  );
}

export default App;
