import { Outlet } from 'react-router-dom'
import React from 'react'
import LandHeader from "../../LandingComponents/Header/LandHeader"
import Footer from '../../LandingComponents/footer/Footer'
const Landlayout = () => {
  return (
      <>
        <LandHeader></LandHeader>
        <Outlet></Outlet>
        <Footer></Footer>
      </>
  )
}

export default Landlayout