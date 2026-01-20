import { createRoute } from '@tanstack/react-router'
import { Route as RootRoute } from '../__root'
import TablePage from '../../pages/Table'

export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: 'table',
  component: TablePage,
})
