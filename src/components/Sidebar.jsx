import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import banner from "../img/banner.jpg";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { IoMdSettings, IoIosLogOut } from "react-icons/io";
import { FaBlogger } from "react-icons/fa6";

const Sidebar = (props) => {
  const isSIdebar = props.isSIdebar;
  const theme = props.theme;
  const [isProfileMenuOpen, setisProfileMenuOpen] = useState();

  const toggleProfileMenu = () => {
    setisProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <div
      className={`${theme === 'light' ? "bg-[#fff]" : "bg-[#282c34]" } max-w-[0px] sm:max-w-[0px] ${
        isSIdebar ? "md:min-w-[220px]" : "min-w-[80px]"
      } top-0 left-0 min-h-[90vh] shadow-md z-50 transition-all duration-300 ease-out`}
    >
      <div className="px-4 py-2">
        <div className="">
          <div
            className={`flex ${
              isSIdebar ? "" : "justify-center"
            } items-center mt-4 gap-x-2`}
          >
            <div className="w-[40px] h-[40px] overflow-hidden rounded-full">
              <img
                src={banner}
                className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110 rounded-full"
                alt=""
              />
            </div>
            <div
              className={`${
                isSIdebar ? "" : "md:hidden"
              } hidden sm:hidden md:block`}
            >
              <h1 className="text-xl">Rahul Kumar</h1>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-full border-[1px] border-gray mt-4"></div>
          </div>
          <div className="mt-4 overflow-hidden">
            <ul className="flex flex-col gap-y-4">
              <li>
                <Link to="/">
                  <div
                    className={`flex ${
                      isSIdebar ? "justify-start" : "justify-center"
                    } items-center gap-x-2 text-[16px] border-2 border-[#418160] p-2 text-[#fff] bg-[#418160] hover:bg-[#fff] hover:text-[#418160] rounded-[4px]`}
                  >
                    <MdDashboard fontSize={20} />
                    {isSIdebar && <p>Dashboard</p>}
                  </div>
                </Link>
              </li>
              <li>
                <div
                  onClick={toggleProfileMenu}
                  className={`flex ${
                    isSIdebar ? "justify-start" : "justify-center"
                  } items-center gap-x-2 text-[16px] border-2 border-[#418160] p-2 text-[#418160]  hover:bg-[#418160] hover:text-[#fff] rounded-[4px]`}
                >
                  <FaUser fontSize={20} />
                  {isSIdebar && <p>Profile</p>}
                  {isSIdebar ? (
                    isProfileMenuOpen ? (
                      <IoMdArrowDropup />
                    ) : (
                      <IoMdArrowDropdown />
                    )
                  ) : null}
                </div>
                {isProfileMenuOpen && (
                  <ul className="">
                    <li className="mt-2">
                      <Link
                        to="/profile/settings"
                        className={`flex ${
                          isSIdebar ? "justify-start" : "justify-center"
                        } items-center gap-x-2 text-[16px] block px-4 py-2 text-sm hover:bg-[#418160] rounded-[4px]`}
                      >
                        <IoMdSettings fontSize={20} />
                        {isSIdebar && <p>Settings</p>}
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link
                        to="/profile/logout"
                        className={`flex ${
                          isSIdebar ? "justify-start" : "justify-center"
                        } items-center gap-x-2 text-[16px] block px-4 py-2 text-sm  hover:bg-[#418160] rounded-[4px]`}
                      >
                        <IoIosLogOut fontSize={20} />
                        {isSIdebar && <p>Logout</p>}
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/">
                  <div
                    className={`flex ${
                      isSIdebar ? "justify-start" : "justify-center"
                    } items-center gap-x-2 text-[16px] border-2 border-[#418160] p-2 text-[#418160] hover:bg-[#418160] hover:text-[#fff] rounded-[4px]`}
                  >
                    <FaBlogger fontSize={20} />
                    {isSIdebar && <p>Blog</p>}
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
