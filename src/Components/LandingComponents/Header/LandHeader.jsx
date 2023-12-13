import React from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header className="shadow-md sticky z-50 top-0 ">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <NavLink to="/" className="flex items-center">
              <img
                src="https://i.pinimg.com/736x/06/0e/ac/060eac44e2e8d131d6ee4ece84924c22.jpg"
                className="mr-3 h-12"
                alt="Logo"
              />
              <h1 className="text-xl text-gray-800 font-extrabold">Connect</h1>
            </NavLink>
            <div className="flex items-center lg:order-2">
              <NavLink
                to="/auth/login"
                className="text-gray-800 hover:border-2 hover:border-teal-400 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Log in
              </NavLink>
              <NavLink
                to="/auth/register"
                className="text-white bg-teal-600 hover:bg-teal-700 focus:ring-2 focus:ring-teal-400 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Join
              </NavLink>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li className="cursor-pointer block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-primary lg:p-0">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={50}
                  >
                    {" "}
                    Home
                  </Link>
                </li>
                <li className="cursor-pointer block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-primary lg:p-0">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={50}
                  >
                    {" "}
                    About
                  </Link>
                </li>
                <li className="cursor-pointer block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-primary lg:p-0">
                  <Link
                    to="team"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-380}
                  >
                    {" "}
                    Team
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
