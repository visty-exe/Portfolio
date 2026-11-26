import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";

import logo from "../assets/logo.png";

const SideBar = () => {
  return (
    <div className="hidden md:block px-4 lg:px-6 fixed z-40">
      <div className="h-screen w-20 lg:w-24 shrink-0 flex flex-col items-center justify-between py-5">
        {/* LOGO */}
        <div>
          <a href="#home">
            <img src={logo} alt="Logo" className="invert w-20 h-15 opacity-80" />
          </a>
        </div>

        {/* LINKS */}
        <div className="flex flex-col items-center gap-6 text-gray-700">
          <a
            href="https://www.linkedin.com/in/visty/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            <BsLinkedin size={25} />
          </a>

          <a
            href="https://github.com/visty-exe"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            <FaSquareGithub size={27} />
          </a>
        </div>

        {/* BACK TO TOP */}
        <div className="text-gray-600">
          <a
            href="#nav"
            className="[writing-mode:vertical-rl] hover:text-black transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
