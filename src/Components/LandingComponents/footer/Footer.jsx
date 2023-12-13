import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative w-full border-t-2 border-s-gray-300 mt-4 pt-10 shadow-md flex flex-col justify-center items-center">
      <div className="w-screen h-4/5 border-2 grid grid-cols-3">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl cursor-pointer">
            <Link to="home" className="flex items-center" smooth={true}>
              <img
                src="https://i.pinimg.com/736x/06/0e/ac/060eac44e2e8d131d6ee4ece84924c22.jpg"
                className="mr-3 h-20"
                alt="Logo"
              />
              <h1 className="text-5xl text-gray-800 font-extrabold">Connect</h1>
            </Link>
            </div>
        <div className=" flex flex-col items-center justify-center font-roboto font-bold text-gray-800 ">
          <h2 className="mt-8 text-lg">Links</h2>
          <ul className="flex flex-col p-4 mt-2 font-medium items-center justify-around">
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
        <div className=" flex flex-col items-center justify-center font-roboto font-bold text-gray-800 ">
          <h2 className=" mb-12 text-lg">Contact</h2>
          <div className="flex items-center justify-between gap-4">
         <a href="https://www.linkedin.com/in/dhirender-pratap-singh-d1705" target="blank"> <i className="ri-linkedin-box-fill text-3xl hover:text-teal-900"></i></a>
        <a href="https://www.instagram.com/_.prologs._/" target="blank">  <i className="ri-instagram-fill text-3xl  hover:text-teal-900"></i></a>
         <a href="https://github.com/Division17" target="blank"> <i className="ri-github-fill text-3xl  hover:text-teal-900"></i></a>
          </div>
        
     </div>
     </div>
      <div className="w-screen h-1/5">
        <center>
          <h4>All rights reserverd @{currentYear}.</h4>
        </center>
      </div>
    </footer>
  );
}
