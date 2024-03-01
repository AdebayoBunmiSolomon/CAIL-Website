import React from "react";
import MenuNavigation from "../components/shared/MenuNavigation";
import Routers from "../routes/Routers";
import Footer from "../components/shared/Footer";
const Layout = () => {
  return (
    <>
      <MenuNavigation />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
