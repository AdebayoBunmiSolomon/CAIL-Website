import React, { useEffect } from "react";
import Routers from "../routes/Routers";
import { Footer, MenuNavigation } from "../components";
import { useLocation } from "react-router-dom";
import { scrollToTop } from "../helper/helper";
const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

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
