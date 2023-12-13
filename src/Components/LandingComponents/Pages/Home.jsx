import React from "react";
import LandHome from "../LandHome/LandHome";
import Team from "./Team";
import About from "./About";
const Home = () => {
  return (
    <>
      <div>
        <LandHome></LandHome>
      </div>
      <div className="w-screen h-screen">
        <About></About>
      </div>
      <div className="w-screen h-screen flex items-center justify-around flex-col">
        <center className="mt-12">
          <h1 className="text-teal-500 font-bold text-6xl">Team Members</h1>
        </center>
        <Team></Team>
      </div>
    </>
  );
};

export default Home;
