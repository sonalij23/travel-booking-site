import React from "react";
import { useLocation } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { GoLocation } from "react-icons/go";
import { RiMapPinTimeLine } from "react-icons/ri";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { GoPeople } from "react-icons/go";
import Reviews from "./Reviews";
import BookingSidebar from "./BookingSidebar";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";


const BookingPage = () => {
  const location = useLocation();
  const { tour, rating } = location.state;
  const navigate = useNavigate()



  return (
    <div className="my-10 ">
      <div className="relative mx-2 md:grid md:grid-cols-3 gap-x-8 xl:mx-28 md:mx-10">
        <div className="relative col-span-2">
          <img src={tour.photo} alt={tour.title} className="rounded-lg " />

          <button
            className="absolute p-2 text-xl bg-white rounded-md top-2 left-2 md:hidden "
            onClick={() => navigate(-1)}
          >
            <IoMdArrowBack />
          </button>

          <div className="md:p-10 p-5 md:my-12 my-8 text-left border-[1px] rounded-lg border-solid ">
            <h2 className="text-lg font-semibold md:text-2xl ">{tour.title}</h2>
            <div className="flex items-center my-5">
              {rating[tour.id]?.rating === 0 ? (
                <>
                  <FaRegStar className="mx-1 text-xs md:text-base text-primary-color" />
                  <h6 className="text-xs text-gray-500 md:text-base">
                    Not rated
                  </h6>
                </>
              ) : (
                <>
                  <FaRegStar className="mx-1 text-xs text-primary-color md:text-base" />
                  <h6 className="text-xs text-gray-500 md:text-base">
                    {`${rating[tour.id].rating} (${rating[tour.id].ratingCount})`}
                  </h6>
                </>
              )}
              <h4 className="flex items-center text-xs md:text-base ">
                <ImLocation2 className="ml-2 mr-1 md:ml-4" />
                <span className="text-slate-500"> {tour.address}</span>
              </h4>
            </div>
            <div className="flex items-center my-5 text-xs md:text-base ">
              <p className="flex items-center mr-10">
                <GoLocation className="mr-2" />
                <span className="text-slate-500"> {tour.city}</span>
              </p>
              <p className="flex items-center mr-10">
                <HiOutlineCurrencyDollar className="mr-2" />
                <span className="text-slate-500"> {tour.price}</span>
              </p>
              <p className="flex items-center mr-10">
                <RiMapPinTimeLine className="mr-2" />
                <span className="text-slate-500"> {tour.distance}k/m</span>
              </p>
              <p className="flex items-center">
                <GoPeople className="mr-2 font-semibold" />
                <span className="text-slate-500"> {tour.maxGroupSize}</span>
              </p>
            </div>

            <h3 className="text-base font-semibold md:text-xl ">Description</h3>
            <p className="mt-5 text-xs md:text-base text-slate-500">
              {tour.desc}
            </p>
          </div>
          <div className="block mx-3 md:hidden">
    
            <BookingSidebar tour={tour} />
          </div>

          <Reviews tour={tour} />
        </div>
        <div className="  px-4 lg:px-8 py-14 border-[1px] rounded-lg border-solid sticky right-0 top-24 hidden md:block">
          <BookingSidebar tour={tour} />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
