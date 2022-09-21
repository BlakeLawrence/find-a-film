import React from "react";
import logo from "../assets/camera.svg";

const Navbar = () => {
  return (
    <nav
      className="flex justify-center items-center w-full h-[125px]
     bg-[#102542]  "
    >
      <div className="flex items-center ">
        <img
          src={logo}
          alt="logo"
          className=" sm:mt-6 w-[25px] sm:w-[60px] mr-4 sm:mr-8 sm:mb-6"
        />
        <h1 className=" font-rampart text-[38px] sm:text-6xl md:text-7xl lg:text-8xl text-[#EDAE49]">
          Movie Mate
        </h1>
        <img
          src={logo}
          alt="logo"
          className="sm:mt-8 w-[25px] sm:w-[60px] ml-4 mt-1.5 sm:ml-8 sm:mb-6  "
        />
      </div>
    </nav>
  );
};

export default Navbar;
