import { createFileRoute } from '@tanstack/react-router'
import Staff from '../pages/StaffPage/Staff'

export const Route = createFileRoute('/staff')({
  component: Staff,
})


