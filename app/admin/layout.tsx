import { SidebarProvider } from "@/components/ui/sidebar"
import Sidebar from "@/components/Sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar />
      <main className="flex flex-col w-full h-screen overflow-hidden">
        {children}
      </main>
    </SidebarProvider>
  )
}
