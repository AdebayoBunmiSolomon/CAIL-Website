import React from "react";
import { Route, Routes } from "react-router-dom";
import * as Pages from "../pages";
import { formRoutes } from "./FormRoutes";
import { Events } from "../forms/Business-Insurance/custodian-events/Events";
import { ThankYou } from "../components";
import { MotorStepper } from "../forms/Business-Insurance/Motor-Vehicle/Stepper";
import { MachineryStepper } from "../forms/Business-Insurance/Machinery-Breakdown/Stepper";
import { BuildersLiabilityStepper } from "../forms/Business-Insurance/Builders-Liability/Stepper";
import { BusinessInterruptionStepper } from "../forms/Business-Insurance/Business-Interruption/Stepper";
import { BurglaryStepper } from "../forms/Business-Insurance/Burglary/Stepper";
import { ElectricForm } from "../forms/Business-Insurance/Electronic/Form";
import { MoneyForm } from "../forms/Business-Insurance/Money/Form";
import { AllRisksForm } from "../forms/Business-Insurance/All-Risks/Form";
import { BusinessOwnersForm } from "../forms/Business-Insurance/Business-Owners/Form";
import { BoilerPressurePlantForm } from "../forms/Business-Insurance/Boiler-Pressure/Form";
import { GITForm } from "../forms/Business-Insurance/GIT/Form";
import { ContractorAllRiskForm } from "../forms/Business-Insurance/Contractors-All-Risk/Form";
import { GroupPersonalAccidentForm } from "../forms/Business-Insurance/Group-Personal-Accident/Form";
import { ProfessionalIndemnityStepper } from "../forms/Business-Insurance/Professional-Indemnity/Stepper";
import { PublicLiabilityForm } from "../forms/Business-Insurance/Public-Liability/Form";
import { MarineCargoForm } from "../forms/Business-Insurance/Marine-Cargo/Form";
import { MarineHullForm } from "../forms/Business-Insurance/Marine-Hull/Form";
import { PlantAllRiskForm } from "../forms/Business-Insurance/Plant-All-Risk/Form";
import { OccupiersLiabilityForm } from "../forms/Business-Insurance/Occupiers-Liability/Form";
import { HealthCareStepper } from "../forms/Business-Insurance/Healthcare/Stepper";
import { PersonalInsuranceEventsForm } from "../forms/Personal-Insurance/Custodian-Events/Events";
import { PersonalInsuranceMachineryStepper } from "../forms/Personal-Insurance/Machinery-Breakdown/Stepper";
import { SafetyPlusStepper } from "../forms/Personal-Insurance/Safety-Plus/Stepper";
import { HomeShieldStepper } from "../forms/Personal-Insurance/Home-Shield/Stepper";
import { PersonalAccidentForm } from "../forms/Personal-Insurance/Personal-Accident/Form";
import { MakeAClaimStepper } from "../forms/Make-a-Claim/Stepper";

type pagesProps = {
  path: string;
  element: React.ComponentType<any>;
};

const pages: pagesProps[] = [
  {
    path: "/",
    element: Pages.Home,
  },
  {
    path: "/about-us",
    element: Pages.About,
  },
  {
    path: "/products/:id",
    element: Pages.Products,
  },
  {
    path: "/products-section/:id",
    element: Pages.ProductSection,
  },
  {
    path: "/resources/:id",
    element: Pages.Resources,
  },
  {
    path: "/contact-us",
    element: Pages.ContactUs,
  },
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
  {
    path: formRoutes.makeAClaimStepper,
    element: MakeAClaimStepper,
  },
];

const Routers = () => {
  return (
    <Routes>
      {pages &&
        pages.map((items, index) => (
          <Route key={index} path={items.path} element={<items.element />} />
        ))}
      <Route path='/thank-you' element={<ThankYou />} />
    </Routes>
  );
};

export default Routers;
