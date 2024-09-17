import * as yup from "yup";
import { FILE_SIZE } from "../helper/helper";

//motor-insurance
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
  vehicle_usage: yup.string().required("vehicle usage is required"),
  vehicle_value: yup
    .string()
    .required("vehicle value is required")
    .matches(/^[0-9]+$/, "must be a number format"),
  payment_options: yup.string().required("payment options is required"),
  vehicle_make: yup.string().required("vehicle make is required"),
  vehicle_model: yup.string().required("vehicle model is required"),
  registration_number: yup
    .string()
    .required("registration number is required")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "registration number can only contain alphanumeric characters"
    ),
  chasis_number: yup
    .string()
    .required("chasis number is required")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "chasis number can only contain alphanumeric characters"
    ),
  engine_number: yup
    .string()
    .required("engine number is required")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "engine number can only contain alphanumeric characters"
    ),
  year_of_make: yup.string().required("year of make is required"),
  body_type: yup.string().required("body type is required"),
  insurance_state_date: yup.string().required("insurance date is required"),
  vehicle_color: yup.string().required("vehicle color is required"),
  cost: yup.string().required("cost is required"),
});

//events-insurance
export const eventsInsuranceValidationSchema = yup.object().shape({
  first_name: yup.string().required("first name is required"),
  surname: yup.string().required("surname is required"),
  company_name: yup.string().required("company name is required"),
  email: yup
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
  sum_insured: yup
    .string()
    .required("cost is required")
    .matches(/^[0-9]+$/, "must be a number format"),
  event_date: yup.string().required("event date is required"),
  event_duration: yup
    .string()
    .required("event duration is required")
    .matches(/^[0-9]+$/, "must be a number format"),
  event_involvement: yup.string().required("event involvement is required"),
  event_type: yup.string().required("event type is required"),
  event_location: yup.string().required("event location is required"),
  no_of_guests: yup.string().required("no of guest is required"),
  cover_type: yup
    .array()
    .of(yup.string().required("cover type is required"))
    .required("Cover type is required"),
});

//machinery-breakdown
export const machineryBreakdownValidationSchemaStep1 = yup.object().shape({
  first_name: yup.string().required("first name is required"),
  surname: yup.string().required("surname is required"),
  company_name: yup.string().required("company name is required"),
  email: yup
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
  sum_insured: yup
    .string()
    .required("sum assured is required")
    .matches(/^[0-9]+$/, "must be a number format"),
  cover_type: yup.string().required("cover type is required"),
  address: yup.string().required("address is required"),
  state: yup.string().required("state is required"),
  id_type: yup.string().required("identification type is required"),
  id_number: yup.string().required("identification number is required"),
  means_of_id: yup.string().required("means of identification is required"),
});

export const machineryBreakdownValidationSchemaStep2 = yup.object().shape({
  machine_category: yup.string().required("category is required"),
  machine_value: yup
    .string()
    .required("value is is required")
    .matches(/^[0-9]+$/, "must be a number format"),
  payment_option: yup.string().required("payment option is required"),
  machine_maker: yup.string().required("maker is required"),
  model_number: yup.string().required("model number is required"),
  reg_number: yup.string().required("registration number is required"),
  chasis_no: yup.string().required("chasis number is required"),
  engine_no: yup.string().required("engine number is required"),
  year_of_make: yup.string().required("year of make is required"),
  body_type: yup.string().required("body type is required"),
  insured_date: yup.string().required("insured date is required"),
  machine_color: yup.string().required("color is required"),
  cost: yup
    .string()
    .required("cost is required")
    .matches(/^[0-9]+$/, "must be a number format"),
});

export const buildersLiabilityValidationSchema1 = yup.object().shape({
  first_name: yup.string().required("first name is required"),
  surname: yup.string().required("surname is required"),
  company_name: yup.string().required("company name is required"),
  email: yup
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
  sum_insured: yup
    .string()
    .required("sum insured is required")
    .matches(/^[0-9]+$/, "must be a number format"),
  title: yup.string().required("title is required"),
  address: yup.string().required("address is required"),
  state: yup.string().required("state is required"),
  id_type: yup.string().required("identification type is required"),
  id_number: yup.string().required("identification number is required"),
  means_of_id: yup.string().required("means of id is required"),
});

export const buildersLiabilityValidationSchema2 = yup.object().shape({
  payment_option: yup.string().required("payment option is required"),
  year_of_make: yup.string().required("year of make is required"),
  insured_date: yup.string().required("insured date is required"),
  cost: yup
    .string()
    .required("cost is required")
    .matches(/^[0-9]+$/, "must be a number format"),
  no_of_units: yup
    .string()
    .required("number of unit is required")
    .matches(/^[0-9]+$/, "must be a number format"),
});

export const businessInterruptionValidationSchema1 = yup.object().shape({
  first_name: yup.string().required("first name is required"),
  surname: yup.string().required("surname is required"),
  company_name: yup.string().required("company name is required"),
  email: yup
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
  sum_insured: yup
    .string()
    .required("sum insured is required")
    .matches(/^[0-9]+$/, "must be a number format"),
  cover_type: yup.string().required("cover type is required"),
  title: yup.string().required("title is required"),
  address: yup.string().required("address is required"),
  state: yup.string().required("state is required"),
  means_of_id: yup.string().required("means of id is required"),
  insured_date: yup.string().required("insured date is required"),
});

