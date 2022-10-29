import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail, FiHome } from "react-icons/fi";
const Contact = () => {
  return (
    <>
      <h2 className="tech lg:my-10 font-['Poppins'] font-bold  text-[#19190] text-[32px] lg:text-[48px] text-center font-bold ">
        Contact Me.
      </h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 lg:gap-4 my-10  mx-10">
        <div
          className="phone lg:w-[350px] lg:w-[450px] bg-transparent h-[250px] flex
       flex-col justify-center items-center shadow shadow-[#E70FAA]/40 md:shadow-indigo-500/40"
        >
          <BsFillTelephoneFill className="bg-[#4285F4]/80 rounded-full text-[46px] p-2 mb-2" />
          <h2 className="mb-1 mt-2 text-[28px] font-semibold text-gray-900 dark:text-white ">
            Phone
          </h2>
          <h3 className="mb-1 text-[26px] font-semibold text-gray-900 dark:text-white">
            +91 9783946464
          </h3>
        </div>
        <div
          className="phone lg:w-[350px] lg:w-[450px] bg-transparent h-[250px] flex
       flex-col justify-center items-center shadow shadow-[#E70FAA]/40 md:shadow-indigo-500/40"
        >
          <FiMail className="bg-[#FBBC05]/80 rounded-full text-[46px] p-2 mb-2" />
          <h2 className="mb-1 mt-2 text-[28px] font-semibold text-gray-900 dark:text-white ">
            Email
          </h2>
          <h3 className="mb-1 text-[26px] font-semibold text-gray-900 dark:text-white">
            kparvej761@gmail.com
          </h3>
        </div>
        <div
          className="phone lg:w-[350px] lg:w-[450px] bg-transparent h-[250px] flex
       flex-col justify-center items-center shadow shadow-[#E70FAA]/40 md:shadow-indigo-500/40"
        >
          <FiHome className="bg-[#34A853]/50 rounded-full text-[46px] p-2 mb-2" />
          <h2 className="mb-1 mt-2 text-[28px] font-semibold text-gray-900 dark:text-white ">
            Address
          </h2>
          <h3 className="mb-1 text-[26px] font-semibold text-gray-900 dark:text-white">
            Jaipur, Rajasthan
          </h3>
        </div>
      </div>
    </>
  );
};

export default Contact;