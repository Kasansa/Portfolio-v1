import React, { useEffect, useState } from "react";

function Landing() {
  return (
    <div className="hero bg-base-200 h-screen  flex items-center justify-center p-4">
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center lg:items-start lg:space-x-16 max-w-screen-xl w-full ">
        <div className="relative w-full lg:w-2/5 block">
          <img 
            src="me.png" 
            className="w-full h-auto  max-w-md lg:max-w-lg rounded-full shadow-2xl shadow-black" 
            alt="Kasansa Kuya wearing a formal suit" 
          />
        
        </div>

        {/* Introduction Text */}
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <h1 className="text-3xl lg:text-6xl font-bold">Kasansa Kuya</h1>
          <p className="py-8 text-xl lg:text-2xl leading-relaxed">
            I am an engineer with a passion for creating impactful solutions. Currently open to new job opportunities — let’s connect!
          </p>
          <button className="btn btn-primary btn-lg mt-6">Contact Me</button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
