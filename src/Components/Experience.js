import React from "react";
import experience from "../images/experience.png";

const Experience =  () => {

  
  return (
    <div  className="px-5 my-24 md:px-24 " id="About">
      <div className="flex text-left">
        <div className="w-1/2 md:pr-24">
          <span className="inline-block md:p-2 p-1 bg-primary-color md:text-base text-[8px] rounded-3xl">
            Experience
          </span>
          <h1 className="mt-8 text-lg font-semibold md:text-3xl">
            With our all experience <br />
            we will serve you
          </h1>
          <p className="mt-4 text-[10px] md:text-lg text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="flex justify-between mt-10">
            <div className="w-1/6 ">
              <div className="text-right">
                <span className="inline-block w-10 h-10 pt-3 pr-2 text-[10px] text-white md:pr-5 md:text-base md:w-20 md:h-20 md:pt-7 bg-orange rounded-tr-md rounded-bl-md rounded-tl-2xl rounded-br-2xl">12k+</span>
              </div>
              <h5 className="mt-2 text-[10px] md:text-lg font-semibold text-slate-500">Successfull<br/> trips</h5>
            </div>

            <div className="w-1/6 ">
              <div className="text-right ">
                <span className="inline-block w-10 h-10 md:w-20 md:h-20 md:pr-6 pr-3 md:text-base text-[10px] text-white pt-3 md:pt-7 bg-orange rounded-tr-md rounded-bl-md rounded-tl-2xl rounded-br-2xl ">
                  2k+
                </span>
              </div>
              <h5  className="mt-2 text-[10px] md:text-lg font-semibold text-slate-500">Regular<br/> clients</h5>
            </div>

            <div className="w-1/6 ">
              <div className="text-right">
                <span className="inline-block w-10 h-10 pr-4 md:pr-8 text-white md:w-20 md:h-20 pt-3 md:pt-7 md:text-base text-[10px] bg-orange rounded-tr-md rounded-bl-md rounded-tl-2xl rounded-br-2xl">15</span>
              </div>
              <h5  className="mt-2 text-[10px] md:text-lg font-semibold text-slate-500">Years<br/> experience</h5>
            </div>
          </div>
        </div>
        <div  className="pl-5 mt-12 md:mt-0 md:pl-24">
          <img src={experience} alt="experience" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
