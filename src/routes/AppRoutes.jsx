import { createBrowserRouter } from "react-router";
import AppLayout from "../Layout/AppLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import PageNotFound from "../pages/PageNotFound";
import Favourite from "../pages/Favourite";
import SingleProduct from "../pages/SingleProduct";
import About from "../pages/About";
import Checkout from "../pages/Checkout";
import ProtectRoute from "../components/auth/ProtectRoute";
import Login from "../pages/Login";

export const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
         {
          path:"/about",
          element:<About/>
        },
        {
      path:"/products",
      element:<Products/>
    },
    {
      path:"/products/:slug",
      element:<SingleProduct/>
    },
    {
      path:"/cart",
      element:<Cart/>
    },
    {
        path:"/favourite",
        element:<Favourite/>
    },
    {
      path : "/checkout",
      element:
      <ProtectRoute>
      <Checkout/>
      </ProtectRoute>
    },
   
    {
      path:"*",
      element:<PageNotFound/>

    },
    {
      path:"/login",
      element:<Login/>
    }
      ]
    },
    
  ])
