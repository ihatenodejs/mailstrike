import {
  Sidebar as ScnSidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { TbMail, TbLayoutDashboard } from "react-icons/tb"

const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: TbLayoutDashboard,
  },
]

export default function Sidebar() {
  return (
    <ScnSidebar>
      <SidebarHeader>
        <div className="flex justify-center items-center mt-4">
          <TbMail size={24} className="mr-2" />
          <h1 className="text-2xl font-bold text-foreground">MailStrike</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>System</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </ScnSidebar>
  )
}