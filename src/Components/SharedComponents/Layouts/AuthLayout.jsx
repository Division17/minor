import React from "react";
import { Outlet } from "react-router-dom";
import AuthHeader from "../../LandingComponents/Header/AuthHeader";
import Footer from "../../LandingComponents/footer/Footer";
const Auth = () => {
  return (
    <>
      <AuthHeader></AuthHeader>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Auth;
