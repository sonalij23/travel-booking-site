import React from "react";
import tourist from "../images/male-tourist.png";

const NewsLetter = () => {
  return (
    <div className="flex w-full px-5 pt-2 mt-24 md:pt-8 md:px-24 bg-newsletter-blue" >
      <div className="w-1/2 pb-5 text-left md:pb-0">
        <h1 className="my-5 text-lg font-semibold md:mt-8 md:mb-10 md:text-4xl">
          Subscribe now for usefull <br />
          travelling information{" "}
        </h1>
        <div className="flex justify-between w-full p-1 bg-white rounded-md md:w-4/5 md:p-2">
          <input  className="w-full text-sm outline-none md:text-base" type="email" placeholder="Enter your email" />
          <button className="px-2 py-1 text-xs text-white rounded-md md:py-2 md:px-4 md:text-base bg-primary-color">
            Subscribe
          </button>
        </div>
        <p className="md:mt-8 mt-4 text-[10px] md:text-base">VLorem ipsum dolor sit amet, sed do eiusmod aliqua. Sit amet nulla <br/> porttitor lacus luctus.</p>
      </div>
      <div className="order-1 w-1/2 ">
        <img className="object-cover h-56 mt-20 w-60 md:w-96 md:h-96 md:ml-10 md:mt-0" src={tourist} alt="tourist" />
      </div>
    </div>
  );
};

export default NewsLetter;
