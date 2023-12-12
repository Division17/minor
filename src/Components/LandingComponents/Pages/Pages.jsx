import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from "./LoginPage";
import LandHome from "../LandHome/LandHome";
import LandLayout from "../../SharedComponents/Layouts/LandLayout"
import RegisterPage from "./RegisterPage";
import AppLayout from '../../SharedComponents/Layouts/AppLayout';
import Main from '../../MainAppComponents/MainSection/Main';
import Reset from '../../LandingComponents/Pages/Reset'
function Pages() {
  return (
    <>
    <Routes>
        <Route path="" element={<LandLayout></LandLayout>}>
        <Route path="/" element={<LandHome></LandHome>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/reset" element={<Reset></Reset>}></Route>
        <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
        </Route>

        <Route path="/main" element={<AppLayout></AppLayout>} >
          <Route path='/main/' element={<Main></Main>}></Route>
         </Route>
   </Routes>
    </>

  )
}

export default Pages