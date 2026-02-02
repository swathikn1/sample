import { Outlet } from "@tanstack/react-router"
import { AppSidebar } from "../components/AppSidebar"
import { SidebarProvider } from "../components/ui/sidebar"

export default function AppLayout() {
  return (  
  <div className="bg-black h-min-screen w-full">
    <SidebarProvider>
      <AppSidebar />
      <main>
        <Outlet />
      </main>
    </SidebarProvider>
    </div>
  )
}
