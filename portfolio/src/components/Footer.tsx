
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import resume from "../assets/Resume_Vishal.pdf";

const Footer = () => {
  return (
    <footer className="bg-gray-50 px-6 md:px-12 lg:px-20 py-12 md:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:px-10">

        {/* About */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-5">
            About Me
          </h2>

          <p className="text-sm leading-7 text-gray-500 mb-6">
            I'm Vishal, a Full Stack MERN and Java Developer passionate
            about building practical applications and solving real-world
            problems through technology.
          </p>

          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/visty/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full bg-gray-200 w-12 h-12 flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition"
            >
              <FaLinkedinIn size={22} />
            </a>

            <a
              href="https://github.com/visty-exe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full bg-gray-200 w-12 h-12 flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition"
            >
              <FaGithub size={22} />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-5">
            Useful Links
          </h2>

          <ul className="flex flex-col gap-4 text-sm font-medium text-gray-500">
            <li>
              <a
                href="#edu"
                className="flex items-center gap-2 hover:text-blue-600 transition"
              >
                Experience & Education <ArrowUpRight size={16} />
              </a>
            </li>

            <li>
              <a
                href={resume}
                download="Vishal_Tyagi_Resume.pdf"
                className="flex items-center gap-2 hover:text-blue-600 transition"
              >
                Download Resume <ArrowUpRight size={16} />
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="flex items-center gap-2 hover:text-blue-600 transition"
              >
                Hire Me <ArrowUpRight size={16} />
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-5">
            Contact Me
          </h2>

          <div className="flex flex-col gap-4 sm:gap-5 text-sm text-gray-500">

            <a
              href="mailto:vishal.tyagi14oct@gmail.com"
              className="flex items-center gap-3 hover:text-blue-600 transition"
            >
              <IoMail size={20} className="shrink-0" />
              <span className="break-all sm:break-normal">vishal.tyagi14oct@gmail.com</span>
            </a>

            <a
              href="tel:+918433016689"
              className="flex items-center gap-3 hover:text-blue-600 transition"
            >
              <FaPhoneAlt size={18} className="shrink-0" />
              <span>+91 8433016689</span>
            </a>

          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto border-t border-gray-200 mt-10 md:mt-14 pt-6 lg:px-10 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Vishal Tyagi. All rights reserved.</p>
        <p>Made by ❤️ by Vishal</p>
      </div>
    </footer>
  );
};

export default Footer;
