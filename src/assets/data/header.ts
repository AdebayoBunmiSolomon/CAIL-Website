type headerProps = {
  id: number;
  title: string;
  page: string;
  nestedList: nestedLists[];
};

type nestedLists = {
  id: number;
  title: string;
};

export const header: headerProps[] = [
  {
    id: 1,
    title: "Home",
    page: "/",
    nestedList: [],
  },
  {
    id: 2,
    title: "About Us",
    page: "/about-us",
    nestedList: [],
  },
  {
    id: 3,
    title: "Products",
    page: "/products",
    nestedList: [],
  },
  {
    id: 4,
    title: "Make a claim",
    page: "/make-a-claim",
    nestedList: [],
  },
  {
    id: 5,
    title: "Resources",
    page: "/resources",
    nestedList: [],
  },
  {
    id: 6,
    title: "Contact us",
    page: "/contact-us",
    nestedList: [],
  },
];
