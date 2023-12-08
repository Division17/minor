import React from "react";
import NavLinks from "./NavLinks";
import UserLinks from "./UserLinks";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b-2 shadow-lg w-full px-44 py-2">
          <img src="https://i.pinimg.com/736x/06/0e/ac/060eac44e2e8d131d6ee4ece84924c22.jpg" alt="" className="h-10"/>
        <div className="text-3xl font-extrabold text-gray-900 dark:text-white font-roboto">
        
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-gray-600 from-black cursor-pointer">
         
            Conect
          </span>
        </div>
 
      <div className="flex justify-around item-center mx-auto">
        <NavLinks></NavLinks>
      </div>
      <div>
        <UserLinks></UserLinks>
      </div>
    </div>
  );
};

export default Navbar;