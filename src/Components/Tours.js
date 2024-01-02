import React from "react";
import ProductPage from "./ProductPage";
import SearchBar from "./SearchBar";
import tourBanner from "../images/tour.jpg";
import NewsLetter from "./NewsLetter";
import Footer from './Footer'
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Tours = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="relative" id="Tour">
      <img
          className="object-cover w-full h-48 md:h-96 bg-gradient-to-r from-black"
          src={tourBanner}
          alt="tour-banner"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        
        <h1 className="absolute inset-x-0 text-3xl font-semibold text-white sm:text-4xl md:text-5xl inset-y-16 md:inset-y-40 ">All Tours</h1>
        <button className="absolute p-2 text-xl bg-white rounded-md top-4 left-4 md:hidden " onClick={()=>navigate(-1)}><IoMdArrowBack />
</button>
      </div>
      <div className="mb-32">
        <SearchBar />
      </div>
      <div className="w-full">
        <ProductPage featuredOnly={false} />
      </div>
      <div>
        <NewsLetter />
      </div>
      <div><Footer/></div>
    </div>
  );
};

export default Tours;
