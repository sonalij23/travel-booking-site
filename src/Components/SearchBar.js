import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { RiMapPinTimeLine } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { DestinationsState } from "../context/ToursContext";

const SearchBar = () => {
  const navigate = useNavigate();
  const { updateSearchParams } = DestinationsState();
  const [inputData, setInputData] = useState({
    location: "",
    distance: 0,
    maxPeople: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputData({ ...inputData, [name]: value });
  };

  const handleSearch = () => {
    updateSearchParams(inputData);

    navigate('/tours')
  };

  return (
    <div className=" mt-14 md:mt-24">
      <div className="md:mr-24 2xl:mr-0 lg:w-11/12 xl:w-9/12 2xl:w-3/5" >
        <div className="flex flex-col pt-1 mx-4 border-2 border-solid rounded-md md:mx-0 md:rounded-full md:flex-row md:pt-2 md:pb-2 lg:pb-5 md:ml-10 slg:ml-20 ml:10">
          <div className="flex mx-4 my-2 text-center md:my-0">
            <SlLocationPin className="mt-1 mr-1 text-xs md:mr-4 lg:text-base text-secondary-color" />
            <div>
              <label className="flex items-center text-xs font-semibold lg:text-base">
                Location
              </label>
              <input
                className="text-xs outline-none lg:text-base"
                placeholder="Where are you going? "
                name="location"
                type="text"
                value={inputData.location}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="border-r-2"></div>

          <div className="flex mx-4 my-2 lg:mx-6 md:my-0">
            <RiMapPinTimeLine className="mt-1 mr-1 text-xs md:mr-4 lg:text-base text-secondary-color" />
            <div>
              <label className="flex items-center text-xs font-semibold lg:text-base">
                Distance
              </label>
              <input
                className="text-xs outline-none lg:text-base "
                placeholder="Distance k/m "
                name="distance"
                type="number"
                value={inputData.distance}
                onChange={handleInputChange}
                min={1}
              />
            </div>
          </div>
          <div className=" md:border-r-2  border-r-[1px]"></div>
          <div className="flex mx-4 my-2 lg:ml-6 md:mr-4 md:my-0">
            <GoPeople className="mt-1 mr-1 text-xs md:mr-4 text-secondary-color lg:text-base" />
            <div>
              <label className="flex items-center text-xs font-semibold lg:text-base">
                Max People
              </label>
              <input
                className="text-xs outline-none lg:text-base "
                placeholder="0"
                name="maxPeople"
                type="number"
                value={inputData.maxPeople}
                onChange={handleInputChange}
                min={1}
              />
            </div>
          </div>

          <button
            className="p-2 text-xl text-center text-white lg:mt-3 lg:text-3xl bg-primary-color rounded-tr-md rounded-bl-md rounded-tl-2xl rounded-br-2xl"
            type="submit"
            onClick={handleSearch}
          >
            <FiSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
