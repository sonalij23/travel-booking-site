import React from "react";
import world from "../images/world.png";
import hero1 from "../images/hero-img01.jpg";
import hero2 from "../images/hero-img02.jpg";
import video from "../images/hero-video.mp4";
import SearchBar from "./SearchBar";
import BestServices from "./BestServices";
import Experience from "./Experience";
import Gallery from "./Gallery";
import ReviewCarousel from "./ReviewCarousel";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";
import FeaturedTours from "./FeaturedTours";

const Home = () => {
  return (
    <div>
      <div
        className="flex w-full px-4 pb-6 mt-6 md:px-20 md:mt-14 md:pb-14"
        id="Home"
      >
        <div className="w-1/2 text-left">
          <div className="flex items-center ">
            <p className="p-1 text-[8px] md:px-3 bg-primary-color md:text-base rounded-3xl">
              Know before you go
            </p>
            <img
              className="w-5 h-5 mt-1 md:w-8 md:h-8"
              src={world}
              alt="world"
            />
          </div>
          <h1 className="text-base font-semibold sm:text-lg md:mt-5 md:text-3xl lg:text-5xl">
            Travelling opens the doors to creating
            <span className="text-primary-color"> memories</span>
          </h1>
          <p className="mt-4 text-[8px]  sm:text-[10px] md:mt-8 md:text-xs lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum
            arcu vitae elementum curabitur vitae nunc sed velit dignissim. Donec
            massa sapien faucibus et molestie ac feugiat sed. Tristique nulla
            aliquet enim tortor at auctor urna nunc id.
          </p>
        </div>
        <div className="flex w-1/2 justify-evenly ">
          <img
            className="object-cover border-solid border-primary-color	border-[1px] md:w-24 md:h-44 lg:w-32 lg:h-60  sm:w-16 sm:h-32 xl:w-44 w-12 h-20 xl:h-80 rounded-2xl"
            src={hero1}
            alt="destination-img"

          />

           <video className="translate-y-6 rounded-2xl border-solid border-primary-color mx-2 sm:mx-0 lg:w-32 lg:h-60  md:w-24 md:h-44 sm:w-16 sm:h-32  xl:w-44	xl:h-80 border-[1px] w-12 h-20 object-cover" src={video} autoPlay loop controls /> 
       
          <img
            className="object-cover translate-y-12 rounded-2xl border-solid border-primary-color sm:w-16 sm:h-32 lg:w-32 lg:h-60   md:w-24 md:h-44 	border-[1px] w-12 h-20 xl:w-44 xl:h-80"
            src={hero2}
            alt="destination-img"
          />
        </div>
      </div>

      <SearchBar />
      <BestServices />
      <FeaturedTours />
      <Experience />
      <Gallery />
      <ReviewCarousel />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
