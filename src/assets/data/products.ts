import { ComponentType } from "react";
import { FaCarCrash } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import { GiMiniSubmarine } from "react-icons/gi";
import { GiLifeBar } from "react-icons/gi";
import { FcDisclaimer } from "react-icons/fc";
import { GiSuspensionBridge } from "react-icons/gi";
import { SiYourtraveldottv } from "react-icons/si";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaDownLeftAndUpRightToCenter } from "react-icons/fa6";
import { FaFireExtinguisher } from "react-icons/fa6";
import { GiPublicSpeaker } from "react-icons/gi";
import { MdOutlineHealthAndSafety } from "react-icons/md";

type products = {
  title: string;
  writeUp: string;
  icons: ComponentType<any>;
};

export const productsData: products[] = [
  {
    title: "Auto Insurance",
    writeUp:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptatibus! Delectus explicabo incidunt ipsa nostrum dolore nemo mollitia a repudiandae minima perferendis, magnam temporibus natus debitis, et ut facilis possimus.",
    icons: FaCarCrash,
  },
  {
    title: "Custodian Home Shield",
    writeUp:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptatibus! Delectus explicabo incidunt ipsa nostrum dolore nemo mollitia a repudiandae minima perferendis, magnam temporibus natus debitis, et ut facilis possimus.",
    icons: GiHomeGarage,
  },
  {
    title: "Marine Insurance",
    writeUp:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptatibus! Delectus explicabo incidunt ipsa nostrum dolore nemo mollitia a repudiandae minima perferendis, magnam temporibus natus debitis, et ut facilis possimus.",
    icons: GiMiniSubmarine,
  },
  {
    title: "Life Insurance",
    writeUp:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptatibus! Delectus explicabo incidunt ipsa nostrum dolore nemo mollitia a repudiandae minima perferendis, magnam temporibus natus debitis, et ut facilis possimus.",
    icons: GiLifeBar,
  },
  {
    title: "Make A Claim",
    writeUp:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptatibus! Delectus explicabo incidunt ipsa nostrum dolore nemo mollitia a repudiandae minima perferendis, magnam temporibus natus debitis, et ut facilis possimus.",
    icons: FcDisclaimer,
  },
  {
    title: "Pensions",
    writeUp:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptatibus! Delectus explicabo incidunt ipsa nostrum dolore nemo mollitia a repudiandae minima perferendis, magnam temporibus natus debitis, et ut facilis possimus.",
    icons: GiSuspensionBridge,
  },
  {
    title: "Travel Insurance",
    writeUp:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptatibus! Delectus explicabo incidunt ipsa nostrum dolore nemo mollitia a repudiandae minima perferendis, magnam temporibus natus debitis, et ut facilis possimus.",
    icons: SiYourtraveldottv,
  },
  {
    title: "Wealth Management",
    writeUp:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptatibus! Delectus explicabo incidunt ipsa nostrum dolore nemo mollitia a repudiandae minima perferendis, magnam temporibus natus debitis, et ut facilis possimus.",
    icons: GiTakeMyMoney,
  },
  {
    title: "Care Center",
    writeUp:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptatibus! Delectus explicabo incidunt ipsa nostrum dolore nemo mollitia a repudiandae minima perferendis, magnam temporibus natus debitis, et ut facilis possimus.",
    icons: FaDownLeftAndUpRightToCenter,
  },
  {
    title: "Personal Accident",
    writeUp:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptatibus! Delectus explicabo incidunt ipsa nostrum dolore nemo mollitia a repudiandae minima perferendis, magnam temporibus natus debitis, et ut facilis possimus.",
    icons: FaFireExtinguisher,
  },
  {
    title: "Public Liability Plan",
    writeUp:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptatibus! Delectus explicabo incidunt ipsa nostrum dolore nemo mollitia a repudiandae minima perferendis, magnam temporibus natus debitis, et ut facilis possimus.",
    icons: GiPublicSpeaker,
  },
  {
    title: "Safety Plus Plan",
    writeUp:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptatibus! Delectus explicabo incidunt ipsa nostrum dolore nemo mollitia a repudiandae minima perferendis, magnam temporibus natus debitis, et ut facilis possimus.",
    icons: MdOutlineHealthAndSafety,
  },
];
