import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import Sidebar from "@/components/Sidebar"
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar />
      <main className="flex flex-col w-full h-screen overflow-hidden">
        {children}
        <div className="fixed bottom-0 p-4">
          <SidebarTrigger variant="outline" size="icon" />
        </div>
      </main>
    </SidebarProvider>
  )
}