export const businessInterruptionValidationSchema2 = yup.object().shape({
  cost: yup
    .string()
    .required("cost is required")
    .matches(/^[0-9]+$/, "must be a number format"),
  no_of_units: yup
    .string()
    .required("number of unit is required")
    .matches(/^[0-9]+$/, "must be a number format"),
});

export const burglaryValidationSchema1 = yup.object().shape({
  title: yup.string().required("title is required"),
  first_name: yup.string().required("first name is required"),
  surname: yup.string().required("surname is required"),
  house_type: yup.string().required("house type is required"),
  email: yup
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
  event_involvement: yup.string().required("event involvement is required"),
  event_type: yup.string().required("event type is required"),
  event_location: yup.string().required("event location is required"),
  no_of_people: yup.string().required("number of people required"),
  sum_insured: yup
    .string()
    .required("sum insured required")
    .matches(/^[0-9]+$/, "invalid number format"),
  event_date: yup.string().required("event date is required"),
});

export const burglaryValidationSchema2 = yup.object().shape({
  cover_type: yup.string().required("cover type is required"),
  address: yup.string().required("address is required"),
  state: yup.string().required("state is required"),
});

export const electronicEquipmentValidationSchema = yup.object().shape({
  company_name: yup.string().required("company name is required"),
  email: yup
    .string()
    .required("email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "invalid email format"
    ),
  mobile_number: yup
    .string()
    .required("mobile number required")
    .matches(/^[0-9]{11}$/, "invalid mobile number format"),
  sum_insured: yup
    .string()
    .required("sum insured is required")
    .matches(/^[0-9]+$/, "must be a number format"),
  cover_type: yup.string().required("cover type is required"),
  address: yup.string().required("address is required"),
  state: yup.string().required("state is required"),
  id_type: yup.string().required("identification type is required"),
  payment_option: yup.string().required("payment option is required"),
  insured_date: yup.string().required("insured date is required"),
  cost: yup
    .string()
    .required("cost is required")
    .matches(/^[0-9]+$/, "must be a number format"),
});

export const moneyValidationSchema = yup.object().shape({
  title: yup.string().required("title is required"),
  first_name: yup.string().required("first name is required"),
  surname: yup.string().required("first name is required"),
  gender: yup.string().required("first name is required"),
  dob: yup
    .string()
    .required("DOB is required")
    .test("minimumAge", "Must be at least 18 years old", (value) => {
      const selectedDate = new Date(value);
      const minAgeDate = new Date();
      minAgeDate.setFullYear(minAgeDate.getFullYear() - 18);
      return selectedDate <= minAgeDate;
    }),
  email: yup
    .string()
    .required("email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "invalid email format"
    ),
  mobile_number: yup
    .string()
    .required("mobile number required")
    .matches(/^[0-9]{11}$/, "invalid mobile number format"),
  sum_insured: yup
    .string()
    .required("sum insured is required")
    .matches(/^[0-9]+$/, "must be a number format"),
  cover_type: yup.string().required("cover type is required"),
  address: yup.string().required("address is required"),
  state: yup.string().required("state is required"),
  id_type: yup.string().required("identification type is required"),
  payment_option: yup.string().required("payment option is required"),
});

export const allRisksValidationSchema = yup.object().shape({
  company_name: yup.string().required("company name is required"),
  email: yup
    .string()
    .required("email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "invalid email format"
    ),
  mobile_number: yup
    .string()
    .required("mobile number is required")
    .matches(/^[0-9]{11}$/, "must be a number format"),
  no_of_guests: yup.string().required("number of guests is required"),
  sum_insured: yup
    .string()
    .required("sum insured is required")
    .matches(/^[0-9]+$/, "must be a number format"),
  cover_type: yup.string().required("cover type is required"),
  address: yup.string().required("address is required"),
  state: yup.string().required("state is required"),
});

export const businessOwnersValidationSchema = yup.object().shape({
  company_name: yup.string().required("company name is required"),
  email: yup
    .string()
    .required("email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "invalid email format"
    ),
  mobile_number: yup
    .string()
    .required("mobile number required")
    .matches(/^[0-9]{11}$/, "invalid mobile number format"),
  sum_insured: yup
    .string()
    .required("sum insured is required")
    .matches(/^[0-9]+$/, "must be a number format"),
  cover_type: yup.string().required("cover type is required"),
  address: yup.string().required("address is required"),
  state: yup.string().required("state is required"),
  payment_option: yup.string().required("payment option is required"),
});

export const boilerPressureValidationSchema = yup.object().shape({
  company_name: yup.string().required("company name is required"),
  email: yup
    .string()
    .required("email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "invalid email format"
    ),
  mobile_number: yup
    .string()
    .required("mobile number required")
    .matches(/^[0-9]{11}$/, "invalid mobile number format"),
  event_involvement: yup.string().required("event involvement is required"),
  event_type: yup.string().required("event type is required"),
  event_location: yup.string().required("event location is required"),
  sum_insured: yup
    .string()
    .required("sum insured is required")
    .matches(/^[0-9]+$/, "must be a number format"),
  cover_type: yup
    .array()
    .of(yup.string().required("cover type is required"))
    .required("Cover type is required"),
  address: yup.string().required("address is required"),
  state: yup.string().required("state is required"),
  payment_option: yup.string().required("payment option is required"),
});

