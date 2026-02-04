import DashboardIcon from "../assets/SidebarImage/dashboard.svg"
import MenuIcon from "../assets/SidebarImage/menu.svg"
import StaffIcon from "../assets/SidebarImage/staff.svg"
import InventoryIcon from "../assets/SidebarImage/inventory.svg"
import ReportsIcon from "../assets/SidebarImage/reports.svg"
import OrderIcon from "../assets/SidebarImage/order.svg"
import ReserveIcon from "../assets/SidebarImage/reserve.svg"

export const sidebarItems = [
  {
    title: "sidebar.dashboard",
    to:"/",
    icon:DashboardIcon,
  },
  {
    title: "sidebar.menu",
    to: "/menu",
    icon: MenuIcon,
  },
  {
    title: "sidebar.staff",
    to: "/staff",
    icon: StaffIcon,
  },
  {
    title: "sidebar.inventory",
    to: "/inventory",
    icon: InventoryIcon,
  },
  {
    title: "sidebar.reports",
    to: "/reports",
    icon: ReportsIcon,
  },
  {
    title: "sidebar.order",
    to:'/order',
    icon:OrderIcon
  },
  {
    title:"sidebar.reserve",
    to:'/reserve',
    icon: ReserveIcon
  },
  {
    title:"sidebar.profile",
    to:'/profile',
    icon:DashboardIcon
  }
]
