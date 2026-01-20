import { createRoute } from '@tanstack/react-router'
import { Route as RootRoute } from './__root'
import Service from '/Users/ts-swathi.kn/Desktop/js/react-app/src/pages/Service.tsx'

export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: 'service',
  component: Service,
})