export const GITValidationSchema = yup.object().shape({
  company_name: yup.string().required("company name is required"),
  email: yup
    .string()
    .required("email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "invalid email format"
    ),
  mobile_number: yup
    .string()
    .required("mobile number required")
    .matches(/^[0-9]{11}$/, "invalid mobile number format"),
  event_involvement: yup.string().required("event involvement is required"),
  event_type: yup.string().required("event type is required"),
  event_location: yup.string().required("event type is required"),
  sum_insured: yup
    .string()
    .required("sum insured is required")
    .matches(/^[0-9]+$/, "must be a number format"),
  event_date: yup.string().required("event date is required"),
  event_duration: yup
    .string()
    .required("event duration is required")
    .matches(/^[0-9]+$/, "must be a number format"),
  cover_type: yup.string().required("cover type is required"),
  state: yup.string().required("state is required"),
  payment_option: yup.string().required("payment option is required"),
});

export const contractorsAllRiskValidationSchema = yup.object().shape({
  first_name: yup.string().required("first name is required"),
  surname: yup.string().required("surname is required"),
  email: yup
    .string()
    .required("email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "invalid email format"
    ),
  mobile_number: yup
    .string()
    .required("mobile number required")
    .matches(/^[0-9]{11}$/, "invalid mobile number format"),
  event_involvement: yup.string().required("event involvement is required"),
  event_type: yup.string().required("event type is required"),
  event_location: yup.string().required("event location is required"),
  no_of_guests: yup.string().required("no of guests is required"),
  sum_insured: yup
    .string()
    .required("sum insured is required")
    .matches(/^[0-9]+$/, "must be a number format"),
  payment_option: yup.string().required("payment option is required"),
  event_date: yup.string().required("event date is required"),
  event_duration: yup
    .string()
    .required("event duration is required")
    .matches(/^[0-9]+$/, "must be a number format"),
  cover_type: yup.string().required("cover type is required"),
});

export const groupPersonalValidationSchema = yup.object().shape({
  company_name: yup.string().required("company name is required"),
  email: yup
    .string()
    .required("email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "invalid email format"
    ),
  mobile_number: yup
    .string()
    .required("mobile number required")
    .matches(/^[0-9]{11}$/, "invalid mobile number format"),
  event_involvement: yup.string().required("event involvement is required"),
  event_type: yup.string().required("event type is required"),
  event_location: yup.string().required("event location is required"),
  no_of_guests: yup.string().required("no of guests is required"),
  sum_insured: yup
    .string()
    .required("sum insured is required")
    .matches(/^[0-9]+$/, "must be a number format"),
  event_date: yup.string().required("event date is required"),
  event_duration: yup
    .string()
    .required("event duration is required")
    .matches(/^[0-9]+$/, "must be a number format"),
  address: yup.string().required("address is required"),
  state: yup.string().required("state is required"),
  payment_option: yup.string().required("payment option is required"),
});

export const professionalIndemnityValidationSchema1 = yup.object().shape({
  title: yup.string().required("title is required"),
  first_name: yup.string().required("first name is required"),
  surname: yup.string().required("surname is required"),
  dob: yup
    .string()
    .required("DOB is required")
    .test("minimumAge", "Must be at least 18 years old", (value) => {
      const selectedDate = new Date(value);
      const minAgeDate = new Date();
      minAgeDate.setFullYear(minAgeDate.getFullYear() - 18);
      return selectedDate <= minAgeDate;
    }),
  gender: yup.string().required("gender is required"),
  occupation: yup.string().required("occupation is required"),
  company_name: yup.string().required("company name is required"),
  email: yup
    .string()
    .required("email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "invalid email format"
    ),
  mobile_number: yup
    .string()
    .required("mobile number required")
    .matches(/^[0-9]{11}$/, "invalid mobile number format"),
  sum_insured: yup
    .string()
    .required("sum insured is required")
    .matches(/^[0-9]+$/, "must be a number format"),
  address: yup.string().required("address is required"),
  state: yup.string().required("state is required"),
});

export const professionalIndemnityValidationSchema2 = yup.object().shape({
  id_type: yup.string().required("identification type is required"),
  id_number: yup.string().required("identification number is required"),
  payment_option: yup.string().required("payment option required"),
});

export const publicLiabilityValidationSchema = yup.object().shape({
  first_name: yup.string().required("first name is required"),
  surname: yup.string().required("surname is required"),
  email: yup
    .string()
    .required("email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "invalid email format"
    ),
  mobile_number: yup
    .string()
    .required("mobile number required")
    .matches(/^[0-9]{11}$/, "invalid mobile number format"),
  sum_insured: yup
    .string()
    .required("sum insured is required")
    .matches(/^[0-9]+$/, "must be a number format"),
  insured_date: yup.string().required("insured start date is required"),
  cover_type: yup.string().required("cover type is required"),
  address: yup.string().required("address is required"),
  state: yup.string().required("state is required"),
  id_type: yup.string().required("identification type is required"),
  id_number: yup.string().required("identification number is required"),
  payment_option: yup.string().required("payment option is required"),
});

