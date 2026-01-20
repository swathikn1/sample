import { createRouter } from '@tanstack/react-router'

import { Route as RootRoute } from './routes/__root'
import { Route as IndexRoute } from './routes/index'
import { Route as AboutRoute } from './routes/about'
import { Route as ServiceRoute} from './routes/service'
import { Route as ContactRoute } from './routes/contact'
import { Route as TableRoute } from "./routes/table/index";
import {Route as TableDetailRoute} from "./routes/table/$id/index"


const routeTree = RootRoute.addChildren([
  IndexRoute,
  AboutRoute,
  ServiceRoute,
  ContactRoute,
  TableRoute.addChildren([
    TableDetailRoute,
]),
])

export const router = createRouter({
  routeTree,
})
