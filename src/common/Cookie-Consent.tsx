import React from "react";
import CookieConsent from "react-cookie-consent";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const CustomCookieConsent = () => {
  const navigate: NavigateFunction = useNavigate();
  const openPolicy = () => {
    window.open("/privacy-policy", "_blank");
  };
  return (
    <CookieConsent
      location='bottom'
      buttonText='Accept All'
      cookieName='CustodianGeneralCookieConsent'
      style={{ background: "#900000" }}
      buttonStyle={{ color: "#fff", background: "#007bff" }}
      expires={150}
      overlay
      enableDeclineButton
      flipButtons>
      This site uses cookies to give you the best user experience. By continuing
      to browse this website, you give consent to the use of cookies. Please
      read our{" "}
      <button onClick={() => openPolicy()}>
        <a
          className='text-[#007bff] underline hover:cursor-pointer'
          target='_blank'
          rel='noopener noreferrer'>
          privacy policy
        </a>
      </button>{" "}
      for more information
    </CookieConsent>
  );
};
