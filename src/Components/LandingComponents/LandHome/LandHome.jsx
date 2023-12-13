import React from "react";
import { Link } from "react-router-dom";
import Img from "../../../assets/images/Creative team-bro.svg";
function LandHome() {
  return (
    <div className="home" id="home">
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
  );
}
export default LandHome;
