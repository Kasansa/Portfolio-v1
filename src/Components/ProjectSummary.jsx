import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { ThemeContext } from './ThemeContext';

const ProjectSummary = ({title, data,image,splash}) => {

  const [displayedItems, setDisplayedItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const { theme } = React.useContext(ThemeContext);
  // Animation for each item
  const fadeIn = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(20px)" },
    config: { duration: 500 },
  });

  const borderColor =  theme === "pastel" ? "shadow-lg shadow-slate-400" : "shadow-lg shadow-orange-300";

  const handleNext = () => {
    if (currentIndex < data.length) {
      setDisplayedItems([...displayedItems, data[currentIndex]]);
      setCurrentIndex((prev) => prev + 1);
    } else {
      alert("All items displayed!");
    }
  };

  return (
    <div className="flex flex-col items-center p-8 lg:p-16 md:w-full lg:w-4/6 m-auto  min-h-screen  ">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      <div className="flex flex-col items-center border-10 "
       >
            <img className="w-screen h-32 md:h-64 lg:h-96 object-cover m-0 p-0" src={splash} alt={title} ></img>
            
            {displayedItems.map((item, index) => (
              <animated.div 
            key={index}
            style={fadeIn}
            className={"w-full rounded-lg overflow-hidden p-4 m-auto mt-4 "+
            borderColor}
            
            >
              <div className="p-4">
              
              <p className=" text-sm md:text-md lg:text-2xl">{data[index]}</p>
            </div>
            <img
              src={`${image+String(index+1)}.jpg`}
              alt={`Project ${index}`}
              className="w-full  object-cover"
            />
            
            </animated.div>
          ))}

      </div>
      {currentIndex < data.length && (
        <button
          className="mt-6 px-4 btn-primary py-2 btn rounded-lg "
          onClick={handleNext}
        >
          Continue
        </button>
      )}
    </div>
  );
};

export default ProjectSummary;
