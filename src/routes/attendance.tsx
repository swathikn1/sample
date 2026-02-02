import { createFileRoute } from '@tanstack/react-router'
import Attendance from '../pages/StaffPage/Attendance'

export const Route = createFileRoute('/attendance')({
  component: Attendance,
})

