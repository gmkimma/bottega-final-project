import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './components/pages/home'
import Login from './components/pages/login'
import NoMatch from './components/pages/no-match'
import './style/main.css'

const router = createBrowserRouter([
  {
    element: <Home />,
    path: '/',
    errorElement: <NoMatch />
  },
  { element: <Login />, path: '/login', errorElement: <NoMatch /> }
])

export default function App () {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
