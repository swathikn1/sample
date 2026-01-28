import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./routes/Login";
import Home from "./routes/_ProtectedRoutes/home";
import ProtectedRoute from "./routes/ProtectedRoute";
import { Toaster } from "sonner";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={ <ProtectedRoute><Home/> </ProtectedRoute>}/>
      </Routes>
      <Toaster richColors position="top-center"/>
    </BrowserRouter>
  );
}
