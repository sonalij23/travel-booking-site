import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import BookingPage from "./BookingPage";
import { FaRegStar } from "react-icons/fa";

const ProductCard = ({ tour, rating }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    <BookingPage />;
    navigate("/book", { state: { tour, rating } });
  };
  return (
    <div className="rounded-sm" key={tour.id}>
      <div className="relative ">
        <img
          className="object-cover w-full md:h-40"
          src={tour.photo}
          alt={tour.title}
        />
        {tour.featured ? (
          <h6 className="absolute bottom-0 right-0 md:text-base text-[10px] px-1 text-white bg-orange">
            Featured
          </h6>
        ) : (
          ""
        )}
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <SlLocationPin className="mr-1 text-xs text-primary-color md:text-base" />
            <h6 className="text-xs font-semibold md:text-base">{tour.city}</h6>
          </div>
          <div className="flex items-center">
            {rating[tour.id]?.rating === undefined ||
            rating[tour.id]?.rating === 0 ? (
              <>
                <FaRegStar className="mx-1 text-xs md:text-base text-primary-color" />{" "}
                <h6 className="text-xs text-gray-500 md:text-base">
                  Not rated
                </h6>
              </>
            ) : (
              <>
                <FaRegStar className="mx-1 text-xs text-primary-color md:text-base" />{" "}
                <h6 className="text-xs text-gray-500 md:text-base">{`${
                  rating[tour.id].rating
                } (${rating[tour.id].ratingCount})`}</h6>
              </>
            )}
          </div>
        </div>
        <h3 className="py-5 text-sm font-semibold text-left md:text-lg">
          {tour.title}
        </h3>
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold text-gray-500 md:text-md">
            {" "}
            <span className="text-primary-color">${tour.price}</span> /per{" "}
            <br />
            person
          </h4>
          <button
            className="px-3 py-1 text-sm text-white rounded-lg md:px-5 md:py-2 md:text-base bg-primary-color"
            onClick={handleClick}
          >
            Book
            <br /> Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
