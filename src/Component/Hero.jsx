import React from "react";

const Hero = () => {
  return (
    <div className="my-10 lg:flex lg:justify-around items-center py-10">
      <div className="title leading-12 ">
        <h2 className=" text-[34px] lg:text-[52px] font-semibold text-center lg:text-left ">
          Hi 👋
          <br />
          My Name is
          <span className="bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block text-transparent bg-clip-text mx-2">
            Parvej khan
          </span>
          <br />I build things for web.
        </h2>
      </div>
      <div className="image my-10  ">
        <div className="bg-gradient-to-tr from-fuchsia-800 via-violet-700	 to-[#E70FAA]  rounded-full mx-auto p-2 w-[50%] lg:w-[60%] ">
          <img
            src={require("../assets/profile.png")}
            className=" h-[40%]  mx-auto rounded-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
