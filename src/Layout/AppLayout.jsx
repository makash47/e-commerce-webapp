import React from 'react'

import { Outlet } from 'react-router-dom'
import ScrollToTop from '../components/UI/ScrollToTop'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const AppLayout = () => {
  return (
    <>
    <ScrollToTop/>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default AppLayout