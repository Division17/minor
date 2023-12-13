import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import Home from "./Home";
import RegisterPage from "./RegisterPage";
import AppLayout from "../../SharedComponents/Layouts/AppLayout";
import Main from "../../MainAppComponents/MainSection/Main";
import Reset from "../../LandingComponents/Pages/Reset";
import Land from "../../SharedComponents/Layouts/Land";
import AuthLayout from "../../SharedComponents/Layouts/AuthLayout";
function Pages() {
  return (
    <>
      <Routes>
        <Route path="" element={<Land></Land>}>
          <Route path="/" element={<Home></Home>}></Route>
        </Route>

        <Route path="/auth" element={<AuthLayout></AuthLayout>}>
          <Route path="/auth/login" element={<LoginPage></LoginPage>}></Route>
          <Route
            path="/auth/register"
            element={<RegisterPage></RegisterPage>}
          ></Route>
          <Route path="/auth/reset" element={<Reset></Reset>}></Route>
        </Route>

        <Route path="/main" element={<AppLayout></AppLayout>}>
          <Route path="/main/" element={<Main></Main>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default Pages;
