import { createFileRoute, useNavigate, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { isAuthenticated, login } from "../api/auth";
import { loginUser } from "../api/auth";
import { toast } from "sonner"

export const Route=createFileRoute("/Login")({
  beforeLoad:()=>{
    if(isAuthenticated()){
      throw redirect({
        to:'/home',
      });
    }
  },
  component:Login,
});

function Login(){
  const navigate = useNavigate();
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");

  const handleSubmit=async(e:React.FormEvent)=>{
    e.preventDefault();

    try {
      const data=await loginUser(username,password);
      login(data.accessToken);
      sessionStorage.setItem("refreshToken",data.accessToken)
      toast.success("Login successful")
      navigate({to:"/home"});
    }
    catch(err:any) {
      setError(err.message);
    }
  };

  return(
    <div className="min-h-screen flex items-center justify-center bg-gray-500">
      <form onSubmit={handleSubmit} className="p-6 bg-white ">
        <h1 className="text-xl text-center font-bold mb-4">Login</h1>

        {error && <p className="text-red-500">{error}</p>}

        <input className="border p-2 mb-3 w-full" placeholder="Username" value={username}
          onChange={(e)=>setUsername(e.target.value)}/>

        <input type="password" className="border p-2 mb-4 w-full" placeholder="Password" value={password}
          onChange={(e)=>setPassword(e.target.value)}/>

        <button className="bg-blue-500 text-white px-4 py-2 ">Login</button>
      </form>
    </div>
  );
}
