import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export const truncateText = (str: string) => {
  return str.length > 15 ? str.substring(0, 10) + "...." : str;
};

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the pathname changes
  }, [pathname]);

  return null;
}

export const truncateLargeText = (str: string) => {
  return str.length > 100 ? str.substring(0, 70) + "...." : str;
};

export const getYears = () => {
  let arrOfYears: any[] = [""];
  for (let i: number = 1997; i <= 2024; i++) {
    arrOfYears = [...arrOfYears, `${i.toString()}`];
  }
  return arrOfYears.filter((items) => items !== "");
};
