import { Button } from "./ui/Button";

export default function AppHeader() {
  return(
    <div className="relative overflow-hidden flex flex-col items-end w-full h-fit p-5 shadow-md z-40 bg-sky-500">
      {/* <h1 className="text-lg font-semibold">Dashboard</h1> */}
      <Button>Logout</Button>
    </div>
  )
}