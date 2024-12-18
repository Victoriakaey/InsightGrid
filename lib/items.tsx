import { RxHamburgerMenu } from "react-icons/rx";
import { MdHome } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { GrDocumentTime } from "react-icons/gr";
import { IoIosCloudUpload, IoMdSettings } from "react-icons/io";
import { BsLightningFill } from "react-icons/bs";
import { MdHistory } from "react-icons/md";
import { LuUpload } from "react-icons/lu";
import EditVariablesDrawer from "@/app/components/dashboard/editVariablesDrawer";

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
