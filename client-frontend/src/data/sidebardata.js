import { MdDashboard } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { BsPlusSquareFill } from "react-icons/bs";
import { MdHistory } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";
import { IoIosSettings } from "react-icons/io";
export const SidebarMenus = [
  {
    category: "General",
    menu_name: [
      {
        name: "Dashboard",
        icon: MdDashboard,
      },
      {
        name: "History",
        icon: MdHistory,
      },
      {
        name: "Calendar",
        icon: FaCalendarAlt,
      },
      {
        name: "Appointments",
        icon: BsPlusSquareFill,
      },
      {
        name: "Statistics",
        icon: ImStatsBars,
      },
    ],
  },
  {
    category: "Tools",
    menu_name: [
      {
        name: "Chat",
        icon: IoChatbubbleEllipsesOutline,
      },
      {
        name: "Support",
        icon: FaPhone,
      },
    ],
  },

  {
    name: "Setting",
    icon: IoIosSettings,
  },
];
