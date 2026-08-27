import React from 'react'
import { NavLink } from 'react-router';

const PageNavigation = ({title,category}) => {
    // const {category,title} = data;
  return (
    <>
    <div className='border-b border-gray-300 py-5'>
    <NavLink to="/">
    Home
    </NavLink>/{category}/{title}
    </div>
    </>
  )
}

export default PageNavigation