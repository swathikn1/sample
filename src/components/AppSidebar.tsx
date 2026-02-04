import { Link, useRouterState } from "@tanstack/react-router"
import { sidebarItems } from "./sidebar-data"
import { useTranslation } from "react-i18next"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../components/ui/sidebar"


export function AppSidebar() {
  const { location } = useRouterState()
  const { t } = useTranslation()

  return (
    <Sidebar className="text-white border-neutral-800 bg-black w-[138px]">
      <SidebarContent className="flex items-center bg-[#292C2D] rounded-br-[30px] rounded-tr-[30px] ">
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center justify-center text-[#FAC1D9] font-semibold w-200px h-[30px] size-[">
            COSYPOS
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="flex items-center font-normal">
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="rounded-xl data-[active=true]:bg-[#FAC1D9] w-[117px] h-[70px]"
                    asChild
                    isActive={location.pathname === item.to}>
                    <Link to={item.to} className="flex flex-col h-15 w-100 items-center ">
                      <img src={item.icon}
                        className="h5 w-5"/>
                      <span>{t(item.title)}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}