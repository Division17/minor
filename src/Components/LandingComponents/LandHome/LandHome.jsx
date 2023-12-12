import React from "react";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Team from "../Pages/Team";
import LandHeader from "../Header/LandHeader";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import Img from "../../../assets/images/Creative team-bro.svg";
function LandHome() {
  return (
    <div>
      <LandHeader></LandHeader>
      <div className="home">
        <div className="home-left">
          <div className="left-cont">
            <h2 className="home-left-heading text-teal-400">Welcome</h2>
            <p className="home-para">to a page of limitless</p>
            <h3 className="home-wel-ele  text-teal-400">Oppourtunities</h3>
          </div>
          <div className="left-btns">
            <Link to="/login">
              <button
                className=" border-2 
                text-xl 
                text-white
               py-2 px-44 
               border-none
               bg-teal-300 rounded-2xl
              shadow-xl
              font-bold
              hover:bg-teal-400
              hover:border-2
            "
              >
                {" "}
                Member
              </button>
            </Link>
            <Link to="/register">
              <button
                className="border-2 
            text-xl 
            text-white
           py-2 px-44 
           border-none
           bg-teal-300 rounded-2xl
          shadow-xl
          font-bold
          hover:bg-teal-400
          hover:border-2"
              >
                Join Us{" "}
              </button>
            </Link>
          </div>
        </div>
        <div className="home-right">
          <img src={Img} alt="images" className="home-right-img " />
        </div>
      </div>
      <div className="w-screen h-screen">
        <About></About>
      </div>
     
      <div className="w-screen h-screen flex items-center justify-around flex-col">
      <center className="mt-12"><h1 className="text-teal-500 font-bold text-6xl" >Team Members</h1></center>
        <Team></Team>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default LandHome;
