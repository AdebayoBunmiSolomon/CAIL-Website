import React from "react";
import Routers from "../routes/Routers";
import { Footer, MenuNavigation } from "../components";
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
