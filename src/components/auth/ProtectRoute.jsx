import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import Loader from '../UI/Loader'
import { Navigate } from 'react-router'

const ProtectRoute = ({children}) => {
   const {isAuthenticated,isLoading} = useAuth0()

   if(isLoading) return <Loader/>
   if(!isAuthenticated) return <Navigate to="/login" />
  return children;
}

export default ProtectRoute