import React from "react";
import guide from "../images/guide.png";
import customization from "../images/customization.png";
import weather from "../images/weather.png";

const BestServices = () => {
  return (
    <div className="py-20 md:mt-24 mt-14 "> 
      <div className="flex px-5 md:px-20 ">
        <div className="w-1/4 text-left ">
          <h5 className="text-secondary-color md:text-base text-[8px] ">What we serve</h5>
          <h1 className="mt-6 text-lg font-semibold md:text-4xl"> We offer our best services</h1>
        </div>
        <div className="w-1/4 border-b-[1px] p-1  md:p-6 border-r-[1px] md:mx-4 mx-2 border-secondary-color rounded-lg text-left">
          <div className="w-8 h-8 p-2 rounded-full bg-primary-color md:w-14 md:h-14">
            <img src={weather} alt="weather" />
          </div>
          <h3 className="my-2 text-xs font-semibold md:text-lg"> Calculate Weather</h3>
          <p className="text-slate-500 md:text-base text-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="w-1/4 border-b-[1px] border-r-[1px] mx-2 md:mx-4 border-secondary-color  p-1 md:p-6 rounded-lg text-left">
          <div className="w-8 h-8 p-2 rounded-full bg-primary-color md:w-14 md:h-14 ">
            <img src={guide} alt="guide" />
          </div>
          <h3 className="my-2 text-xs font-semibold md:text-lg"> Best tour guide</h3>
          <p className="text-slate-500 md:text-base text-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="w-1/4 border-b-[1px] border-r-[1px] ml-2 md:mx-4 p-1 md:p-6 border-secondary-color rounded-lg text-left">
          <div className="w-8 h-8 p-2 rounded-full bg-primary-color md:w-14 md:h-14 ">
            <img src={customization} alt="customization" />
          </div>
          <h3 className="my-2 text-xs font-semibold md:text-lg"> Customization</h3>
          <p className="text-slate-500 md:text-base text-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. I
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestServices;
