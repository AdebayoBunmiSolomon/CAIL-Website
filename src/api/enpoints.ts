export const enum endpoints {
  GET_ALL_CARS = "motorsetup/getall-cars",
  login = "/api/motor/Login",
  GET_MOTOR_POLICY_QUOTE = "/api/motor",
  GET_SAFETY_PLUS_QUOTE = "/api/motor/create-safetyplus-quote",
  GET_HOME_SHIELD_QUOTE = "/api/motor/create-homeshield-quote",
  POST_PERSONAL_ACCIDENT = "https://apidev.custodianplc.com.ng/v3/crm/quotes",
  MAKE_ENQUIRY = "https://apidev.custodianplc.com.ng/v3/crm/cai/web-feedback",
  MAKE_A_CLAIM = "https://apidev.custodianplc.com.ng/v3/crm/web/claims/cai-loss-notice",
  GET_POLICY_SUMMARY = "https://absapi.custodianplc.com.ng/policy",
  POST_MOTOR_FORM_DATA = "",
  POST_CLAIM = "https://192.168.10.59:8073/api/Claims/cai/makeclaims",
  GET_CLAIMS_INFO = "https://192.168.10.59:8073/api/Claims/cai/check-claims-status?claimId=",
}