export const marineCargoValidationSchema = yup.object().shape({
  company_name: yup.string().required("company name is required"),
  email: yup
    .string()
    .required("email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "invalid email format"
    ),
  mobile_number: yup
    .string()
    .required("mobile number required")
    .matches(/^[0-9]{11}$/, "invalid mobile number format"),
  sum_insured: yup
    .string()
    .required("sum insured is required")
    .matches(/^[0-9]+$/, "must be a number format"),
  insured_date: yup.string().required("insured date is required"),
  cover_type: yup.string().required("cover type is required"),
  address: yup.string().required("company name is required"),
  state: yup.string().required("state is required"),
  payment_option: yup.string().required("payment option is required"),
});

export const marineHullValidationSchema = yup.object().shape({
  company_name: yup.string().required("company name is required"),
  email: yup
    .string()
    .required("email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "invalid email format"
    ),
  mobile_number: yup
    .string()
    .required("mobile number required")
    .matches(/^[0-9]{11}$/, "invalid mobile number format"),
  sum_insured: yup
    .string()
    .required("sum insured is required")
    .matches(/^[0-9]+$/, "must be a number format"),
  insured_date: yup.string().required("insured date is required"),
  cover_type: yup.string().required("cover type is required"),
  address: yup.string().required("company name is required"),
  state: yup.string().required("state is required"),
  payment_option: yup.string().required("payment option is required"),
});

export const plantAllRiskValidationSchema = yup.object().shape({
  company_name: yup.string().required("company name is required"),
  email: yup
    .string()
    .required("email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "invalid email format"
    ),
  mobile_number: yup
    .string()
    .required("mobile number required")
    .matches(/^[0-9]{11}$/, "invalid mobile number format"),
  sum_insured: yup
    .string()
    .required("sum insured is required")
    .matches(/^[0-9]+$/, "must be a number format"),
  insured_date: yup.string().required("insured date is required"),
  cover_type: yup.string().required("cover type is required"),
  address: yup.string().required("company name is required"),
  state: yup.string().required("state is required"),
  payment_option: yup.string().required("payment option is required"),
});

export const occupiersLiabilityValidationSchema = yup.object().shape({
  title: yup.string().required("title is required"),
  first_name: yup.string().required("first name is required"),
  surname: yup.string().required("surname is required"),
  email: yup
    .string()
    .required("email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "invalid email format"
    ),
  mobile_number: yup
    .string()
    .required("mobile number required")
    .matches(/^[0-9]{11}$/, "invalid mobile number format"),
  event_involvement: yup.string().required("event involvement is required"),
  event_type: yup.string().required("event type is required"),
  event_location: yup.string().required("event location is required"),
  event_duration: yup
    .string()
    .required("event duration is required")
    .matches(/^[0-9]+$/, "must be a number format"),
  no_of_guests: yup.string().required("number of guests is required"),
  sum_insured: yup
    .string()
    .required("sum insured is required")
    .matches(/^[0-9]+$/, "must be a number format"),
  address: yup.string().required("address is required"),
  state: yup.string().required("state is required"),
  payment_option: yup.string().required("payment option is required"),
});

export const healthCareValidationSchema1 = yup.object().shape({
  title: yup.string().required("title is required"),
  first_name: yup.string().required("first name is required"),
  surname: yup.string().required("surname is required"),
  gender: yup.string().required("gender is required"),
  email: yup
    .string()
    .required("email is required")
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
    .required("date of birth is required")
    .test("minimumAge", "Must be at least 18 years old", (value) => {
      const selectedDate = new Date(value);
      const minAgeDate = new Date();
      minAgeDate.setFullYear(minAgeDate.getFullYear() - 18);
      return selectedDate <= minAgeDate;
    }),
  address: yup.string().required("address is required"),
  state: yup.string().required("state is required"),
  id_type: yup.string().required("identification type is required"),
  id_number: yup.string().required("identification number is required"),
  cover_type: yup.string().required("cover type is required"),
});

export const healthCareValidationSchema2 = yup.object().shape({
  event_type: yup.string().required("event type is required"),
  event_location: yup.string().required("event location is required"),
  no_of_guests: yup.string().required("number of guests is required"),
  sum_insured: yup
    .string()
    .required("sum insured is required")
    .matches(/^[0-9]+$/, "must be a number format"),
  payment_option: yup.string().required("payment option is required"),
});

export const safetyPlusValidationSchema1 = yup.object().shape({
  title: yup.string().required("title is required"),
  first_name: yup.string().required("first name is required"),
  surname: yup.string().required("surname is required"),
  dob: yup
    .string()
    .required("date of birth is required")
    .test("minimumAge", "Must be at least 18 years old", (value) => {
      const selectedDate = new Date(value);
      const minAgeDate = new Date();
      minAgeDate.setFullYear(minAgeDate.getFullYear() - 18);
      return selectedDate <= minAgeDate;
    }),
  gender: yup.string().required("gender is required"),
  email: yup
    .string()
    .required("email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "invalid email format"
    ),
  mobile_number: yup
    .string()
    .required("mobile number required")
    .matches(/^[0-9]{11}$/, "invalid mobile number format"),
  address: yup.string().required("address is required"),
  state: yup.string().required("state is required"),
  occupation: yup.string().required("occupation is required"),
  id_type: yup.string().required("identification type is required"),
  id_number: yup.string().required("identification number is required"),
  means_of_id: yup.string().required("means of identification is required"),
});

