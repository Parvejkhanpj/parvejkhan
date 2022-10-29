import React from "react";
import "../App.css";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsGithub, BsLinkedin, BsTwitter, BsList } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-1 py-3">
      <div className="flex items-center">
        <div className="center">
          <BsList className="ml-2 text-xl hidden" />
        </div>
        <div
          className="left  text-[14px] p-2  
        bg-gradient-to-r from-[#00C0FD] to-[#E70FAA]
        inline-block text-transparent bg-clip-text "
        >
          <h1 className="text-10">{`{ Parvej }`}</h1>
          <span className="block ml-1 ">khan</span>
        </div>
      </div>

      {/* center nav for desktop */}
      <div className="hidden lg:block">
        <ul className="flex justify-around items-center">
          <li className="mx-5 text-[20px] hover:scale-125 hover:text-fuchsia-500 cursor-pointer">
            <a href="#about">About Me</a>
          </li>
          <li className="mx-5 text-[20px] hover:scale-125 hover:text-fuchsia-500 cursor-pointer">
            <a href="#skill">Skiils</a>
          </li>
          <li className="mx-5 text-[20px] hover:scale-125 hover:text-fuchsia-500 cursor-pointer">
            <a href="#Project">Project</a>
          </li>
          <li className="mx-5 text-[20px] hover:scale-125 hover:text-fuchsia-500 cursor-pointer">
            <a href="#contact"> Contact Me</a>
          </li>
        </ul>
      </div>

      <div className="right flex mr-2  ">
        <a href="https://github.com/parvejkhanpj/" className="">
          <BsGithub
            className="m-2 text-xl hover:scale-125
           rounded-full "
          />
        </a>
        <a href="https://www.linkedin.com/in/parvej-khan-330385151/">
          <BsLinkedin
            className="m-2 text-xl hover:scale-125 
          rounded-full "
          />
        </a>
        <a href="https://twitter.com/digitalparvej">
          <BsTwitter
            className="m-2 text-xl hover:scale-125 
           rounded-full hidden lg:block"
          />
        </a>
        <a href="https://api.whatsapp.com/send?phone=919783946464&text=thank%20you%20contact%20parvej%20khan%20they%20contact%20you%20as%20soon%20as%20possiable">
          <AiOutlineWhatsApp
            className="m-2 hover:scale-125 text-xl 
           rounded-full "
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
