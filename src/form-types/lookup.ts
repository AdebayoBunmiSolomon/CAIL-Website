export type personalInformationLookUpTypes = {
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
  identification_number: string;
  file: any;
};

export type carDetailsLookUpTypes = {
  cover_type: string;
  vehicle_category: string;
  vehicle_value: string;
  payment_options: string;
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

export type machineryBreakdownLookUpType1 = {
  first_name: string;
  surname: string;
  company_name: string;
  email: string;
  mobile_number: string;
  sum_insured: string;
  cover_type: string;
  address: string;
  state: string;
  id_type: string;
  id_number: string;
  means_of_id: string;
};

export type machineryBreakdownLookUpType2 = {
  machine_category: string;
  machine_value: string;
  payment_option: string;
  machine_maker: string;
  model_number: string;
  reg_number: string;
  chasis_no: string;
  engine_no: string;
  year_of_make: string;
  body_type: string;
  insured_date: string;
  machine_color: string;
  cost: string;
};

export type builderLiabilityFormLookUpTypes1 = {
  first_name: string;
  surname: string;
  company_name: string;
  email: string;
  mobile_number: string;
  sum_insured: string;
  title: string;
  address: string;
  state: string;
  id_type: string;
  id_number: string;
  means_of_id: string;
};

export type buildersLiabilityFormLookUpTypes2 = {
  payment_option: string;
  year_of_make: string;
  insured_date: string;
  cost: string;
  no_of_units: string;
};

export type businessInterruptionFormLookUpTypes1 = {
  first_name: string;
  surname: string;
  company_name: string;
  email: string;
  mobile_number: string;
  sum_insured: string;
  cover_type: string;
  title: string;
  address: string;
  state: string;
  means_of_id: string;
  insured_date: string;
};

export type businessInterruptionFormLookUpTypes2 = {
  cost: string;
  no_of_units: string;
};

export type burglaryFormLookUpTypes1 = {
  title: string;
  first_name: string;
  surname: string;
  house_type: string;
  email: string;
  mobile_number: string;
  event_involvement: string;
  event_type: string;
  event_location: string;
  no_of_people: string;
  sum_insured: string;
  event_date: string;
};

export type burglaryFormLookUpTypes2 = {
  cover_type: string;
  address: string;
  state: string;
};

export type professionIndemnityFormType1 = {
  title: string;
  first_name: string;
  surname: string;
  dob: string;
  gender: string;
  occupation: string;
  company_name: string;
  email: string;
  mobile_number: string;
  sum_insured: string;
  address: string;
  state: string;
};

export type professionIndemnityFormType2 = {
  id_type: string;
  id_number: string;
  payment_option: string;
};

export type healthCareFormType1 = {
  title: string;
  first_name: string;
  surname: string;
  gender: string;
  email: string;
  mobile_number: string;
  dob: string;
  address: string;
  state: string;
  id_type: string;
  id_number: string;
  cover_type: string;
};

export type healthCareFormType2 = {
  event_type: string;
  event_location: string;
  no_of_guests: string;
  sum_insured: string;
  payment_option: string;
};

export type safetyPlusFormType1 = {
  title: string;
  surname: string;
  first_name: string;
  dob: string;
  gender: string;
  email: string;
  mobile_number: string;
  address: string;
  state: string;
  occupation: string;
  id_type: string;
  id_number: string;
  means_of_id: string; //file
};

export type safetyPlusFormType2 = {
  insured_date: string;
  policy_period: string;
  number_of_units: string;
  premium: string;
  id_type: string;
  id_number: string;
  company_name: string;
  company_address: string;
  beneficiary_name: string;
  beneficiary_dob: string;
  beneficiary_gender: string;
  beneficiary_relationship: string;
  means_of_id: string; //file
};