export const safetyPlusValidationSchema2 = yup.object().shape({
  insured_date: yup.string().required("insured date is required"),
  policy_period: yup.string().required("policy period is required"),
  number_of_units: yup.string().required("number of units is required"),
  premium: yup.string().required("premium is required"),
  id_type: yup.string().required("identification type is required"),
  id_number: yup.string().required("identification number is required"),
  company_name: yup.string().required("company name is required"),
  company_address: yup.string().required("company address is required"),
  beneficiary_name: yup.string().required("beneficiary name is required"),
  beneficiary_dob: yup.string().required("beneficiary dob is required"),
  beneficiary_gender: yup
    .string()
    .required("beneficiary relationship is required"),
  beneficiary_relationship: yup
    .string()
    .required("beneficiary relationship is required"),
  means_of_id: yup.string().required("means of ID is required"),
});

export const homeShieldValidationSchema1 = yup.object().shape({
  title: yup.string().required("title is required"),
  first_name: yup.string().required("first name is required"),
  surname: yup.string().required("surname is required"),
  dob: yup
    .string()
    .required("date of birth is required")
    .test("minimumAge", "Must be at least 18 years old", (value) => {
      const selectedDate = new Date(value);
      const minAgeDate = new Date();
      minAgeDate.setFullYear(minAgeDate.getFullYear() - 18);
      return selectedDate <= minAgeDate;
    }),
  gender: yup.string().required("gender is required"),
  email: yup
    .string()
    .required("email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "invalid email format"
    ),
  mobile_number: yup
    .string()
    .required("mobile number required")
    .matches(/^[0-9]{11}$/, "invalid mobile number format"),
  address: yup.string().required("address is required"),
  state: yup.string().required("state is required"),
  occupation: yup.string().required("occupation is required"),
  id_type: yup.string().required("identification type is required"),
  id_number: yup.string().required("identification number is required"),
  means_of_id: yup.string().required("means of identification is required"),
});

export const homeShieldValidationSchema2 = yup.object().shape({
  insured_date: yup.string().required("insured date is required"),
  policy_period: yup.string().required("policy period is required"),
  no_of_units: yup.string().required("number of units is required"),
  insured_property_address: yup
    .string()
    .required("property address is required"),
  list_of_insured_property: yup
    .string()
    .required("list of insured property is required"),
  premium: yup.string().required("premium is required"),
});

export const businessInsuranceValidationSchema = yup.object().shape({
  full_name: yup
    .string()
    .required("full name is required")
    .matches(/^[a-zA-Z\s.,]*$/, "Only letters are allowed"),
  email: yup
    .string()
    .required("email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "invalid email format"
    ),
  mobile_number: yup
    .string()
    .required("mobile number required")
    .matches(/^[0-9]{11}$/, "invalid mobile number format"),
  subject: yup
    .string()
    .required("subject is required")
    .matches(/^[a-zA-Z\s.,]*$/, "Only letters are allowed"),
  message: yup
    .string()
    .required("message is required")
    .matches(/^[a-zA-Z0-9\s.,]*$/, "Only letters are allowed"),
});

export const requestCallBackValidationSchema = yup.object().shape({
  full_name: yup
    .string()
    .required("full name is required")
    .matches(/^[a-zA-Z\s]*$/, "Only letters and spaces are allowed"),
  mobile_number: yup
    .string()
    .required("mobile number is required")
    .matches(/^[0-9]{11}$/, "invalid mobile number format"),
});

export const claimStatusValidationSchema = yup.object().shape({
  policyNumber: yup.string().required("policy number required"),
  vehicleRegNumber: yup.string().required("vehicle reg number required"),
});

export const claimStatusValidationSchema2 = yup.object().shape({
  claimNumber: yup.string().required("claims number required"),
});

export const motorClaimDetailsValidationSchema = yup.object().shape({
  // vehicleRegNumber: yup
  //   .string()
  //   .required("vehicle reg number is required")
  //   .matches(/^[a-zA-Z0-9\s]*$/, "Only letters are allowed"),
  email: yup
    .string()
    .required("email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "invalid email format"
    ),
  mobileNumber: yup
    .string()
    .required("mobile number is required")
    .matches(/^[0-9]{11}$/, "invalid mobile number format"),
  claimType: yup
    .string()
    .required("claim type is required")
    .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
  damageType: yup
    .string()
    .required("damage type is required")
    .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
  dateTimeOfLoss: yup.string().required("date and time of loss is required"),
});

