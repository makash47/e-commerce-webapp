import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const LoginButton = () => {
    const {loginWithRedirect} = useAuth0()
  return (
    <>
    <button onClick={()=>loginWithRedirect()}
    className='bg-indigo-500 rounded-md p-1 text-gray-100'>
        Login
    </button>
    </>
  )
}

export default LoginButton