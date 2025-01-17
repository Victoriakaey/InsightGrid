import { RxHamburgerMenu } from "react-icons/rx";
import { MdHome } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { GrDocumentTime } from "react-icons/gr";
import { IoIosCloudUpload, IoMdSettings } from "react-icons/io";
import { MdHistory } from "react-icons/md";
import { LuUpload } from "react-icons/lu";
import EditVariablesDrawer from "@/app/components/dashboard/editVariables/editVariableDrawer";

export const sidebarItems = [
  { id: "menu", icon: <RxHamburgerMenu /> },
  { id: "home", icon: <MdHome /> },
  { id: "notification", icon: <IoNotifications /> },
  { id: "document", icon: <GrDocumentTime /> },
  { id: "upload", icon: <IoIosCloudUpload /> },
  { id: "settings", icon: <IoMdSettings /> },
];

export const navbarItems = [
  { id: "charging-stations", title: "Charging Stations" },
  { id: "fleet-sizing", title: "Fleet Sizing" },
  { id: "parking", title: "Parking" },
];

export const dashboardDescriptionItems = [
  { id: "history", buttonItem: <MdHistory className="text-2xl" /> },
  {
    id: "edit-variables",
    buttonItem: <EditVariablesDrawer />,
  },
  { id: "upload", buttonItem: <LuUpload className="text-xl" /> },
];

export const bestScenarioResultsItems = [
  {
    id: 1,
    content:
      "The best found configuration based on profit is characterized by 11 zones (max) with charging stations and 48 total number of poles.",
  },
  {
    id: 2,
    content:
      "The best found configuration based on satisfied demand is characterized by 11 zones (max) with charging stations and 48 total number of poles.",
  },
];

export const indicatorCardItems = [
  {
    id: 1,
    title: "Infrastructure Units",
    description: "This describes variable two and what the shown data means.",
    data: "€421.07",
  },
  {
    id: 2,
    title: "Charging Growth",
    description: "This describes variable two and what the shown data means.",
    data: "33.07",
  },
  {
    id: 3,
    title: "Localization change",
    description: "This describes variable two and what the shown data means.",
    data: "21.9%",
  },
  {
    id: 4,
    title: "Fleet growth",
    description: "This describes variable two and what the shown data means.",
    data: "7.03%",
  },
];

export const categoryItems = [
  {
    id: 1,
    variables: ["Carbon 1", "Co2 Distribution", "Fleet sizing"],
  },
  {
    id: 2,
    variables: [
      "Parking Rate",
      "Border Rate",
      "Request rate",
      "Variable 1",
      "Variable 1",
      "Variable 1",
    ],
  },
  {
    id: 3,
    variables: ["Variable 1", "Variable 1", "Variable 1"],
  },
  {
    id: 4,
    variables: ["Carbon 1", "Co2 Distribution", "Fleet sizing"],
  },
  {
    id: 5,
    variables: [
      "Parking Rate",
      "Border Rate",
      "Request rate",
      "Variable 1",
      "Variable 1",
      "Variable 1",
    ],
  },
  {
    id: 6,
    variables: ["Variable 1", "Variable 1", "Variable 1"],
  },
];

// hardcoded only for demo purposes, if more data, then each element from the variables list in categoryItems should have a corresponding description
export const hoverDescription =
  "But what truly sets Switch apart is its versatility. It can be used as a scooter, a bike, or even a skateboard, making it suitable for people of all ages. Whether you're a student, a professional, or a senior citizen, Switch adapts to your needs and lifestyle.";
