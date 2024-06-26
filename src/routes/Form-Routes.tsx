import { AllRisksForm } from "../forms/Business-Insurance/All-Risks/Form";
import { BoilerPressurePlantForm } from "../forms/Business-Insurance/Boiler-Pressure/Form";
import { BuildersLiabilityStepper } from "../forms/Business-Insurance/Builders-Liability/Stepper";
import { BurglaryStepper } from "../forms/Business-Insurance/Burglary/Stepper";
import { BusinessInterruptionStepper } from "../forms/Business-Insurance/Business-Interruption/Stepper";
import { BusinessOwnersForm } from "../forms/Business-Insurance/Business-Owners/Form";
import { ContractorAllRiskForm } from "../forms/Business-Insurance/Contractors-All-Risk/Form";
import { ElectricForm } from "../forms/Business-Insurance/Electronic/Form";
import { GITForm } from "../forms/Business-Insurance/GIT/Form";
import { GroupPersonalAccidentForm } from "../forms/Business-Insurance/Group-Personal-Accident/Form";
import { HealthCareStepper } from "../forms/Business-Insurance/Healthcare/Stepper";
import { MachineryStepper } from "../forms/Business-Insurance/Machinery-Breakdown/Stepper";
import { MarineCargoForm } from "../forms/Business-Insurance/Marine-Cargo/Form";
import { MarineHullForm } from "../forms/Business-Insurance/Marine-Hull/Form";
import { MoneyForm } from "../forms/Business-Insurance/Money/Form";
import { MotorStepper } from "../forms/Business-Insurance/Motor-Vehicle/Stepper";
import { OccupiersLiabilityForm } from "../forms/Business-Insurance/Occupiers-Liability/Form";
import { PlantAllRiskForm } from "../forms/Business-Insurance/Plant-All-Risk/Form";
import { ProfessionalIndemnityStepper } from "../forms/Business-Insurance/Professional-Indemnity/Stepper";
import { PublicLiabilityForm } from "../forms/Business-Insurance/Public-Liability/Form";
import { Events } from "../forms/Business-Insurance/custodian-events/Events";
import { PersonalInsuranceEventsForm } from "../forms/Personal-Insurance/Custodian-Events/Events";
import { HomeShieldStepper } from "../forms/Personal-Insurance/Home-Shield/Stepper";
import { PersonalInsuranceMachineryStepper } from "../forms/Personal-Insurance/Machinery-Breakdown/Stepper";
import { PersonalAccidentForm } from "../forms/Personal-Insurance/Personal-Accident/Form";
import { SafetyPlusStepper } from "../forms/Personal-Insurance/Safety-Plus/Stepper";
import { formRoutes } from "./FormRoutes";
import * as Pages from "../pages";
import { MotorClaimStepper } from "../forms/Make-a-Claim/Motor/Stepper";
import { AccidentClaimStepper } from "../forms/Make-a-Claim/Accident/Stepper";
import { BondClaimStepper } from "../forms/Make-a-Claim/Bond/Stepper";
import { EngineeringClaimStepper } from "../forms/Make-a-Claim/Engineering/Stepper";
import { FireClaimStepper } from "../forms/Make-a-Claim/Fire/Stepper";
import { AviationClaimStepper } from "../forms/Make-a-Claim/Aviation/Stepper";
import { MarineClaimStepper } from "../forms/Make-a-Claim/Marine/Stepper";
import { OilAndGasClaimStepper } from "../forms/Make-a-Claim/Oil-and-Gas/Stepper";
import { PackagedPolicyClaimStepper } from "../forms/Make-a-Claim/Packaged/Stepper";

type formRouteProps = {
  path: string;
  element: React.ComponentType<any>;
};
/**
 * contains all route to every forms of each policy
 */
export const policyFormRoutes: formRouteProps[] = [
  {
    path: formRoutes.motor_vehicle,
    element: MotorStepper,
  },
  {
    path: formRoutes.custodian_events,
    element: Events,
  },
  {
    path: formRoutes.machinery_breakdown,
    element: MachineryStepper,
  },
  {
    path: formRoutes.builders_liability,
    element: BuildersLiabilityStepper,
  },
  {
    path: formRoutes.business_interruption,
    element: BusinessInterruptionStepper,
  },
  {
    path: formRoutes.burglary_housebreaking,
    element: BurglaryStepper,
  },
  {
    path: formRoutes.electronic_equipment,
    element: ElectricForm,
  },
  {
    path: formRoutes.money,
    element: MoneyForm,
  },
  {
    path: formRoutes.all_risks,
    element: AllRisksForm,
  },
  {
    path: formRoutes.business_owners,
    element: BusinessOwnersForm,
  },
  {
    path: formRoutes.boiler_pressure_plant,
    element: BoilerPressurePlantForm,
  },
  {
    path: formRoutes.goods_in_transit,
    element: GITForm,
  },
  {
    path: formRoutes.contractors_all_risks,
    element: ContractorAllRiskForm,
  },
  {
    path: formRoutes.group_personal_accident,
    element: GroupPersonalAccidentForm,
  },
  {
    path: formRoutes.professional_indemnity,
    element: ProfessionalIndemnityStepper,
  },
  {
    path: formRoutes.public_liability,
    element: PublicLiabilityForm,
  },
  {
    path: formRoutes.marine_cargo,
    element: MarineCargoForm,
  },
  {
    path: formRoutes.marine_hull,
    element: MarineHullForm,
  },
  {
    path: formRoutes.plant_all_risk,
    element: PlantAllRiskForm,
  },
  {
    path: formRoutes.occupiers_liability,
    element: OccupiersLiabilityForm,
  },
  {
    path: formRoutes.healthcare_professional,
    element: HealthCareStepper,
  },
  {
    path: formRoutes.custodian_events,
    element: PersonalInsuranceEventsForm,
  },
  {
    path: formRoutes.machinery_breakdown,
    element: PersonalInsuranceMachineryStepper,
  },
  {
    path: formRoutes.safety_plus,
    element: SafetyPlusStepper,
  },
  {
    path: formRoutes.home_shield,
    element: HomeShieldStepper,
  },
  {
    path: formRoutes.personal_accident,
    element: PersonalAccidentForm,
  },
  {
    path: formRoutes.makeAClaim,
    element: Pages.MakeAClaim,
  },
];

/**
 * contains all route to every forms of each make-a-claim
 */
export const makeAClaimFormRoutes: formRouteProps[] = [
  {
    path: formRoutes.makeMotorClaim,
    element: MotorClaimStepper,
  },
  {
    path: formRoutes.makeAccidentClaim,
    element: AccidentClaimStepper,
  },
  {
    path: formRoutes.makeBondClaim,
    element: BondClaimStepper,
  },
  {
    path: formRoutes.makeEngineeringClaim,
    element: EngineeringClaimStepper,
  },
  {
    path: formRoutes.makeFireClaim,
    element: FireClaimStepper,
  },
  {
    path: formRoutes.makeAviationClaim,
    element: AviationClaimStepper,
  },
  {
    path: formRoutes.makeMarineClaim,
    element: MarineClaimStepper,
  },
  {
    path: formRoutes.makeOilAndGasClaim,
    element: OilAndGasClaimStepper,
  },
  {
    path: formRoutes.makePackagedPolicyClaim,
    element: PackagedPolicyClaimStepper,
  },
];
