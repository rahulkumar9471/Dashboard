import React from "react";
import banner from "../img/banner.jpg";
import { FaBars, FaMoon } from "react-icons/fa";

const Navbar = (props) => {
  const toggleSidebar = props.toggleSidebar;

  return (
    <header className="bg-[#418160] text-[#fff] w-full z-10 shadow-md">
      <nav className="flex w-full justify-between px-[1rem] sm:px[1rem] md:px-[2rem] py-2 items-center">
        <div className="flex justify-between items-center gap-x-6 sm:gap-x-6 md:gap-x-8">
          <div className="flex justify-center items-center ">
            <h1 className="text-[14px] sm:text-[10px] md:text-[16px] text-center font-bold uppercase bg-gradient-to-r from-[#fff] via-[#fff] to-[#fff] inline-block text-transparent bg-clip-text">
              EducationToday
            </h1>
          </div>
          <button
            className="border-2 border-[#fff] p-3 text-[#fff] hover:bg-[#fff] hover:text-[#418160] rounded-[4px]"
            onClick={toggleSidebar}
          >
            <FaBars fontSize={10} />
          </button>
        </div>
        <div className="">
          <ul className="flex gap-x-6 sm:gap-x-6 md:gap-x-8 lg:gap-x-10 font-semibold items-center">
            <li>
              <button className="border-2 border-[#fff] p-2 text-[#fff] hover:bg-[#fff] hover:text-[#418160] rounded-[4px]">
                <FaMoon fontSize={12} />
              </button>
            </li>
            <li>
              <div className="w-[50px] h-[50px] overflow-hidden rounded-full text-center sm:text-center md:text-center m-auto">
                <img
                  src={banner}
                  className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110 rounded-full"
                  alt=""
                />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
