import React from "react";
import ProductPage from "./ProductPage";

const FeaturedTours = () => {
  return (
    <div className="my-14 md:px-24">
      <div className="flex px-5 mb-10 text-left">
        <div className="w-1/2 pr-10 md:pr-24">
          <span className="inline-block md:p-2 p-1 bg-primary-color text-[8px] md:text-base rounded-3xl">
            Explore
          </span>
          <h1 className="mt-3 text-lg font-semibold md:text-3xl md:mt-8">Our featured tours</h1>
        </div>

       
      </div >
      <div ><ProductPage featuredOnly={true} /></div>
      
    </div>
  );
};

export default FeaturedTours;
