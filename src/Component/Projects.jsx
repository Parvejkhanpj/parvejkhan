import React from "react";
import { FiLink, FiGithub } from "react-icons/fi";
import data from "./project.json";
console.log("data", data);
const Projects = () => {
  return (
    <div>
      <h2 className="tech lg:mt-10 font-['Poppins'] font-bold  text-[#19190] text-[32px] lg:text-[48px] text-center font-bold ">
        Projects
      </h2>
      <p className="tech-line text-center my-3 font-semibold lg:mb-10 lg:texl-2xl text-xl">
        Things I’ve built so far
      </p>

      <div className="project grid grid-cols-1 lg:grid-cols-3 mb-100  lg:gap-2 gap-6  mx-8 lg:mx-10 my-5">
        {data.map((element) => {
          return (
            <div
              key={element.id}
              className="w-[350px] lg:w-[450px] border-0 shadow-lg shadow-[#363636]/50 rounded-lg bg-[#363636] h-[350px] lg:h-[380px]"
            >
              <img src={element.image} className="" />

              <div className="content mb-3 font-[ 'Poppins']">
                <h3 className=" text-[18px] pt-2 pl-2 font-[600] ">
                  {element.name}
                </h3>
                <p className="p-2 font-light text-[14px]">
                  {element.description}
                </p>
                <p className="p-2 pt-0 font-light text-[12px]">
                  Tech Stack :{" "}
                  <span className="font-thin text-[12px]">
                    {element.techStack}
                  </span>
                </p>
              </div>
              <div className="link pt-0 flex  justify-between mx-2">
                <div className="livelink flex items-center mx-1">
                  <FiLink />
                  <a
                    href={element.live}
                    className="  font-['Poppins'] mx-2 bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block text-transparent bg-clip-text "
                  >
                    Live Preview
                  </a>
                </div>
                <div className="livelink flex items-center mx-1">
                  <FiGithub />
                  <a
                    href={element.github}
                    className="mx-2 bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block text-transparent bg-clip-text "
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
