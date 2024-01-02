import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const BookingSidebar = ({ tour }) => {
  const { user } = useUserAuth();

  const [person, setPerson] = useState(1);
  const [maxPeopleError, setMaxPeopleError] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const inputValue = parseInt(e.target.value);
    updatePerson(inputValue);
  };

  const updatePerson = (inputValue) => {
    if (inputValue > tour.maxGroupSize) {
      setMaxPeopleError(true);
    } else {
      setMaxPeopleError(false);
      setPerson(inputValue);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    user ? navigate("/booked") : navigate("/login");
  };
  
  const today = new Date();

  console.log(`date ${today} iso string ${today.toISOString()} `)

  const currentDate = today.toISOString().split('T')[0]; // Format: YYYY-MM-DD

  return (
    <div className="sticky text-left top-36">
      <div className="border-solid border-b-[1px] py-2 ">
        <h1 className="text-sm text-slate-500 md:text-base">
          <span className="text-2xl font-bold text-black md:text-3xl">
            {tour.price}
          </span>
          /Per person
        </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mt-10">
          <h2 className="mb-2 text-lg font-semibold md:text-xl">Information</h2>

          <div className="flex flex-col border-[1px] rounded-lg border-solid">
            <input
              className={`lg:mx-6 mx-3 my-2 md:my-5 py-2 lg:text-base text-xs border-solid border-b-[1px] outline-none `}
              required
              type="text"
              placeholder="Full Name"
            />
            <input
              className={`lg:mx-6 mx-3 my-2 md:my-5 py-2 lg:text-base text-xs border-solid border-b-[1px] outline-none`}
              required
              type="tel"
              placeholder="Phone Number"
              inputMode="numeric"
              minLength="10"
              maxLength="10"
              pattern="[0-9]*"
            />
            <div className="flex">
              <input
                className={`ml-6 my-5 py-2 lg:text-base text-xs border-solid border-b-[1px] outline-none`}
                required
                type="date"
                min={currentDate}

                placeholder="dd-mm-yyyy"
              />
              <input
                className={`w-2/4 md:mx-6 mx-3 my-5 py-2 lg:text-base text-xs border-solid border-b-[1px] outline-none`}
                required
                type="number"
                value={person}
                placeholder="Number of Guest"
                onChange={handleInputChange}
                max={tour.maxGroupSize}
                min={1}
              />
            </div>
            {maxPeopleError && (
              <p className="mx-5 my-1 md:text-sm text-[10px] text-red-500">
                Number of guests cannot exceed {tour.maxGroupSize}.
              </p>
            )}
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between my-5 text-sm font-semibold md:text-base text-slate-500">
            <h3>
              {tour.price} x {person} person
            </h3>

            <h3>{tour.price * person}</h3>
          </div>
          <div className="flex items-center justify-between my-5 text-sm font-semibold md:text-base text-slate-500">
            <h3>Service Charges</h3>
            <h3>10</h3>
          </div>
          <div className="flex items-center justify-between my-5 font-bold text-black md:text-lg">
            <h2>Total</h2>
            <h2>{tour.price * person + 10}</h2>
          </div>
          <button
            className="w-full py-2 my-5 text-sm text-white rounded-full md:px-5 md:py-2 md:text-base bg-primary-color"
            type="submit"
          >
            Book now
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingSidebar;
