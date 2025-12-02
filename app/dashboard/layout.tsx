import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/Components/ui/sidebar"
import { AppSidebar } from "@/Components/Appsidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex items-center gap-2 p-2">
            <SidebarTrigger />
            <span className="text-sm">Dashboard</span>
          </header>
          {children}
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}