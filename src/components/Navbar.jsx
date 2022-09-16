import React from "react";
import logo from "../assets/camera.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center w-full h-[125px] bg-[#102542]  ">
      <div className="flex items-center">
        <img
          src={logo}
          alt="logo"
          width={60}
          className="mr-6 mt-3 font-[#EDAE49] "
        />

        <h1 className="font-rampart text-5xl sm:text-8xl text-[#EDAE49] drop-shadow-xl shadow-[#EDAE49]">
          Movie Mate
        </h1>
        <img
          src={logo}
          alt="logo"
          width={60}
          className=" ml-6 mt-4 font-[#EDAE49] "
        />
      </div>
    </nav>
  );
};

export default Navbar;
