import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail, FiHome } from "react-icons/fi";
const Contact = () => {
  return (
    <div id="contact">
      <h2 className="tech lg:my-10 font-['Poppins'] font-bold  text-[#19190] text-[32px] lg:text-[48px] text-center font-bold ">
        Contact Me.
      </h2>
      <div className="flex flex-wrap justify-center items-center my-10  ">
        <div
          className="phone w-[300px] bg-transparent h-[250px] flex
       flex-col justify-center items-center shadow shadow-[#E70FAA]/40 md:shadow-indigo-500/40 p-10 m-10"
        >
          <BsFillTelephoneFill className="bg-[#4285F4]/80 rounded-full text-[46px] p-2 mb-2" />
          <h2 className="mb-1 mt-2 text-[22px] lg:text-[28px] font-semibold text-gray-900 dark:text-white ">
            Phone
          </h2>
          <h3 className="mb-1 text-[20px] lg:text-[26px] font-semibold text-gray-900 dark:text-white">
            +91 9783946464
          </h3>
        </div>
        <div
          className="email w-[300px] bg-transparent h-[250px] flex
       flex-col justify-center items-center shadow shadow-[#E70FAA]/40 md:shadow-indigo-500/40  p-10 m-10"
        >
          <FiMail className="bg-[#FBBC05]/80 rounded-full text-[46px] p-2 mb-2" />
          <h2 className="mb-1 mt-2 text-[22px] lg:text-[28px] font-semibold text-gray-900 dark:text-white ">
            Email
          </h2>
          <h3 className="mb-1 text-[20px] lg:text-[24px] font-semibold text-gray-900 dark:text-white">
            kparvej761@gmail.com
          </h3>
        </div>
        <div
          className="address w-[300px] bg-transparent h-[250px] flex
       flex-col justify-center items-center shadow shadow-[#E70FAA]/40 md:shadow-indigo-500/40 p-10 m-10"
        >
          <FiHome className="bg-[#34A853]/50 rounded-full text-[46px] p-2 mb-2" />
          <h2 className="mb-1 mt-2 text-[22px] lg:text-[28px] font-semibold text-gray-900 dark:text-white ">
            Address
          </h2>
          <h3 className="mb-1 text-[20px] lg:text-[26px] font-semibold text-gray-900 dark:text-white">
            Jaipur, Rajasthan
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
