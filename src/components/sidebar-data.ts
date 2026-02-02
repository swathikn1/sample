import DashboardIcon from "../assets/SidebarImage/dashboard.svg"
import MenuIcon from "../assets/SidebarImage/menu.svg"
import StaffIcon from "../assets/SidebarImage/staff.svg"
import InventoryIcon from "../assets/SidebarImage/inventory.svg"
import ReportsIcon from "../assets/SidebarImage/reports.svg"
import OrderIcon from "../assets/SidebarImage/order.svg"
import ReserveIcon from "../assets/SidebarImage/reserve.svg"

export const sidebarItems = [
  {
    title: "Dashboard",
    to:"/",
    icon:DashboardIcon,
  },
  {
    title: "Menu",
    to: "/menu",
    icon: MenuIcon,
  },
  {
    title: "Staff",
    to: "/staff",
    icon: StaffIcon,
  },
  {
    title: "Inventory",
    to: "/inventory",
    icon: InventoryIcon,
  },
  {
    title: "Reports",
    to: "/reports",
    icon: ReportsIcon,
  },
  {
    title: "Order/Table",
    to:'/order',
    icon:OrderIcon
  },
  {
    title:"Reservation",
    to:'/reserve',
    icon: ReserveIcon
  },
  {
    title:"Profile",
    to:'/profile',
    icon:DashboardIcon
  }
]
