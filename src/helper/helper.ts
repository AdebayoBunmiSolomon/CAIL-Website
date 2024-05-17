export const truncateText = (str: string) => {
  return str.length > 15 ? str.substring(0, 10) + "...." : str;
};

/**
 *
 * @returns  Scrolls to the top when the pathname changes
 */
export const scrollToTop = () => {
  window.scrollTo(0, 0);

  return null;
};

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

/**
 *
 * converts selected date values from ISo type i.e. 2024-04-19T00:00:00.000Z to HTML date value i.e. 2024-04-19
 */
export const convertDateTimeISOtoHTMLDate = (value: string) => {
  const dateString = value;
  const dateObject = new Date(dateString);

  // Extract year, month, and day components
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed, so add 1
  const day = String(dateObject.getDate()).padStart(2, "0");

  // Format as YYYY-MM-DD
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

/**
 *
 * @returns "Next" or "Buy Now" or Pre-defined value by the
 * @lastBtnTextValue used to store the value from the form stepper
 */
export const getButtonBtnState = (
  activeStepNumb: number,
  lastActiveStepValue: number,
  lastBtnTextValue?: string
) => {
  if (activeStepNumb !== lastActiveStepValue) {
    return "Next";
  } else if (activeStepNumb === lastActiveStepValue) {
    return lastBtnTextValue ? lastBtnTextValue : "Submit";
  }
};

/**
 *
 * @param value takes the input of any value with slash e.g HO/4A/123
 * @returns @value to H0/%2FA4A%2FA123
 */
export const convertToEncodedFormat = (value: string) => {
  const encodedString = value.replace(/\//g, "%2F");
  console.log(encodedString);
  return encodedString;
};

/**
 *
 * @param value as "V" if it is a motor or vehicle insurance from the policy number provided
 */
export const validateCharacterAfterFirstSlash = (value: string) => {
  const parts = value.toLowerCase().split("/"); // Split the string by slashes
  if (parts.length >= 2) {
    // Ensure there's at least one slash
    const characterAfterFirstSlash = parts[1][0]; // Get the first character after the first slash
    // Perform your validation here
    if (characterAfterFirstSlash === "v") {
      return {
        isValid: true,
        character: characterAfterFirstSlash,
      };
    } else {
      return {
        isValid: false,
        character: characterAfterFirstSlash,
      };
    }
  } else {
    return {
      isValid: false,
    };
  }
};

/**
 *
 * @return true or false if Yes or No
 */
export const getBooleanFromYesOrNo = (value: string) => {
  const valueToLowerCase = value.toLowerCase();
  if (valueToLowerCase === "yes") {
    return true;
  } else {
    return false;
  }
};

/**
 *
 * @returns the policy class based on the policyNumber supplied
 */
export const getPolicyClassType = (policyNumber: string) => {
  const { character } = validateCharacterAfterFirstSlash(policyNumber);
  switch (character) {
    case "a":
      return "accident";
    case "b":
      return "bond";
    case "e":
      return "engineering";
    case "f":
      return "fire";
    case "h":
      return "aviation";
    case "m":
      return "marine";
    case "v":
      return "motor";
    case "z":
      return "oil-and-gas";
    case "p":
      return "packaged-policy";
    default:
      return null;
  }
};
