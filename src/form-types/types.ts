export type createEnquiryTypes = {
  full_name: string;
  email: string;
  subject: string;
  message: string;
  policy_number: string;
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

export type personalAccidentFormType = {
  full_name: string;
  email: string;
  mobile_number: string;
  subject: string;
  message: string;
};

export type requestCallBackFormType = {
  full_name: string;
  mobile_number: string;
};

export type claimStatusTypes = {
  policyNumber: string;
  vehicleRegNumber: string;
};

export type motorClaimDetailsTypes = {
  vehicleRegNumber: string;
  email: string;
  mobileNumber: string;
  claimType: string;
  damageType: string; //when it is accident
  dateTimeOfLoss: string;
};

export type motorClaimCircumstances = {
  descriptionOfIncident: string;
  doYouHaveAWitness: string;
  nameOfWitness: string;
  witnessContactInfo: string;
  whereCanTheVehicleBeInspected: string;
  isThirdPartyInvolved: string;
  hasThePoliceBeenInformed: string;
  whenWasThePoliceInformed: string;
  policeStationAddress: string;
  thirdPartyInformation: string;
  estimateOfRepairs: string;
  claimsAmount: string;
};

export type accidentClaimDetailsTypes = {
  claimType: string;
  email: string;
  phoneNumber: string;
  dateTimeOfLoss: string;
  wasThePremiseOccupiedAtTheTime: string;
  dateLastOccupied: string;
};

export type accidentClaimCircumstances = {
  descriptionOfIncident: string;
  listOfStolenItems: string;
  doYouHaveAWitness: string;
  nameOfWitness: string;
  witnessContactInfo: string;
  hasThePoliceBeenInformed: string;
  whenWasThePoliceInformed: string;
  policeStationAddress: string;
  claimsAmount: string;
};

export type accidentReqDoc = {
  purchaseOrReplacementInvoice: any;
  evidenceUpload1: any;
  evidenceUpload2: any;
  eyeWitnessReport: any;
  policeReport: any;
};

export type bondClaimDetailsTypes = {
  claimType: string;
  email: string;
  phoneNumber: string;
  dateTimeOfIncident: string;
};

export type bondClaimCircumstances = {
  descriptionOfIncident: string;
  listOfStolenItems: string;
  doYouHaveAWitness: string;
  nameOfWitness: string;
  witnessContactInfo: string;
  hasThePoliceBeenInformed: string;
  whenWasThePoliceInformed: string;
  policeStationAddress: string;
  claimsAmount: string;
};

export type bondClaimReqDoc = {
  evidenceUpload1: any;
  evidenceUpload2: any;
  evidenceUpload3: any;
  evidenceUpload4: any;
  eyeWitnessReport: any;
  policeReport: any;
};

export type engineeringClaimDetailsTypes = {
  claimType: string;
  email: string;
  phoneNumber: string;
  dateTimeOfIncident: string;
};

export type engineeringClaimCircumstances = {
  descriptionOfIncident: string;
  listOfStolenItems: string;
  doYouHaveAWitness: string;
  nameOfWitness: string;
  witnessContactInfo: string;
  hasThePoliceBeenInformed: string;
  whenWasThePoliceInformed: string;
  policeStationAddress: string;
  claimsAmount: string;
};

export type engineeringClaimReqDoc = {
  evidenceUpload1: any;
  evidenceUpload2: any;
  evidenceUpload3: any;
  evidenceUpload4: any;
  eyeWitnessReport: any;
  policeReport: any;
};

export type fireClaimDetailsTypes = {
  claimType: string;
  email: string;
  phoneNumber: string;
  dateTimeOfLoss: string;
};

export type fireClaimCircumstances = {
  descriptionOfIncident: string;
  listOfStolenItems: string;
  doYouHaveAWitness: string;
  nameOfWitness: string;
  witnessContactInfo: string;
  hasTheFireServiceBeenInformed: string;
  fireServiceStationAddress: string;
  doYouHaveAFireServiceReport: string;
  hasThePoliceBeenInformed: string;
  whenWasThePoliceInformed: string;
  policeStationAddress: string;
  claimsAmount: string;
};

export type aviationClaimDetailsTypes = {
  claimType: string;
  email: string;
  phoneNumber: string;
  dateTimeOfIncident: string;
};

export type aviationClaimCircumstances = {
  descriptionOfIncident: string;
  listOfStolenItems: string;
  doYouHaveAWitness: string;
  nameOfWitness: string;
  witnessContactInfo: string;
  hasThePoliceBeenInformed: string;
  whenWasThePoliceInformed: string;
  policeStationAddress: string;
  claimsAmount: string;
};

export type aviationClaimReqDoc = {
  evidenceUpload1: any;
  evidenceUpload2: any;
  evidenceUpload3: any;
  evidenceUpload4: any;
  eyeWitnessReport: any;
  policeReport: any;
};

export type marineClaimDetailsTypes = {
  claimType: string;
  email: string;
  phoneNumber: string;
  dateTimeOfIncident: string;
};

export type marineClaimCircumstances = {
  descriptionOfIncident: string;
  listOfStolenItems: string;
  doYouHaveAWitness: string;
  nameOfWitness: string;
  witnessContactInfo: string;
  hasThePoliceBeenInformed: string;
  whenWasThePoliceInformed: string;
  policeStationAddress: string;
  claimsAmount: string;
};

export type marineClaimReqDoc = {
  evidenceUpload1: any;
  evidenceUpload2: any;
  evidenceUpload3: any;
  evidenceUpload4: any;
  eyeWitnessReport: any;
  policeReport: any;
};

export type oilAndGasClaimDetailsTypes = {
  claimType: string;
  email: string;
  phoneNumber: string;
  dateTimeOfIncident: string;
};

export type oilAndGasClaimCircumstances = {
  descriptionOfIncident: string;
  listOfStolenItems: string;
  doYouHaveAWitness: string;
  nameOfWitness: string;
  witnessContactInfo: string;
  hasThePoliceBeenInformed: string;
  whenWasThePoliceInformed: string;
  policeStationAddress: string;
  claimsAmount: string;
};

export type oilAndGasClaimReqDoc = {
  evidenceUpload1: any;
  evidenceUpload2: any;
  evidenceUpload3: any;
  evidenceUpload4: any;
  eyeWitnessReport: any;
  policeReport: any;
};

export type packagedPolicyClaimDetailsTypes = {
  claimType: string;
  email: string;
  phoneNumber: string;
  dateTimeOfIncident: string;
};

export type packagedPolicyClaimCircumstances = {
  descriptionOfIncident: string;
  listOfStolenItems: string;
  doYouHaveAWitness: string;
  nameOfWitness: string;
  witnessContactInfo: string;
  hasThePoliceBeenInformed: string;
  whenWasThePoliceInformed: string;
  policeStationAddress: string;
  claimsAmount: string;
};

export type packagedPolicyClaimReqDoc = {
  evidenceUpload1: any;
  evidenceUpload2: any;
  evidenceUpload3: any;
  evidenceUpload4: any;
  eyeWitnessReport: any;
  policeReport: any;
};
