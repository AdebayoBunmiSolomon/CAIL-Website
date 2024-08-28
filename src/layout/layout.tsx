import React, { useEffect } from "react";
import Routers from "../routes/Routers";
import { Footer, MenuNavigation } from "../components";
import { useLocation } from "react-router-dom";
const Layout = () => {
  const { pathname } = useLocation();
  // console.log(pathname);

  const executeScrollToTop = () => {
    if (pathname !== "/resources") {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Ensures smooth scroll
      });
    }
  };

  useEffect(() => {
    executeScrollToTop();
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
