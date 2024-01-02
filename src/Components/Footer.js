import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import logo from '../images/logo.png'

const Footer = () => {
  return (
    <div className= "flex px-2 py-24 md:px-0 md:text-left justify-evenly">
      <div className="hidden md:block">
        <img  className ="object-cover h-12 mb-4 w-36 "src={logo} alt="logo"/>
        <p className="text-base text-left ">   Lorem ipsum adipiscing elit, <br />
            sed tempor et dolore magna aliqua.</p>
      </div>
      <div>
        <h6 className="py-2 text-sm font-semibold md:text-xl ">Discover</h6>
        <p className="py-2 text-xs md:text-lg">Home</p>
        <p className="py-2 text-xs md:text-lg">About</p>
        <p className="py-2 text-xs md:text-lg">Tours</p>
      </div>
      <div>
        <h6 className="py-2 text-sm font-semibold md:text-xl ">Quick Links</h6>
        <p  className="py-2 text-xs md:text-lg">Gallery</p>
        <p className="py-2 text-xs md:text-lg" >Login</p>
        <p className="py-2 text-xs md:text-lg">Register</p>
      </div>
      <div>
        <h6 className="py-2 text-sm font-semibold md:text-xl ">Contact </h6>

        <div className="flex items-center py-2 text-xs md:text-lg justify-left">
          <SlLocationPin className="text-primary-color md:text-base text-[10px]" />
          <p className="px-1 font-semibold md:px-3 "> Address:</p>
          <p>Bangalore, Karnataka</p>
        </div>
        <div className="flex items-center py-2 text-xs md:text-lg justify-left">
          <AiOutlineMail className="text-primary-color " />
          <p className="px-1 font-semibold md:px-3 ">Email:</p>
          <p>sonali.shetty2304@gmail.com</p>

        </div>
        <div className="flex items-center py-2 text-xs md:text-lg justify-left">
          <BsTelephone className="text-primary-color md:text-base text-[10px]" />{" "}
          <p className="px-1 font-semibold md:px-3">Phone:</p>
          <p>9742662553</p>

        </div>
      </div>
    </div>
  );
};

export default Footer;
