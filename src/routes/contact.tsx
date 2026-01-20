import { createRoute } from '@tanstack/react-router'
import { Route as RootRoute } from './__root'
import Contact from '../pages/Contact'

export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: 'contact',
  component: Contact,
})
