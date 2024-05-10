import { nestedLists } from "../../types/types";

type headerProps = {
  id: number;
  title: string;
  page: string;
  nestedList: nestedLists[] | null;
};

export const header: headerProps[] = [
  {
    id: 1,
    title: "Home",
    page: "/",
    nestedList: null,
  },
  {
    id: 2,
    title: "About Us",
    page: "/about-us",
    nestedList: null,
  },
  {
    id: 3,
    title: "Products",
    page: "/products",
    nestedList: [
      {
        id: 1,
        title: "Business Insurance",
        page: "Business Insurance Products",
      },
      {
        id: 2,
        title: "Personal Insurance",
        page: "Personal Insurance Products",
      },
    ],
  },
  // {
  //   id: 4,
  //   title: "Media",
  //   page: "/media",
  //   nestedList: null,
  // },
  {
    id: 5,
    title: "Make a claim",
    page: "/forms/make-a-claim",
    nestedList: null,
  },
  {
    id: 6,
    title: "Resources",
    page: "/resources",
    nestedList: [
      {
        id: 1,
        title: "FAQs",
        page: "faqs",
      },
      {
        id: 2,
        title: "Financials",
        page: "financials",
      },
      {
        id: 3,
        title: "Downloads",
        page: "downloads",
      },
    ],
  },
  {
    id: 7,
    title: "Contact us",
    page: "/contact-us",
    nestedList: null,
  },
];
