import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const LogoutButton = () => {
    const {logout} = useAuth0();
  return (
   <>
   <button className='bg-indigo-500 rounded-md p-1 text-gray-100'
   onClick={() =>logout(
    {logoutParams:
        {returnTo: window.location.origin}
            })
        }>
    Logout
   </button>
   </>
  )
}

export default LogoutButton