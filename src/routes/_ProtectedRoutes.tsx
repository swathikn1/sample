import {createFileRoute,redirect} from "@tanstack/react-router";
import {isAuthenticated} from "../api/auth";


export const Route = createFileRoute('/_ProtectedRoutes')({
  beforeLoad: async ({ location }) => {
    if (!isAuthenticated()) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      })
    }
  },
})