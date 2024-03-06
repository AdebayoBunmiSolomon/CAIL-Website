import React from "react";
import { Route, Routes } from "react-router-dom";
import * as Pages from "../pages";

type pagesProps = {
  path: string;
  element: React.ComponentType<any>;
};

const pages: pagesProps[] = [
  {
    path: "/",
    element: Pages.Home,
  },
  {
    path: "/about-us",
    element: Pages.About,
  },
];

const Routers = () => {
  return (
    <Routes>
      {pages &&
        pages.map((items, index) => (
          <Route key={index} path={items.path} element={<items.element />} />
        ))}
    </Routes>
  );
};

export default Routers;
