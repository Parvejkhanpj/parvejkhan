import React from "react";
import { BsGithub, BsLinkedin, BsTwitter, BsList } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <hr></hr>
      <div className="flex justify-between items-center py-2">
        <p className="text-center p-2">
          Design and Devolped by
          <span
            className="font-bold bg-gradient-to-r from-[#00C0FD] to-[#E70FAA]
        inline-block text-transparent bg-clip-text mx-2"
          >
            Parvej Khan
          </span>{" "}
        </p>
        <div className="right flex mr-2    ">
          <a href="https://github.com/parvejkhanpj/" className="">
            <BsGithub className="m-2 text-2xl hover:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full " />
          </a>
          <a href="https://www.linkedin.com/in/parvej-khan-330385151/">
            <BsLinkedin className="m-2 text-2xl hover:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full " />
          </a>
          <a href="https://twitter.com/digitalparvej">
            <BsTwitter className="m-2 text-2xl hover:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=919783946464&text=thank%20you%20contact%20parvej%20khan%20they%20contact%20you%20as%20soon%20as%20possiable">
            <AiOutlineWhatsApp className="m-2 text-2xl hover:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full " />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
