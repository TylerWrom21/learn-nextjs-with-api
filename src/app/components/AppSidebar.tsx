import Avatar from "./ui/Avatar";
import { Button } from "./ui/Button";

export default function AppSidebar() {
  return(
    <div className="relative flex flex-col items-center w-fit justify-between h-screen p-5 shadow-md z-50 bg-blue-500">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-lg font-semibold">Dashboard</h1>
        <div className="flex flex-col">
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
        </div>
      </div>
      {/* <Button>Logout</Button> */}
      <Avatar/>
    </div>
  )
}