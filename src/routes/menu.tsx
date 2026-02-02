import { createFileRoute } from '@tanstack/react-router'
import  Menu  from "../pages/MenuPage/Menu"

export const Route = createFileRoute('/menu')({
  component:Menu,
})
