import * as yup from "yup";

export const personalInformationValidationSchema = yup.object().shape({
  title: yup.string().required("title field is required"),
  surname: yup.string().required("surname is required"),
  first_name: yup.string().required("first name is required"),
  email_address: yup
    .string()
    .required("email address is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "invalid email format"
    ),
  mobile_number: yup
    .string()
    .required("mobile number required")
    .matches(/^[0-9]{11}$/, "invalid mobile number format"),
  dob: yup
    .string()
    .required("DOB is required")
    .test("minimumAge", "Must be at least 18 years old", (value) => {
      const currentDate = new Date();
      const selectedDate = new Date(value);
      const minAgeDate = new Date();
      minAgeDate.setFullYear(minAgeDate.getFullYear() - 18);
      return selectedDate <= minAgeDate;
    }),
  gender: yup.string().required("gender is required"),
  occupation: yup.string().required("occupation is required"),
  address: yup.string().required("address is required"),
  state: yup.string().required("state is requires"),
  identification_type: yup.string().required("identification type is required"),
  identification_number: yup
    .string()
    .required("identification number is required"),
  file: yup.string().required("file not selected"),
});
export const carDetailsValidationSchema = yup.object().shape({
  cover_type: yup.string().required("cover type is required"),
  vehicle_category: yup.string().required("vehicle category is required"),
  vehicle_value: yup
    .string()
    .required("vehicle value is required")
    .matches(/^[0-9]+$/, "must be a number format"),
  payment_options: yup.string().required("payment options is required"),
  vehicle_make: yup.string().required("vehicle make is required"),
  vehicle_model: yup.string().required("vehicle model is required"),
  registration_number: yup.string().required("registration number is required"),
  chasis_number: yup.string().required("chasis number is required"),
  engine_number: yup.string().required("engine number is required"),
  year_of_make: yup.string().required("year of make is required"),
  body_type: yup.string().required("body type is required"),
  insurance_state_date: yup.string().required("insurance date is required"),
  vehicle_color: yup.string().required("vehicle color is required"),
  cost: yup.string().required("cost is required"),
});
