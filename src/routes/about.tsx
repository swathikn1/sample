import { createRoute } from '@tanstack/react-router'
import { Route as RootRoute } from './__root'
import About from '/Users/ts-swathi.kn/Desktop/js/react-app/src/pages/About.tsx'

export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: 'about',
  component: About,
})