export const motorClaimCircumstanceValidationSchema = yup.object().shape({
  descriptionOfIncident: yup
    .string()
    .required("incident description is required")
    .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
  doYouHaveAWitness: yup
    .string()
    .required("this field is required")
    .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
  nameOfWitness: yup
    .string()
    .required("name of witness is required")
    .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
  witnessContactInfo: yup.string().required("witness contact info is required"),
  whereCanTheVehicleBeInspected: yup
    .string()
    .required("vehicle inspection address is required"),
  isThirdPartyInvolved: yup
    .string()
    .required("third party selection is required"),
  hasThePoliceBeenInformed: yup
    .string()
    .required("police confirmation is required"),
  whenWasThePoliceInformed: yup.string().required("this field is required"),
  policeStationAddress: yup
    .string()
    .required("police station address is required"),
  thirdPartyInformation: yup
    .string()
    .required("third party information is required"),
  estimateOfRepairs: yup
    .string()
    .required("estimate of repairs is required")
    .matches(/^[0-9]+$/, "must be a number format"),
  claimsAmount: yup
    .string()
    .required("claims amount is required")
    .matches(/^[0-9]+$/, "must be a number format"),
});

export const accidentClaimDetailsValidationSchema = yup.object().shape({
  claimType: yup.string().required("claim type is required"),
  email: yup
    .string()
    .required("email address is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "invalid email format"
    ),
  phoneNumber: yup
    .string()
    .required("phone number is required")
    .matches(/^[0-9]{11}$/, "must be a number format"),
  dateTimeOfLoss: yup.string().required("date of loss is required"),
  wasThePremiseOccupiedAtTheTime: yup
    .string()
    .required("this field is required"),
  dateLastOccupied: yup.string().required("last occupied date is required"),
});

export const accidentClaimCircumstancesValidationSchema = yup.object().shape({
  descriptionOfIncident: yup
    .string()
    .required("incident description is required")
    .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
  listOfStolenItems: yup
    .string()
    .required("list of stolen items is required")
    .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
  doYouHaveAWitness: yup.string().required("this field is required"),
  nameOfWitness: yup
    .string()
    .required("name of witness is required")
    .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
  witnessContactInfo: yup.string().required("witness contact info is required"),
  hasThePoliceBeenInformed: yup.string().required("this field is required"),
  whenWasThePoliceInformed: yup.string().required("this field is required"),
  policeStationAddress: yup
    .string()
    .required("police station address is required"),
  claimsAmount: yup
    .string()
    .required("claims amount is required")
    .matches(/^[0-9]+$/, "must be a number format"),
});

export const bondClaimDetailsValidationSchema = yup.object().shape({
  claimType: yup
    .string()
    .required("claim type is required")
    .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
  email: yup
    .string()
    .required("email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "invalid email format"
    ),
  phoneNumber: yup
    .string()
    .required("phone number is required")
    .matches(/^[0-9]{11}$/, "must be a number format"),
  dateTimeOfIncident: yup.string().required("date of incident not selected"),
});

export const bondClaimCircumstancesValidationSchema = yup.object().shape({
  descriptionOfIncident: yup
    .string()
    .required("incident description is required")
    .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
  listOfStolenItems: yup
    .string()
    .required("list of stolen items is required")
    .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
  doYouHaveAWitness: yup.string().required("this field is required"),
  nameOfWitness: yup.string().required("name of witness is required"),
  witnessContactInfo: yup.string().required("witness contact info is required"),
  hasThePoliceBeenInformed: yup.string().required("this field is required"),
  whenWasThePoliceInformed: yup.string().required("this field is required"),
  policeStationAddress: yup
    .string()
    .required("police station address is required"),
  claimsAmount: yup
    .string()
    .required("claims amount is required")
    .matches(/^[0-9]+$/, "must be a number format"),
});

export const engineeringClaimDetailsValidationSchema = yup.object().shape({
  claimType: yup
    .string()
    .required("claim type is required")
    .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
  email: yup
    .string()
    .required("email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "invalid email format"
    ),
  phoneNumber: yup
    .string()
    .required("phone number is required")
    .matches(/^[0-9]{11}$/, "must be a number format"),
  dateTimeOfIncident: yup.string().required("date of incident not selected"),
});

export const engineeringClaimCircumstancesValidationSchema = yup
  .object()
  .shape({
    descriptionOfIncident: yup
      .string()
      .required("incident description is required")
      .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
    listOfStolenItems: yup
      .string()
      .required("list of stolen items is required")
      .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
    doYouHaveAWitness: yup.string().required("this field is required"),
    nameOfWitness: yup
      .string()
      .required("name of witness is required")
      .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
    witnessContactInfo: yup
      .string()
      .required("witness contact info is required"),
    hasThePoliceBeenInformed: yup.string().required("this field is required"),
    whenWasThePoliceInformed: yup.string().required("this field is required"),
    policeStationAddress: yup
      .string()
      .required("police station address is required"),
    claimsAmount: yup
      .string()
      .required("claims amount is required")
      .matches(/^[0-9]+$/, "must be a number format"),
  });

export const fireClaimDetailsValidationSchema = yup.object().shape({
  claimType: yup
    .string()
    .required("claim type is required")
    .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
  email: yup
    .string()
    .required("email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "invalid email format"
    ),
  phoneNumber: yup
    .string()
    .required("phone number is required")
    .matches(/^[0-9]{11}$/, "must be a number format"),
  dateTimeOfLoss: yup.string().required("date of loss not selected"),
});

