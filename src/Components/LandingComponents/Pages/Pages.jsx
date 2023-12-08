import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from "../../SharedComponents/Layouts/Landing";
import About from "./About";
import Contact from "./Contact";
import Team from "./Team";
import LoginPage from "./LoginPage";
import LandHome from "../LandHome/LandHome";
import RegisterPage from "./RegisterPage";
import AppLayout from '../../SharedComponents/Layouts/AppLayout';
import Main from '../../MainAppComponents/MainSection/Main';
import Reset from '../../LandingComponents/Pages/Reset'
function Pages() {
  return (
    <>
    <Routes>
        <Route path="" element={<Landing></Landing>}>
        <Route path="/" element={<LandHome></LandHome>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/reset" element={<Reset></Reset>}></Route>
        <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/team" element={<Team></Team>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        </Route>

        <Route path="/main" element={<AppLayout></AppLayout>} >
          <Route path='/main/' element={<Main></Main>}></Route>
         </Route>
   </Routes>
    </>

  )
}

export default Pages