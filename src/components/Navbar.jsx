import React from "react";
import logo from "../assets/camera.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center w-full h-[125px] bg-[#102542]  ">
      <div className="flex items-center">
        <img
          src={logo}
          alt="logo"
          className=" w-[25px] sm:w-[60px] mr-3 sm:mr-6 sm:mt-3"
        />
        <h1 className="font-rampart text-[38px] sm:text-6xl md:text-7xl lg:text-8xl text-[#EDAE49]">
          Movie Mate
        </h1>
        <img
          src={logo}
          alt="logo"
          className="w-[25px] sm:w-[60px] ml-3 mt-1.5 sm:ml-6 sm:mt-4 "
        />
      </div>
    </nav>
  );
};

export default Navbar;
