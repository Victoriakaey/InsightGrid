import { RxHamburgerMenu } from "react-icons/rx";
import { MdHome } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { GrDocumentTime } from "react-icons/gr";
import { IoIosCloudUpload, IoMdSettings } from "react-icons/io";
import { BsLightningFill } from "react-icons/bs";
import { MdHistory } from "react-icons/md";
import { LuUpload } from "react-icons/lu";

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
    buttonItem: <p className="font-light px-1">Edit Variables</p>,
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
