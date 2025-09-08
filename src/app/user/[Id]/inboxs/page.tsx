'use client';

import { useRouter } from "next/navigation";
import { UserSidebar } from "../page";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SidebarMenu, SidebarMenuItem, SidebarMenuSkeleton } from "@/components/ui/sidebar";

export default function Inboxs(){
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
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
            <SidebarMenuSkeleton showIcon/>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    );

  return (
    <UserSidebar>
      <p>Welcome, inbox user {id}</p>
    </UserSidebar>
  );
}