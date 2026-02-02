import { createFileRoute } from "@tanstack/react-router"
import Dashboard from "../pages/DashboardPage/Dashboard"

export const Route = createFileRoute("/")({
  component: Dashboard,


})
