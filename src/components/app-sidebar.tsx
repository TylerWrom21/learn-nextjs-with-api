// "use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { userItems } from "@/app/user/[id]/page"
import { adminItems } from "@/app/admin/[id]/page"
import { useParams } from "next/navigation";

// Menu items.
// const items = [
//   {
//     title: "Dashboard",
//     url: "/user/[Id]",
//     icon: Home,
//   },
//   {
//     title: "Inboxs",
//     url: "/user/[Id]/inboxs",
//     icon: Inbox,
//   },
//   {
//     title: "Products",
//     url: "/user/[Id]/products",
//     icon: Box,
//   },
//   {
//     title: "Carts",
//     url: "/user/[Id]/carts",
//     icon: ShoppingCart,
//   },
//   {
//     title: "Search",
//     url: "/user/[Id]/search",
//     icon: Search,
//   },
//   {
//     title: "Settings",
//     url: "/user/[Id]/settings",
//     icon: Settings,
//   },
// ]

export function AppUserSidebar() {
  const { id } = useParams<{ id: string }>();
  const items = userItems(id);
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
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
    </Sidebar>
  )
}
export function AppAdminSidebar() {
  const { id } = useParams<{ id: string }>();
  const items = adminItems(id);
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
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
    </Sidebar>
  )
}