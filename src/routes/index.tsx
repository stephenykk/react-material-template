import { useRoutes } from 'react-router'
import { lazy } from 'react'

import Layout from '@/layout/Layout'

import Home from '@/views/Home/Home'
import ErrorPage from '@/views/ErrorPage/ErrorPage'
const Login = lazy(() => import('@/views/Login/Login'))

const ROUTE_BASE = import.meta.env.NAIM_ROUTER_BASE || '/'
const routesConfig = [
  {
    path: ROUTE_BASE,
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]

function RouteList() {
  const element = useRoutes(routesConfig)
  return element
}

export default RouteList