export const fireClaimCircumstancesValidationSchema = yup.object().shape({
  descriptionOfIncident: yup
    .string()
    .required("incident description is required")
    .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
  listOfStolenItems: yup
    .string()
    .required("list of stolen items is required")
    .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
  doYouHaveAWitness: yup.string().required("this field is required"),
  nameOfWitness: yup.string().required("name of witness is required"),
  witnessContactInfo: yup.string().required("witness contact info is required"),
  hasTheFireServiceBeenInformed: yup
    .string()
    .required("this field is required"),
  fireServiceStationAddress: yup
    .string()
    .required("fire station service address is required"),
  doYouHaveAFireServiceReport: yup.string().required("this field is required"),
  hasThePoliceBeenInformed: yup.string().required("this field is required"),
  whenWasThePoliceInformed: yup.string().required("this field is required"),
  policeStationAddress: yup
    .string()
    .required("police station address is required"),
  claimsAmount: yup
    .string()
    .required("claims amount is required")
    .matches(/^[0-9]+$/, "must be a number format"),
});

export const aviationClaimDetailsValidationSchema = yup.object().shape({
  claimType: yup
    .string()
    .required("claim type is required")
    .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
  email: yup
    .string()
    .required("email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "invalid email format"
    ),
  phoneNumber: yup
    .string()
    .required("phone number is required")
    .matches(/^[0-9]{11}$/, "must be a number format"),
  dateTimeOfIncident: yup.string().required("date of incident not selected"),
});

export const aviationClaimCircumstancesValidationSchema = yup.object().shape({
  descriptionOfIncident: yup
    .string()
    .required("incident description is required")
    .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
  listOfStolenItems: yup
    .string()
    .required("list of stolen items is required")
    .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
  doYouHaveAWitness: yup.string().required("this field is required"),
  nameOfWitness: yup
    .string()
    .required("name of witness is required")
    .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
  witnessContactInfo: yup.string().required("witness contact info is required"),
  hasThePoliceBeenInformed: yup.string().required("this field is required"),
  whenWasThePoliceInformed: yup.string().required("this field is required"),
  policeStationAddress: yup
    .string()
    .required("police station address is required"),
  claimsAmount: yup
    .string()
    .required("claims amount is required")
    .matches(/^[0-9]+$/, "must be a number format"),
});

export const marineClaimDetailsValidationSchema = yup.object().shape({
  claimType: yup
    .string()
    .required("claim type is required")
    .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
  email: yup
    .string()
    .required("email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "invalid email format"
    ),
  phoneNumber: yup
    .string()
    .required("phone number is required")
    .matches(/^[0-9]{11}$/, "must be a number format"),
  dateTimeOfIncident: yup.string().required("date of incident not selected"),
});

export const marineClaimCircumstancesValidationSchema = yup.object().shape({
  descriptionOfIncident: yup
    .string()
    .required("incident description is required")
    .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
  listOfStolenItems: yup
    .string()
    .required("list of stolen items is required")
    .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
  doYouHaveAWitness: yup.string().required("this field is required"),
  nameOfWitness: yup
    .string()
    .required("name of witness is required")
    .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
  witnessContactInfo: yup.string().required("witness contact info is required"),
  hasThePoliceBeenInformed: yup.string().required("this field is required"),
  whenWasThePoliceInformed: yup.string().required("this field is required"),
  policeStationAddress: yup
    .string()
    .required("police station address is required"),
  claimsAmount: yup
    .string()
    .required("claims amount is required")
    .matches(/^[0-9]+$/, "must be a number format"),
});

export const oilAndGasClaimDetailsValidationSchema = yup.object().shape({
  claimType: yup
    .string()
    .required("claim type is required")
    .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
  email: yup
    .string()
    .required("email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "invalid email format"
    ),
  phoneNumber: yup
    .string()
    .required("phone number is required")
    .matches(/^[0-9]{11}$/, "must be a number format"),
  dateTimeOfIncident: yup.string().required("date of incident not selected"),
});

export const oilAndGasClaimCircumstancesValidationSchema = yup.object().shape({
  descriptionOfIncident: yup
    .string()
    .required("incident description is required")
    .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
  listOfStolenItems: yup
    .string()
    .required("list of stolen items is required")
    .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
  doYouHaveAWitness: yup
    .string()
    .required("this field is required")
    .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
  nameOfWitness: yup.string().required("name of witness is required"),
  witnessContactInfo: yup.string().required("witness contact info is required"),
  hasThePoliceBeenInformed: yup.string().required("this field is required"),
  whenWasThePoliceInformed: yup.string().required("this field is required"),
  policeStationAddress: yup
    .string()
    .required("police station address is required"),
  claimsAmount: yup
    .string()
    .required("claims amount is required")
    .matches(/^[0-9]+$/, "must be a number format"),
});

export const packagedPolicyClaimDetailsValidationSchema = yup.object().shape({
  claimType: yup
    .string()
    .required("claim type is required")
    .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
  email: yup
    .string()
    .required("email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "invalid email format"
    ),
  phoneNumber: yup
    .string()
    .required("phone number is required")
    .matches(/^[0-9]{11}$/, "must be a number format"),
  dateTimeOfIncident: yup.string().required("date of incident not selected"),
});

