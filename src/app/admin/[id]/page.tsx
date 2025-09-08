'use client';

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuSkeleton, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppAdminSidebar } from "@/components/app-sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Box, Home, Inbox, Moon, Search, Settings, ShoppingCart, Sidebar, Sun, User } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

export function adminItems(id: string) {
  return [
    {
      title: "Dashboard",
      url: `/admin/${id}`,
      icon: Home,
    },
    {
      title: "Users",
      url: `/admin/${id}/users`,
      icon: User,
    },
    {
      title: "Search",
      url: `/admin/${id}/search`,
      icon: Search,
    },
    {
      title: "Settings",
      url: `/admin/${id}/settings`,
      icon: Settings,
    },
  ];
}

export function AdminSidebar({ children }: { children: React.ReactNode }) {
  const { setTheme } = useTheme();
  return (
    <SidebarProvider>
      <AppAdminSidebar />
      <main className="w-full">
        <SidebarHeader className="w-full flex gap-5 flex-row items-center">
          <SidebarTrigger />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer">Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer">Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer">System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarHeader>
        <div className="p-2 w-full flex items-start">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}

export default function Admin() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const { admin } = useParams<{ admin: string }>();
  console.log(admin, id);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUserId = localStorage.getItem("userId");

    if (!token || storedUserId !== id) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [router, id]);

  if (loading)
    return (
      <SidebarMenu>
        {Array.from({ length: 5 }).map((_, index) => (
          <SidebarMenuItem key={index}>
            <SidebarMenuSkeleton showIcon />
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    );

  return (
    <AdminSidebar>
      <p>Welcome, admin {id} {admin}</p>
    </AdminSidebar>
  );
}