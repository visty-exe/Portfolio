
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { IoMail } from "react-icons/io5";
import logo from "../assets/logo.png";
import resume from "../assets/Resume_Vishal.pdf";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle =
    "relative inline-block px-3 py-2 hover:text-white hover:bg-red-500 hover:rotate-[-20deg] hover:scale-110 hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)] hover:z-10 transition-all duration-300";

  const mobileLinkStyle =
    "block py-2 text-base font-medium text-gray-700 hover:text-black transition-colors";

  return (
    <nav
      id="nav"
      className="relative w-full px-5 sm:px-8 md:pl-32 md:pr-10 lg:pl-40 lg:pr-16 xl:pl-44 py-5 md:py-8 z-50"
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between w-full">
        {/* Mobile Logo + Desktop Email */}
        <div className="flex items-center gap-3">
          <a href="#home" className="md:hidden shrink-0">
            <img src={logo} alt="Logo" className="invert w-12 h-auto opacity-85" />
          </a>

          <a
            href="mailto:vishal.tyagi14oct@gmail.com"
            className="hidden sm:flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
          >
            <IoMail size={20} className="shrink-0" />
            <span className="text-sm">vishal.tyagi14oct@gmail.com</span>
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#skills" className={linkStyle}>Skills</a>
          <a href="#work" className={linkStyle}>Work</a>
          <a href={resume} className={linkStyle} download title="Click me to download">Resume</a>
          <a href="#contact" className={linkStyle}>Contact</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-lg space-y-2">
          <a href="#skills" onClick={() => setMenuOpen(false)} className={mobileLinkStyle}>
            Skills
          </a>
          <a href="#work" onClick={() => setMenuOpen(false)} className={mobileLinkStyle}>
            Work
          </a>
          <a href="#edu" onClick={() => setMenuOpen(false)} className={mobileLinkStyle}>
            Experience &amp; Education
          </a>
          <a
            href={resume}
            download
            onClick={() => setMenuOpen(false)}
            className={mobileLinkStyle}
          >
            Resume
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className={mobileLinkStyle}>
            Contact
          </a>
          <a
            href="mailto:vishal.tyagi14oct@gmail.com"
            className="sm:hidden flex items-center gap-2 pt-2 border-t border-gray-100 text-sm text-gray-600 hover:text-black"
          >
            <IoMail size={18} className="shrink-0" />
            <span className="break-all">vishal.tyagi14oct@gmail.com</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
