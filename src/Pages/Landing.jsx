import React, { useEffect, useState } from "react";
import { ThemeContext } from "../Components/ThemeContext";
import { Link } from "react-router-dom";
function Landing() {
const theme  = React.useContext(ThemeContext);
const skadow = theme === "pastel" ? " shadow-xl shadow-slate-400" : " shadow-md shadow-orange-300";

  return (
    <div className="hero bg-base-200 h-screen  flex items-center justify-center p-4">
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center lg:items-start lg:space-x-16 max-w-screen-xl w-full ">
        <div className="relative w-full lg:w-2/5 block">
        
          <img 
            src="me.png" id='me' 
            className={"w-full h-auto md:m-auto max-w-md md-w-full lg:max-w-lg rounded-full"+skadow}
            alt="Kasansa Kuya wearing a formal suit" 
          />
        </div>
        {/* Introduction Text */}
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <h1 className="text-3xl lg:text-6xl font-bold">Kasansa Kuya</h1>
          <p className="py-8 text-xl lg:text-2xl leading-relaxed">
            I am an engineer with a passion for creating impactful solutions. Currently open to new job opportunities — let’s connect!
          </p>
          <Link to="/contact"><button  className="btn btn-primary btn-lg mt-6">Contact Me</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
