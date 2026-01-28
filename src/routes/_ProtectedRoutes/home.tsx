import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { logout } from "../../api/auth";

export const Route=createFileRoute("/_ProtectedRoutes/home")({
  component:Home,
});

function Home() {
  const navigate=useNavigate();
  const handleLogout=()=>{
    logout();
    navigate({to:"/login"});
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2">Logout</button>
    </div>
  );
}
