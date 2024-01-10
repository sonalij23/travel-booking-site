import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import logo from "../images/logo2.png";
import { useNavigate } from "react-router-dom";
import { Link, scroller } from "react-scroll";

const Footer = () => {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate("/");
    setTimeout(() => {
      scroller.scrollTo("About", {
        smooth: true,
        offset: -170,
        duration: 500,
      });
    }, 100);
  };

  const handleGalleryClick = () => {
    navigate("/");
    setTimeout(() => {
      scroller.scrollTo("Gallery", {
        smooth: true,
        offset: -100,
        duration: 500,
      });
    }, 100);
  };
  return (
    <div className="flex px-2 py-24 md:px-0 md:text-left justify-evenly">
      <div className="hidden md:block">
        <img className="object-cover h-12 mb-4 w-36 " src={logo} alt="logo" />
        <p className="text-base text-left ">
          Lorem ipsum adipiscing elit, <br />
          sed tempor et dolore magna aliqua.
        </p>
      </div>
      <div>
        <h6 className="py-2 text-sm font-semibold md:text-xl ">Discover</h6>
        <p className="py-2 text-xs md:text-lg hover:text-primary-color" onClick={() => navigate("/")}>
          Home
        </p>
        <Link
          to="About"
          smooth={true}
          offset={-170}
          duration={500}
          className="py-2 text-xs md:text-lg hover:text-primary-color"
          onClick={handleAboutClick}
        >
          About
        </Link>
        <p
          className="py-2 text-xs md:text-lg hover:text-primary-color"
          onClick={() => navigate("/tours")}
        >
          Tours
        </p>
      </div>
      <div>
        <h6 className="py-2 text-sm font-semibold md:text-xl ">Quick Links</h6>
        <Link
          to="Gallery"
          onClick={handleGalleryClick}
          className="py-2 text-xs md:text-lg hover:text-primary-color"
        >
          Gallery
        </Link> 

        <p
          className="py-2 text-xs md:text-lg hover:text-primary-color"
          onClick={() => navigate("/login")}
        >
          Login
        </p>
        <p
          className="py-2 text-xs md:text-lg hover:text-primary-color"
          onClick={() => navigate("/register")}
        >
          Register
        </p>
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
