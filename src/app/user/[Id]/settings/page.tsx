'use client';
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react"
import { UserSidebar } from "../page";
import { SidebarMenu, SidebarMenuItem, SidebarMenuSkeleton } from "@/components/ui/sidebar";

export default function Settings(){
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log({ name, email, password });
  // }

  // return (
  //   <div className="w-full h-full flex items-center justify-center">
  //     <form onSubmit={handleSubmit}>
  //       <input
  //         type="text"
  //         name="name"
  //         id="name"
  //         value={name}
  //         onChange={(e) => setName(e.target.value)}
  //       />
  //       <input
  //         type="email"
  //         name="email"
  //         id="email"
  //         value={email}
  //         onChange={(e) => setEmail(e.target.value)}
  //       />
  //       <input
  //         type="password"
  //         name="password"
  //         id="password"
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //       />
  //       <button type="submit">Submit</button>
  //     </form>
  //   </div>
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
            <SidebarMenuSkeleton showIcon />
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    );

  return (
    <UserSidebar>
      <p>Welcome, setting user {id}</p>
    </UserSidebar>
  );
}
