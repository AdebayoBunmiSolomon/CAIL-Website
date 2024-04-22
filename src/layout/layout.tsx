import React from "react";
// import FullHeader from "../components/shared/Header/FullHeader";
import Routers from "../routes/Routers";
import { Footer, MenuNavigation } from "../components";
import ScrollToTop from "../helper/helper";
const Layout = () => {
  return (
    <>
      <MenuNavigation />
      <main>
        <ScrollToTop />
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
