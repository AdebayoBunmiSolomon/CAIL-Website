import { formRoutes } from "../../routes/FormRoutes";
import { tabContentsType } from "../../types/types";

export const products: tabContentsType[] = [
  {
    id: 1,
    tabHeader: "Business Insurance Products",
    title: "Explore Our",
    subTitle: "Comprehensive Business",
    subTitle2: "Insurance Solutions",
    description: "",
    tabData: [
      {
        id: 1,
        title: "Custodian Events Insurance",
        description:
          "Hosting an event is a big investment—one that comes with many uncertainties, no matter how well you plan. Custodian Events Insurance can help you secure this investment as it protects the policyholder from any unforeseen circumstances which could lead to public liability claims, accidental injuries to guests, loss or damage of event equipment, professional liability claims, as well as employee liability claims. Furthermore, Custodian Events Insurance can be extended to cover event cancellation due to specified causes and litigation costs incurred by the insured with the consent of the insurer.",
        position: "",
        getQuote: formRoutes.custodian_events,
        benefits: [
          {
            title: "Benefits",
            description: "",
            list: [
              "Provides peace of mind to all stakeholders, i.e., event planners, principals, guests, and venue owners.",
              "Provides compensation to guests and employees for medical expenses, including bodily injuries and temporary disabilities occurring at the venue of the event.",
              "Protects the event planner in the event of public liability claims made in respect of death or bodily injuries to third parties, as well as damage to property during the event and at the venue.",
              "Eases the financial losses associated with the cancellation of events.",
              "Provides the widest insurance coverage compared to others in the market.",
            ],
          },
        ],
        keyFeatures: [
          {
            title: "Key Features",
            description:
              "The Event Insurance policy is specially designed to include features of the following classes of insurance:",
            list: [
              "Public Liability Insurance: Covers the insured’s legal liability to pay damages, claimants’ costs, and expenses arising from injuries to invited guests and third parties, resulting from and in connection with the event.",
              "Professional Liability Insurance: Provides cover for the insured in respect of any loss or liability arising from any claim or claims for breach of professional duty due to neglect, error, or omission committed in the conduct of the insured's business in its professional capacity, or by any person employed by the insured.",
              "Event Equipment Insurance: Provides cover for the loss of or damage to the insured's equipment or equipment the insured is responsible for during and in association with the event.",
              "Employee Accident Benefit Insurance: Provides compensation to employees for death or bodily injury by accident or disease arising from and in the course of the event/employment with the insured.",
              "Event Cancellation Insurance: Protects the expenses already incurred on an event against cancellation due to circumstances beyond the insured's control. These circumstances can include, but are not limited to, severe/adverse weather; riots, strikes, and labor disturbances; and unavailability of the venue due to fires, floods, etc.",
            ],
          },
        ],
      },
      {
        id: 2,
        title: "Custodian Motor Insurance",
        description:
          "Our Motor Insurance covers Nigerian-registered private motor vehicles, commercial vehicles, motorcycles, mechanically propelled plant, or trailers. It offers the following coverage:",
        position: "",
        getQuote: formRoutes.motor_vehicle,
        keyFeatures: [
          {
            title: "Extensions/Benefits",
            description: "",
            list: [
              "A discount is given depending on the number of vehicles.",
              "Free cover for vehicle accessories subject to forcible entry into the car.",
              "Towing fee is covered up to a maximum of ₦20,000, provided your car is towed to a nearest and reasonable place for safekeeping or repair.",
              "Third Party Property Damage (TPPD) cover of ₦1 million is increased to ₦2 million at no additional cost.",
              "Cover for personal effects in the vehicle following an accident and/or theft up to ₦20,000.",
              "Free cover for accidental breakage and/or theft of the windscreen.",
              "Cover for the risk of strikes, riots, and civil commotion requires payment of an additional premium.",
              "Limit of medical expenses is increased to ₦20,000 in the event of an accident.",
            ],
          },
          {
            title: "Optional Cover",
            description: "",
            list: [
              "Vehicle Sound/Radio and Accessories: Must be specified and are covered for loss or damage.",
              "Out-of-Nigeria Coverage: Covers your vehicle when it is temporarily used for business or private purposes outside Nigeria but within the West African shores, provided notice is given to us and the necessary document is obtained (i.e., The Brown Card). It covers your liability to other people where an accident causes death or injury to them or damage to their property and attracts an additional premium.",
            ],
          },
          {
            title: "Additional Benefits",
            description: "",
            list: [
              "Emergency medical expenses in the event of an accident.",
              "Towing fee is covered up to a maximum limit, provided your car is towed to the nearest and most reasonable place for safekeeping or repair.",
              "Cover for personal effects in the vehicle following an accident and/or theft up to a maximum limit.",
              "Flood, risk of strikes, riots, and civil commotion—payment of an additional premium required.",
            ],
          },
        ],
        benefits: [
          {
            title: "Comprehensive Cover",
            description: "",
            list: [
              "Covers your vehicle for accidental damage, theft, and hijack, as well as injury to other people or damage to their property.",
            ],
          },
          {
            title: "Limited Cover",
            description: "",
            list: [
              "Accidental Damage & Third Party Cover: Covers your vehicle against accidental damage, as well as death or injury to other people or damage to their property. Loss resulting from fire and theft is not covered.",
              "Third Party Fire & Theft Cover: Covers your vehicle for damage caused by fire, theft, or hijack, as well as injury to other people or damage to their property. Accidental damage to your vehicle is not covered.",
              "Liability to Other People (Third Party Cover): Covers your liability to other people where an accident causes death or injury to them or damage to their property. This is a compulsory cover for every motor user in Nigeria.",
            ],
          },
          {
            title: "Optional Cover",
            description: "",
            list: [
              "Vehicle Sound/Radio and Accessories: Must be specified and are covered for loss or damage.",
              "Out-of-Nigeria Coverage: Covers your vehicle when it is temporarily used either for business or private purposes outside Nigeria but within the West African shores, provided notice is given to us and the necessary document is obtained (i.e., The Brown Card). It covers you for liability to other people where an accident causes death or injury to them or damage to their property.",
            ],
          },
        ],
      },
      {
        id: 3,
        title: "Machinery Breakdown Insurance",
        description:
          "Machinery Breakdown Insurance is an ideal cover for stationary plant and machinery. It covers the cost of repairs or replacement of damaged parts resulting from accidental electrical and mechanical breakdowns. Coverage is against loss or damage from any unforeseen and sudden physical loss or damage due to causes such as defects in casting and materials, faulty design, faults during workshop/factory assembly or erection, bad workmanship or lack of skill, carelessness, shortage of water in boilers, physical explosion, tearing apart due to centrifugal force, short circuit, storm, or any other cause not specifically excluded by the policy. All types of machinery, plants, mechanical equipment, and apparatus are covered. Examples include power generating plants (boilers, turbines, and generators), power distribution plants (transformers, high- and low-tension equipment), production machinery in factories, and ancillary equipment like elevators.",
        position: "",
        getQuote: formRoutes.machinery_breakdown,
        benefits: [
          {
            title: "",
            description: "",
            list: [],
          },
        ],
        keyFeatures: [
          {
            title: "",
            description: "",
            list: [],
          },
        ],
      },
      {
        id: 4,
        title: "Builders Liability Insurance",
        description:
          "Builders’ Liability Insurance is a compulsory insurance by law and covers all buildings under construction with more than two floors against construction risks resulting from the builder’s negligence or the negligence of the builder’s servants, agents, or consultants. This negligence may result in bodily injury, loss of life, or damage to property. The policy commences with the movement of the contractor/builder to the contract site and continues until the end of the maintenance period. It is divided into two sections:",
        position: "",
        getQuote: formRoutes.builders_liability,
        benefits: [
          {
            title: "Section I: Builders Liability",
            description:
              "The company will indemnify the insured against all sums which the insured becomes legally liable to pay as damages consequent upon:",
            list: [
              "Death, bodily injury, or illness of employees or workmen of the contractor(s), the principal, or any other firm connected with the contract work, or members of their families.",
              "Accidental bodily injury or illness (whether fatal or not) to third parties.",
              "Accidental loss or damage to property belonging to third parties occurring in direct connection with the performance of the contract insured by this policy and happening on or in the immediate vicinity of the contract site during the period of insurance.",
              "Damage to any property or building caused by vibration or by the removal or weakening of support, or injury or damage to any person or property resulting from such damage.",
            ],
          },
          {
            title: "Section II: Legal Costs & Expenses",
            description:
              "The company will indemnify the insured against all sums which the insured becomes legally liable to pay as damages consequent upon:",
            list: [
              "Death, bodily injury, or illness of employees or workmen of the contractor(s), the principal, or any other firm connected with the contract work, or members of their families.",
              "Accidental bodily injury or illness (whether fatal or not) to third parties.",
              "Accidental loss or damage to property belonging to third parties occurring in direct connection with the performance of the contract insured by this policy and happening on or in the immediate vicinity of the contract site during the period of insurance.",
              "Damage to any property or building caused by vibration or by the removal or weakening of support, or injury or damage to any person or property resulting from such damage.",
            ],
          },
        ],
        keyFeatures: [],
      },
      {
        id: 5,
        title: "Business Interruption Insurance",
        description:
          "If any building or other property used by the insured at their premises for the purpose of their business is destroyed or damaged by any of the perils listed below during the period of insurance, and as a result, the business carried on by the insured at the premises is interrupted or interfered with, then the company will pay the insured the amount of loss resulting from such interruption or interference.",
        position: "",
        getQuote: formRoutes.business_interruption,
        benefits: [
          {
            title: "Perils",
            description: "",
            list: [
              "Fire, lightning, bush fire, explosion, earthquake fire and shock, aircraft impact (including by own vehicle).",
              "Tornado, flood, windstorm, hurricane, or cyclone, bursting and overflowing of tanks and apparatus.",
              "Riot, strike, and malicious damage.",
            ],
          },
          {
            title: "Wages & Salaries",
            description:
              "The remuneration (including national insurance, bonuses, holiday pay, or other payments pertaining to wages) of all employees (other than those whose remuneration is treated as salaries in the insured’s books of account).",
            list: [],
          },
          {
            title: "Auditor's Fees",
            description:
              "This covers reasonable fees payable by the insured to their auditors, not exceeding the sum hereby insured, for producing and certifying particulars or details contained in the insured’s books of account or other business books or documents, or such other proofs, information, or evidence as may be required by the insured.",
            list: [],
          },
          {
            title: "Gross Profit",
            description: "The amount by which:",
            list: [
              "The sum of the turnover and the amount of the closing stock exceeds.",
              "The sum of the amount of the opening stock and the amount of the specified working expenses.",
              "The amounts of the opening and closing stocks shall be arrived at in accordance with the Insured’s usual accounting methods, due provision being made for depreciation.",
            ],
          },
          {
            title: "",
            description:
              "The amounts of the opening and closing stocks shall be arrived at in accordance with the insured’s usual accounting methods, with due provision made for depreciation.",
            list: [],
          },
        ],
        keyFeatures: [
          {
            title: "",
            description: "",
            list: [],
          },
        ],
      },
      {
        id: 6,
        title: "Burglary/Housebreaking Insurance",
        description:
          "The insurance will pay compensation for loss, destruction, or damage following the occurrence of burglary and/or housebreaking, accompanied by actual forcible and violent breaking into or out of the insured premises. Coverage will extend to include damage to doors, windows, or other parts of the building as a result of the theft or attempted theft. Coverage can be extended to include larceny (loss without actual forcible and violent breaking into or out of the premises) at an additional cost. Items covered include movable property that is inside your office premises or outside and designed to exist or operate externally.",
        position: "",
        getQuote: formRoutes.burglary_housebreaking,
        benefits: [
          {
            title: "",
            description: "",
            list: [],
          },
        ],
        keyFeatures: [
          {
            title: "",
            description: "",
            list: [],
          },
        ],
      },
      {
        id: 7,
        title: "Electronic Equipment Insurance",
        description:
          "The insurance covers your electronic business equipment, including computers, licensed software, scanners, printers, copiers, and fax machines, against loss or damage due to fire, theft, or any other accidental damage or misfortune. The costs of data restoration can also be covered.",
        position: "",
        getQuote: formRoutes.electronic_equipment,
        benefits: [
          {
            title: "",
            description: "",
            list: [],
          },
        ],
        keyFeatures: [
          {
            title: "",
            description: "",
            list: [],
          },
        ],
      },
      {
        id: 8,
        title: "Money Insurance",
        description:
          "The insurance covers negotiable instruments, including cash, cheques, money orders, postage, and revenue stamps, against loss from business premises and during transit. Coverage can also be provided for money in the personal custody of senior employees, cash in safes, and damage to safes.",
        position: "",
        getQuote: formRoutes.money,
        benefits: [
          {
            title: "",
            description: "",
            list: [],
          },
        ],
        keyFeatures: [
          {
            title: "",
            description: "",
            list: [],
          },
        ],
      },
      {
        id: 9,
        title: "All Risks Insurance",
        description:
          "The insurance covers loss or damage to property from any cause not specifically excluded in the policy. This applies to specified items such as jewelry, watches, cameras, trophies, gold, and silver articles, works of art, other personal valuables and effects, computers, accounting and other portable office machines, scales, survey equipment, etc. Coverage can be limited to Nigeria or extended on a worldwide basis.",
        position: "",
        getQuote: formRoutes.all_risks,
        benefits: [
          {
            title: "",
            description: "",
            list: [],
          },
        ],
        keyFeatures: [
          {
            title: "",
            description: "",
            list: [],
          },
        ],
      },
      {
        id: 10,
        title: "Business Owners Insurance",
        description:
          "The insurance covers loss of or damage resulting from fire, lightning, explosion, and other external perils to the following:",
        position: "",
        getQuote: formRoutes.business_owners,
        benefits: [
          {
            title: "",
            description: "",
            list: [
              "Buildings",
              "Contents contained within the buildings.",
              "Stock & Materials in Trade",
            ],
          },
        ],
        keyFeatures: [
          {
            title: "",
            description:
              "Additionally, the insurance covers the liability of the business owner at law for death, bodily injury, or property damage sustained by third-party users or members of the public on or around the premises, excluding employees, workmen, or members of the business owner's family.",
            list: [],
          },
        ],
      },
      {
        id: 11,
        title: "Boiler and Pressure Plant Insurance",
        description:
          "A boiler is a closed vessel in which water, or other fluids are heated under pressure. A pressure plant is a closed container that uses steam, gas, or other fluids under pressure. Major risks associated with boilers generally include explosions, which can occur due to various reasons and result in damage to the vessel and third-party liability.",
        position: "",
        getQuote: formRoutes.boiler_pressure_plant,
        benefits: [
          {
            title: "",
            description: "Boiler Insurance and Pressure Plant Insurance cover:",
            list: [],
          },
          {
            title: "",
            description:
              "Explosion or Collapse of the insured boiler or other pressure vessels, resulting in:",
            list: [
              "Damage to the boilers or other pressure plant,",
              "Damage to surrounding property,",
              "Liability for third-party property damage and/or fatal or non-fatal personal injuries",
            ],
          },
        ],
        keyFeatures: [
          {
            title: "",
            description:
              "Coverage includes explosions or collapses arising during ordinary work only.",
            list: [],
          },
        ],
      },
      {
        id: 12,
        title: "Goods In Transit Insurance",
        description:
          "This insurance provides cover for loss or damage to the insured’s goods due to any accident or misfortune while they are in transit within the specified territorial limits. Goods can be transported in either owned or hired vehicles.",
        position: "",
        getQuote: formRoutes.goods_in_transit,
        benefits: [
          {
            title: "",
            description: "",
            list: [],
          },
        ],
        keyFeatures: [
          {
            title: "",
            description: "",
            list: [],
          },
        ],
      },
      {
        id: 13,
        title: "Contractors' All Risks Insurance",
        description:
          "This policy protects the insured (contractor) against the risks of physical loss, destruction, or damage to construction works during a construction contract. The policy can also be extended to cover legal liability and loss or damage to the following:",
        position: "",
        getQuote: formRoutes.contractors_all_risks,
        benefits: [
          {
            title: "",
            description: "",
            list: [
              "Temporary Buildings.",
              "Constructional Plant.",
              "Tools and Equipment.",
              "Hired-in Property.",
              "Employees' Tools and Effects.",
              "Public Liability.",
            ],
          },
        ],
        keyFeatures: [
          {
            title: "",
            description: "",
            list: [],
          },
        ],
      },
      {
        id: 14,
        title: "Group Personal Accident Insurance",
        description:
          "This benefits policy serves as a welfare scheme to encourage and motivate employees. It also relieves employers from the financial burden of medical or death-related expenses in case an employee experiences an accident. The coverage is available 24/7, worldwide, for death or bodily injury (permanent or temporary) caused solely by accidental, violent, and visible means. It also includes medical expenses.",
        position: "",
        getQuote: formRoutes.group_personal_accident,
        benefits: [
          {
            title: "Benefits",
            description: "",
            list: [
              "Death Benefits: 100% of the selected benefit for bodily injury that, within 12 months, leads to the insured’s death.",
              "Permanent Total Disability: 100% of the selected benefit for injuries resulting in the loss of limbs or eyes.",
              "Temporary Total Disability: Weekly salary of the affected employee for injuries that prevent the insured from working.",
              "Medical Expenses: Reimbursement for medical costs actually incurred due to an accident covered under the policy.",
            ],
          },
        ],
        keyFeatures: [
          {
            title: "",
            description: "",
            list: [],
          },
        ],
      },
      {
        id: 15,
        title: "Professional Indemnity Insurance",
        description:
          "This insurance provides coverage for the insured against losses arising from claims of breach of duty due to neglect, errors, or omissions made in the conduct of their professional business. It covers claims made against the insured for any such mistakes that occur during the policy period, protecting them from legal liabilities that may arise from professional negligence.",
        position: "",
        getQuote: formRoutes.professional_indemnity,
        benefits: [
          {
            title: "",
            description: "",
            list: [],
          },
        ],
        keyFeatures: [
          {
            title: "",
            description: "",
            list: [],
          },
        ],
      },
      {
        id: 16,
        title: "Public Liability Insurance",
        description:
          "This policy indemnifies the insured against legal liabilities for sums they are obligated to pay due to:",
        position: "",
        getQuote: formRoutes.public_liability,
        benefits: [
          {
            title: "",
            description: "",
            list: [
              "Death, illness, or bodily injury to any person.",
              "Damage to property belonging to a third party, resulting from the use of the insured's business premises or operations away from the premises.",
            ],
          },
        ],
        keyFeatures: [
          {
            title: "",
            description:
              "Additionally, the policy covers legal costs and expenses incurred with the insurer’s written consent.",
            list: [],
          },
        ],
      },
      {
        id: 17,
        title: "Marine Cargo Insurance",
        description:
          "This policy offers three (3) types of coverage through distinct clauses:",
        position: "",
        getQuote: formRoutes.marine_cargo,
        benefits: [
          {
            title: "Institute Cargo Clause A",
            description:
              "Provides comprehensive cover for loss or damage to insured items due to maritime perils, including:",
            list: [
              "Perils of the sea (such as storms, waves)",
              "Fire and Explosion",
              "Man-of-War",
              "Enemies, pirates, rovers, and thieves",
              "Jettison (intentional discarding of cargo),",
              "Wrongful acts by the ship’s crew to the owner's detriment,",
              "Restraints and detainment,",
              "Free of Capture and Seizure Clause (F.C. & S.),",
              "Strikes, riots, and civil commotion,",
              "War-related risks.",
            ],
          },
          {
            title: "",
            description:
              "Additionally, covers damages caused by the action of worms on timber, cattle death due to prolonged voyages, or damage from oil, sweat, or heat.",
            list: [],
          },
        ],
        keyFeatures: [
          {
            title: "Institute Cargo Clause B",
            description:
              "Provides similar coverage to Clause A but excludes theft, malicious damage, piracy, and contamination.",
            list: [],
          },
          {
            title: "Institute Cargo Clause C",
            description:
              "Provides similar coverage to Clause A but excludes theft, malicious damage, piracy, and contamination.",
            list: [
              "Fire or Explosion",
              "Vessel or craft being stranded, grounded, sunk, or capsized",
              "Overturning or derailment of land conveyance",
              "Collision or contact with external objects (excluding water)",
              "Discharge of cargo at part of distress",
              "Loss or damage caused by general average sacrifice and jettison",
            ],
          },
        ],
      },
      {
        id: 18,
        title: "Marine Hull Insurance",
        description:
          "This insurance covers any type of hull or ship, motorboat, or houseboat, including their machinery, equipment, standard fittings, and accessories. Coverage includes:",
        position: "",
        getQuote: formRoutes.marine_hull,
        benefits: [
          {
            title: "",
            description: "",
            list: [
              "Accidents",
              "Theft",
              "Fire, explosion, and earthquake",
              "Storm, hail, and flood",
              "Salvage costs (expenses related to saving the vessel from peril)",
              "Medical expenses for injuries caused while using the craft",
              "Liability to third parties for damages or injuries cause to others",
            ],
          },
        ],
        keyFeatures: [
          {
            title: "",
            description: "",
            list: [],
          },
        ],
      },
      {
        id: 19,
        title: "Plant All Risk Insurance",
        description:
          "This insurance covers unforeseen and sudden physical loss or damage to movable plants and machinery from any cause not specifically excluded. It provides compensation for repair or replacement (at the insurer’s discretion). The policy applies whether the insured items are:",
        position: "",
        getQuote: formRoutes.plant_all_risk,
        benefits: [
          {
            title: "",
            description: "",
            list: [
              "In operation",
              "At rest",
              "Being dismantled for clearing or overhauling",
              "Undergoing repair or reassemble after maintenance",
            ],
          },
        ],
        keyFeatures: [
          {
            title: "",
            description: "",
            list: [],
          },
        ],
      },
      {
        id: 20,
        title: "Occupiers Liability Insurance",
        description: "",
        position: "",
        getQuote: formRoutes.occupiers_liability,
        benefits: [
          {
            title: "",
            description:
              "This is a compulsory insurance by law. It covers third-party liability and damage to public and private buildings caused by various hazards listed below:",
            list: [
              "Collapse",
              "Fire: Explosion, lightning, thunderbolt, earthquake,",
              "Storm: Tempest, flood (excluding destruction or damage by frost),",
              "Riot: Civil commotion, strikes, labor disturbances, or malicious persons acting on behalf of or in connection with any political organization,",
              "Bursting or Overflowing: Of water tanks, apparatus, or pipes (excluding damage caused thereto),",
              "Robbery, Burglary, Housebreaking: Or any attempt thereat,",
              "Impact: With any of the buildings by any road vehicle, horses, or cattle not belonging to or under the control of the insured or any member of the insured’s family or business.",
              "Leakage: Of oil from any fixed oil-fired heating installation.",
            ],
          },
        ],
        keyFeatures: [
          {
            title: "",
            description:
              "The law describes a “public building” to include any tenement house, hostel, a building occupied by a tenant, lodger, or licensee, and any building to which members of the public have ingress for the purpose of obtaining educational or medical services, or for recreation or transaction of business.",
            list: [],
          },
          {
            title: "",
            description: "It also covers:",
            list: [
              "Personal Liability",
              "Public Liability",
              "Property Owner's Liability",
              "Accidents to Domestic Servants",
              "Rent of Alternative Accommodation",
              "Comprehension for Death of the Insured",
              "Tenant's Liability to the Estate",
              "Elevator Hazard Clause",
              "Fire Brigade Service Service Charge",
            ],
          },
        ],
      },
      {
        id: 21,
        title: "Healthcare Professional Indemnity Insurance",
        description:
          "This is a compulsory insurance by law and covers all healthcare providers in Nigeria (hospitals, clinics, doctors, nurses, dentists, etc.). It insures the facility and its professional staff and pays for the defense costs and any damages awarded up to the policy limit arising from legal liability to clients and third parties for breach of contract or the duty to render the standard of service for which the professional has been hired, resulting in death, disability, or injury by shock involving the physicians, the medical center, medical institution, medical professionals, including ancillary services like nursing, therapy, laboratory, investigations, and vicarious liability arising specifically from:",
        position: "",
        getQuote: formRoutes.healthcare_professional,
        benefits: [
          {
            title: "",
            description: "",
            list: [
              "Negligence: Failure of a practitioner to exercise the required standard of care for the protection of his/her patient.",
              "Errors: Healthcare interventions not carried out as they ought to have been.",
              "Mistakes: Errors in the judgment or the understanding of a diagnosis.",
              "Omissions: Oversights in the clinical management of a patient.",
            ],
          },
        ],
        keyFeatures: [
          {
            title: "",
            description: "",
            list: [],
          },
        ],
      },
      {
        id: 22,
        title: "Custodian SME Insurance Policy",
        description:
          "The SME Insurance Policy is a combined and flexible insurance plan that protects the business owner and organization from fortuitous loss suffered as a result of perils covered by the policy, while carrying out operations in strict adherence to the laws of the country.",
        position: "",
        getQuote: formRoutes.custodian_SME,
        benefits: [
          {
            title: "How It Works",
            description:
              "The SME Insurance Policy offers the business owner the choice of selecting some or all the insurance plans that meet the needs of their business. Some of the classes of insurance covers available through the Custodian SME Insurance policy include the following:",
            list: [],
          },
        ],
        keyFeatures: [
          {
            title: "",
            description: "",
            list: [],
          },
        ],
      },
      {
        id: 23,
        title: "Fire and Special Perils Insurance",
        description:
          "The policy provides compensation if the property/asset suffers loss or damage caused by fire or any of the perils listed below. The perils covered are:",
        position: "",
        getQuote: formRoutes.fire_special_perils,
        benefits: [
          {
            title: "",
            description: "",
            list: [
              "Fire",
              "Lighting",
              "Explosion",
              "Aircraft Damage",
              "Riot, Strike, and Malicious Damage",
              "Storm, Tempest, Flood, Inundation, Hurricane, Cyclone, Typhoon, and Tornado",
              "Subsidence/Landslide, Including Rockslide",
              "Bursting and/or Overflowing of Water Tanks and Apparatus",
              "Bush Fire",
            ],
          },
        ],
        keyFeatures: [
          {
            title: "",
            description: "",
            list: [],
          },
        ],
      },
      {
        id: 24,
        title: "Group Life and Personal Accident Insurance",
        description:
          "At inception, an immediate estate is created for the dependent(s), which is available upon premature death. The policy provides:",
        position: "",
        getQuote: formRoutes.group_life_personal_accident,
        benefits: [
          {
            title: "",
            description: "",
            list: [
              "24-Hour Mortality Cover: Devoid of geographical limitations,",
              "Cover Against Death: From any source,",
              "Instant Financial Assistance: For dependents of the deceased,",
              "Death Cover: Twice the sum assured in the case of accidental death (if the option is chosen),",
              "Permanent Disability Benefit: Equal to the sum assured in case the employee is totally and permanently disabled, with a medical expense limit of N50,000,",
              "Temporary Total Disability Benefit: Equal to 2% of the annual salary for a maximum of 104 weeks, with a medical expense limit of N50,000,",
              "Statutory Group Life Policy Compliance: A wholesome package that meets the requirements of the statutory group life policy under Section 4(5) of the Pension Reform Act, 2014.",
            ],
          },
        ],
        keyFeatures: [
          {
            title: "",
            description: "",
            list: [],
          },
        ],
      },
      {
        id: 25,
        title: "Motor Insurance (Private Car/Commercial Vehicle)",
        description:
          "The policy provides cover against unforeseen loss/damage, theft, and fire of the insured’s vehicles. It also covers accidental injury to or death of third parties as well as damage to third-party property, up to a limit of N1,000,000. The policy covers vehicles used for private/pleasure and business purposes (excluding fare-paying passenger buses).",
        position: "",
        getQuote: formRoutes.motor_insurance_private_car,
        benefits: [
          {
            title: "",
            description: "",
            list: [],
          },
        ],
        keyFeatures: [
          {
            title: "",
            description: "",
            list: [],
          },
        ],
      },
      {
        id: 26,
        title: "Occupiers' Liability Insurance",
        description:
          "The policy covers the legal liability of the insured arising from ownership, maintenance, or use of the designated premises, including the ways immediately adjoining the premises or buildings, for death, bodily injury, or property damage sustained on or around the premises by any user or member of the public. This insurance cover is compulsory by law for all buildings to which members of the public have ingress and egress for the purpose of obtaining educational or medical services, or for the purpose of recreation or transaction of business.",
        position: "",
        getQuote: formRoutes.occupiers_liability,
        benefits: [
          {
            title: "",
            description: "",
            list: [],
          },
        ],
        keyFeatures: [
          {
            title: "",
            description: "",
            list: [],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    tabHeader: "Personal Insurance Products",
    title: "Discover the Range of our",
    subTitle: "Personal Insurance",
    subTitle2: " Coverage Options",
    description: "",
    tabData: [
      {
        id: 1,
        title: "Custodian Events Insurance",
        description:
          "Hosting an event is a big investment—one that comes with many uncertainties, no matter how well you plan. Custodian Events Insurance can help you secure this investment as it protects the policyholder from any unforeseen circumstances which could lead to public liability claims, accidental injuries to guests, loss or damage of event equipment, professional liability claims, as well as employee liability claims. Furthermore, Custodian Events Insurance can be extended to cover event cancellation due to specified causes and litigation costs incurred by the insured with the consent of the insurer.",
        position: "",
        getQuote: formRoutes.custodian_events,
        benefits: [
          {
            title: "Benefits",
            description: "",
            list: [
              "Provides peace of mind to all stakeholders, i.e., event planners, principals, guests, and venue owners.",
              "Provides compensation to guests and employees for medical expenses, including bodily injuries and temporary disabilities occurring at the venue of the event.",
              "Protects the event planner in the event of public liability claims made in respect of death or bodily injuries to third parties, as well as damage to property during the event and at the venue.",
              "Eases the financial losses associated with the cancellation of events.",
              "Provides the widest insurance coverage compared to others in the market.",
            ],
          },
        ],
        keyFeatures: [
          {
            title: "Key Features",
            description:
              "The Event Insurance policy is specially designed to include features of the following classes of insurance:",
            list: [
              "Public Liability Insurance: Covers the insured’s legal liability to pay damages, claimants’ costs, and expenses arising from injuries to invited guests and third parties, resulting from and in connection with the event.",
              "Professional Liability Insurance: Provides cover for the insured in respect of any loss or liability arising from any claim or claims for breach of professional duty due to neglect, error, or omission committed in the conduct of the insured's business in its professional capacity, or by any person employed by the insured.",
              "Event Equipment Insurance: Provides cover for the loss of or damage to the insured's equipment or equipment the insured is responsible for during and in association with the event.",
              "Employee Accident Benefit Insurance: Provides compensation to employees for death or bodily injury by accident or disease arising from and in the course of the event/employment with the insured.",
              "Event Cancellation Insurance: Protects the expenses already incurred on an event against cancellation due to circumstances beyond the insured's control. These circumstances can include, but are not limited to, severe/adverse weather; riots, strikes, and labor disturbances; and unavailability of the venue due to fires, floods, etc.",
            ],
          },
        ],
      },
      // {
      //   id: 2,
      //   title: "Custodian Motor Insurance",
      //   description:
      //     "Our Motor Insurance covers Nigerian-registered private motor vehicles, commercial vehicles, motorcycles, mechanically propelled plant, or trailers. It offers the following coverage:",
      //   position: "",
      //   getQuote: formRoutes.motor_vehicle,
      //   keyFeatures: [
      //     {
      //       title: "Extensions/Benefits",
      //       description: "",
      //       list: [
      //         "A discount is given depending on the number of vehicles.",
      //         "Free cover for vehicle accessories subject to forcible entry into the car.",
      //         "Towing fee is covered up to a maximum of ₦20,000, provided your car is towed to a nearest and reasonable place for safekeeping or repair.",
      //         "Third Party Property Damage (TPPD) cover of ₦1 million is increased to ₦2 million at no additional cost.",
      //         "Cover for personal effects in the vehicle following an accident and/or theft up to ₦20,000.",
      //         "Free cover for accidental breakage and/or theft of the windscreen.",
      //         "Cover for the risk of strikes, riots, and civil commotion requires payment of an additional premium.",
      //         "Limit of medical expenses is increased to ₦20,000 in the event of an accident.",
      //       ],
      //     },
      //     {
      //       title: "Optional Cover",
      //       description: "",
      //       list: [
      //         "Vehicle Sound/Radio and Accessories: Must be specified and are covered for loss or damage.",
      //         "Out-of-Nigeria Coverage: Covers your vehicle when it is temporarily used for business or private purposes outside Nigeria but within the West African shores, provided notice is given to us and the necessary document is obtained (i.e., The Brown Card). It covers your liability to other people where an accident causes death or injury to them or damage to their property and attracts an additional premium.",
      //       ],
      //     },
      //     {
      //       title: "Additional Benefits",
      //       description: "",
      //       list: [
      //         "Emergency medical expenses in the event of an accident.",
      //         "Towing fee is covered up to a maximum limit, provided your car is towed to the nearest and most reasonable place for safekeeping or repair.",
      //         "Cover for personal effects in the vehicle following an accident and/or theft up to a maximum limit.",
      //         "Flood, risk of strikes, riots, and civil commotion—payment of an additional premium required.",
      //       ],
      //     },
      //   ],
      //   benefits: [
      //     {
      //       title: "Comprehensive Cover",
      //       description: "",
      //       list: [
      //         "Covers your vehicle for accidental damage, theft, and hijack, as well as injury to other people or damage to their property.",
      //       ],
      //     },
      //     {
      //       title: "Limited Cover",
      //       description: "",
      //       list: [
      //         "Accidental Damage & Third Party Cover: Covers your vehicle against accidental damage, as well as death or injury to other people or damage to their property. Loss resulting from fire and theft is not covered.",
      //         "Third Party Fire & Theft Cover: Covers your vehicle for damage caused by fire, theft, or hijack, as well as injury to other people or damage to their property. Accidental damage to your vehicle is not covered.",
      //         "Liability to Other People (Third Party Cover): Covers your liability to other people where an accident causes death or injury to them or damage to their property. This is a compulsory cover for every motor user in Nigeria.",
      //       ],
      //     },
      //     {
      //       title: "Optional Cover",
      //       description: "",
      //       list: [
      //         "Vehicle Sound/Radio and Accessories: Must be specified and are covered for loss or damage.",
      //         "Out-of-Nigeria Coverage: Covers your vehicle when it is temporarily used either for business or private purposes outside Nigeria but within the West African shores, provided notice is given to us and the necessary document is obtained (i.e., The Brown Card). It covers you for liability to other people where an accident causes death or injury to them or damage to their property.",
      //       ],
      //     },
      //   ],
      // },
      // {
      //   id: 3,
      //   title: "Custodian Travel Insurance",
      //   description:
      //     "Our Travel Insurance provides coverage for emergency medical expenses, financial and other losses incurred, and unforeseen events while traveling outside the country of residence.",
      //   position: "",
      //   getQuote: formRoutes.custodian_travel,
      //   benefits: [
      //     {
      //       title: "",
      //       description: "",
      //       list: [
      //         "Medical Expenses & Hospitalization Abroad: Up to 30,000 Euros with a 50 Euros deductible.",
      //         "Extension of the Beneficiary’s Stay: 80 Euros per night for a maximum of two (2) nights.",
      //         "Extension of Stay for a Close Relative: 300 Euros.",
      //         "Emergency Dental Expenses: Up to 400 Euros with a 50 Euros deductible.",
      //         "Early Return Due to the Death of a Family Member: 3,000 Euros.",
      //         "Repatriation of Mortal Remains: 1,000 Euros.",
      //         "Legal Defense Costs: 400 Euros.",
      //         "Advance for Bail: 2,000 Euros.",
      //         "Loss of Luggage: 610 Euros.",
      //         "Flight Delay Compensation: 200 Euros.",
      //         "Escort for a Beneficiary Under 15 Years: 80 Euros per night for a maximum of two (2) nights.",
      //       ],
      //     },
      //   ],
      //   keyFeatures: [
      //     {
      //       title: "",
      //       description: "",
      //       list: [],
      //     },
      //   ],
      // },
      {
        id: 4,
        title: "Marine (Boat) Owner/Yacht Insurance",
        description:
          "Our Travel Insurance provides coverage for emergency medical expenses, financial and other losses incurred, and unforeseen events while traveling outside the country of residence.",
        position: "",
        getQuote: formRoutes.marine_boat_owner,
        benefits: [
          {
            title: "",
            description:
              "Marine (Boat) Insurance covers any motorboat, ski boat, or jet ski (including the hull, motors, machinery, equipment, standard fittings, and accessories).",
            list: [
              "Accident",
              "Theft",
              "Fire, Explosion, and EarthQuake",
              "Storm, Hail, and Flood",
              "Salvage Costs",
              "Medical Expenses for injuries to people caused while using the craft",
              "Liability to other people",
            ],
          },
        ],
        keyFeatures: [
          {
            title: "",
            description: "",
            list: [],
          },
        ],
      },
      // {
      //   id: 5,
      //   title: "Custodian Home Shield",
      //   description:
      //     "Custodian Home Shield protects policyholders against loss or damage to their home contents or properties, including household contents and personal effects. The coverage also extends to the properties or personal effects of any family member normally living with the insured.",
      //   position: "",
      //   getQuote: formRoutes.home_shield,
      //   benefits: [
      //     {
      //       title: "",
      //       description:
      //         "This policy covers loss or damage caused by any of the following perils:",
      //       list: [
      //         "Fire & Special Perils Insurance: Covers damage to the insured’s building and contents due to fire, storm damage, overflow of tanks, etc.",
      //         "Burglary Insurance: Covers housebreaking (theft of any item within the building).",
      //         "Public Liability Insurance: Covers you against liability to third parties in the event of accidental injuries to visitors within your building.",
      //         "Personal Accident Insurance: Provides indemnity in the event of domestic accidents sustained in your home.",
      //       ],
      //     },
      //     {
      //       title: "Features",
      //       description: "",
      //       list: [
      //         "Annually renewable policy",
      //         "Premium: N10,000",
      //         "Fire & Special Perils Benefit: N2,000,000",
      //         "Burglary Benefit: N1,000,000",
      //         "Public Liability Benefit: i: Third Party Injury: N1,000,000. ii: Third Party Property Damage: 1,000,000",
      //         "Personal Accident Benefit i: Permanent Disability: 200,000 ii: Death Benefit: N200,000 iii:Medical Expenses: N100,000",
      //       ],
      //     },
      //   ],
      //   keyFeatures: [],
      // },
      {
        id: 6,
        title: "Personal Accident Insurance",
        description:
          "Personal Accident Insurance covers you and any member of your household for accidental injuries causing:",
        position: "",
        getQuote: formRoutes.personal_accident,
        benefits: [
          {
            title: "",
            description: "",
            list: [
              "Death",
              "Permanent or temporary disability",
              "Selected medical expenses",
              "The nominated beneficiaries are covered anywhere in the world, and no excess is payable for any claims.",
            ],
          },
        ],
        keyFeatures: [],
      },
      {
        id: 7,
        title: "Home Owners Insurance",
        description:
          "House Owner Insurance covers the immovable structures on your property, including all permanent fixtures, fittings, and improvements such as walls, roofs, swimming pools, gates, gate motors, underground pipes, and cables.",
        position: "",
        getQuote: formRoutes.home_owners,
        benefits: [
          {
            title: "",
            description: "Buildings Cover includes protection against:",
            list: [
              "Fire, explosion, and earthquake,",
              "Acts of nature (wind, thunder, lightning, storm, hail, flood, and snow),",
              "Bursting and overflowing of geysers and water pipes,",
              "Theft accompanied by actual forcible and violent breaking into or out of a building or any attempt thereat. Note: In respect of Contents, the insurance does not cover loss or damage caused by theft occurring while the building is unoccupied,",
              "Impact",
              "Accidental damage to glass",
              "Alterations and additions",
              "Subsidence, heave and land slip",
              "Temporary accommodation",
              "Liability to other people (including domestic employees)",
            ],
          },
          {
            title: "Optional Cover",
            description: "",
            list: ["Theft cover for holiday homes"],
          },
          {
            title: "Benefits:",
            description: "",
            list: [
              "Additional expenses for alternative accommodation and loss of rent are payable to the Insured if the buildings are rendered uninhabitable by an insured peril, limited to a certain percentage of the total sum insured for buildings and contents.",
            ],
          },
        ],
        keyFeatures: [
          {
            title: "",
            description: "",
            list: [],
          },
        ],
      },
      {
        id: 8,
        title: "Personal All Risks Insurance",
        getQuote: formRoutes.personal_all_risks,
        description:
          "Please contact us to learn more about Personal All Risks Insurance.",
        position: "",
        benefits: [
          {
            title: "",
            description: "",
            list: [],
          },
        ],
        keyFeatures: [
          {
            title: "",
            description: "",
            list: [],
          },
        ],
      },
      // {
      //   id: 8,
      //   title: "Custodian Safety Plus Plan",
      //   description:
      //     "Accidents do happen; when they do, victims are less burdened when they don't have to worry about the medical expenses that follow.",
      //   position: "",
      //   getQuote: formRoutes.safety_plus,
      //   benefits: [
      //     {
      //       title: "",
      //       description:
      //         "The Custodian Safety Plus Plan is a Personal Accident Insurance policy that provides financial assistance to the insured in the event of an accident. The policy covers death, permanent disablement, and medical expenses resulting from an accident.",
      //       list: [],
      //     },
      //   ],
      //   keyFeatures: [
      //     {
      //       title: "Features",
      //       description: "",
      //       list: [
      //         "Annually renewable policy•",
      //         "Premium per unit: N1,000.00•",
      //         "Minimum of one unit and a maximum of five units",
      //         "Permanent disability benefit per unit: N400,000.00•",
      //         "Death benefit per unit: N200,000.00•",
      //         "Limit for medical expenses: N30,000.00",
      //       ],
      //     },
      //   ],
      // },
    ],
  },
];
