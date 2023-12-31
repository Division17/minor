import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../LandingComponents/footer/Footer";
import LandHeader from "../../LandingComponents/Header/LandHeader";
const Land = () => {
  return (
    <>
      <LandHeader></LandHeader>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Land;
