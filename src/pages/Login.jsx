import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'

const Login = () => {
    const {loginWithRedirect} = useAuth0();

    useEffect(()=>{
        loginWithRedirect();

    },[])


  return (
    <div>Redirecting to login....</div>
  )
}

export default Login