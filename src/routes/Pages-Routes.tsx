import * as Pages from "../pages";
import { formRoutes } from "./FormRoutes";

type pagesRouteProps = {
  path: string;
  element: React.ComponentType<any>;
};

/**
 * contains all route to every pages in the web app
 */
export const PagesRoutes: pagesRouteProps[] = [
  {
    path: "/",
    element: Pages.Home,
  },
  {
    path: "/about-us",
    element: Pages.About,
  },
  {
    path: "/products/:id",
    element: Pages.Products,
  },
  {
    path: "/products-section/:id",
    element: Pages.ProductSection,
  },
  {
    path: "/resources/:id",
    element: Pages.Resources,
  },
  {
    path: "/contact-us",
    element: Pages.ContactUs,
  },
  {
    path: formRoutes.makeAClaim,
    element: Pages.ClaimsEntry,
  },
];
