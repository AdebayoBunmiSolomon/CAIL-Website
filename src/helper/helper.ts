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

/**
 *
 * @param price returns the formatted values with comma
 * @returns
 */
export const formatAmount = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const truncateLargeText = (str: string) => {
  return str.length > 100 ? str.substring(0, 70) + "...." : str;
};

/**
 *
 * @returns  array of years e.g ['2005', '2005']
 */
export const getYears = () => {
  let arrOfYears: any[] = [""];
  for (let i: number = 1997; i <= 2024; i++) {
    arrOfYears = [...arrOfYears, `${i.toString()}`];
  }
  return arrOfYears.filter((items) => items !== "");
};

/**
 *
 * converts selected date values to ISo type i.e. 2024-04-19T00:00:00.000Z
 */
export const convertToDateTimeISO = (value: any) => {
  const date = new Date(value);
  const dateIso = date.toISOString();
  console.log(dateIso);
  return dateIso;
};
