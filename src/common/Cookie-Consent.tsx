import React from "react";
import CookieConsent from "react-cookie-consent";

export const CustomCookieConsent = () => {
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
      read our privacy policy for more information
    </CookieConsent>
  );
};
