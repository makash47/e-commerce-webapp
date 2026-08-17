import React from 'react'
import { createBrowserRouter, Router, RouterProvider } from 'react-router'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Products from './pages/Products'
import AppLayout from './Layout/AppLayout'
import PageNotFound from './pages/PageNotFound'

const App = () => {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
      path:"/products",
      element:<Products/>
    },
    {
      path:"/cart",
      element:<Cart/>
    },
    {
      path:"*",
      element:<PageNotFound/>

    }
      ]
    },
    
  ])

  return (
    <>
    <RouterProvider router = {router}/>
    </>
  )
}

export default App