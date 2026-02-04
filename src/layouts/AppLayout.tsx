import { Outlet } from "@tanstack/react-router"
import { AppSidebar } from "../components/AppSidebar"
import { SidebarProvider } from "../components/ui/sidebar"
import LanguageSwitcher from "../components/LanguageSwitcher"

export default function AppLayout() {
  return (  
  <div className="bg-black h-min-screen w-full">
    <SidebarProvider>
      <AppSidebar />
      <main>
         <div>
          <LanguageSwitcher/>
          </div>
        <Outlet />
      </main>
    </SidebarProvider>
    </div>
  )
}
