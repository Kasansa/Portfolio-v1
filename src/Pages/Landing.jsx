import React, { useEffect, useState } from "react";
import { ThemeContext } from "../Components/ThemeContext";
import ExpandableButton from "../Components/ExpandableButton";
import { Link } from "react-router-dom";
function Landing() {
const theme  = React.useContext(ThemeContext);

const [skadow, setSkadow] = useState("");

const[wallTheme, setWallTheme] = useState("");

const[textclarity, setTextClarity] = useState("");

  useEffect(() => {
    if (theme.theme === "pastel") {
      setTextClarity("bg-slate-100 bg-opacity-85  rounded-xl p-8 transition duration-500 ease-in-out");
    } else {
      setTextClarity("p-8 transition duration-500 ease-in-out ");
    }
  }, [theme.theme]);

  useEffect(() => {
    if (theme.theme === "pastel") {
      setSkadow("shadow-lg shadow-slate-400");
    } else {
      setSkadow("shadow-lg shadow-orange-300");
    }
  }, [theme.theme]);  

useEffect(() => {
  if (theme.theme === "pastel") {
    setWallTheme("light transition duration-500 fade-in-out");
  } else {
    setWallTheme("dark transition duration-500 fade-in-out");

  }
}, [theme.theme]);
  return (
    <div className={"hero bg-base-200 h-screen flex items-center justify-center p-4 "+wallTheme}>
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center lg:items-start lg:space-x-16 max-w-screen-xl w-full ">
        <div className="relative w-full lg:w-2/5 block">
        
          <img 
            src="me.png" id='me' 
            className={"w-full h-auto md:m-auto max-w-md md-w-full lg:max-w-lg rounded-full "+skadow}
            alt="Kasansa Kuya wearing a formal suit" 
          />
        </div>
        {/* Introduction Text */}
        <div className={"text-center lg:text-left w-full lg:w-1/2 "+textclarity}>
          <h1 className="text-3xl lg:text-6xl font-bold text-center">Kasansa Kuya</h1>
          <p className="py-8 text-xl lg:text-2xl leading-relaxed text-center m-auto block">
            I am an engineer with a passion for creating impactful solutions. Currently open to new job opportunities — let’s connect!
          </p>
          <div className="flex w-full flex-col">
    <div className="flex flex-wrap  gap-1 z-50 md:m-auto w-auto">
          <a
              href="KasansaKuya.vcf"
              download="Kasansa_business_card.vcf"
            >
              <button  className="btn btn-primary btn-lg">Contact Card</button>
          </a>
          <ExpandableButton title="Email" info="Mr.kuya@outlook.com" />
          
          <ExpandableButton title="Phone" info="+27 078 129 5665" />
          <a
              href="https://www.linkedin.com/in/kasansa-k-29a438134/"
              target="_blank"
            >
              <button  className="btn btn-primary btn-lg " >Linkedin</button>
          </a>
    </div>
</div>
        
        </div>
      </div>
    </div>
  );
}

export default Landing;
