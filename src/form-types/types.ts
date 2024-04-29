export type createEnquiryTypes = {
  full_name: string;
  email: string;
  subject: string;
  message: string;
};

export type motorVehicleFormTypes = {
  title: string;
  surname: string;
  first_name: string;
  email_address: string;
  mobile_number: string;
  dob: string;
  gender: string;
  occupation: string;
  address: string;
  state: string;
  identification_type: string;
  identification_number: number;
  cover_type: string;
  cover_type2: string;
  vehicle_value: string;
  vehicle_value2: string;
  vehicle_make: string;
  vehicle_model: string;
  registration_number: string;
  chasis_number: string;
  engine_number: string;
  year_of_make: string;
  body_type: string;
  insurance_state_date: string;
  vehicle_color: string;
  cost: string;
};

export type eventInsuranceFormType = {
  first_name: string;
  surname: string;
  company_name: string;
  email: string;
  mobile_number: string;
  sum_insured: string;
  event_date: string;
  event_duration: string;
  event_involvement: string;
  event_type: string;
  event_location: string;
  no_of_guests: string;
  cover_type: string[];
};

export type electricFormType = {
  company_name: string;
  email: string;
  mobile_number: string;
  sum_insured: string;
  cover_type: string;
  address: string;
  state: string;
  id_type: string;
  payment_option: string;
  insured_date: string;
  cost: string;
};

export type moneyFormType = {
  title: string;
  first_name: string;
  surname: string;
  gender: string;
  dob: string;
  email: string;
  mobile_number: string;
  sum_insured: string;
  cover_type: string;
  address: string;
  state: string;
  id_type: string;
  payment_option: string;
};

export type allRisksFormType = {
  company_name: string;
  email: string;
  mobile_number: string;
  no_of_guests: string;
  sum_insured: string;
  cover_type: string;
  address: string;
  state: string;
};

export type businessOwnersFormTypes = {
  company_name: string;
  email: string;
  mobile_number: string;
  sum_insured: string;
  cover_type: string;
  address: string;
  state: string;
  payment_option: string;
};

export type boilerPressureFormType = {
  company_name: string;
  email: string;
  mobile_number: string;
  event_involvement: string;
  event_type: string;
  event_location: string;
  sum_insured: string;
  cover_type: string[];
  address: string;
  state: string;
  payment_option: string;
};

export type GITFormType = {
  company_name: string;
  email: string;
  mobile_number: string;
  event_involvement: string;
  event_type: string;
  event_location: string;
  sum_insured: string;
  event_date: string;
  event_duration: string;
  cover_type: string;
  state: string;
  payment_option: string;
};

export type contractorAllRiskFormType = {
  first_name: string;
  surname: string;
  email: string;
  mobile_number: string;
  event_involvement: string;
  event_type: string;
  event_location: string;
  no_of_guests: string;
  sum_insured: string;
  payment_option: string;
  event_date: string;
  event_duration: string;
  cover_type: string;
};

export type groupPersonalFormType = {
  company_name: string;
  email: string;
  mobile_number: string;
  event_involvement: string;
  event_type: string;
  event_location: string;
  no_of_guests: string;
  sum_insured: string;
  event_date: string;
  event_duration: string;
  address: string;
  state: string;
  payment_option: string;
};

export type publicLiabilityFormType = {
  first_name: string;
  surname: string;
  email: string;
  mobile_number: string;
  sum_insured: string;
  insured_date: string;
  cover_type: string;
  address: string;
  state: string;
  id_type: string;
  id_number: string;
  payment_option: string;
};

export type marineCargoFormType = {
  company_name: string;
  email: string;
  mobile_number: string;
  sum_insured: string;
  insured_date: string;
  cover_type: string;
  address: string;
  state: string;
  payment_option: string;
};

export type marineHullFormType = {
  company_name: string;
  email: string;
  mobile_number: string;
  sum_insured: string;
  insured_date: string;
  cover_type: string;
  address: string;
  state: string;
  payment_option: string;
};

export type plantAllRiskFormType = {
  company_name: string;
  email: string;
  mobile_number: string;
  sum_insured: string;
  insured_date: string;
  cover_type: string;
  address: string;
  state: string;
  payment_option: string;
};

export type occupiersLiabilityFormType = {
  title: string;
  first_name: string;
  surname: string;
  email: string;
  mobile_number: string;
  event_involvement: string;
  event_type: string;
  event_location: string;
  no_of_guests: string;
  sum_insured: string;
  event_duration: string;
  address: string;
  state: string;
  payment_option: string;
};
