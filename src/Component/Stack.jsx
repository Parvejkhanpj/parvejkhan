import React from "react";
import "../App.css";
const Stack = () => {
  return (
    <div className="my-20 mx-auto">
      <h2 className="tech font-['Poppins'] font-bold  text-[#19190] text-[32px] lg:text-[48px] text-center font-bold ">
        My Tech Stack
      </h2>
      <p className="tech-line text-center my-3 font-semibold text-xl">
        {" "}
        Technologies I’ve been working with recently
      </p>

      <div className="stack-cointner lg:mx-20 lg:my-10">
        <div className="stack grid grid-cols-4 lg:grid-cols-5 mx-3 lg:gap-y-10 lg:my-10">
          <div className="border-[2px] p-4 border-white lg:border-none lg:p-1">
            <img src={require("../assets/html.png")} className="lg:w-[50%]" />
          </div>
          <div className="border-[2px] p-4 border-l-0  border-white lg:border-none lg:p-1">
            <img src={require("../assets/css.png")} className="lg:w-[50%]" />
          </div>
          <div className="border-[2px] p-4 lg:p-1 border-l-0 border-white lg:border-none">
            <img src={require("../assets/saas.png")} className="lg:w-[50%]" />
          </div>
          <div className="border-[2px] p-4 border-l-0 border-white lg:border-none lg:p-1">
            <img src={require("../assets/js.png")} className="lg:w-[50%]" />
          </div>
          <div className="border-[2px] p-4 border-l-1 border-white lg:border-none lg:p-1">
            <img src={require("../assets/git.png")} className="lg:w-[50%]" />
          </div>
          <div className="border-[2px] p-4 border-white lg:border-none">
            <img src={require("../assets/react.png")} className="lg:w-[50%]" />
          </div>
          <div className="border-[2px] p-4 border-l-0   border-white lg:border-none lg:p-1">
            <img src={require("../assets/github.png")} className="lg:w-[50%]" />
          </div>
          <div className="border-[2px] p-4 border-l-0 border-white lg:border-none lg:p-1">
            <img src={require("../assets/redux.png")} className="lg:w-[50%]" />
          </div>
          <div className="border-[2px] p-4 lg:p-1 border-l-1 border-white lg:border-none">
            <img src={require("../assets/vscode.png")} className="lg:w-[50%]" />
          </div>

          <div className="border-[2px] p-4 lg:p-1 border-l-0 border-white lg:border-none">
            <img
              src={require("../assets/bootstrap.png")}
              className="lg:w-[50%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
