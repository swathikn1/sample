import { createRoute } from '@tanstack/react-router'
import { Route as RootRoute } from './__root'
import Home from '/Users/ts-swathi.kn/Desktop/js/react-app/src/pages/Home.tsx'

export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: '/',
  component: Home,
})