export const packagedPolicyCircumstancesValidationSchema = yup.object().shape({
  descriptionOfIncident: yup
    .string()
    .required("incident description is required")
    .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
  listOfStolenItems: yup
    .string()
    .required("list of stolen items is required")
    .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
  doYouHaveAWitness: yup.string().required("this field is required"),
  nameOfWitness: yup
    .string()
    .required("name of witness is required")
    .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed"),
  witnessContactInfo: yup.string().required("witness contact info is required"),
  hasThePoliceBeenInformed: yup.string().required("this field is required"),
  whenWasThePoliceInformed: yup.string().required("this field is required"),
  policeStationAddress: yup
    .string()
    .required("police station address is required"),
  claimsAmount: yup
    .string()
    .required("claims amount is required")
    .matches(/^[0-9]+$/, "must be a number format"),
});

export const accidentClaimReqDocValidationSchema = yup.object().shape({
  purchaseOrReplacementInvoice: yup.string().notRequired(),
  evidenceUpload1: yup.string().notRequired(),
  evidenceUpload2: yup.string().notRequired(),
  eyeWitnessReport: yup.string().notRequired(),
  policeReport: yup.string().notRequired(),
});

export const bondClaimReqDocValidationSchema = yup.object().shape({
  evidenceUpload1: yup.string().notRequired(),
  evidenceUpload2: yup.string().notRequired(),
  evidenceUpload3: yup.string().notRequired(),
  evidenceUpload4: yup.string().notRequired(),
  eyeWitnessReport: yup.string().notRequired(),
  policeReport: yup.string().notRequired(),
});

export const aviationClaimReqDocValidationSchema = yup.object().shape({
  evidenceUpload1: yup.string().notRequired(),
  evidenceUpload2: yup.string().notRequired(),
  evidenceUpload3: yup.string().notRequired(),
  evidenceUpload4: yup.string().notRequired(),
  eyeWitnessReport: yup.string().notRequired(),
  policeReport: yup.string().notRequired(),
});

export const engineeringClaimReqDocValidationSchema = yup.object().shape({
  evidenceUpload1: yup.string().notRequired(),
  evidenceUpload2: yup.string().notRequired(),
  evidenceUpload3: yup.string().notRequired(),
  evidenceUpload4: yup.string().notRequired(),
  eyeWitnessReport: yup.string().notRequired(),
  policeReport: yup.string().notRequired(),
});

export const marineClaimReqDocValidationSchema = yup.object().shape({
  evidenceUpload1: yup.string().notRequired(),
  evidenceUpload2: yup.string().notRequired(),
  evidenceUpload3: yup.string().notRequired(),
  evidenceUpload4: yup.string().notRequired(),
  eyeWitnessReport: yup.string().notRequired(),
  policeReport: yup.string().notRequired(),
});

export const oliAndGasClaimReqDocValidationSchema = yup.object().shape({
  evidenceUpload1: yup.string().notRequired(),
  evidenceUpload2: yup.string().notRequired(),
  evidenceUpload3: yup.string().notRequired(),
  evidenceUpload4: yup.string().notRequired(),
  eyeWitnessReport: yup.string().notRequired(),
  policeReport: yup.string().notRequired(),
});

export const packagedPolicyClaimReqDocValidationSchema = yup.object().shape({
  evidenceUpload1: yup.string().notRequired(),
  evidenceUpload2: yup.string().notRequired(),
  evidenceUpload3: yup.string().notRequired(),
  evidenceUpload4: yup.string().notRequired(),
  eyeWitnessReport: yup.string().notRequired(),
  policeReport: yup.string().notRequired(),
});

export const fireClaimReqDocValidationSchema = yup.object().shape({
  purchaseOrReplacementInvoice: yup.string().notRequired(),
  uploadDamagePic1: yup.string().notRequired(),
  uploadDamagePic2: yup.string().notRequired(),
  uploadDamagePic3: yup.string().notRequired(),
  uploadDamagePic4: yup.string().notRequired(),
  eyeWitnessReport: yup.string().notRequired(),
  policeReport: yup.string().notRequired(),
  fireServiceReport: yup.string().notRequired(),
});

export const motorClaimReqDocValidationSchema = yup.object().shape({
  purchaseOrReplacementInvoice: yup.string().notRequired(),
  uploadScannedVehicleLicense: yup.string().notRequired(),
  uploadInsuranceCertificate: yup.string().notRequired(),
  policeReport: yup.string().notRequired(),
  eyeWitnessReport: yup.string().notRequired(),
  thirdPartyEvidenceOfInsuranceCover: yup.string().notRequired(),
  thirdPartyRepairEstimate: yup.string().notRequired(),
  thirdPartyDamageEvidence1: yup.string().notRequired(),
  thirdPartyDamageEvidence2: yup.string().notRequired(),
  repairEstimateInvoice: yup.string().notRequired(),
  vehicleFrontView: yup.string().notRequired(),
  vehicleRearView: yup.string().notRequired(),
  vehicleLeftView: yup.string().notRequired(),
  vehicleRightView: yup.string().notRequired(),
  driversLicense: yup.string().notRequired(),
});

export const newsLetterValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "invalid email format"
    ),
});
